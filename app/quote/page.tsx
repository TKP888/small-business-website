"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    description: "",
    postcode: "",
    address: "",
  });

  const [addresses, setAddresses] = useState<string[]>([]);
  const [isLoadingAddresses, setIsLoadingAddresses] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePostcodeLookup = async () => {
    const postcode = formData.postcode
      .trim()
      .toUpperCase()
      .replace(/\s+/g, " ");

    if (!postcode) {
      setErrors((prev) => ({ ...prev, postcode: "Please enter a postcode" }));
      return;
    }

    // Basic UK postcode validation
    const postcodeRegex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]? [0-9][A-Z]{2}$/i;
    if (!postcodeRegex.test(postcode)) {
      setErrors((prev) => ({
        ...prev,
        postcode: "Please enter a valid UK postcode",
      }));
      return;
    }

    setIsLoadingAddresses(true);
    setErrors((prev) => ({ ...prev, postcode: "", address: "" }));

    try {
      const response = await fetch(
        `https://api.postcodes.io/postcodes/${encodeURIComponent(postcode)}`
      );
      const data = await response.json();

      if (data.status === 200 && data.result) {
        // postcodes.io returns geographic data, not full addresses
        // Construct a location string from available data
        const locationParts = [
          data.result.parish,
          data.result.admin_district,
          data.result.postcode,
        ].filter(Boolean);

        const locationString = locationParts.join(", ");

        // Validate postcode and enable address input
        setAddresses([locationString]);
        // Don't auto-fill address, let user enter it manually
        setFormData((prev) => ({ ...prev, address: "" }));
      } else {
        setErrors((prev) => ({
          ...prev,
          postcode: "Postcode not found. Please check and try again.",
        }));
        setAddresses([]);
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        postcode: "Error looking up postcode. Please try again.",
      }));
      setAddresses([]);
    } finally {
      setIsLoadingAddresses(false);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = "Telephone is required";
    } else {
      const phoneRegex = /^[\d\s\+\-\(\)]+$/;
      if (!phoneRegex.test(formData.telephone)) {
        newErrors.telephone = "Please enter a valid phone number";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.description.trim()) {
      newErrors.description = "Job description is required";
    }

    if (!formData.postcode.trim()) {
      newErrors.postcode = "Postcode is required";
    }

    // Only require address if postcode has been validated
    if (addresses.length > 0 && !formData.address.trim()) {
      newErrors.address = "Please enter your full address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Using Formspree as email service
      // Replace YOUR_FORMSPREE_ID with actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          telephone: formData.telephone,
          email: formData.email,
          description: formData.description,
          postcode: formData.postcode,
          address: formData.address,
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your quote request has been submitted. We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          telephone: "",
          email: "",
          description: "",
          postcode: "",
          address: "",
        });
        setAddresses([]);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error submitting your request. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 md:py-24 bg-purple-950">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                Request a Free Quote
              </h1>
              <p className="text-lg text-gray-200 mb-12 text-center">
                Fill out the form below and we&apos;ll get back to you with a
                no-obligation estimate for your project.
              </p>

              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                {submitStatus.type === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">{submitStatus.message}</p>
                  </div>
                )}

                {submitStatus.type === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">{submitStatus.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Telephone Field */}
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telephone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.telephone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="(+44) 1234 567890"
                    />
                    {errors.telephone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.telephone}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Postcode and Address Lookup */}
                  <div>
                    <label
                      htmlFor="postcode"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Postcode <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleInputChange}
                        className={`flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.postcode ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="BS15 4HZ"
                        onBlur={handlePostcodeLookup}
                      />
                      <button
                        type="button"
                        onClick={handlePostcodeLookup}
                        disabled={isLoadingAddresses}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        {isLoadingAddresses ? "Searching..." : "Search"}
                      </button>
                    </div>
                    {errors.postcode && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.postcode}
                      </p>
                    )}
                  </div>

                  {/* Address Input - Shown after postcode validation */}
                  {addresses.length > 0 && (
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.address ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter your full address (street name, house number, etc.)"
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        Postcode validated: {formData.postcode}
                      </p>
                      {errors.address && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.address}
                        </p>
                      )}
                    </div>
                  )}

                  {!addresses.length &&
                    formData.postcode &&
                    !isLoadingAddresses && (
                      <div>
                        <p className="text-sm text-gray-600">
                          Please search for your postcode above to continue.
                        </p>
                      </div>
                    )}

                  {/* Job Description Field */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Brief Description of the Job{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.description
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Please describe the work you need done..."
                    />
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
