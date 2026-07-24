"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

/* ─── CountUp helper ───────────────────────────────────────── */
function CountUp({ to, suffix = "", prefix = "", duration = 2.2 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return c.stop;
  }, [inView, to, duration]);
  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

const stats = [
  { value: 50,  suffix: "+",  label: "Projects Delivered" },
  { value: 98,  suffix: "%",  label: "Client Satisfaction" },
  { value: 3,   suffix: "+",  label: "Years Experience" },
  { value: 24,  suffix: "/7", label: "Support" },
];

const services = [
  { label: "Custom Software Development" },
  { label: "AI Solutions" },
  { label: "Mobile Apps" },
  { label: "ERP & CRM Systems" },
  { label: "Cloud Solutions" },
];

const AIIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2v1a7 7 0 0 1 0 14v1a2 2 0 0 1-4 0v-1a7 7 0 0 1 0-14V4a2 2 0 0 1 2-2z"/><circle cx="12" cy="12" r="3"/><path d="M6.3 6.3 4.9 4.9M17.7 6.3l1.4-1.4M6.3 17.7l-1.4 1.4M17.7 17.7l1.4 1.4"/></svg>);
const ChartIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>);
const GlobeIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12 15.3 15.3 0 0 1 12 2z"/></svg>);
const GearIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>);
const CloudIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>);

const floatingBadges = [
  { icon: <AIIcon />, title: "AI Assistant", sub: "Smart Automation", dot: "#7C3AED" },
  { icon: <ChartIcon />, title: "Analytics Dashboard", sub: "Real-time Insights", dot: "#059669" },
  { icon: <GlobeIcon />, title: "Website Design", sub: "Premium UI/UX", dot: "#0284C7" },
  { icon: <GearIcon />, title: "Business Automation", sub: "Workflow Optimized", dot: "#D97706" },
  { icon: <CloudIcon />, title: "Cloud Integration", sub: "Scalable & Secure", dot: "#4F46E5" },
];

const clients = [
  { initial: "S" },
  { initial: "M" },
  { initial: "H" },
  { initial: "E" },
];

const fadeUp   = (delay = 0) => ({ hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } } });
const fadeLeft = (delay = 0) => ({ hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0, transition: { duration: 0.8,  delay, ease: [0.22, 1, 0.36, 1] } } });
const scaleIn  = (delay = 0) => ({ hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] } } });

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white" style={{ paddingTop: "80px" }}>
      <HeroBackground />
      <div className="relative z-10 w-full section-shell py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          <LeftContent />
          <div className="hidden lg:flex lg:items-start lg:justify-center lg:pt-4">
            <RightVisual />
          </div>
        </div>
        <div className="lg:hidden mt-14">
          <MobileVisual />
        </div>
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[900px] h-[900px] rounded-full opacity-60" style={{ background: "radial-gradient(circle at 60% 30%, rgba(0,107,255,0.09) 0%, rgba(0,82,217,0.04) 45%, transparent 70%)" }} />
      <div className="absolute -bottom-32 -left-32 w-[700px] h-[700px] rounded-full opacity-50" style={{ background: "radial-gradient(circle at 40% 70%, rgba(11,44,133,0.07) 0%, transparent 65%)" }} />
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle, #006BFF 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #006BFF, #0052D9, transparent)" }} />
      <div className="absolute top-[20%] left-[8%] w-72 h-72 rounded-full border border-[#006BFF]/5" />
      <div className="absolute top-[15%] left-[6%] w-48 h-48 rounded-full border border-[#006BFF]/8" />
      <div className="absolute bottom-[10%] right-[5%] w-56 h-56 rounded-full border border-[#0052D9]/6" />
      <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[30%] right-[10%] w-6 h-6 rounded-full" style={{ background: "radial-gradient(circle, #006BFF 0%, transparent 70%)" }} />
      <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute bottom-[25%] left-[15%] w-4 h-4 rounded-full" style={{ background: "radial-gradient(circle, #0052D9 0%, transparent 70%)" }} />
    </div>
  );
}

