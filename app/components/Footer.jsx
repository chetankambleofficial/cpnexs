"use client";

import Link from "next/link";

export default function Footer() {
  const links = [
    ["Services",  "/services"],
    ["Portfolio", "/portfolio"],
    ["Pricing",   "/pricing"],
    ["Contact",   "/contact"],
  ];

  return (
    <footer
      className="relative bg-[#03050f] px-4 py-14 text-white md:px-8 border-t border-white/8"
      aria-label="CPNexs footer"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <Link href="/" className="flex items-center gap-4 no-underline" aria-label="CPNexs — Next-Gen Digital Solutions">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <img
                src="/images/logowhite.png"
                alt="CPNexs Logo"
                width="32"
                height="32"
                className="h-8 w-8 object-contain"
              />
            </span>
            <div>
              <div className="brand-name text-xl">CPNexs</div>
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/30">Next-Gen Digital Solutions</div>
            </div>
          </Link>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-3">
            {links.map(([label, href]) => (
              <Link
                href={href}
                key={href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white/50 no-underline transition-all hover:bg-white/10 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <address
          className="mt-8 not-italic text-sm text-white/25"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <span itemProp="addressLocality" className="sr-only">Hubli</span>
          <span itemProp="addressRegion" className="sr-only">Karnataka</span>
          <span itemProp="addressCountry" className="sr-only">India</span>
          <a href="tel:+919844538521" className="text-white/30 no-underline hover:text-white/60" itemProp="telephone">+91 9844538521</a>
          {" — "}
          <a href="mailto:cpnexs@gmail.com" className="text-white/30 no-underline hover:text-white/60" itemProp="email">cpnexs@gmail.com</a>
        </address>

        <div className="mt-6 flex flex-col justify-between gap-5 border-t border-white/8 pt-7 md:flex-row md:items-center">
          <p className="m-0 text-sm text-white/30">
            &copy; {new Date().getFullYear()} CPNexs. All rights reserved. Built by{" "}
            <span itemProp="founder">Chetan Prakash Kamble</span>.
          </p>
          <div className="flex gap-2" aria-label="CPNexs social media links">
            {[
              { id: "f",  label: "Facebook",  href: "#" },
              { id: "in", label: "LinkedIn",   href: "#" },
              { id: "x",  label: "X (Twitter)", href: "#" },
              { id: "ig", label: "Instagram",  href: "#" },
            ].map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => e.preventDefault()}
                aria-label={`CPNexs on ${item.label}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-white/40 no-underline transition-all hover:bg-blue-600/20 hover:border-blue-500/30 hover:text-white"
              >
                {item.id}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
