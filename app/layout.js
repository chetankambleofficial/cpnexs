import { Space_Grotesk, Inter, Sora, Righteous, Amaranth } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({ variable: "--font-space", subsets: ["latin"], weight: ["300","400","500","600","700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300","400","500","600","700"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400","600","700","800"] });
const righteous = Righteous({ variable: "--font-righteous", subsets: ["latin"], weight: ["400"] });
const amaranth  = Amaranth({ variable: "--font-amaranth",  subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] });

export const BASE_URL = "https://www.cpnexs.in";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CPNexs — Software Development Company | AI, Web & Mobile Apps",
    template: "%s | CPNexs",
  },
  description: "CPNexs builds next-generation software — AI solutions, custom websites, mobile apps, ERP/CRM systems, and SaaS products for startups and businesses across India.",
  keywords: ["software development company", "AI solutions", "web development", "mobile app development", "CPNexs", "Hubli", "Bangalore", "Karnataka"],
  authors: [{ name: "Chetan Prakash Kamble", url: BASE_URL }],
  creator: "CPNexs",
  openGraph: {
    type: "website", locale: "en_IN", url: BASE_URL, siteName: "CPNexs",
    title: "CPNexs — Next-Generation Software Development",
    description: "AI solutions, custom software, web & mobile apps for ambitious businesses.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "CPNexs" }],
  },
  twitter: {
    card: "summary_large_image", site: "@cpnexs",
    title: "CPNexs — Next-Generation Software Development",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png" }],
    apple: [{ url: "/images/favicon.png" }],
  },
  manifest: "/manifest.json",
  verification: { google: "googlec26eccf0152c14de" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${spaceGrotesk.variable} ${inter.variable} ${sora.variable} ${righteous.variable} ${amaranth.variable}`}>
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white text-[#475569] antialiased" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
