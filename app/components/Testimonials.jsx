"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Patil",
    role: "Owner, Patil Traders",
    company: "Retail Business, Hubli",
    text: "CPNexs built our inventory and billing software in just 3 weeks. It has saved us 2 hours every day. The team was very patient and explained everything in simple language.",
    rating: 5,
    initials: "RP",
    color: "#006BFF",
  },
  {
    name: "Dr. Sunita Kulkarni",
    role: "Director",
    company: "Kulkarni Clinic, Dharwad",
    text: "Our hospital management system is excellent. Patient records, appointments, and billing are all in one place now. CPNexs understood our needs perfectly.",
    rating: 5,
    initials: "SK",
    color: "#059669",
  },
  {
    name: "Amit Sharma",
    role: "Founder",
    company: "TechStart India, Bangalore",
    text: "We needed a mobile app for our startup. CPNexs delivered a beautiful, fast app on time and within budget. Their support after launch has been outstanding.",
    rating: 5,
    initials: "AS",
    color: "#7C3AED",
  },
  {
    name: "Priya Nair",
    role: "Principal",
    company: "Nair International School, Mysore",
    text: "The school ERP they built for us is amazing. Parents love the mobile app for tracking attendance and fees. Our staff saves so much time on paperwork now.",
    rating: 5,
    initials: "PN",
    color: "#D97706",
  },
  {
    name: "Suresh Gowda",
    role: "MD",
    company: "Gowda Manufacturing, Belgaum",
    text: "Our production tracking and inventory system has reduced errors by 80%. CPNexs team understood our manufacturing process very well and built exactly what we needed.",
    rating: 5,
    initials: "SG",
    color: "#0891B2",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(i => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-[#F7FAFC] py-24 overflow-hidden">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#006BFF]/20 bg-[#EAF4FF] px-4 py-2 mb-5">
            <span className="text-sm font-semibold text-[#006BFF]" style={{ fontFamily: "var(--font-inter)" }}>Client Testimonials</span>
          </div>
          <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
            What Our Clients
            <br />
            <span className="gradient-text">Say About Us</span>
          </h2>
        </motion.div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-sm"
              style={{ boxShadow: "0 4px 30px rgba(0,107,255,0.06)" }}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-lg leading-8 text-[#0F172A] mb-6 italic" style={{ fontFamily: "var(--font-inter)" }}>
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: testimonials[current].color, fontFamily: "var(--font-space)" }}
                >
                  {testimonials[current].initials}
                </div>
                <div>
                  <p className="font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-space)" }}>{testimonials[current].name}</p>
                  <p className="text-sm text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>{testimonials[current].role} · {testimonials[current].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all cursor-pointer border-0 ${i === current ? "w-8 bg-[#006BFF]" : "w-2 bg-[#E2E8F0]"}`}
            />
          ))}
        </div>

        {/* All cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
              onClick={() => setCurrent(i)}
              className={`rounded-xl border p-4 cursor-pointer transition-all ${i === current ? "border-[#006BFF] bg-[#EAF4FF]" : "border-[#E2E8F0] bg-white hover:border-[#006BFF]/30"}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: t.color, fontFamily: "var(--font-space)" }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-space)" }}>{t.name}</p>
                  <p className="text-[10px] text-[#94A3B8]" style={{ fontFamily: "var(--font-inter)" }}>{t.company}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
