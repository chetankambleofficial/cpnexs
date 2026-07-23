"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const PhoneIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.59 1.24h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg>);
const MailIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>);
const MapPinIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>);
const ClockIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
const PartyIcon = () => (<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#006BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24 7.17a5 5 0 0 1-3.07 3.07L9.52 14.5"/><path d="m11 13 4 4"/></svg>);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {}
    setLoading(false);
    setSent(true);
    setTimeout(() => setSent(false), 6000);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const info = [
    { icon: <PhoneIcon />, label: "Call / WhatsApp", value: "+91 9844538521", href: "tel:+919844538521" },
    { icon: <MailIcon />, label: "Email", value: "cpnexs@gmail.com", href: "mailto:cpnexs@gmail.com" },
    { icon: <MapPinIcon />, label: "Location", value: "Hubli, Karnataka, India", href: "#" },
    { icon: <ClockIcon />, label: "Business Hours", value: "Mon–Sat, 9 AM – 7 PM IST", href: "#" },
  ];

  return (
    <section className="bg-[#F7FAFC] py-24" id="contact">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#006BFF]/20 bg-[#EAF4FF] px-4 py-2 mb-5">
            <span className="text-sm font-semibold text-[#006BFF] tracking-wide" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>Get In Touch</span>
          </div>
          <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
            Let's Build Something
            <br />
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-[#475569]" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
            Share your idea. We'll reply within 24 hours with a clear plan and next steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div className="space-y-4 mb-8">
              {info.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 bg-white rounded-2xl border border-[#E2E8F0] p-5 no-underline hover:border-[#006BFF]/30 transition-all group"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                >
                  <div className="h-11 w-11 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-[#006BFF] flex-shrink-0 group-hover:bg-[#006BFF] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#94A3B8] mb-0.5" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>{item.label}</p>
                    <p className="text-sm font-semibold text-[#0F172A]" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Founder card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6"
              style={{ boxShadow: "0 4px 20px rgba(0,107,255,0.06)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#006BFF] to-[#0052D9] flex items-center justify-center text-lg font-bold text-white flex-shrink-0" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>C</div>
                <div>
                  <p className="font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>Chetan Prakash Kamble</p>
                  <p className="text-xs text-[#475569]" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>CEO & Lead Developer, CPNexs</p>
                </div>
              </div>
              <p className="text-sm leading-6 text-[#475569] italic" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
                "Passionate about building digital solutions that make a real difference. Let's connect and bring your vision to life."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs text-emerald-600 font-semibold" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>Currently accepting new projects</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl border border-[#E2E8F0] p-7 md:p-9"
            style={{ boxShadow: "0 8px 40px rgba(0,107,255,0.08)" }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center"
              >
                <div className="flex justify-center mb-5"><PartyIcon /></div>
                <h3 className="text-3xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>Message Sent!</h3>
                <p className="text-[#475569]" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-7" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>Send Us a Message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <Field label="Your Name">
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Rajesh Sharma" className="form-input" />
                  </Field>
                  <Field label="Email Address">
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className="form-input" />
                  </Field>
                </div>
                <div className="mb-5">
                  <Field label="Phone / WhatsApp">
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="form-input" />
                  </Field>
                </div>
                <div className="mb-5">
                  <Field label="Service Needed">
                    <select name="service" value={form.service} onChange={handleChange} className="form-input">
                      <option value="">Select a service</option>
                      <option>Website Development</option>
                      <option>Mobile App Development</option>
                      <option>AI Solutions</option>
                      <option>ERP Development</option>
                      <option>CRM Development</option>
                      <option>Custom Software</option>
                      <option>Cloud Solutions</option>
                      <option>Business Automation</option>
                      <option>UI/UX Design</option>
                    </select>
                  </Field>
                </div>
                <div className="mb-7">
                  <Field label="Your Message">
                    <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Tell us about your project, timeline, and budget..." className="form-input h-32 resize-none" />
                  </Field>
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02, boxShadow: "0 8px 30px rgba(0,107,255,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-xl bg-gradient-to-r from-[#006BFF] to-[#0052D9] py-4 text-sm font-semibold text-white cursor-pointer disabled:opacity-60 transition-all border-0"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : "Send Message →"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#94A3B8] mb-2" style={{ fontFamily: "var(--font-inter)" }}>{label}</span>
      {children}
    </label>
  );
}
