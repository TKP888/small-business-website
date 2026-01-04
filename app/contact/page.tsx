import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 md:py-24 bg-purple-950">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                Get in Touch
              </h1>

              {/* Google Maps Section */}
              <div className="mb-12">
                <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.1234567890!2d-2.5053!3d51.4545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718e8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s71%20Walnut%20Crescent%2C%20Kingswood%2C%20Bristol%20BS15%204HZ!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Phone Card */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 mx-auto text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Give us a call
                  </h2>
                  <a
                    href="tel:+447847779361"
                    className="text-lg text-blue-600 hover:text-blue-700 font-medium"
                  >
                    (+44) 7847 779361
                  </a>
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 mx-auto text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Send us an email
                  </h2>
                  <a
                    href="mailto:vercoe.pm@gmail.com"
                    className="text-lg text-blue-600 hover:text-blue-700 font-medium break-all"
                  >
                    vercoe.pm@gmail.com
                  </a>
                </div>

                {/* Address Card */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 mx-auto text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Write to us
                  </h2>
                  <p className="text-lg text-gray-700">
                    71 Walnut Crescent
                    <br />
                    Kingswood, Bristol
                    <br />
                    BS15 4HZ
                  </p>
                </div>
              </div>

              {/* Quote Form Link */}
              <div className="text-center">
                <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Request a Free Quote
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Fill out our online quote form and we&apos;ll get back to
                    you with a no-obligation estimate for your project.
                  </p>
                  <Link
                    href="/quote"
                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Your Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Reviews />
      <Footer />
    </>
  );
}
