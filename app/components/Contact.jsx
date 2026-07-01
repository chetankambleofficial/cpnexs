"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="relative bg-[#050816] px-4 pt-24 pb-24 md:px-8 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-600/8 blur-[80px] pointer-events-none" />

      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start relative">

        {/* Left info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-blue-400">Let's Talk</div>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-normal text-white md:text-5xl lg:text-6xl">
            Ready to make the site people remember?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/50">
            Share the idea, the deadline, or the problem. We will reply within 24 hours with practical next steps.
          </p>

          <div className="mt-10 grid gap-4">
            {[
              ["📞", "Call or WhatsApp", "+91 9844538521", "tel:+919844538521"],
              ["✉️", "Email Us", "cpk9844@gmail.com", "mailto:cpk9844@gmail.com"],
            ].map(([icon, label, value, href], i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 6, boxShadow: "0 12px 40px rgba(59,130,246,0.15)" }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white no-underline shadow-sm transition-all hover:border-blue-500/30 backdrop-blur"
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">{label}</span>
                  <strong className="mt-1 block font-heading text-lg text-white">{value}</strong>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
          >
            <strong className="block font-heading text-xl text-white">Chetan Prakash Kamble</strong>
            <span className="mt-1 block text-sm font-medium text-white/40">CEO and Lead Developer, CPNexs</span>
            <p className="mt-5 text-sm leading-6 text-white/55">
              "Passionate about building digital solutions that make a real difference. Let's connect and bring your vision to life."
            </p>
          </motion.div>
        </motion.div>

        {/* Right form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur md:p-9"
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <span className="text-5xl">🎉</span>
              <h3 className="mt-4 font-heading text-3xl font-bold text-white">Message sent.</h3>
              <p className="mt-3 text-sm text-white/45">Thank you. We will get back to you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="m-0 p-0">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Your Name">
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Chetan Kamble" className="form-input-dark" />
                </Field>
                <Field label="Email">
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className="form-input-dark" />
                </Field>
              </div>
              <Field label="Phone / WhatsApp">
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="form-input-dark" />
              </Field>
              <Field label="Service Needed">
                <select name="service" value={form.service} onChange={handleChange} className="form-input-dark">
                  <option value="">Select a service</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>AI Solutions</option>
                  <option>UI/UX Design</option>
                  <option>Digital Marketing</option>
                  <option>Cloud Solutions</option>
                </select>
              </Field>
              <Field label="Your Message">
                <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Tell us about your project..." className="form-input-dark h-32 resize-none" />
              </Field>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(59,130,246,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="mt-3 w-full rounded-full bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-blue-500 cursor-pointer"
              >
                Send Message →
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="mb-5 block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-white/40">{label}</span>
      {children}
    </label>
  );
}
