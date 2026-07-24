"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const FONT = "var(--font-heading), 'Alegreya Sans SC', sans-serif";

const projects = [
  {
    id: "ecommerce",
    title: "ÔURA — AI Fashion Store",
    industry: "E-Commerce",
    desc: "Full-stack AI-powered fashion store with personalised stylist chat, product recommendations, and editorial design.",
    tags: ["Next.js", "OpenAI", "Node.js", "PostgreSQL"],
    color: "#3D6B4F",
    file: "/htmls/ecommerce.html",
  },
  {
    id: "cafe",
    title: "Cafe Medley — Restaurant",
    industry: "Food & Beverage",
    desc: "Warm editorial website for a Bengaluru cafe with menu, reviews, reservation system and location info.",
    tags: ["Next.js", "Node.js", "MySQL"],
    color: "#C97B63",
    file: "/htmls/hotelcafe.html",
  },
  {
    id: "school",
    title: "Vidyalaya ERP",
    industry: "Education",
    desc: "Complete school management system — attendance, fees, exams, staff, and parent communication in one dashboard.",
    tags: ["React", "Python", "PostgreSQL", "AWS"],
    color: "#2563EB",
    file: "/htmls/school-erp.html",
  },
  {
    id: "realestate",
    title: "NestFind — Real Estate Portal",
    industry: "Real Estate",
    desc: "Property listing portal with map view, advanced filters, agent CRM and verified listings across 18 cities.",
    tags: ["Next.js", "Node.js", "MongoDB", "Maps API"],
    color: "#1D4ED8",
    file: "/htmls/real-estate.html",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function Portfolio() {
  const [active, setActive] = useState(projects[0]);

  return (
    <section style={{ background: "#F8FAFC", padding: "96px 0" }}>
      <div className="section-shell">
        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: "56px" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#EAF4FF", border: "1px solid rgba(0,107,255,0.2)", borderRadius: "100px", padding: "6px 16px", marginBottom: "20px" }}>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#006BFF", fontFamily: FONT }}>Our Work</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#0F172A", fontFamily: FONT, lineHeight: 1.1 }}>
              Real Designs,<br />
              <span style={{ background: "linear-gradient(135deg,#006BFF,#0052D9)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Live Previews
              </span>
            </h2>
            <p style={{ maxWidth: "380px", color: "#475569", fontSize: "15px", lineHeight: 1.7, fontFamily: FONT }}>
              Click any project to see the actual live design — not mockups, real HTML pages we built.
            </p>
          </div>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}
        >
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              style={{
                padding: "9px 20px",
                borderRadius: "10px",
                border: `1.5px solid ${active.id === p.id ? p.color : "#E2E8F0"}`,
                background: active.id === p.id ? p.color + "12" : "#fff",
                color: active.id === p.id ? p.color : "#475569",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: FONT,
                transition: "all 0.2s",
              }}
            >
              {p.industry}
            </button>
          ))}
        </motion.div>

        {/* Main preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "24px", alignItems: "start" }}
            className="portfolio-main-grid"
          >
            {/* iframe preview */}
            <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #E2E8F0", boxShadow: "0 20px 60px rgba(0,0,0,0.1)", background: "#fff" }}>
              {/* Browser chrome */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 16px", background: "#F7FAFC", borderBottom: "1px solid #E2E8F0" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FC5F57", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FDBC2C", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27C840", display: "inline-block" }} />
                <div style={{ flex: 1, marginLeft: "8px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "6px", padding: "4px 12px", fontSize: "11px", color: "#94A3B8", fontFamily: "monospace", display: "flex", alignItems: "center", gap: "6px" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  cpnexs.in/preview/{active.id}
                </div>
                <a href={active.file} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "11px", color: "#3E7CB1", fontWeight: 600, fontFamily: FONT, whiteSpace: "nowrap", textDecoration: "none" }}>
                  Open ↗
                </a>
              </div>
              <iframe
                src={active.file}
                title={active.title}
                style={{ width: "100%", height: "560px", border: "none", display: "block" }}
                loading="lazy"
              />
            </div>

            {/* Info panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", padding: "24px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 700, background: active.color + "15", color: active.color, fontFamily: FONT, marginBottom: "12px" }}>
                  {active.industry}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0F172A", fontFamily: FONT, marginBottom: "10px", lineHeight: 1.3 }}>{active.title}</h3>
                <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.7, fontFamily: FONT, marginBottom: "16px" }}>{active.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {active.tags.map(tag => (
                    <span key={tag} style={{ padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: 600, background: "#F1F5F9", color: "#475569", fontFamily: FONT }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <a href={active.file} target="_blank" rel="noopener noreferrer"
                    style={{ display: "block", padding: "10px 16px", borderRadius: "10px", background: active.color, color: "#fff", fontSize: "13px", fontWeight: 600, textAlign: "center", fontFamily: FONT, textDecoration: "none" }}>
                    View Full Design ↗
                  </a>
                  <Link href="/contact" style={{ display: "block", padding: "10px 16px", borderRadius: "10px", border: "1px solid #E2E8F0", color: "#475569", fontSize: "13px", fontWeight: 600, textAlign: "center", fontFamily: FONT, textDecoration: "none" }}>
                    Build Similar →
                  </Link>
                </div>
              </div>

              {/* Other projects */}
              <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: FONT, marginBottom: "12px" }}>Other Projects</div>
                {projects.filter(p => p.id !== active.id).map(p => (
                  <button key={p.id} onClick={() => setActive(p)}
                    style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "8px", border: "none", background: "transparent", cursor: "pointer", textAlign: "left", transition: "background 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#F8FAFC"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#0F172A", fontFamily: FONT }}>{p.industry}</div>
                      <div style={{ fontSize: "11px", color: "#94A3B8", fontFamily: FONT }}>{p.title}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginTop: "56px", textAlign: "center" }}
        >
          <p style={{ color: "#475569", fontSize: "14px", marginBottom: "16px", fontFamily: FONT }}>Want a custom design like this for your business?</p>
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(0,107,255,0.3)" }}
              whileTap={{ scale: 0.97 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "12px", background: "linear-gradient(135deg,#006BFF,#0052D9)", padding: "13px 32px", fontSize: "14px", fontWeight: 600, color: "#fff", cursor: "pointer", fontFamily: FONT }}
            >
              Start Your Project →
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-main-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
