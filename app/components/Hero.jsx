"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { CheckCircle, IndianRupee, Smartphone, ShieldCheck, ShoppingBag, Phone, Star } from "lucide-react";

function CountUp({ to, suffix = "", duration = 2 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ── Avatars: colored initials as placeholder ──
const reviews = [
  { name: "Rahul S.", biz: "Rahul's Bakery", text: "Got our website in 4 days. Customers love it!", rating: 5, color: "#3B82F6", init: "R" },
  { name: "Priya M.", biz: "Priya Boutique",  text: "Very affordable and professional. Highly recommend!", rating: 5, color: "#A855F7", init: "P" },
  { name: "Amit K.", biz: "AK Consulting",   text: "Our leads doubled after the new site launched.", rating: 5, color: "#10B981", init: "A" },
];

function Stars({ n = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function HeroVisual() {
  const [reviewIdx, setReviewIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setReviewIdx((i) => (i + 1) % reviews.length), 3000);
    return () => clearInterval(t);
  }, []);
  const review = reviews[reviewIdx];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      className="relative w-full max-w-[500px] mx-0"
    >
      {/* Ambient glow — sits behind everything */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-blue-600/15 blur-[80px] pointer-events-none" />

      {/* ── ROW 1: top badges ── */}
      <div className="flex items-start justify-between gap-3 mb-4">

        {/* Delivery notification */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.55 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3 rounded-2xl border border-white/12 bg-[#0d1117]/95 backdrop-blur-md px-4 py-3 shadow-xl"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/15 border border-green-500/25 flex-shrink-0">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-bold text-white">Project Delivered!</p>
              <p className="text-[10px] text-white/40">Ready in 4 days</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.55 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="rounded-2xl border border-blue-400/25 bg-[#0d1117]/95 backdrop-blur-md px-4 py-3 shadow-xl"
          >
            <p className="text-[10px] text-white/40 font-medium mb-0.5">Starting at</p>
            <p className="text-lg font-bold text-white leading-none">₹9,999
              <span className="text-xs font-normal text-white/40 ml-1">/ site</span>
            </p>
            <p className="text-[9px] text-green-400 font-bold mt-1">✓ No hidden charges</p>
          </motion.div>
        </motion.div>

      </div>

      {/* ── ROW 2: central browser mockup ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl border border-white/15 bg-[#0d1117] shadow-2xl shadow-blue-950/50 overflow-hidden"
      >
        {/* Browser top bar */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/8 bg-[#161b22]">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <div className="ml-3 flex-1 rounded-md bg-white/5 border border-white/8 px-2.5 py-1 flex items-center gap-1.5">
            <svg className="w-2.5 h-2.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-[9px] text-white/35 font-mono">yourbusiness.com</span>
          </div>
        </div>
        {/* Page mockup body */}
        <div className="bg-gradient-to-b from-[#0d1117] to-[#0a0f1a] px-5 py-5">
          {/* Navbar */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-blue-500/70" />
              <div className="w-16 h-2 rounded-full bg-white/25" />
            </div>
            <div className="flex items-center gap-2">
              {[1,2,3].map(i => <div key={i} className="w-9 h-1.5 rounded-full bg-white/10" />)}
              <div className="w-14 h-6 rounded-lg bg-blue-500/55 border border-blue-400/30" />
            </div>
          </div>
          {/* Hero block */}
          <div className="rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/15 border border-white/8 p-5 mb-4">
            <div className="w-3/4 h-3.5 rounded-full bg-white/30 mb-2.5" />
            <div className="w-1/2 h-2 rounded-full bg-white/15 mb-4" />
            <div className="flex gap-2.5">
              <div className="w-20 h-7 rounded-lg bg-blue-500/65 border border-blue-400/30" />
              <div className="w-16 h-7 rounded-lg bg-white/8 border border-white/12" />
            </div>
          </div>
          {/* Feature cards */}
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {[
              { icon: ShoppingBag, label: "Shop" },
              { icon: Phone,       label: "Call" },
              { icon: Star,        label: "Reviews" },
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="rounded-xl bg-white/5 border border-white/8 p-3 flex flex-col items-center gap-1.5">
                <Icon size={14} className="text-white/50" />
                <div className="w-full h-1.5 rounded-full bg-white/15" />
                <div className="w-2/3 h-1 rounded-full bg-white/8" />
              </div>
            ))}
          </div>
          {/* Bottom strip */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 rounded-full bg-white/8" />
            <div className="w-10 h-1.5 rounded-full bg-white/8" />
          </div>
        </div>
        {/* Shimmer sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut", delay: 1.5 }}
          style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)" }}
        />
      </motion.div>

      {/* ── ROW 3: bottom badges ── */}
      <div className="flex items-end justify-between gap-3 mt-4">

        {/* Rotating review card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.55 }}
          className="flex-1 min-w-0"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            key={reviewIdx}
            className="rounded-2xl border border-white/12 bg-[#0d1117]/95 backdrop-blur-md px-4 py-3.5 shadow-xl"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <div
                className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ background: `${review.color}33`, border: `1px solid ${review.color}55` }}
              >
                {review.init}
              </div>
              <div>
                <p className="text-[11px] font-bold text-white leading-none">{review.name}</p>
                <p className="text-[9px] text-white/35 mt-0.5">{review.biz}</p>
              </div>
            </div>
            <Stars n={review.rating} />
            <p className="mt-1.5 text-[10px] leading-[1.5] text-white/60">&ldquo;{review.text}&rdquo;</p>
          </motion.div>
        </motion.div>

        {/* Happy clients badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.55 }}
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="rounded-2xl border border-white/12 bg-[#0d1117]/95 backdrop-blur-md px-4 py-3.5 shadow-xl"
          >
            <div className="flex -space-x-2 mb-2">
              {[
                { init: "R", color: "#3B82F6" },
                { init: "P", color: "#A855F7" },
                { init: "A", color: "#10B981" },
                { init: "S", color: "#F59E0B" },
              ].map((a, i) => (
                <div
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-[#0d1117] flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ background: `${a.color}55` }}
                >
                  {a.init}
                </div>
              ))}
            </div>
            <p className="text-[11px] font-bold text-white">50+ Happy Clients</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_4px_rgba(74,222,128,0.8)]" />
              <span className="text-[9px] text-green-400">Accepting projects</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default function Hero() {
  const words = ["Affordable.", "Beautiful.", "On Time."];
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { value: 50, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Happy Clients" },
    { value: 4,  suffix: " days", label: "Avg. Delivery" },
  ];

  return (
    <section className="relative bg-[#050816] px-6 pt-24 pb-20 md:px-12 min-h-screen flex items-center w-full overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-purple-600/15 blur-[110px] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col">
          

            {/* Headline */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-5xl font-bold leading-[1.1] text-white mt-10 md:text-6xl lg:text-[64px]"
            >
              Your Business
              <br />
              Deserves a{" "}
              <motion.span
                key={wordIdx}
                initial={{ opacity: 0, y: 16, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent"
              >
                {words[wordIdx]}
              </motion.span>
              <br />
              <span className="text-white/85">Website.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="mt-6 max-w-lg text-lg leading-8 text-slate-400"
            >
              We build professional websites for small businesses, shops, and startups —{" "}
              <span className="text-white font-medium">fast, affordable, and ready to attract customers</span>.
              No tech knowledge needed. Just share your idea.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="mt-6 flex flex-wrap gap-2"
            >
              {[
                { icon: CheckCircle, label: "Ready in 7–10 days" },
                { icon: IndianRupee, label: "Starting ₹9,999" },
                { icon: Smartphone,  label: "Mobile Friendly" },
                { icon: ShieldCheck, label: "Secure & Fast" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                  <Icon size={11} className="text-blue-400" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={4}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.04, boxShadow: "0 0 36px rgba(59,130,246,0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative overflow-hidden rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Your Website Now
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              </Link>
              <Link href="/portfolio">
                <motion.div
                  whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.08)" }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition cursor-pointer"
                >
                  See Our Work
                </motion.div>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={5}
              className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-3xl font-bold text-white">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </span>
                  <span className="mt-1 text-xs text-slate-500">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Visual ── */}
          <div className="flex items-center justify-center w-full">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
