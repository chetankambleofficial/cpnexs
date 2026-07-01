import Hero from "./components/Hero";

export const metadata = {
  title: "CPNexs — Digital Studio | Websites, Apps & AI Solutions",
  description:
    "CPNexs is a digital studio building modern websites, mobile apps, AI solutions, and cloud platforms that help businesses grow faster and scale smarter.",
  alternates: { canonical: "https://www.cpnexs.com" },
  openGraph: { url: "https://www.cpnexs.com" },
};

export default function Home() {
  return <Hero />;
}
