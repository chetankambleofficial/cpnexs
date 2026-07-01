import Contact from "../components/Contact";
import { BASE_URL } from "../layout";

const PAGE_URL = `${BASE_URL}/contact`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: "Contact CPNexs — Hire a Software Developer in Hubli & Bangalore",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      description:
        "Contact CPNexs to hire a software developer in Hubli or Bangalore. Share your project idea and get a response within 24 hours.",
      inLanguage: "en-IN",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Contact", item: PAGE_URL },
      ],
    },
  ],
};

export const metadata = {
  title: "Contact — Hire a Software Developer in Hubli & Bangalore | CPNexs",
  description:
    "Get in touch with CPNexs to hire a software developer in Hubli or Bangalore. Share your project idea — we reply within 24 hours with practical next steps. Call +91 9844538521.",
  keywords: [
    "hire software developer Hubli",
    "hire web developer Bangalore",
    "contact software company Karnataka",
    "freelance developer Hubli contact",
    "get website quote Hubli",
    "software development inquiry India",
    "CPNexs contact",
    "Chetan Prakash Kamble contact",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { "en-IN": PAGE_URL },
  },
  openGraph: {
    url: PAGE_URL,
    title: "Contact CPNexs — Hire a Software Developer in Hubli & Bangalore",
    description:
      "Share your project idea and get a response within 24 hours. Call +91 9844538521 or email cpnexs@gmail.com.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact CPNexs — Software Developer in Hubli and Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact CPNexs — Software Developer in Hubli & Bangalore",
    description:
      "Share your project idea. We reply within 24 hours. Call +91 9844538521.",
    images: ["/images/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Contact />
    </>
  );
}
