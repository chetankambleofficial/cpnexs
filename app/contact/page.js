import Contact from "../components/Contact";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with CPNexs. Share your idea or project — we reply within 24 hours with practical next steps.",
  alternates: { canonical: "https://www.cpnexs.com/contact" },
  openGraph: {
    url: "https://www.cpnexs.com/contact",
    title: "Contact — CPNexs",
    description: "Get in touch. We reply within 24 hours with practical next steps.",
  },
};

export default function ContactPage() {
  return <Contact />;
}
