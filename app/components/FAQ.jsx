"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How much does it cost to build a website?",
    a: "Our websites start from ₹4,999 for a basic business website. The cost depends on the number of pages, features, and design complexity. We always give you a clear quote before starting any work — no hidden charges.",
  },
  {
    q: "How long does it take to build a website or app?",
    a: "A simple website takes 5–7 days. A mobile app or custom software typically takes 4–12 weeks depending on the features. We give you a clear timeline before we start and keep you updated throughout.",
  },
  {
    q: "Do I need technical knowledge to work with you?",
    a: "Not at all! We explain everything in simple language. You just need to tell us what your business needs, and we handle all the technical work. We are used to working with non-technical business owners.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Yes, absolutely. All our websites and apps are fully responsive and work perfectly on mobile phones, tablets, and computers. Mobile-first design is our standard approach.",
  },
  {
    q: "Do you provide support after the project is delivered?",
    a: "Yes! We provide 1–12 months of support depending on your plan. We are available 24/7 via WhatsApp, phone, and email to help with any issues or questions.",
  },
  {
    q: "Can you build software for my specific industry?",
    a: "Yes. We have built software for schools, hospitals, restaurants, manufacturing companies, retail stores, real estate agencies, and many more. We understand different business needs and build accordingly.",
  },
  {
    q: "Do you work with businesses outside Hubli and Bangalore?",
    a: "Yes! We work with clients across India and internationally. All communication and project management is done online, so location is never a barrier.",
  },
  {
    q: "What happens if I want to add features later?",
    a: "We build all our software to be scalable and easy to extend. You can always contact us to add new features, and we will give you a fair quote for the additional work.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#006BFF]/20 bg-[#EAF4FF] px-4 py-2 mb-5">
            <span className="text-sm font-semibold text-[#006BFF]" style={{ fontFamily: "var(--font-inter)" }}>Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl" style={{ fontFamily: "var(--font-space)" }}>
            Got Questions?
            <br />
            <span className="gradient-text">We Have Answers</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>
            Everything you need to know before starting your project with us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }}
              className={`rounded-2xl border transition-all ${open === i ? "border-[#006BFF] bg-[#EAF4FF]" : "border-[#E2E8F0] bg-white"}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer bg-transparent border-0"
              >
                <span className="text-base font-semibold text-[#0F172A] pr-4" style={{ fontFamily: "var(--font-space)" }}>{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#006BFF] text-xl font-light flex-shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-7 text-[#475569]" style={{ fontFamily: "var(--font-inter)" }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
