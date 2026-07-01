import Portfolio from "../components/Portfolio";
import { BASE_URL } from "../layout";

const PAGE_URL = `${BASE_URL}/portfolio`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "Portfolio — Software Projects by CPNexs | Hubli & Bangalore",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      description:
        "Explore CPNexs portfolio of websites, mobile apps, SaaS dashboards, and digital products built for businesses in Hubli, Bangalore, and across India.",
      inLanguage: "en-IN",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: PAGE_URL },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}/#collection`,
      url: PAGE_URL,
      name: "CPNexs Project Portfolio",
      description:
        "A curated collection of websites, mobile apps, SaaS products, and digital solutions built by CPNexs for clients across Karnataka and India.",
      provider: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export const metadata = {
  title: "Portfolio — Websites, Apps & Software Projects | CPNexs Hubli",
  description:
    "Explore CPNexs portfolio of custom websites, mobile apps, SaaS dashboards, and digital products built for businesses in Hubli, Bangalore, and across India. Real projects, real results.",
  keywords: [
    "software development portfolio Hubli",
    "web development portfolio Karnataka",
    "mobile app portfolio Bangalore",
    "SaaS projects India",
    "custom software projects Karnataka",
    "website design portfolio Hubli",
    "digital products portfolio India",
    "CPNexs portfolio",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { "en-IN": PAGE_URL },
  },
  openGraph: {
    url: PAGE_URL,
    title: "Portfolio — Websites, Apps & Software Projects | CPNexs",
    description:
      "Real websites, mobile apps, SaaS dashboards, and digital products built for businesses in Hubli, Bangalore, and across India.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPNexs Portfolio — Software Projects in Hubli and Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Software Projects | CPNexs Hubli & Bangalore",
    description:
      "Websites, mobile apps, SaaS dashboards, and digital products built for real businesses.",
    images: ["/images/og-image.png"],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Portfolio />
    </>
  );
}