function LeftContent() {
  return (
    <motion.div initial="hidden" animate="show" className="flex flex-col">
      <motion.div variants={fadeUp(0.05)} className="mb-7">
        <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold tracking-wide" style={{ background: "linear-gradient(135deg, #EAF4FF 0%, #F0F7FF 100%)", border: "1px solid rgba(0,107,255,0.2)", color: "#0052D9", fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#006BFF] opacity-60" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-[#006BFF]" />
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
          Trusted Software Development Company
        </span>
      </motion.div>

      <motion.h1 variants={fadeUp(0.15)} className="font-bold leading-[1.08] text-[#0F172A]" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif", fontWeight: 700, fontSize: "clamp(2.4rem, 4.8vw, 3.75rem)", letterSpacing: "0em" }}>
        Custom Software,{" "}
        <span style={{ background: "linear-gradient(135deg, #006BFF 0%, #0052D9 50%, #0B2C85 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          AI & Web Solutions
        </span>
        <br />
        for Modern Businesses
      </motion.h1>

      <motion.p variants={fadeUp(0.28)} className="mt-6 max-w-lg text-lg leading-[1.8] text-[#475569]" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
        CPNexs helps <strong className="text-[#0F172A] font-semibold">startups, SMEs, schools, hospitals, manufacturers,</strong> and enterprises build websites, mobile apps, AI solutions, ERP systems, CRM software, and custom business applications that improve productivity and accelerate growth.
      </motion.p>

      <motion.div variants={fadeUp(0.4)} className="mt-9 flex flex-wrap gap-4">
        <Link href="/contact">
          <motion.div whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(0,107,255,0.45), 0 4px 12px rgba(0,82,217,0.3)" }} whileTap={{ scale: 0.97 }} className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white font-semibold text-base cursor-pointer overflow-hidden select-none" style={{ background: "linear-gradient(135deg, #006BFF 0%, #0052D9 60%, #0B2C85 100%)", fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif", boxShadow: "0 6px 24px rgba(0,107,255,0.3)" }}>
            <span className="relative">Get Free Consultation</span>
            <motion.span className="relative text-lg" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>→</motion.span>
          </motion.div>
        </Link>
        <Link href="/portfolio">
          <motion.div whileHover={{ scale: 1.04, backgroundColor: "#EAF4FF" }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base cursor-pointer transition-colors select-none" style={{ border: "1.5px solid #006BFF", color: "#006BFF", fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif", backgroundColor: "#fff" }}>
            View Portfolio
            <span className="text-base">↗</span>
          </motion.div>
        </Link>
      </motion.div>

      <motion.div variants={fadeUp(0.52)} className="mt-9">
        <div className="flex flex-wrap gap-x-6 gap-y-2.5">
          {services.map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full flex-shrink-0" style={{ background: "linear-gradient(135deg, #006BFF, #0052D9)" }}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <span className="text-sm font-medium text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeUp(0.62)} className="mt-10 flex items-center gap-5 pt-8 border-t border-[#E2E8F0]">
        <div className="flex -space-x-3">
          {clients.map((c, i) => (
            <div key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white flex-shrink-0" style={{ background: ["linear-gradient(135deg,#006BFF,#0052D9)", "linear-gradient(135deg,#0052D9,#0B2C85)", "linear-gradient(135deg,#059669,#047857)", "linear-gradient(135deg,#7C3AED,#5B21B6)"][i], zIndex: 4 - i }}>
              {c.initial}
            </div>
          ))}
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white flex-shrink-0" style={{ background: "#F1F5F9", color: "#64748B", zIndex: 0 }}>50+</div>
        </div>
        <div>
          <div className="flex gap-0.5 mb-0.5">
            {[...Array(5)].map((_, i) => (<span key={i} className="text-amber-400 text-sm leading-none">★</span>))}
          </div>
          <p className="text-sm text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>
            <span className="font-semibold text-[#0F172A]">Trusted by 50+ businesses</span> across India
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeUp(0.7)} className="mt-8 grid grid-cols-4 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-sora)", color: "#006BFF" }}>
              <CountUp to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-0.5 text-[10px] text-[#94A3B8] leading-tight" style={{ fontFamily: "var(--font-inter)" }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function RightVisual() {
  return (
    <motion.div initial="hidden" animate="show" variants={fadeLeft(0.25)} className="relative flex items-start justify-center" style={{ minHeight: "500px", paddingTop: "10px" }}>
      <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(ellipse at center, rgba(0,107,255,0.08) 0%, transparent 70%)", filter: "blur(20px)" }} />

      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="relative z-10" style={{ width: "380px" }}>
        <LaptopMockup />
      </motion.div>

      <motion.div variants={scaleIn(0.6)} animate={{ y: [0, 8, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-0 -left-14 z-20" style={{ width: "170px" }}>
        <TabletMockup />
      </motion.div>

      <motion.div variants={scaleIn(0.75)} animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-8 -right-6 z-20" style={{ width: "100px" }}>
        <PhoneMockup />
      </motion.div>

      <FloatingBadge badge={floatingBadges[0]} position={{ top: "-16px", left: "-10px" }} delay={0.9} floatDir="up" />
      <FloatingBadge badge={floatingBadges[1]} position={{ top: "60px", right: "-28px" }} delay={1.1} floatDir="down" />
      <FloatingBadge badge={floatingBadges[2]} position={{ top: "200px", right: "-36px" }} delay={1.3} floatDir="up" compact />
      <FloatingBadge badge={floatingBadges[3]} position={{ bottom: "100px", left: "-26px" }} delay={1.5} floatDir="down" compact />

      <svg className="absolute top-0 right-0 opacity-[0.06] pointer-events-none" width="200" height="200" viewBox="0 0 200 200" fill="none">
        <path d="M160 20 L160 80 L120 80 L120 120 L160 120 L160 180" stroke="#006BFF" strokeWidth="1.5" />
        <path d="M140 40 L100 40 L100 100 L140 100" stroke="#006BFF" strokeWidth="1.5" />
        <circle cx="160" cy="20" r="4" fill="#006BFF" />
        <circle cx="160" cy="180" r="4" fill="#006BFF" />
        <circle cx="120" cy="80" r="3" fill="#0052D9" />
        <circle cx="140" cy="40" r="3" fill="#0052D9" />
        <circle cx="100" cy="100" r="3" fill="#0052D9" />
        <path d="M180 60 L180 140" stroke="#006BFF" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </motion.div>
  );
}

function FloatingBadge({ badge, position, delay, floatDir = "up", compact = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1, y: floatDir === "up" ? [0, -7, 0] : [0, 7, 0] }}
      transition={{ opacity: { delay, duration: 0.55 }, scale: { delay, duration: 0.55 }, y: { duration: floatDir === "up" ? 5 : 6, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 } }}
      className="absolute z-30"
      style={position}
    >
      <div className="flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(226,232,240,0.8)", boxShadow: "0 8px 32px rgba(0,107,255,0.12), 0 2px 8px rgba(0,0,0,0.06)" }}>
        <div className={`flex items-center justify-center rounded-xl flex-shrink-0 ${compact ? "w-7 h-7 text-sm" : "w-8 h-8 text-base"}`} style={{ background: `${badge.dot}22`, border: `1px solid ${badge.dot}44` }}>
          {badge.icon}
        </div>
        {!compact && (
          <div>
            <div className="text-[11px] font-semibold text-[#0F172A] leading-tight" style={{ fontFamily: "var(--font-inter)" }}>{badge.title}</div>
            <div className="text-[9px] text-[#94A3B8] leading-tight mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>{badge.sub}</div>
          </div>
        )}
        {compact && (
          <div className="text-[10px] font-semibold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>{badge.title}</div>
        )}
        <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0" style={{ background: badge.dot }} />
      </div>
    </motion.div>
  );
}

function LaptopMockup() {
  return (
    <div className="w-full">
      <div className="w-full rounded-t-2xl overflow-hidden border-4" style={{ background: "#0F172A", borderColor: "#1E293B", boxShadow: "0 32px 80px rgba(0,107,255,0.18), 0 8px 32px rgba(0,0,0,0.2)", aspectRatio: "16/10" }}>
        <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ background: "#1E293B", borderColor: "#334155" }}>
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          <div className="flex-1 mx-3 rounded-md flex items-center gap-1.5 px-2 py-1" style={{ background: "#0F172A", border: "1px solid #334155" }}>
            <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="#4ade80"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
            <span className="text-[8px] text-[#64748B] font-mono">cpnexs.in</span>
          </div>
        </div>
        <div style={{ width: "100%", height: "calc(100% - 36px)", overflow: "hidden", position: "relative" }}>
          <iframe
            src="/htmls/ecommerce.html"
            title="E-Commerce Preview"
            style={{ width: "200%", height: "200%", border: "none", transform: "scale(0.5)", transformOrigin: "top left", pointerEvents: "none" }}
          />
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-4 rounded-b-sm" style={{ background: "linear-gradient(180deg,#1E293B 0%,#334155 100%)" }} />
        <div className="w-[110%] h-2 rounded-b-xl mx-auto -mt-px" style={{ background: "#475569", transform: "translateX(-4.5%)" }} />
      </div>
    </div>
  );
}

function TabletMockup() {
  return (
    <div className="w-full rounded-2xl border-4 overflow-hidden" style={{ borderColor: "#1E293B", background: "#0F172A", aspectRatio: "3/4", boxShadow: "0 16px 48px rgba(0,0,0,0.25)" }}>
      <div className="px-2.5 py-2 border-b" style={{ background: "#1E293B", borderColor: "#334155" }}>
        <div className="text-[8px] font-bold text-white" style={{ fontFamily: "var(--font-space)" }}>ERP Dashboard</div>
      </div>
      <div className="p-2.5 space-y-2">
        {["Inventory", "Sales", "HR", "Finance"].map((item, i) => (
          <div key={item} className="flex items-center gap-2 rounded-lg p-1.5" style={{ background: i === 1 ? "rgba(0,107,255,0.2)" : "rgba(148,163,184,0.07)" }}>
            <div className="w-4 h-4 rounded flex-shrink-0" style={{ background: i === 1 ? "#006BFF" : `rgba(148,163,184,${0.2 + i * 0.05})` }} />
            <div className="flex-1">
              <div className="text-[7px] font-semibold" style={{ color: i === 1 ? "#38BDF8" : "#94A3B8", fontFamily: "var(--font-inter)" }}>{item}</div>
              <div className="mt-0.5 h-1 rounded-full" style={{ background: "rgba(148,163,184,0.1)" }}>
                <div className="h-full rounded-full" style={{ width: `${[70, 90, 55, 80][i]}%`, background: i === 1 ? "#006BFF" : "#475569" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="w-full rounded-3xl border-4 overflow-hidden" style={{ borderColor: "#1E293B", background: "#0F172A", aspectRatio: "9/19", boxShadow: "0 16px 40px rgba(0,0,0,0.3)" }}>
      <div className="px-2 pt-1.5 pb-1 flex justify-between items-center">
        <span className="text-[5px] text-white font-medium">9:41</span>
        <span className="text-[5px] text-white">●●●</span>
      </div>
      <div className="px-1.5 space-y-1.5">
        <div className="h-6 rounded-lg" style={{ background: "linear-gradient(135deg,#006BFF,#0052D9)" }} />
        <div className="grid grid-cols-2 gap-1">
          {["Orders", "Chat", "Track", "Pay"].map((l, i) => (
            <div key={l} className="h-6 rounded-lg flex items-center justify-center" style={{ background: `rgba(148,163,184,${0.1 + i * 0.03})` }}>
              <span className="text-[6px] font-medium text-[#94A3B8]">{l}</span>
            </div>
          ))}
        </div>
        {[...Array(3)].map((_, i) => (<div key={i} className="h-4 rounded-lg" style={{ background: `rgba(148,163,184,${0.08 + i * 0.02})` }} />))}
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto max-w-sm">
      <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#E2E8F0", boxShadow: "0 20px 60px rgba(0,107,255,0.12), 0 4px 16px rgba(0,0,0,0.06)" }}>
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b" style={{ background: "#F7FAFC", borderColor: "#E2E8F0" }}>
          <span className="w-3 h-3 rounded-full bg-red-400/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <span className="w-3 h-3 rounded-full bg-green-400/70" />
          <div className="flex-1 ml-3 rounded-md px-3 py-1 text-[10px] border flex items-center gap-1" style={{ background: "#fff", borderColor: "#E2E8F0", color: "#94A3B8", fontFamily: "var(--font-inter)" }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            cpnexs.in
          </div>
        </div>
        <div className="p-4 bg-white">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[{ label: "Revenue", val: "₹2.4L", color: "text-[#006BFF]", bg: "bg-[#EAF4FF]" }, { label: "Projects", val: "12", color: "text-emerald-600", bg: "bg-emerald-50" }, { label: "Clients", val: "50+", color: "text-violet-600", bg: "bg-violet-50" }].map((m) => (
              <div key={m.label} className={`rounded-xl p-3 ${m.bg}`}>
                <div className="text-[10px] text-[#94A3B8] mb-1" style={{ fontFamily: "var(--font-inter)" }}>{m.label}</div>
                <div className={`text-base font-bold ${m.color}`} style={{ fontFamily: "var(--font-sora)" }}>{m.val}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {floatingBadges.map((b) => (
              <div key={b.title} className="flex items-center gap-1.5 rounded-full px-3 py-1.5" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                <span className="text-sm">{b.icon}</span>
                <span className="text-[11px] font-medium text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>{b.title}</span>
           </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
