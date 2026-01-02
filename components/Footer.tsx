import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
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
                <span className="mr-2">📞</span>
                <a
                  href="tel:+447847779361"
                  className="hover:text-white transition-colors"
                >
                  (+44) 7847 779361
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <a
                  href="mailto:vercoe.pm@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  vercoe.pm@gmail.com
                </a>
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
              Delivering quality contracting services throughout Bristol and the
              surrounding communities.
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
