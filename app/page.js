import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink antialiased">
      <div className="relative z-[60] bg-sun text-[#221f18] text-center py-2.5 px-4 text-xs font-bold tracking-[0.18em] uppercase">
        Limited Time Offer - Websites starting at Rs. 2,999 with 24/7 support
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
