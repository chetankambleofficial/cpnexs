import Hero from "./components/Hero";
import { BASE_URL } from "./layout";

const PAGE_URL = BASE_URL;

// ── WebPage + FAQ JSON-LD ─────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "CPNexs — Software Development Company in Hubli & Bangalore",
      isPartOf: { "@id": `${PAGE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#organization` },
      description:
        "CPNexs is a software development company in Hubli (Hubballi), Karnataka. We build custom websites, mobile apps, ERP/CRM, AI automation, and SaaS products for startups and businesses across India.",
      inLanguage: "en-IN",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: PAGE_URL },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Is CPNexs a software development company in Hubli?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CPNexs is a software development company based in Hubli (Hubballi), Karnataka. We build custom websites, mobile apps, ERP/CRM systems, AI automation tools, and SaaS products for businesses across Karnataka and India.",
          },
        },
        {
          "@type": "Question",
          name: "What services does CPNexs offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CPNexs offers custom software development, website development, mobile app development (Android & iOS), ERP and CRM systems, AI automation, SaaS product development, UI/UX design, REST APIs, cloud applications, and business automation solutions.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a website cost at CPNexs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Website packages at CPNexs start at ₹2,999 for a 5-page responsive website. Growth packages start at ₹7,999 and include CMS, advanced SEO, and payment integration. Custom software and enterprise projects are quoted based on requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Does CPNexs serve clients in Bangalore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. While CPNexs is headquartered in Hubli, Karnataka, we serve clients across Bangalore, Bengaluru, Dharwad, and all of India with remote-first delivery.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standard websites are delivered in 3–7 days. Complex web applications, mobile apps, and ERP/CRM systems have timelines based on scope, typically 2–12 weeks.",
          },
        },
        {
          "@type": "Question",
          name: "Can CPNexs build a restaurant CRM or ERP system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. CPNexs specialises in custom CRM and ERP development including restaurant management systems, inventory management, order tracking, and business automation software tailored to your workflow.",
          },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Software Development Company in Hubli & Bangalore | Websites, Apps & AI",
  description:
    "CPNexs — software development company in Hubli (Hubballi), Karnataka. Custom websites from ₹2,999, mobile apps, ERP/CRM systems, AI automation & SaaS. Serving Bangalore & all of India.",
  keywords: [
    "software development company in Hubli",
    "software development company in Hubballi",
    "website development company Hubli",
    "web design company Karnataka",
    "freelance web developer Hubli",
    "software company Bangalore",
    "Next.js developer Bangalore",
    "React developer Bangalore",
    "custom software development",
    "AI automation company India",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { "en-IN": PAGE_URL },
  },
  openGraph: {
    url: PAGE_URL,
    title: "CPNexs — Software Development Company in Hubli & Bangalore",
    description:
      "Custom websites, mobile apps, ERP/CRM, AI automation & SaaS. Based in Hubli, Karnataka — serving clients across India.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPNexs — Software Development Company in Hubli and Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPNexs — Software Company in Hubli & Bangalore",
    description:
      "Custom websites, mobile apps, ERP/CRM, AI automation & SaaS. Based in Hubli, Karnataka.",
    images: ["/images/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
    </>
  );
}
