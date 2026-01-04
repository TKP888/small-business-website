import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 md:py-24 bg-purple-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Services
              </h1>
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
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-gray-600 line-clamp-4">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

