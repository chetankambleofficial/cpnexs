"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { icon: "🌐", title: "Website Development",      desc: "Professional websites that look great on all devices. From simple business sites to complex web applications — we build it all." },
  { icon: "📱", title: "Mobile App Development",   desc: "Android and iOS apps that your customers will love. Easy to use, fast, and built to grow with your business." },
  { icon: "🤖", title: "AI Solutions",             desc: "Smart automation, chatbots, and AI tools that save your team hours of work every day and help you make better decisions." },
  { icon: "⚙️", title: "Custom Software",          desc: "Software built exactly for your business needs — inventory, billing, HR, or any internal tool your team requires." },
  { icon: "📊", title: "ERP Development",          desc: "Manage your entire business from one place — purchases, sales, inventory, accounts, and reports all connected." },
  { icon: "👥", title: "CRM Development",          desc: "Track your customers, follow up on leads, and never miss a sales opportunity with a CRM built for your workflow." },
  { icon: "☁️", title: "Cloud Solutions",          desc: "Move your business to the cloud for better speed, security, and access from anywhere in the world." },
  { icon: "🔄", title: "Business Automation",      desc: "Automate repetitive tasks like invoicing, reminders, reports, and data entry so your team can focus on what matters." },
  { icon: "🎨", title: "UI/UX Design",             desc: "Beautiful, easy-to-use designs that make your customers feel confident and comfortable using your product." },
];

const industries = [
  { icon: "🏫", label: "Schools & Colleges" },
  { icon: "🏥", label: "Hospitals & Clinics" },
  { icon: "🏭", label: "Manufacturing" },
  { icon: "🛒", label: "Retail & E-Commerce" },
  { icon: "🏨", label: "Hotels & Hospitality" },
  { icon: "🍽️", label: "Restaurants" },
  { icon: "🏠", label: "Real Estate" },
  { icon: "💰", label: "Finance & Banking" },
  { icon: "🚚", label: "Logistics & Transport" },
  { icon: "🚀", label: "Startups" },
  { icon: "🏪", label: "Small Businesses" },
  { icon: "🏢", label: "Large Enterprises" },
];

const whyUs = [
  { icon: "👨‍💻", title: "Experienced Developers",  desc: "Our team has built 50+ projects across industries with modern technologies." },
  { icon: "💰", title: "Affordable Pricing",       desc: "Premium quality software at prices that make sense for Indian businesses." },
  { icon: "⏰", title: "On-Time Delivery",         desc: "We respect your deadlines. Every project is delivered as promised." },
  { icon: "📞", title: "Dedicated Support",        desc: "We are available 24/7 to help you with any questions or issues." },
  { icon: "🔧", title: "Modern Technologies",      desc: "We use the latest tools and frameworks to build fast, secure software." },
  { icon: "🎯", title: "Custom Solutions",         desc: "No templates. Every solution is built specifically for your business." },
  { icon: "🔒", title: "Secure Applications",      desc: "Your data and your customers' data is always protected and safe." },
  { icon: "📈", title: "Scalable Architecture",    desc: "Software that grows with your business — from 10 to 10,000 users." },
];

const process = [
  { n: "01", icon: "💬", title: "Consultation",  desc: "We understand your business, goals, and what you need from the software." },
  { n: "02", icon: "📋", title: "Planning",       desc: "We create a clear roadmap with timelines, features, and cost estimates." },
  { n: "03", icon: "🎨", title: "UI Design",      desc: "We design how the software will look and feel before writing any code." },
  { n: "04", icon: "💻", title: "Development",    desc: "Our developers build your software with clean, tested, and secure code." },
  { n: "05", icon: "✅", title: "Testing",        desc: "We thoroughly test everything to make sure it works perfectly." },
  { n: "06", icon: "🚀", title: "Deployment",     desc: "We launch your software and make it live for your users." },
  { n: "07", icon: "🛠️", title: "Support",        desc: "We stay with you after launch to fix issues and add new features." },
];

