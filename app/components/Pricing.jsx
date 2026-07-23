"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SproutIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"/><path d="M10 20c0-4.3 1.4-7 4-10 1.2-1.4 2.8-2.4 4.5-3-1.6 4-3.5 7.5-6.5 10.5"/><path d="M14 20c0-3.3-1-5.5-3-8-1.5-1.9-3.6-3.2-6-4 1.5 3.5 3 6.5 5 9.5"/></svg>);
const ZapIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>);
const RocketIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.55 1.55-2.5C7.26 16.5 6 15.24 4.5 16.5z"/><path d="M12 15l-3-3M8.5 8.5 12 5l7 7-3.5 3.5"/><path d="M12 5l4-2 3 3-2 4M5 12l-2 4 3 3 4-2"/></svg>);
const StarIcon = () => (<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);

const CheckIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>);
const LockIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>);
const PhoneIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#006BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.59 1.24h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg>);
const FastIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>);
const ShieldIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);

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
    icon: <SproutIcon />,
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
    icon: <ZapIcon />,
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
    icon: <RocketIcon />,
  },
];

const trustItems = [
  { text: "No hidden fees", icon: <CheckIcon /> },
  { text: "Transparent contracts", icon: <LockIcon /> },
  { text: "24/7 support", icon: <PhoneIcon /> },
  { text: "On-time delivery", icon: <FastIcon /> },
  { text: "Money-back guarantee", icon: <ShieldIcon /> },
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
            <span className="text-sm font-semibold text-[#006BFF] tracking-wide" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>Transparent Pricing</span>
          </div>
          <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
            Simple, Honest
            <br />
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-[#475569]" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
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
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-white px-4 py-1 text-xs font-bold text-[#006BFF] shadow-md" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
                  <StarIcon /> Most Popular
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                  plan.featured ? "bg-white/20 text-white" : "bg-[#EAF4FF] text-[#006BFF]"
                }`} style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
                  {plan.badge}
                </span>
                <span className={`p-2 rounded-xl ${plan.featured ? "bg-white/10 text-white" : "bg-[#EAF4FF] text-[#006BFF]"}`}>{plan.icon}</span>
              </div>

              <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? "text-white" : "text-[#0F172A]"}`} style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>{plan.name}</h3>
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
            {trustItems.map(item => (
              <span key={item.text} className="font-medium flex items-center gap-2">
                {item.icon}
                {item.text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
