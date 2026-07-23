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

const stats = [
  { value: 50,   suffix: "+",  label: "Projects Completed",  icon: "🚀" },
  { value: 40,   suffix: "+",  label: "Happy Clients",        icon: "😊" },
  { value: 3,    suffix: "+",  label: "Years Experience",     icon: "📅" },
  { value: 5,    suffix: "+",  label: "Countries Served",     icon: "🌍" },
  { value: 24,   suffix: "/7", label: "Support Hours",        icon: "🛠️" },
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
              <div className="text-3xl mb-2">{s.icon}</div>
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
