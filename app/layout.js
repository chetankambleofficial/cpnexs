import { Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const BASE_URL = "https://www.cpnexs.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CPNexs — Digital Studio | Websites, Apps & AI Solutions",
    template: "%s — CPNexs",
  },
  description:
    "CPNexs is a digital studio building modern websites, mobile apps, AI solutions, and cloud platforms that help businesses grow faster and scale smarter.",
  keywords: [
    "CPNexs", "web development India", "Next.js agency", "AI solutions",
    "mobile app development", "UI UX design", "digital marketing",
    "cloud solutions", "software development", "digital studio",
  ],
  authors: [{ name: "Chetan Prakash Kamble", url: BASE_URL }],
  creator: "CPNexs",
  publisher: "CPNexs",
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "CPNexs",
    title: "CPNexs — Digital Studio | Websites, Apps & AI Solutions",
    description:
      "We build high-performing websites, AI tools, and digital systems for ambitious businesses.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPNexs — Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cpnexs",
    creator: "@cpnexs",
    title: "CPNexs — Digital Studio",
    description:
      "Modern websites, AI solutions, and scalable digital systems for growing businesses.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" },
      { url: "/images/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  category: "technology",
};

// JSON-LD: Organization + WebSite schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "CPNexs",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logocolor.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9844538521",
        contactType: "customer support",
        email: "cpnexs@gmail.com",
        availableLanguage: "English",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "CPNexs",
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={orbitron.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#050816] text-ink antialiased">
        <Navbar />
        <main className="bg-[#050816]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