const techStack = ["React", "Next.js", "Node.js", "Python", "Java", "AWS", "Docker", "MongoDB", "MySQL", "PostgreSQL", "DynamoDB", "OpenAI", "TensorFlow", "Flutter", "React Native", "TypeScript"];

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#006BFF]/20 bg-[#EAF4FF] px-4 py-2 mb-5">
      <span className="text-sm font-semibold text-[#006BFF]" style={{ fontFamily: "var(--font-inter)" }}>{children}</span>
    </div>
  );
}

export default function Services() {
  return (
    <>
      {/* ── Services ── */}
      <section className="bg-[#F7FAFC] py-24">
        <div className="section-shell">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
              Everything Your Business
              <br />
              <span className="gradient-text">Needs to Grow</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>
              From idea to launch — we handle design, development, deployment, and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(0,107,255,0.1)" }}
                className="card bg-white p-6 cursor-pointer group"
              >
                <div className="h-12 w-12 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-2xl mb-5 group-hover:bg-[#006BFF] transition-colors duration-300">
                  <span className="group-hover:grayscale-0">{s.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2" style={{ fontFamily: "var(--font-space)" }}>{s.title}</h3>
                <p className="text-sm leading-6 text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>{s.desc}</p>
                <div className="mt-4 text-sm font-semibold text-[#006BFF] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "var(--font-inter)" }}>
                  Learn more <span>→</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(0,107,255,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#006BFF] to-[#0052D9] px-8 py-3.5 text-sm font-semibold text-white cursor-pointer"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Discuss Your Project →
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="bg-white py-24">
        <div className="section-shell">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <SectionLabel>Industries We Serve</SectionLabel>
            <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
              We Build Software for
              <br />
              <span className="gradient-text">Every Industry</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>
              No matter what business you run, we have the experience to build the right solution for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -4, borderColor: "#006BFF", backgroundColor: "#EAF4FF" }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F7FAFC] p-5 cursor-pointer transition-all"
              >
                <span className="text-3xl">{ind.icon}</span>
                <span className="text-xs font-semibold text-[#0F172A] text-center leading-tight" style={{ fontFamily: "var(--font-inter)" }}>{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose CPNexs ── */}
      <section className="bg-[#F7FAFC] py-24">
        <div className="section-shell">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <SectionLabel>Why Choose CPNexs</SectionLabel>
            <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
              Why Hundreds of Businesses
              <br />
              <span className="gradient-text">Trust Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w, i) => (
              <motion.div
                key={w.title}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="card bg-white p-6"
              >
                <div className="text-3xl mb-4">{w.icon}</div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2" style={{ fontFamily: "var(--font-space)" }}>{w.title}</h3>
                <p className="text-sm leading-6 text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-white py-24">
        <div className="section-shell">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
              From Idea to
              <span className="gradient-text"> Live Product</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>
              A simple, transparent process so you always know what's happening with your project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((step, i) => (
              <motion.div
                key={step.n}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="card bg-white p-6 relative"
              >
                <div className="absolute top-4 right-4 text-xs font-bold text-[#006BFF]/30 tracking-widest" style={{ fontFamily: "var(--font-sora)" }}>{step.n}</div>
                <div className="h-12 w-12 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-2xl mb-4">{step.icon}</div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2" style={{ fontFamily: "var(--font-space)" }}>{step.title}</h3>
                <p className="text-sm leading-6 text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack Marquee ── */}
      <section className="bg-[#F7FAFC] py-16 overflow-hidden border-y border-[#E2E8F0]">
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold text-[#94A3B8] uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-inter)" }}>Technologies We Use</span>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F7FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F7FAFC] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 animate-scroll-left w-max">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-2 bg-white border border-[#E2E8F0] rounded-xl px-5 py-2.5 whitespace-nowrap flex-shrink-0">
                <span className="text-sm font-semibold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
