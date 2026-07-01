"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, CheckCircle, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), // includes name, email, phone, service, message
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const contactLinks = [
    { icon: Phone, label: "Call or WhatsApp", value: "+91 9844538521",   href: "tel:+919844538521" },
    { icon: Mail,  label: "Email Us",         value: "cpnexs@gmail.com", href: "mailto:cpnexs@gmail.com" },
    { icon: Globe, label: "Visit Website",    value: "www.cpnexs.in",   href: "https://www.cpnexs.in" },
  ];

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
          <h2 className="mt-3 text-4xl font-bold tracking-normal text-white md:text-5xl lg:text-6xl">
            Hire a software developer in Hubli or Bangalore.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/50">
            Share your project idea, deadline, or problem. We reply within 24 hours with practical next steps — no jargon, no pressure.
          </p>

          <div className="mt-10 grid gap-4">
            {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("https") ? "_blank" : undefined}
                rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 6, boxShadow: "0 12px 40px rgba(59,130,246,0.15)" }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white no-underline transition-all hover:border-blue-500/30 backdrop-blur"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 flex-shrink-0">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">{label}</span>
                  <strong className="mt-1 block text-lg text-white">{value}</strong>
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
            <strong className="block text-xl text-white">Chetan Prakash Kamble</strong>
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
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <div className="flex justify-center">
                <CheckCircle size={56} className="text-emerald-400" />
              </div>
              <h3 className="mt-4 text-3xl font-bold text-white">Message sent.</h3>
              <p className="mt-3 text-sm text-white/45">We've sent a confirmation to your email. We'll get back to you shortly.</p>
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
                <select name="service" value={form.service} onChange={handleChange} className="form-input-dark" aria-label="Select a service">
                  <option value="">Select a service</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>ERP / CRM System</option>
                  <option>AI Automation</option>
                  <option>SaaS Development</option>
                  <option>UI/UX Design</option>
                  <option>Cloud Solutions</option>
                  <option>Custom Software</option>
                </select>
              </Field>
              <Field label="Your Message">
                <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Tell us about your project..." className="form-input-dark h-32 resize-none" />
              </Field>
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(59,130,246,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="mt-3 w-full rounded-full bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-blue-500 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : <>{"Send Message"} <Send size={15} /></>}
              </motion.button>
              {status === "error" && (
                <p className="mt-3 text-center text-sm text-red-400">Something went wrong. Please try again.</p>
              )}
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
