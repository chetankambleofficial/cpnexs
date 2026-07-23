import { Space_Grotesk, Sora, Righteous, Amaranth, Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400","500","600","700"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space", subsets: ["latin"], weight: ["300","400","500","600","700"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400","600","700","800"] });
const righteous = Righteous({ variable: "--font-righteous", subsets: ["latin"], weight: ["400"] });
const amaranth  = Amaranth({ variable: "--font-amaranth",  subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800","900"] });

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
    <html lang="en-IN" className={`${inter.variable} ${spaceGrotesk.variable} ${sora.variable} ${righteous.variable} ${amaranth.variable} ${outfit.variable}`}>
      <head>
        <meta name="theme-color" content="#1F2F56" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Alegreya+Sans+SC:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Amaranth:ital,wght@0,400;1,400;1,700&family=Outfit:wght@100..900&family=Righteous&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-[#475569] antialiased" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
        <Navbar />
        <main id="main-content" style={{ paddingTop: "76px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
