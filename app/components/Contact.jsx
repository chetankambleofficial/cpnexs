"use client";
import { useState } from "react";

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
    <section className="bg-paper px-4 py-20 md:px-8 md:py-28" id="contact">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-reef">Let's Talk</div>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-normal text-ink md:text-6xl">Ready to make the site people remember?</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink/60">
            Share the idea, the deadline, or the problem. We will reply within 24 hours with practical next steps.
          </p>

          <div className="mt-10 grid gap-4">
            {[
              ["Call or WhatsApp", "+91 9844538521", "tel:+919844538521"],
              ["Email Us", "cpk9844@gmail.com", "mailto:cpk9844@gmail.com"],
              ["Visit Website", "www.cpnexs.com", "https://www.cpnexs.com"],
            ].map(([label, value, href]) => (
              <a
                href={href}
                target={href.startsWith("https") ? "_blank" : undefined}
                rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
                className="rounded-2xl border border-ink/10 bg-cream p-5 text-ink no-underline shadow-sm transition-all hover:-translate-y-1 hover:border-reef/40 hover:shadow-xl hover:shadow-ink/8"
                key={label}
              >
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/42">{label}</span>
                <strong className="mt-2 block font-heading text-xl">{value}</strong>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-ink p-7 text-white">
            <strong className="block font-heading text-xl">Chetan Prakash Kamble</strong>
            <span className="mt-1 block text-sm font-medium text-white/50">CEO and Lead Developer, CPNexs</span>
            <p className="mt-5 text-sm leading-6 text-white/68">
              "Passionate about building digital solutions that make a real difference. Let's connect and bring your vision to life."
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-ink/10 bg-cream p-6 shadow-2xl shadow-ink/8 md:p-9">
          {sent ? (
            <div className="py-12 text-center">
              <h3 className="font-heading text-3xl font-bold text-ink">Message sent.</h3>
              <p className="mt-3 text-sm text-ink/58">Thank you. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="m-0 p-0">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Your Name">
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Chetan Kamble" className="form-input" />
                </Field>
                <Field label="Email">
                  <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className="form-input" />
                </Field>
              </div>
              <Field label="Phone / WhatsApp">
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="form-input" />
              </Field>
              <Field label="Service Needed">
                <select name="service" value={form.service} onChange={handleChange} className="form-input">
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
                <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Tell us about your project..." className="form-input h-32 resize-none" />
              </Field>
              <button type="submit" className="mt-3 w-full rounded-full bg-coral px-6 py-4 text-sm font-bold text-white shadow-lg shadow-coral/20 transition-all hover:-translate-y-1 hover:bg-ink cursor-pointer">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="mb-5 block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-ink/58">{label}</span>
      {children}
    </label>
  );
}
