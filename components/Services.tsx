import Link from "next/link";

const services = [
  {
    name: "Commercial",
    description:
      "Professional commercial property maintenance and construction services.",
    href: "/services/commercial",
  },
  {
    name: "Refurbishments",
    description: "Complete home and property refurbishment services.",
    href: "/services/refurbishments",
  },
  {
    name: "Handyman",
    description:
      "Reliable handyman services for all your repair and maintenance needs.",
    href: "/services/handyman",
  },
  {
    name: "Carpentry",
    description:
      "Expert carpentry work for custom furniture and installations.",
    href: "/services/carpentry",
  },
  {
    name: "Cleaning",
    description:
      "Thorough cleaning services for homes and commercial properties.",
    href: "/services/cleaning",
  },
  {
    name: "Decorating",
    description: "Professional painting and decorating services.",
    href: "/services/decorating",
  },
  {
    name: "Plumbing",
    description: "Expert plumbing services for repairs and installations.",
    href: "/services/plumbing",
  },
  {
    name: "Fencing",
    description: "Quality fencing installation and repair services.",
    href: "/services/fencing",
  },
  {
    name: "Gardening",
    description: "Professional gardening and landscaping services.",
    href: "/services/gardening",
  },
  {
    name: "Clearance & Removals",
    description: "Efficient clearance and removal services.",
    href: "/services/clearance-removals",
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-purple-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-whites mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-200 max-w-5xl mx-auto">
            Comprehensive property maintenance and construction services to meet
            all your needs. From minor repairs to full renovations, we provide
            reliable, high-quality workmanship for residential and commercial
            properties. Whether you need a trusted handyman for ongoing
            maintenance or a skilled contractor for larger construction
            projects, we deliver practical solutions that are built to last.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
