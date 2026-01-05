"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative group h-full">
      {/* Main Card */}
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 h-full flex flex-col"
        onMouseEnter={() => setIsOverlayOpen(true)}
        onMouseLeave={() => setIsOverlayOpen(false)}
        onClick={() => setIsOverlayOpen(!isOverlayOpen)}
      >
        {/* Card Image */}
        <div className="relative w-full h-64 flex-shrink-0">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-2">
            <span className="text-sm font-semibold text-blue-600">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-600 line-clamp-3 flex-1">
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* Overlay */}
      {isOverlayOpen && (
        <div
          className="absolute inset-0 bg-white rounded-lg shadow-xl z-10 overflow-hidden flex flex-col max-h-[90vh] md:max-h-none"
          onMouseEnter={() => setIsOverlayOpen(true)}
          onMouseLeave={() => setIsOverlayOpen(false)}
        >
          {/* Image Carousel */}
          <div className="relative w-full h-64 flex-shrink-0">
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
            />

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors z-10"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-5 h-5 text-gray-700"
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
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors z-10"
                  aria-label="Next image"
                >
                  <svg
                    className="w-5 h-5 text-gray-700"
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
              </>
            )}

            {/* Dot Indicators */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      goToImage(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex
                        ? "bg-blue-600"
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Overlay Content */}
          <div className="p-6 overflow-y-auto flex-1">
            <div className="mb-2">
              <span className="text-sm font-semibold text-blue-600">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
