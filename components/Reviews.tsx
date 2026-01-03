"use client";

import { useState, useEffect } from "react";

const reviews = [
  {
    title: "Replace stop tap under sink",
    quote:
      "My experience dealing with Vercoe Property Maintenance was excellent. Quick to respond to queries and completed the job cleanly. Will definitely recommend to others and will consider their services for other maintenance jobs in future.",
    name: "Mayur",
    rating: 5,
    location: "Bristol",
  },
  {
    title: "Shower valve leaking",
    quote:
      "No issues whatsoever, arrived on time very prompt on replies, repaired fault, highly recommend.",
    name: "Nathan",
    rating: 5,
    location: "Bristol",
  },
  {
    title: "New plumbing & waste for washing machine",
    quote:
      "I cannot speak highly enough about Lewis from Vercoe Property Maintenance. He was punctual, friendly, hard-working and proved to be an excellent problem-solver. I highly recommend him and his work to others.",
    name: "Anonymous",
    rating: 5,
    location: "Corsham",
  },
  {
    title: "Bathroom installation",
    quote:
      "Lewis arrived on time. Did a really good job on installation and also helped board walls for tiling and would recommend him.",
    name: "Mr Parker",
    rating: 5,
    location: "Bristol",
  },
  {
    title: "Install L shape curtain rod",
    quote:
      "As usual Lewis has done a great job. There's always good communication too.",
    name: "Cristofer Barrios",
    rating: 5,
    location: "Bristol",
  },
  {
    title: "Leak in ensuite bathroom",
    quote:
      "Lewis was very on-time and professional. We are very happy with the work he has done for us and the price. Would definitely recommend him.",
    name: "Saeed",
    rating: 5,
    location: "Bristol",
  },
  {
    title: "Garden fence panels",
    quote:
      "Very friendly and helpful, very pleased with the work, arrived on time, definitely use again, would recommend.",
    name: "Jo Clements",
    rating: 5,
    location: "South Gloucestershire",
  },
  {
    title: "Leaking pipe in kitchen under Kitchen sink",
    quote:
      "Repair of leaking pipe under sink. Prompt answer to my enquiry. Good communication about time of arrival. Punctual. Excellent work.",
    name: "Anonymous",
    rating: 5,
    location: "Bristol",
  },
  {
    title: "Replaced the guttering",
    quote:
      "Lewis was very punctual and did a very good job on the guttering. He sent a follow up text to make sure all was well.",
    name: "Anonymous",
    rating: 5,
    location: "South Gloucestershire",
  },
  {
    title: "Painting gable end of property.",
    quote:
      "Lewis did an excellent job of cleaning and then painting the gable end of our house. Whilst up there, he also spotted a loose chimney cover that had been rattling in the bad winds we've been having and he sorted that out for us too! He was quick, efficient & we have found he thoroughly reliable.",
    name: "Gerry & Sue Holtom",
    rating: 5,
    location: "Bristol",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-play carousel (optional - uncomment to enable)
  // useEffect(() => {
  //   const interval = setInterval(nextReview, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by homeowners and businesses across Bristol and South
            Gloucestershire
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Review Card */}
          <div className="bg-gray-50 rounded-lg shadow-md p-8 md:p-12 text-center">
            <div className="mb-6 flex justify-center">
              {renderStars(reviews[currentIndex].rating)}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {reviews[currentIndex].title}
            </h3>
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic">
              &ldquo;{reviews[currentIndex].quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900 text-lg">
                {reviews[currentIndex].name}
              </p>
              <p className="text-gray-600">{reviews[currentIndex].location}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous review"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next review"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
