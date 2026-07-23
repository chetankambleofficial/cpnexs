import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export const metadata = {
  title: "CPNexs — Software Development Company | AI, Web & Mobile Apps",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
