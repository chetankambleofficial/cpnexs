import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: {
    default: "CPNexs | Websites, AI Solutions & Business Growth",
    template: "%s | CPNexs",
  },

  description:
    "CPNexs builds modern websites, AI solutions, cloud platforms, and digital experiences that help businesses grow faster and scale smarter.",

  keywords: [
    "CPNexs",
    "Web Development",
    "AI Solutions",
    "Next.js Development",
    "Cloud Solutions",
    "SEO Services",
    "Mobile App Development",
    "Digital Agency",
    "Business Growth",
    "Software Development",
  ],

  authors: [{ name: "CPNexs" }],
  creator: "CPNexs",
  publisher: "CPNexs",

  metadataBase: new URL("https://cpnexs.com"),

  openGraph: {
    title: "CPNexs | Websites, AI Solutions & Business Growth",
    description:
      "We build high-performing websites, AI tools, and digital systems for ambitious businesses.",
    url: "https://cpnexs.com",
    siteName: "CPNexs",
    images: [
      {
        url: "/images/favicon.png",
        width: 1200,
        height: 630,
        alt: "CPNexs",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CPNexs | Next-Gen Digital Solutions",
    description:
      "Modern websites, AI solutions, and scalable digital systems for growing businesses.",
    images: ["/images/favicon.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" },
      { url: "/images/favicon.png", sizes: "any" },
    ],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
