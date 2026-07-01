import Services from "../components/Services";
import { BASE_URL } from "../layout";

const PAGE_URL = `${BASE_URL}/services`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "Software Development Services in Hubli & Bangalore | CPNexs",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      description:
        "CPNexs offers custom software development, website development, mobile apps, ERP/CRM systems, AI automation, SaaS development, and UI/UX design in Hubli, Bangalore, and across India.",
      inLanguage: "en-IN",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#web-development`,
      name: "Custom Website Development",
      description:
        "Responsive websites, landing pages, and web applications built with React and Next.js for speed, SEO, and conversion. Serving businesses in Hubli, Bangalore, and across Karnataka.",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: ["Hubli", "Bangalore", "Karnataka", "India"],
      serviceType: "Web Development",
      url: PAGE_URL,
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#mobile-apps`,
      name: "Mobile App Development",
      description:
        "Android and iOS app development with clean architecture and polished UX. Custom mobile apps for businesses in Hubli, Bangalore, and Karnataka.",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: ["Hubli", "Bangalore", "Karnataka", "India"],
      serviceType: "Mobile App Development",
      url: PAGE_URL,
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#erp-crm`,
      name: "ERP & CRM Software Development",
      description:
        "Custom ERP systems, CRM platforms, restaurant management software, inventory management, and business automation tools built for Karnataka businesses.",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: ["Hubli", "Bangalore", "Karnataka", "India"],
      serviceType: "ERP CRM Development",
      url: PAGE_URL,
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#ai-automation`,
      name: "AI Automation & Integration",
      description:
        "AI-powered automation, chatbots, data workflows, and intelligent business tools. AI software development for startups and enterprises in India.",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: ["Hubli", "Bangalore", "Karnataka", "India"],
      serviceType: "AI Software Development",
      url: PAGE_URL,
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#saas`,
      name: "SaaS Product Development",
      description:
        "End-to-end SaaS product development including architecture, APIs, admin dashboards, and cloud deployment on AWS.",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: ["Hubli", "Bangalore", "Karnataka", "India"],
      serviceType: "SaaS Development",
      url: PAGE_URL,
    },
  ],
};

export const metadata = {
  title: "Software Development Services in Hubli & Bangalore — Web, Apps, ERP, AI",
  description:
    "CPNexs offers custom website development, mobile apps, ERP/CRM systems, AI automation, and SaaS development in Hubli, Bangalore, and across Karnataka. React, Next.js, Node.js experts.",
  keywords: [
    "software development services Hubli",
    "website development company Hubli",
    "mobile app development Hubli",
    "ERP development company Karnataka",
    "CRM development company Bangalore",
    "AI automation company India",
    "SaaS development company",
    "React developer Bangalore",
    "Next.js developer Karnataka",
    "full stack developer Hubli",
    "restaurant CRM development",
    "custom software development Karnataka",
    "business automation software India",
    "cloud application development",
    "Android app development Hubli",
    "iOS app development Bangalore",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { "en-IN": PAGE_URL },
  },
  openGraph: {
    url: PAGE_URL,
    title: "Software Development Services in Hubli & Bangalore | CPNexs",
    description:
      "Custom websites, mobile apps, ERP/CRM, AI automation & SaaS. React, Next.js, Node.js experts in Hubli and Bangalore.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPNexs Software Development Services — Hubli and Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services | CPNexs Hubli & Bangalore",
    description:
      "Custom websites, mobile apps, ERP/CRM, AI automation & SaaS in Hubli and Bangalore.",
    images: ["/images/og-image.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Services />
    </>
  );
}
