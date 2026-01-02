"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const services = [
    { name: "Commercial", href: "/services/commercial" },
    { name: "Refurbishments", href: "/services/refurbishments" },
    { name: "Handyman", href: "/services/handyman" },
    { name: "Carpentry", href: "/services/carpentry" },
    { name: "Cleaning", href: "/services/cleaning" },
    { name: "Decorating", href: "/services/decorating" },
    { name: "Plumbing", href: "/services/plumbing" },
    { name: "Fencing", href: "/services/fencing" },
    { name: "Gardening", href: "/services/gardening" },
    { name: "Clearance & Removals", href: "/services/clearance-removals" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/vpm black.svg"
                alt="Vercoe Property Maintenance Logo"
                width={200}
                height={60}
                className="h-24 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-extrabold text-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 font-extrabold text-lg transition-colors cursor-pointer"
              >
                Services
              </Link>
              {isServicesOpen && (
                <>
                  {/* Invisible bridge to prevent gap */}
                  <div className="absolute top-full left-0 w-full h-2" />
                  <div className="absolute top-full left-0 mt-2 w-56 z-50">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2 mt-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-extrabold text-lg font-medium"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-extrabold text-lg transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-extrabold text-lg"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {/* Services Dropdown Mobile */}
              <div>
                <button
                  onClick={toggleServices}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Services</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
