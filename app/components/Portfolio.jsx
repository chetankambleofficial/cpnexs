"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      cardClass: "lg:row-span-2 lg:min-h-[540px]",
      tone: "bg-gradient-to-br from-blue-900/50 to-[#0d1a2e]",
      tag: "Web Development",
      title: "Next-Gen Digital Agency",
      desc: "A bold landing experience with conversion-focused sections and premium motion-ready layouts.",
      accentColor: "bg-blue-500",
      glowColor: "rgba(59,130,246,0.3)",
      emoji: "🚀",
    },
    {
      cardClass: "",
      tone: "bg-gradient-to-br from-orange-900/40 to-[#1a0e08]",
      tag: "Web + Mobile",
      title: "HealthCare Platform",
      desc: "Patient management, booking flows, and a calm operational interface.",
      accentColor: "bg-orange-500",
      glowColor: "rgba(249,115,22,0.3)",
      emoji: "🏥",
    },
    {
      cardClass: "",
      tone: "bg-gradient-to-br from-emerald-900/40 to-[#081a12]",
      tag: "SaaS",
      title: "Analytics Dashboard",
      desc: "Performance reporting, role-based workflows, and team management.",
      accentColor: "bg-emerald-500",
      glowColor: "rgba(16,185,129,0.3)",
      emoji: "📊",
    },
    {
      cardClass: "",
      tone: "bg-gradient-to-br from-purple-900/40 to-[#100818]",
      tag: "E-Commerce",
      title: "E-Commerce Store",
      desc: "Fast product browsing, clean checkout, and growth-ready integrations.",
      accentColor: "bg-purple-500",
      glowColor: "rgba(168,85,247,0.3)",
      emoji: "🛍️",
    },
  ];

  return (
    <section className="relative bg-[#050816] px-4 pt-24 pb-24 text-white md:px-8 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-emerald-600/8 blur-[100px] pointer-events-none" />

      <div className="section-shell relative">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-400 mb-3">Our Portfolio</div>
            <h2 className="font-heading text-4xl font-bold tracking-normal md:text-6xl">
              Work that feels built,
              <br />
              not templated.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-md text-base leading-7 text-white/45"
          >
            Every project is shaped around the customer journey, the business model, and the launch timeline.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: `0 24px 60px ${project.glowColor}` }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 p-7 transition-all ${project.tone} ${project.cardClass} cursor-pointer`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_44%)] pointer-events-none" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_50%)] pointer-events-none" />

              <motion.div
                className={`absolute right-7 top-7 h-16 w-16 rounded-2xl ${project.accentColor} shadow-lg opacity-80`}
                whileHover={{ rotate: 12, scale: 1.15 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute right-8 top-[4.5rem] text-4xl opacity-20 transition-opacity group-hover:opacity-40 select-none">
                {project.emoji}
              </div>

              <div className="relative z-10 flex min-h-[260px] flex-col justify-end">
                <span className="mb-4 w-fit rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur text-white/80">
                  {project.tag}
                </span>
                <h3 className="font-heading text-3xl font-bold text-white md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-white/55">
                  {project.desc}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-white">
                    View Project
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-white/40 text-sm mb-4">Want something like this for your business?</p>
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 36px rgba(59,130,246,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg transition-all cursor-pointer"
            >
              Start Your Project
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
