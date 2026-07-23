"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const footerLinks = {
  Services: [
    ["Website Development", "/services"],
    ["Mobile App Development", "/services"],
    ["AI Solutions", "/services"],
    ["ERP Development", "/services"],
    ["CRM Development", "/services"],
    ["Cloud Solutions", "/services"],
    ["Business Automation", "/services"],
    ["UI/UX Design", "/services"],
  ],
  Solutions: [
    ["School ERP", "/services"],
    ["Hospital Management", "/services"],
    ["Restaurant POS", "/services"],
    ["Manufacturing ERP", "/services"],
    ["Real Estate Portal", "/services"],
    ["Retail Software", "/services"],
  ],
  Company: [
    ["About Us", "/#about"],
    ["Portfolio", "/portfolio"],
    ["Careers", "/contact"],
    ["Contact", "/contact"],
    ["Privacy Policy", "/contact"],
    ["Terms of Service", "/contact"],
  ],
};

const socials = [
  { label: "GitHub",    href: "https://github.com/cpnexs",                icon: "GH" },
  { label: "LinkedIn",  href: "https://linkedin.com/company/cpnexs",      icon: "in" },
  { label: "Twitter",   href: "https://twitter.com/cpnexs",               icon: "𝕏" },
  { label: "Instagram", href: "https://instagram.com/cpnexs",             icon: "IG" },
  { label: "WhatsApp",  href: "https://wa.me/919844538521",               icon: "WA" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = e => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer className="bg-[#0F172A] text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-[#006BFF] to-[#0052D9] py-14">
        <div className="section-shell text-center">
          <h2 className="text-3xl font-bold text-white mb-3 md:text-4xl" style={{ fontFamily: "var(--font-space)" }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 mb-7 max-w-xl mx-auto text-lg" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
            Get a free consultation and clear quote within 24 hours. No commitment required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="no-underline">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-[#006BFF] cursor-pointer"
                style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}
              >
                Book Free Consultation
              </motion.div>
            </Link>
            <a href="https://wa.me/919844538521" target="_blank" rel="noopener noreferrer" className="no-underline">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white cursor-pointer hover:border-white transition-colors"
                style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}
              >
                WhatsApp Us
              </motion.div>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-shell py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_repeat(3,1fr)] gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-5">
              <img src="/images/logowhite.png" alt="CPNexs" className="h-9 w-9 object-contain" />
              <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-space)" }}>
                CP<span className="text-[#60A5FA]">nexs</span>
              </span>
            </Link>
            <p className="text-sm leading-7 text-white/50 max-w-xs mb-6" style={{ fontFamily: "var(--font-inter)" }}>
              Building next-generation software — AI solutions, web apps, mobile apps, ERP/CRM systems, and enterprise platforms for ambitious businesses across India.
            </p>

            {/* Contact quick info */}
            <div className="space-y-2 mb-6">
              <a href="tel:+919844538521" className="flex items-center gap-2 text-sm text-white/50 hover:text-white no-underline transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.59 1.24h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg>
                +91 9844538521
              </a>
              <a href="mailto:cpnexs@gmail.com" className="flex items-center gap-2 text-sm text-white/50 hover:text-white no-underline transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
                cpnexs@gmail.com
              </a>
              <span className="flex items-center gap-2 text-sm text-white/50" style={{ fontFamily: "var(--font-inter)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Hubli, Karnataka, India
              </span>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: "#006BFF" }}
                  whileTap={{ scale: 0.95 }}
                  className="h-9 w-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-xs font-bold text-white/50 no-underline hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-[0.15em]" style={{ fontFamily: "var(--font-space)" }}>{heading}</h4>
              <ul className="space-y-3 list-none p-0 m-0">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-white/45 no-underline hover:text-white transition-colors duration-150"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-white mb-1" style={{ fontFamily: "var(--font-space)" }}>Stay Updated</h4>
              <p className="text-sm text-white/50" style={{ fontFamily: "var(--font-inter)" }}>Get tips on technology and business growth. No spam, ever.</p>
            </div>
            {subscribed ? (
              <div className="text-sm font-semibold text-emerald-400" style={{ fontFamily: "var(--font-inter)" }}>✓ You're subscribed!</div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 md:w-64 rounded-xl border border-white/15 bg-white/8 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#006BFF] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl bg-gradient-to-r from-[#006BFF] to-[#0052D9] px-5 py-2.5 text-sm font-semibold text-white cursor-pointer border-0"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Subscribe
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/8">
          <p className="text-sm text-white/30" style={{ fontFamily: "var(--font-inter)" }}>
            © 2025 CPNexs. All rights reserved. Built by Chetan Prakash Kamble.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px rgba(52,211,153,0.8)" }} />
            <span className="text-xs text-emerald-400 font-semibold" style={{ fontFamily: "var(--font-inter)" }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
