"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered E-Commerce Platform",
    industry: "Retail",
    desc: "Full-stack e-commerce with AI product recommendations, real-time inventory, and payment gateway integration for a growing retail chain.",
    tags: ["Next.js", "Node.js", "OpenAI", "PostgreSQL"],
    color: "#006BFF",
    bg: "#EAF4FF",
    emoji: "🛍️",
    span: "lg:col-span-2",
  },
  {
    title: "Hospital Management System",
    industry: "Healthcare",
    desc: "Patient records, appointment booking, billing, and telemedicine platform for a multi-specialty clinic.",
    tags: ["React", "Python", "AWS", "MongoDB"],
    color: "#059669",
    bg: "#ECFDF5",
    emoji: "🏥",
    span: "",
  },
  {
    title: "School ERP & Parent App",
    industry: "Education",
    desc: "Complete school management — admissions, attendance, fees, results, and a parent mobile app for real-time updates.",
    tags: ["React Native", "Node.js", "MySQL"],
    color: "#7C3AED",
    bg: "#F5F3FF",
    emoji: "🏫",
    span: "",
  },
  {
    title: "Restaurant CRM & POS System",
    industry: "Food & Beverage",
    desc: "Complete restaurant management — orders, inventory, staff scheduling, and customer loyalty programs in one system.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    color: "#D97706",
    bg: "#FFFBEB",
    emoji: "🍽️",
    span: "",
  },
  {
    title: "Manufacturing ERP",
    industry: "Manufacturing",
    desc: "End-to-end manufacturing management — raw materials, production planning, quality control, and dispatch tracking.",
    tags: ["React", "Python", "PostgreSQL", "Docker"],
    color: "#0891B2",
    bg: "#ECFEFF",
    emoji: "🏭",
    span: "",
  },
  {
    title: "Real Estate Portal",
    industry: "Real Estate",
    desc: "Property listing, virtual tours, lead management, and agent CRM for a real estate company with 500+ listings.",
    tags: ["Next.js", "Node.js", "MongoDB", "AWS"],
    color: "#DC2626",
    bg: "#FEF2F2",
    emoji: "🏠",
    span: "lg:col-span-2",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } };

export default function Portfolio() {
  return (
    <section className="bg-white py-24">
      <div className="section-shell">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#006BFF]/20 bg-[#EAF4FF] px-4 py-2 mb-5">
              <span className="text-sm font-semibold text-[#006BFF]" style={{ fontFamily: "var(--font-inter)" }}>Our Work</span>
            </div>
            <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
              Projects That
              <br />
              <span className="gradient-text">Speak for Themselves</span>
            </h2>
          </div>
          <p className="max-w-sm text-[#475569] text-base leading-7" style={{ fontFamily: "var(--font-inter)" }}>
            Every project is built with precision, purpose, and a focus on real business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -6, boxShadow: `0 20px 60px ${p.color}18` }}
              className={`group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white cursor-pointer transition-all ${p.span}`}
            >
              {/* Preview area */}
              <div className="relative h-48 overflow-hidden" style={{ background: p.bg }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl opacity-20">{p.emoji}</span>
                </div>
                {/* Browser mockup */}
                <div className="absolute inset-4 bg-white rounded-xl shadow-lg overflow-hidden border border-[#E2E8F0]">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#E2E8F0] bg-[#F7FAFC]">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <div className="ml-2 flex-1 h-3 rounded bg-[#E2E8F0]" />
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-3 rounded bg-[#E2E8F0] w-3/4" />
                    <div className="h-2 rounded bg-[#E2E8F0] w-full" />
                    <div className="h-2 rounded bg-[#E2E8F0] w-5/6" />
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      {[1,2,3].map(n => (
                        <div key={n} className="h-12 rounded-lg" style={{ background: p.bg }} />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Industry badge */}
                <div className="absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-bold" style={{ background: p.color + "18", color: p.color, fontFamily: "var(--font-inter)" }}>
                  {p.industry}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2" style={{ fontFamily: "var(--font-space)" }}>{p.title}</h3>
                <p className="text-sm leading-6 text-[#475569] mb-4" style={{ fontFamily: "var(--font-inter)" }}>{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map(tag => (
                    <span key={tag} className="rounded-full px-3 py-1 text-[11px] font-semibold border border-[#E2E8F0] text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link href="/contact" className="no-underline flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="w-full rounded-lg py-2 text-center text-xs font-semibold text-white cursor-pointer"
                      style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`, fontFamily: "var(--font-inter)" }}
                    >
                      Build Similar →
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[#475569] text-sm mb-5" style={{ fontFamily: "var(--font-inter)" }}>Want a project like this built for your business?</p>
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(0,107,255,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#006BFF] to-[#0052D9] px-8 py-3.5 text-sm font-semibold text-white cursor-pointer"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Start Your Project →
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
