import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="min-h-screen">
        {/* Additional content sections can be added here */}
      </main>
      <Footer />
    </>
  );
}

