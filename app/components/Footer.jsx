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
    <footer className="relative bg-[#03050f] px-4 py-14 text-white md:px-8 border-t border-white/8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <Link href="/" className="flex items-center gap-4 no-underline">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <img src="/images/logowhite.png" alt="CPNexs Logo" className="h-8 w-8 object-contain" />
            </span>
            <div>
              <div className="brand-name text-xl">CPNexs</div>
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/30">Next-Gen Digital Solutions</div>
            </div>
          </Link>
          <div className="flex flex-wrap gap-3">
            {links.map(([label, href]) => (
              <Link
                href={href}
                key={href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white/50 no-underline transition-all hover:bg-white/10 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/8 pt-7 md:flex-row md:items-center">
          <p className="m-0 text-sm text-white/30">Copyright 2026 CPNexs. All rights reserved. Built by Chetan Prakash Kamble.</p>
          <div className="flex gap-2">
            {["f", "in", "x", "ig"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-white/40 no-underline transition-all hover:bg-blue-600/20 hover:border-blue-500/30 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
