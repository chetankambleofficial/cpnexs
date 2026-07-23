"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function CountUp({ to, suffix = "", duration = 2.2 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration, ease: "easeOut", onUpdate: v => setVal(Math.round(v)) });
    return c.stop;
  }, [inView, to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const RocketIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.55 1.55-2.5C7.26 16.5 6 15.24 4.5 16.5z"/><path d="M12 15l-3-3M8.5 8.5 12 5l7 7-3.5 3.5"/><path d="M12 5l4-2 3 3-2 4M5 12l-2 4 3 3 4-2"/></svg>);
const SmileIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>);
const CalendarIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>);
const GlobeIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12 15.3 15.3 0 0 1 12 2z"/></svg>);
const ToolsIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>);

const stats = [
  { value: 50,   suffix: "+",  label: "Projects Completed",  icon: <RocketIcon /> },
  { value: 40,   suffix: "+",  label: "Happy Clients",        icon: <SmileIcon /> },
  { value: 3,    suffix: "+",  label: "Years Experience",     icon: <CalendarIcon /> },
  { value: 5,    suffix: "+",  label: "Countries Served",     icon: <GlobeIcon /> },
  { value: 24,   suffix: "/7", label: "Support Hours",        icon: <ToolsIcon /> },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-[#006BFF] to-[#0052D9] py-20">
      <div className="section-shell">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center text-3xl mb-2">{s.icon}</div>
              <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-sora)" }}>
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-white/70 font-medium" style={{ fontFamily: "var(--font-inter)" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
