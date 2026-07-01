import Services from "../components/Services";

export const metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, AI solutions, UI/UX design, and digital marketing — all under one roof at CPNexs.",
  alternates: { canonical: "https://www.cpnexs.com/services" },
  openGraph: {
    url: "https://www.cpnexs.com/services",
    title: "Services — CPNexs",
    description:
      "Web development, mobile apps, AI solutions, UI/UX design, and digital marketing — all under one roof.",
  },
};

export default function ServicesPage() {
  return <Services />;
}
