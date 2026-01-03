import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="min-h-screen">
        <Services />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

