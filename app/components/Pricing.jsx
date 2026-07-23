"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    badge: "For Small Businesses",
    price: "₹4,999",
    period: "/project",
    desc: "Get online fast with a professional website that converts visitors into customers.",
    features: ["5-page responsive website", "Mobile-first design", "Basic SEO setup", "Contact form", "1 month support", "Delivered in 7 days"],
    cta: "Get Started",
    featured: false,
    icon: "🌱",
  },
  {
    name: "Growth",
    badge: "Most Popular",
    price: "₹12,999",
    period: "/project",
    desc: "A complete digital presence with advanced features to drive real business growth.",
    features: ["10-page custom website", "CMS / Admin panel", "Advanced SEO & analytics", "Payment integration", "Social media setup", "3 months support", "Priority in 5 days"],
    cta: "Choose Growth",
    featured: true,
    icon: "⚡",
  },
  {
    name: "Enterprise",
    badge: "Full Power",
    price: "Custom",
    period: "",
    desc: "End-to-end custom software, AI solutions, and enterprise-grade platforms.",
    features: ["Custom web or mobile app", "AI & automation features", "Dedicated project manager", "Cloud infrastructure", "API development", "12 months support", "SLA-backed delivery"],
    cta: "Request Quote",
    featured: false,
    icon: "🚀",
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#F7FAFC] py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#006BFF]/20 bg-[#EAF4FF] px-4 py-2 mb-5">
            <span className="text-sm font-semibold text-[#006BFF]" style={{ fontFamily: "var(--font-inter)" }}>Transparent Pricing</span>
          </div>
          <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
            Simple, Honest
            <br />
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>
            No hidden fees. No surprises. Just great software at fair prices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.55 }}
              whileHover={{ y: plan.featured ? -10 : -5 }}
              className={`relative rounded-2xl p-7 transition-all ${
                plan.featured
                  ? "bg-gradient-to-br from-[#006BFF] to-[#0052D9] text-white shadow-2xl md:-mt-4"
                  : "bg-white border border-[#E2E8F0]"
              }`}
              style={plan.featured ? { boxShadow: "0 20px 60px rgba(0,107,255,0.3)" } : { boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-[#006BFF] shadow-md" style={{ fontFamily: "var(--font-inter)" }}>
                  ⭐ Most Popular
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                  plan.featured ? "bg-white/20 text-white" : "bg-[#EAF4FF] text-[#006BFF]"
                }`} style={{ fontFamily: "var(--font-inter)" }}>
                  {plan.badge}
                </span>
                <span className="text-2xl">{plan.icon}</span>
              </div>

              <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? "text-white" : "text-[#0F172A]"}`} style={{ fontFamily: "var(--font-space)" }}>{plan.name}</h3>
              <p className={`text-sm mb-6 leading-6 ${plan.featured ? "text-white/80" : "text-[#475569]"}`} style={{ fontFamily: "var(--font-inter)" }}>{plan.desc}</p>

              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-[#0F172A]"}`} style={{ fontFamily: "var(--font-sora)" }}>{plan.price}</span>
                {plan.period && <span className={`ml-1 text-sm ${plan.featured ? "text-white/60" : "text-[#94A3B8]"}`} style={{ fontFamily: "var(--font-inter)" }}>{plan.period}</span>}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className={`flex items-center gap-3 text-sm ${plan.featured ? "text-white/90" : "text-[#475569]"}`} style={{ fontFamily: "var(--font-inter)" }}>
                    <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${plan.featured ? "bg-white" : "bg-[#006BFF]"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full rounded-xl px-5 py-3 text-sm font-semibold text-center cursor-pointer transition-all ${
                    plan.featured
                      ? "bg-white text-[#006BFF] hover:bg-white/90"
                      : "bg-gradient-to-r from-[#006BFF] to-[#0052D9] text-white"
                  }`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {plan.cta}
                </motion.div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-10 bg-white rounded-2xl border border-[#E2E8F0] p-5"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>
            {["✅ No hidden fees", "🔒 Transparent contracts", "📞 24/7 support", "🚀 On-time delivery", "💰 Money-back guarantee"].map(item => (
              <span key={item} className="font-medium">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
