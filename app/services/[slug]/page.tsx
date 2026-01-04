import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getServiceBySlug } from "@/lib/services";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Construct image path - use image field if provided, otherwise construct from slug
  const imagePath = service.image || `/services/${service.slug}.jpg`;

  return (
    <>
      <Header />
      <main>
        <section className="py-16 md:py-24 bg-purple-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                {service.name}
              </h1>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                {/* Service Image */}
                <div className="relative w-full h-64 md:h-96">
                  <Image
                    src={imagePath}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <p className="text-lg text-gray-600 mb-6">
                      Interested in our {service.name.toLowerCase()} services?
                      Get in touch for a free, no-obligation quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="/quote"
                        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors text-center"
                      >
                        Get Your Free Quote
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-block bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-300 transition-colors text-center"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/services"
                  className="text-gray-200 hover:text-white transition-colors underline"
                >
                  ← Back to All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
