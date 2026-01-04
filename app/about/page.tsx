import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 md:py-24 bg-purple-950">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {/* Circular Image */}
                <div className="flex-shrink-0">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src="/owner.jpg"
                      alt="Lewis - Owner of Vercoe Property Maintenance"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    About Lewis
                  </h1>

                  {/* Introduction */}
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">
                      Welcome to Vercoe Property Maintenance
                    </h2>
                    <p className="text-lg text-gray-200 leading-relaxed mb-4">
                      I&apos;m Lewis, the owner and operator of Vercoe Property
                      Maintenance. I&apos;m a local handyman based in South
                      Gloucestershire, and I&apos;m passionate about providing
                      reliable, high-quality property maintenance services to
                      homeowners and businesses throughout Bristol and the
                      surrounding areas.
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">
                      Experience & Expertise
                    </h2>
                    <p className="text-lg text-gray-200 leading-relaxed mb-4">
                      With over ten years of hands-on experience in the
                      industry, I&apos;ve built a strong foundation in plumbing,
                      painting, gardening, small electrical work, and removals.
                      Throughout my career, I&apos;ve worked on everything from
                      minor repairs to full property refurbishments, always
                      maintaining the highest standards of workmanship.
                    </p>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      My diverse skill set allows me to handle a wide range of
                      projects, whether it&apos;s a quick fix or a more complex
                      renovation. I take pride in staying up-to-date with the
                      latest techniques and best practices in the trade,
                      ensuring that every job is completed to the highest
                      standard.
                    </p>
                  </div>

                  {/* Customer Care */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">
                      Commitment to Customer Care
                    </h2>
                    <p className="text-lg text-gray-200 leading-relaxed mb-4">
                      What sets me apart is my genuine commitment to customer
                      satisfaction. I believe that every client deserves
                      friendly, reliable service and quality workmanship. I
                      understand that inviting someone into your home or
                      business is a matter of trust, and I work hard to earn and
                      maintain that trust with every project.
                    </p>
                    <p className="text-lg text-gray-200 leading-relaxed mb-4">
                      I&apos;m known for being punctual, communicative, and
                      thorough. I always take the time to listen to your needs,
                      provide honest advice, and ensure you&apos;re completely
                      satisfied with the work. Whether it&apos;s a small repair
                      or a larger project, I treat every job with the same level
                      of care and attention to detail.
                    </p>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      I&apos;d be happy to discuss your project and provide a
                      no-obligation quote. Get in touch today, and let&apos;s
                      see how I can help you with your property maintenance
                      needs.
                    </p>
                  </div>
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
