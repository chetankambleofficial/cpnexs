import Pricing from "../components/Pricing";
import { BASE_URL } from "../layout";

const PAGE_URL = `${BASE_URL}/pricing`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "Pricing — Website & Software Development Cost in Hubli | CPNexs",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      description:
        "Transparent pricing for website development, mobile apps, and custom software in Hubli and Bangalore. Packages starting at ₹2,999. No hidden fees.",
      inLanguage: "en-IN",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Pricing", item: PAGE_URL },
      ],
    },
    {
      "@type": "Offer",
      "@id": `${PAGE_URL}/#starter`,
      name: "Starter Website Package",
      description: "5-page responsive website for college projects with mobile optimisation, contact form, and 1 month support. Delivered in 20 days.",
      price: "5999",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: { "@id": `${BASE_URL}/#organization` },
      areaServed: "IN",
      url: PAGE_URL,
    },
    {
      "@type": "Offer",
      "@id": `${PAGE_URL}/#growth`,
      name: "Growth Website Package",
      description: "10-page custom website with CMS, advanced SEO, analytics, payment gateway, social media integration, and 3 months support. Delivered in 20 days.",
      price: "9999",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: { "@id": `${BASE_URL}/#organization` },
      areaServed: "IN",
      url: PAGE_URL,
    },
    {
      "@type": "Offer",
      "@id": `${PAGE_URL}/#enterprise`,
      name: "Enterprise Custom Software",
      description: "Custom web or mobile app with AI features, dedicated project manager, cloud infrastructure, API development, and 12 months priority support.",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        description: "Custom quote based on project requirements",
      },
      availability: "https://schema.org/InStock",
      seller: { "@id": `${BASE_URL}/#organization` },
      areaServed: "IN",
      url: PAGE_URL,
    },
  ],
};

export const metadata = {
  title: "Pricing — Website & Software Development Cost | CPNexs",
  description:
    "Transparent website and software development pricing. College project websites from ₹5,999, business packages from ₹9,999, and custom enterprise quotes. No hidden fees.",
  keywords: [
    "website development cost Hubli",
    "software development pricing India",
    "affordable website development Karnataka",
    "website packages Hubli",
    "cheap website development Bangalore",
    "mobile app development cost India",
    "custom software pricing Karnataka",
    "ERP development cost India",
    "CPNexs pricing",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { "en-IN": PAGE_URL },
  },
  openGraph: {
    url: PAGE_URL,
    title: "Pricing — Website & Software Development Cost | CPNexs",
    description:
      "Transparent pricing for websites, mobile apps, and custom software. College projects from ₹5,999, business packages from ₹9,999. No hidden fees.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPNexs Pricing — Affordable Software Development in Hubli and Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Software Development Cost | CPNexs",
    description:
      "College project websites from ₹5,999, business packages from ₹9,999. Mobile apps, ERP/CRM, and custom software. Transparent pricing, no hidden fees.",
    images: ["/images/og-image.png"],
  },
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Pricing />
    </>
  );
}
