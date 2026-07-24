"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const FONT = "var(--font-heading), 'Alegreya Sans SC', sans-serif";

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
    ["Portfolio", "/portfolio"],
    ["Pricing", "/pricing"],
    ["Contact Us", "/contact"],
  ],
};

const socials = [
  {
    label: "LinkedIn", href: "https://linkedin.com/company/cpnexs",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: "Twitter", href: "https://twitter.com/cpnexs",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: "Instagram", href: "https://x.com/cpnexs",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    label: "WhatsApp", href: "https://wa.me/919844538521",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = e => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer style={{ background: "#0F172A", color: "#fff" }}>
      {/* CTA Banner */}
      <div style={{ background: "linear-gradient(135deg, #1F2F56 0%, #0F172A 100%)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="section-shell" style={{ padding: "64px 1.5rem", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(62,124,177,0.15)", border: "1px solid rgba(62,124,177,0.3)", borderRadius: "100px", padding: "6px 16px", marginBottom: "20px" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px rgba(74,222,128,0.8)", display: "inline-block" }} />
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#94A3B8", fontFamily: FONT, letterSpacing: "0.05em" }}>Available for new projects</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff", marginBottom: "12px", fontFamily: FONT, lineHeight: 1.2 }}>
            Ready to Build Something <span style={{ color: "#4E8CC1" }}>Amazing?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px", fontSize: "16px", lineHeight: 1.7, fontFamily: FONT }}>
            Get a free consultation and clear quote within 24 hours. No commitment required.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <Link href="/contact" className="no-underline">
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(62,124,177,0.5)" }}
                whileTap={{ scale: 0.97 }}
                style={{ background: "#3E7CB1", color: "#fff", padding: "12px 28px", borderRadius: "12px", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: FONT }}
              >
                Book Free Consultation →
              </motion.div>
            </Link>
            <a href="https://wa.me/919844538521" target="_blank" rel="noopener noreferrer" className="no-underline">
              <motion.div
                whileHover={{ scale: 1.04, background: "rgba(255,255,255,0.12)" }}
                whileTap={{ scale: 0.97 }}
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "12px 28px", borderRadius: "12px", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: FONT }}
              >
                WhatsApp Us
              </motion.div>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-shell" style={{ padding: "64px 1.5rem 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "48px", marginBottom: "56px" }}>

          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" className="no-underline" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <img src="/images/logowhite.png" alt="CPNexs" style={{ height: "36px", width: "36px", objectFit: "contain" }} />
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#fff", fontFamily: FONT }}>
                CP<span style={{ color: "#4E8CC1" }}>nexs</span>
              </span>
            </Link>
            <p style={{ fontSize: "13px", lineHeight: 1.8, color: "rgba(255,255,255,0.45)", maxWidth: "260px", marginBottom: "24px", fontFamily: FONT }}>
              Building next-generation software — AI, web, mobile, ERP/CRM and enterprise platforms for businesses across India.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {[
                { href: "tel:+919844538521", text: "+91 98445 38521", icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.59 1.24h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg> },
                { href: "mailto:cpnexs@gmail.com", text: "cpnexs@gmail.com", icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg> },
              ].map(({ href, text, icon }) => (
                <a key={text} href={href} className="no-underline" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.45)", transition: "color 0.2s", fontFamily: FONT }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}>
                  {icon}{text}
                </a>
              ))}
              <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.45)", fontFamily: FONT }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Hubli, Karnataka, India
              </span>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="no-underline"
                  whileTap={{ scale: 0.95 }}
                  style={{ height: "36px", width: "36px", borderRadius: "10px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", transition: "background 0.2s, color 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#3E7CB1"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#3E7CB1"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ fontSize: "11px", fontWeight: 700, color: "#fff", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: FONT }}>{heading}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="no-underline" style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", fontFamily: FONT, transition: "color 0.15s" }}
                      onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                      onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{ borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", padding: "28px 32px", marginBottom: "40px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
            <div>
              <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#fff", marginBottom: "4px", fontFamily: FONT }}>Stay Updated</h4>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", fontFamily: FONT }}>Tips on tech & business growth. No spam, ever.</p>
            </div>
            {subscribed ? (
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#4ade80", fontFamily: FONT }}>✓ You're subscribed!</div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "10px", flex: 1, maxWidth: "420px" }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{ flex: 1, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)", padding: "10px 16px", fontSize: "13px", color: "#fff", outline: "none", fontFamily: FONT }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ borderRadius: "10px", background: "#3E7CB1", padding: "10px 20px", fontSize: "13px", fontWeight: 600, color: "#fff", cursor: "pointer", border: "none", fontFamily: FONT, whiteSpace: "nowrap" }}
                >
                  Subscribe
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", fontFamily: FONT }}>
            © 2025 CPNexs. All rights reserved. Built by Chetan Prakash Kamble.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ height: "6px", width: "6px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px rgba(74,222,128,0.8)", display: "inline-block" }} />
            <span style={{ fontSize: "11px", color: "#4ade80", fontWeight: 600, fontFamily: FONT }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
