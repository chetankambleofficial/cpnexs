import { Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const BASE_URL = "https://www.cpnexs.in";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "CPNexs — Software Development Company in Hubli, Bangalore | Websites, Apps & AI",
    template: "%s | CPNexs — Software Company Hubli & Bangalore",
  },

  description:
    "CPNexs is a software development company in Hubli (Hubballi), Karnataka, serving Bangalore and all of India. We build custom websites, mobile apps, ERP/CRM systems, AI automation, and SaaS products for startups and businesses.",

  keywords: [
    // Primary geo + service
    "software development company in Hubli",
    "software development company in Hubballi",
    "software company Hubli",
    "software company Bangalore",
    "software company Bengaluru",
    "website development company Hubli",
    "website development company Bangalore",
    "web design company Karnataka",
    "freelance web developer Hubli",
    "freelance software developer Hubli",
    // Tech stack
    "React developer Bangalore",
    "Next.js developer Bangalore",
    "full stack developer Karnataka",
    "Node.js developer Hubli",
    // Services
    "custom software development company",
    "CRM development company",
    "ERP development company",
    "restaurant website development",
    "restaurant CRM development",
    "AI automation company",
    "AI software development",
    "SaaS development company",
    "mobile app development company",
    "Android app development Hubli",
    "iOS app development Bangalore",
    "cloud application development",
    "business automation software",
    "inventory management software",
    "custom ERP software",
    "digital transformation company",
    "startup software development",
    "small business software solutions",
    // Brand
    "CPNexs",
    "Chetan Prakash Kamble",
  ],

  authors: [{ name: "Chetan Prakash Kamble", url: BASE_URL }],
  creator: "CPNexs",
  publisher: "CPNexs",

  alternates: {
    canonical: BASE_URL,
    languages: { "en-IN": BASE_URL },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "CPNexs",
    title: "CPNexs — Software Development Company in Hubli & Bangalore",
    description:
      "Custom websites, mobile apps, ERP/CRM systems, AI automation, and SaaS products. Based in Hubli, Karnataka — serving clients across India.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPNexs — Software Development Company in Hubli and Bangalore, Karnataka",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@cpnexs",
    creator: "@cpnexs",
    title: "CPNexs — Software Company in Hubli & Bangalore",
    description:
      "Custom software, websites, mobile apps, AI automation & SaaS. Based in Hubli, Karnataka.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" },
      { url: "/images/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/favicon.png",
    apple: [{ url: "/images/favicon.png", sizes: "180x180", type: "image/png" }],
  },

  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CPNexs",
  },

  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050816" },
    { media: "(prefers-color-scheme: light)", color: "#050816" },
  ],

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  category: "technology",

  // Verification placeholders — add real tokens from Search Console / Bing
  verification: {
    google: "googlec26eccf0152c14de",
    // bing: "<bing-verification-token>",
    // yandex: "<yandex-verification-token>",
  },

  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Hubli, Karnataka, India",
    "geo.position": "15.3647;75.1240",
    ICBM: "15.3647, 75.1240",
    "DC.language": "en",
    "DC.coverage": "Karnataka, India",
  },
};

// ── JSON-LD: Full graph ────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Organization
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "CPNexs",
      alternateName: ["CP Nexs", "CPNexs Digital Studio"],
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#logo`,
        url: `${BASE_URL}/images/logocolor.png`,
        width: 512,
        height: 512,
        caption: "CPNexs Logo",
      },
      image: { "@id": `${BASE_URL}/#logo` },
      description:
        "CPNexs is a software development company based in Hubli (Hubballi), Karnataka, India. We build custom websites, mobile apps, ERP/CRM systems, AI automation tools, and SaaS products for startups and businesses across India.",
      foundingDate: "2023",
      founders: [{ "@type": "Person", name: "Chetan Prakash Kamble" }],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9844538521",
          contactType: "customer support",
          email: "cpnexs@gmail.com",
          availableLanguage: ["English", "Kannada", "Hindi"],
          areaServed: ["IN"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "20:00",
          },
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-9844538521",
          contactType: "sales",
          email: "cpnexs@gmail.com",
          availableLanguage: ["English", "Kannada"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hubli",
        addressRegion: "Karnataka",
        addressCountry: "IN",
        postalCode: "580020",
      },
      areaServed: [
        { "@type": "City", name: "Hubli" },
        { "@type": "City", name: "Hubballi" },
        { "@type": "City", name: "Dharwad" },
        { "@type": "City", name: "Bangalore" },
        { "@type": "City", name: "Bengaluru" },
        { "@type": "State", name: "Karnataka" },
        { "@type": "Country", name: "India" },
      ],
      sameAs: [
        "https://www.linkedin.com/company/cpnexs",
        "https://twitter.com/cpnexs",
        "https://www.instagram.com/cpnexs",
        "https://github.com/cpnexs",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Development Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Website Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP Software Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM Software Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation Solutions" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Product Development" } },
        ],
      },
    },

    // 2. LocalBusiness / ProfessionalService
    {
      "@type": ["LocalBusiness", "ProfessionalService", "SoftwareApplication"],
      "@id": `${BASE_URL}/#localbusiness`,
      name: "CPNexs",
      image: `${BASE_URL}/images/og-image.png`,
      url: BASE_URL,
      telephone: "+91-9844538521",
      email: "cpnexs@gmail.com",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, UPI",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hubli",
        addressLocality: "Hubli",
        addressRegion: "Karnataka",
        postalCode: "580020",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 15.3647,
        longitude: 75.124,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "17:00",
        },
      ],
      description:
        "Software development company in Hubli, Karnataka offering custom websites, mobile apps, ERP/CRM systems, AI automation, and SaaS development for businesses across Karnataka and India.",
      servesCuisine: undefined,
      areaServed: "Karnataka, India",
      hasMap: "https://maps.google.com/?q=Hubli,Karnataka,India",
      parentOrganization: { "@id": `${BASE_URL}/#organization` },
    },

    // 3. WebSite
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "CPNexs",
      description: "Software Development Company in Hubli & Bangalore — Websites, Apps, AI & SaaS",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // 4. Person — Founder
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#founder`,
      name: "Chetan Prakash Kamble",
      jobTitle: "CEO & Lead Software Developer",
      worksFor: { "@id": `${BASE_URL}/#organization` },
      url: BASE_URL,
      email: "cpnexs@gmail.com",
      telephone: "+91-9844538521",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hubli",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      knowsAbout: [
        "React.js", "Next.js", "Node.js", "Full Stack Development",
        "Mobile App Development", "AI Integration", "SaaS Development",
        "ERP Systems", "CRM Systems", "Cloud Architecture",
      ],
      sameAs: [
        "https://www.linkedin.com/in/chetan-prakash-kamble",
        "https://github.com/cpnexs",
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={orbitron.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Hubli, Karnataka, India" />
        <meta name="geo.position" content="15.3647;75.1240" />
        <meta name="ICBM" content="15.3647, 75.1240" />
      </head>
      <body className="min-h-screen bg-[#050816] text-ink antialiased">
        <Navbar />
        <main id="main-content" className="bg-[#050816]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
