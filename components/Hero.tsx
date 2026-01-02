import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional Contractor Services You Can Trust
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            I'm a local handyman based in South Gloucestershire, offering
            dependable help with both small and large jobs. With over ten years
            of experience in plumbing, painting, gardening, small electrical
            work, and removals, I take pride in quality workmanship and a
            friendly, reliable service. Get in touch for a no-obligation quote —
            I'd be happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
