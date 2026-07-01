"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sprout, Zap, Rocket, Check, ShieldCheck, Clock, HeadphonesIcon, BadgeCheck } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      badge: "Limited Offer",
      name: "Starter",
      desc: "Perfect for small businesses getting online",
      price: "₹2,999",
      period: " /project",
      features: ["5-page responsive website", "Mobile optimized design", "Basic SEO setup", "Contact form integration", "1 month free support", "Fast delivery in 7 days"],
      featured: false,
      btnText: "Get Started",
      icon: Sprout,
      accent: "from-blue-500/20 to-cyan-500/10",
      badgeClass: "bg-white/8 text-white/60",
    },
    {
      badge: "Most Popular",
      featured: true,
      name: "Growth",
      desc: "For growing businesses needing real impact",
      price: "₹7,999",
      period: " /project",
      features: ["10-page custom website", "CMS or admin panel", "Advanced SEO and analytics", "Payment gateway integration", "Social media integration", "3 months free support", "Priority delivery in 5 days"],
      btnText: "Choose Growth",
      icon: Zap,
      accent: "from-blue-600/30 to-purple-600/20",
      badgeClass: "bg-yellow-400/15 text-yellow-300",
    },
    {
      badge: "Full Power",
      name: "Enterprise",
      desc: "End-to-end solutions for larger needs",
      price: "Custom",
      period: "",
      features: ["Custom web or mobile app", "AI and automation features", "Dedicated project manager", "Cloud infrastructure setup", "API development and integration", "12 months priority support", "SLA-backed delivery"],
      featured: false,
      btnText: "Request Quote",
      icon: Rocket,
      accent: "from-purple-500/20 to-pink-500/10",
      badgeClass: "bg-white/8 text-white/60",
    },
  ];

  const guarantees = [
    { icon: BadgeCheck, label: "No hidden fees" },
    { icon: ShieldCheck, label: "Transparent contracts" },
    { icon: HeadphonesIcon, label: "24/7 support" },
    { icon: Clock, label: "On-time delivery" },
  ];

  return (
    <section className="relative bg-[#050816] px-4 pt-24 pb-24 md:px-8 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-14"
        >
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-3">Simple Pricing</div>
          <h2 className="text-4xl font-bold tracking-normal text-white md:text-6xl">
            Pick the launch lane that fits.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/50">
            Clear packages for websites and custom quotes for products that need deeper planning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: plan.featured ? -10 : -6 }}
                className={`relative rounded-3xl border p-7 transition-all ${
                  plan.featured
                    ? "border-blue-500/40 bg-gradient-to-br from-blue-900/40 to-purple-900/30 shadow-2xl shadow-blue-950/60 md:-mt-4"
                    : "border-white/8 bg-white/[0.04] hover:border-white/15"
                }`}
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.accent} pointer-events-none`} />
                {plan.featured && (
                  <div className="absolute inset-x-0 top-0 h-px rounded-t-3xl bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                )}

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${plan.badgeClass}`}>
                      {plan.badge}
                    </div>
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${plan.featured ? "bg-blue-500/20" : "bg-white/8"}`}>
                      <Icon size={18} className={plan.featured ? "text-blue-300" : "text-white/60"} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">{plan.desc}</p>

                  <div className="mt-8">
                    <span className="text-4xl font-bold tracking-normal text-white md:text-5xl">{plan.price}</span>
                    <span className="text-white/40">{plan.period}</span>
                  </div>

                  <ul className="mt-8 flex list-none flex-col gap-3 p-0">
                    {plan.features.map((feature, fi) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + fi * 0.05 }}
                        className="flex gap-3 text-sm leading-5 text-white/65"
                      >
                        <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.featured ? "text-blue-400" : "text-emerald-400"}`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`mt-9 w-full rounded-full px-5 py-3 text-sm font-bold text-center transition-all cursor-pointer ${
                        plan.featured
                          ? "bg-blue-600 text-white hover:bg-blue-500"
                          : "bg-white/8 text-white border border-white/12 hover:bg-white/15"
                      }`}
                    >
                      {plan.btnText}
                    </motion.div>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl border border-white/8 bg-white/[0.03] p-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            {guarantees.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-white/50">
                <Icon size={15} className="text-emerald-400" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
