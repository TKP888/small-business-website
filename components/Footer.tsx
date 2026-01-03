import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/vpm white.svg"
                  alt="Vercoe Property Maintenance Logo"
                  width={200}
                  height={60}
                  className="h-16 w-auto"
                  priority
                />
              </Link>
            </div>

            <p className="mb-4">
              Professional contractor services you can trust. Quality
              workmanship and exceptional customer service.
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gray-300 flex-shrink-0"
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
                <a
                  href="tel:+447847779361"
                  className="hover:text-white transition-colors"
                >
                  (+44) 7847 779361
                </a>
              </p>
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gray-300 flex-shrink-0"
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
                <a
                  href="mailto:vercoe.pm@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  vercoe.pm@gmail.com
                </a>
              </p>
              <p className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 text-gray-300 flex-shrink-0 mt-0.5"
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
                <span>71 Walnut Crescent, Kingswood, Bristol, BS15 4HZ</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas / Business Hours */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Service Areas</h3>
            <p className="mb-4">
              Delivering quality contracting services throughout Bristol and
              South Gloucestershire.
            </p>
            <div className="mt-4">
              <h4 className="text-white font-semibold mb-2">Business Hours</h4>
              <ul className="space-y-1 text-sm">
                <li>Monday - Saturday: 8:00 AM - 5:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>
            © {currentYear} Vercoe Property Maintenance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
