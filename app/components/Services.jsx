"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Smartphone, Bot, Palette, Settings, TrendingUp, ArrowRight, Search, Map, PenTool, Zap, Rocket } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  const services = [
    { mark: "01", title: "Web Development",       desc: "Responsive websites, landing pages, and dashboards built with React and Next.js for speed, SEO, and conversion.",                    accent: "from-blue-500 to-cyan-400",    icon: Globe },
    { mark: "02", title: "Mobile App Development", desc: "Android and iOS apps with clean architecture, reliable performance, and polished UX for businesses in Karnataka.",                  accent: "from-orange-400 to-yellow-400", icon: Smartphone },
    { mark: "03", title: "AI & Automation",         desc: "AI integrations, business automation, intelligent chatbots, and data workflows to streamline your operations.",                    accent: "from-purple-500 to-blue-500",   icon: Bot },
    { mark: "04", title: "UI/UX Design",            desc: "Interface design systems and user journeys that make complex products feel simple and intuitive.",                                  accent: "from-yellow-400 to-orange-400", icon: Palette },
    { mark: "05", title: "ERP & CRM Systems",       desc: "Custom ERP software, CRM platforms, restaurant management systems, inventory tools, and admin dashboards for your business.",     accent: "from-emerald-400 to-cyan-400",  icon: Settings },
    { mark: "06", title: "SaaS & Cloud Apps",       desc: "End-to-end SaaS product development, REST APIs, and cloud applications deployed on AWS for scale and reliability.",              accent: "from-purple-500 to-pink-500",   icon: TrendingUp },
  ];

  const techStack = ["React", "Next.js", "Node.js", "Python", "AI/ML", "Flutter", "AWS", "Firebase", "MongoDB", "PostgreSQL", "Express", "REST APIs"];

  const process = [
    { num: "01", label: "Discovery", sub: "Goals, users & market research",    icon: Search },
    { num: "02", label: "Strategy",  sub: "Roadmap & architecture planning",   icon: Map },
    { num: "03", label: "Design",    sub: "Wireframes & prototype approval",   icon: PenTool },
    { num: "04", label: "Build",     sub: "Agile development sprints",         icon: Zap },
    { num: "05", label: "Ship",      sub: "Deploy, test & hand over",          icon: Rocket },
  ];

  return (
    <>
      {/* ── Services Grid ── */}
      <section className="relative bg-[#050816] px-4 pt-24 pb-24 md:px-8 md:py-32 overflow-hidden">
        <div className="absolute left-0 top-16 h-80 w-80 rounded-full bg-blue-600/10 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[90px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />

        <div className="section-shell">
          <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* Sticky left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-32 lg:h-fit"
            >
              <div className="w-fit rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                What We Do
              </div>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-normal text-white md:text-5xl lg:text-6xl">
                Software development services in Hubli &amp; Bangalore.
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-white/50">
                Custom websites, mobile apps, ERP/CRM systems, AI automation, and SaaS products — built for startups and businesses across Karnataka and India.
              </p>
              <div className="mt-8 grid max-w-sm grid-cols-3 gap-3">
                {["Plan", "Design", "Ship"].map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  >
                    <span className="text-sm font-bold text-white">{step}</span>
                  </motion.div>
                ))}
              </div>
              <Link href="/contact" aria-label="Discuss your software project with CPNexs">
                <motion.div
                  whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg cursor-pointer"
                >
                  Discuss Your Project <ArrowRight size={15} />
                </motion.div>
              </Link>
            </motion.div>

            {/* Service cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link href="/contact" key={item.title}>
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                      whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] p-6 text-left transition-all hover:border-white/15 cursor-pointer h-full backdrop-blur"
                    >
                      <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${item.accent} opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20`} />
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} bg-opacity-20 p-2`}>
                            <Icon size={20} className="text-white" />
                          </div>
                          <span className="text-xs font-bold tracking-[0.15em] text-blue-400">{item.mark}</span>
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-white/50">{item.desc}</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white/40 transition-colors group-hover:text-blue-400">
                          Start here
                          <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                            <ArrowRight size={14} />
                          </motion.span>
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Timeline ── */}
      <section className="relative bg-[#080d1a] px-4 py-20 md:px-8 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_55%)] pointer-events-none" />
        <div className="section-shell relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3">Our Process</div>
            <h2 className="text-4xl font-bold text-white md:text-5xl">How we deliver your project</h2>
            <p className="mt-4 text-base text-white/45 max-w-xl mx-auto">
              Every project follows a clear, repeatable process so you always know where things stand — from discovery to deployment.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent hidden lg:block" />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-5">
              {process.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex flex-col items-center text-center group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.12, boxShadow: "0 0 28px rgba(59,130,246,0.45)" }}
                      className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/12 bg-white/5 backdrop-blur transition-all group-hover:border-blue-400/50 group-hover:bg-blue-500/10"
                    >
                      <Icon size={28} className="text-white/70 group-hover:text-blue-400 transition-colors" />
                    </motion.div>
                    <h3 className="mt-5 text-lg font-bold text-white">{step.label}</h3>
                    <p className="mt-2 text-xs leading-5 text-white/40">{step.sub}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="bg-[#050816] px-4 py-16 md:px-8 md:py-24">
        <div className="section-shell grid gap-10 rounded-[2rem] border border-white/8 bg-white/[0.03] p-7 shadow-xl md:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center backdrop-blur">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-fit rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Our Expertise
            </div>
            <h2 className="mt-3 text-4xl font-bold tracking-normal text-white md:text-5xl">
                Modern tech stack. Human delivery.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/50">
                We use React, Next.js, Node.js, Flutter, AWS, and AI/ML tools — chosen to keep your product fast, maintainable, and ready to scale.
              </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.4)", color: "#60a5fa" }}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-bold text-white/70 transition cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
