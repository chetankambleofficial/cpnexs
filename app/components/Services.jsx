"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Icon components
const GlobeIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12 15.3 15.3 0 0 1 12 2z"/></svg>);
const PhoneIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>);
const AIIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2v1a7 7 0 0 1 0 14v1a2 2 0 0 1-4 0v-1a7 7 0 0 1 0-14V4a2 2 0 0 1 2-2z"/><circle cx="12" cy="12" r="3"/><path d="M6.3 6.3 4.9 4.9M17.7 6.3l1.4-1.4M6.3 17.7l-1.4 1.4M17.7 17.7l1.4 1.4"/></svg>);
const GearIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>);
const ChartIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>);
const UsersIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
const CloudIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>);
const SyncIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>);
const PaletteIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.75 1.7-1.67 0-.42-.16-.81-.43-1.11-.27-.3-.43-.7-.43-1.12 0-.92.75-1.67 1.67-1.67H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9z"/></svg>);

const SchoolIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>);
const HospitalIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M9 10h6M12 7v6"/></svg>);
const FactoryIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4H2z"/></svg>);
const CartIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>);
const HotelIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/><path d="M9 16h6M9 12h6M9 8h6"/></svg>);
const UtensilsIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2v20M2 2v20M6 2v6a4 4 0 0 0 4 4v10M14 2v6a4 4 0 0 0 4 4v10"/></svg>);
const HomeIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>);
const DollarIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>);
const TruckIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>);
const RocketIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.55 1.55-2.5C7.26 16.5 6 15.24 4.5 16.5z"/><path d="M12 15l-3-3M8.5 8.5 12 5l7 7-3.5 3.5"/><path d="M12 5l4-2 3 3-2 4M5 12l-2 4 3 3 4-2"/></svg>);
const StoreIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/></svg>);
const BuildingIcon = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/></svg>);

const CodeIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const ClockIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
const SupportIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.59 1.24h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg>);
const TargetIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>);
const LockIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>);
const TrendIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>);

const ChatIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>);
const FileTextIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>);
const CheckCircleIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>);

const services = [
  { icon: <GlobeIcon />, title: "Website Development",      desc: "Professional websites that look great on all devices. From simple business sites to complex web applications — we build it all." },
  { icon: <PhoneIcon />, title: "Mobile App Development",   desc: "Android and iOS apps that your customers will love. Easy to use, fast, and built to grow with your business." },
  { icon: <AIIcon />, title: "AI Solutions",             desc: "Smart automation, chatbots, and AI tools that save your team hours of work every day and help you make better decisions." },
  { icon: <GearIcon />, title: "Custom Software",          desc: "Software built exactly for your business needs — inventory, billing, HR, or any internal tool your team requires." },
  { icon: <ChartIcon />, title: "ERP Development",          desc: "Manage your entire business from one place — purchases, sales, inventory, accounts, and reports all connected." },
  { icon: <UsersIcon />, title: "CRM Development",          desc: "Track your customers, follow up on leads, and never miss a sales opportunity with a CRM built for your workflow." },
  { icon: <CloudIcon />, title: "Cloud Solutions",          desc: "Move your business to the cloud for better speed, security, and access from anywhere in the world." },
  { icon: <SyncIcon />, title: "Business Automation",      desc: "Automate repetitive tasks like invoicing, reminders, reports, and data entry so your team can focus on what matters." },
  { icon: <PaletteIcon />, title: "UI/UX Design",             desc: "Beautiful, easy-to-use designs that make your customers feel confident and comfortable using your product." },
];

const industries = [
  { icon: <SchoolIcon />, label: "Schools & Colleges" },
  { icon: <HospitalIcon />, label: "Hospitals & Clinics" },
  { icon: <FactoryIcon />, label: "Manufacturing" },
  { icon: <CartIcon />, label: "Retail & E-Commerce" },
  { icon: <HotelIcon />, label: "Hotels & Hospitality" },
  { icon: <UtensilsIcon />, label: "Restaurants" },
  { icon: <HomeIcon />, label: "Real Estate" },
  { icon: <DollarIcon />, label: "Finance & Banking" },
  { icon: <TruckIcon />, label: "Logistics & Transport" },
  { icon: <RocketIcon />, label: "Startups" },
  { icon: <StoreIcon />, label: "Small Businesses" },
  { icon: <BuildingIcon />, label: "Large Enterprises" },
];

const whyUs = [
  { icon: <CodeIcon />, title: "Experienced Developers",  desc: "Our team has built 50+ projects across industries with modern technologies." },
  { icon: <DollarIcon />, title: "Affordable Pricing",       desc: "Premium quality software at prices that make sense for Indian businesses." },
  { icon: <ClockIcon />, title: "On-Time Delivery",         desc: "We respect your deadlines. Every project is delivered as promised." },
  { icon: <SupportIcon />, title: "Dedicated Support",        desc: "We are available 24/7 to help you with any questions or issues." },
  { icon: <GearIcon />, title: "Modern Technologies",      desc: "We use the latest tools and frameworks to build fast, secure software." },
  { icon: <TargetIcon />, title: "Custom Solutions",         desc: "No templates. Every solution is built specifically for your business." },
  { icon: <LockIcon />, title: "Secure Applications",      desc: "Your data and your customers' data is always protected and safe." },
  { icon: <TrendIcon />, title: "Scalable Architecture",    desc: "Software that grows with your business — from 10 to 10,000 users." },
];

const process = [
  { n: "01", icon: <ChatIcon />, title: "Consultation",  desc: "We understand your business, goals, and what you need from the software." },
  { n: "02", icon: <FileTextIcon />, title: "Planning",       desc: "We create a clear roadmap with timelines, features, and cost estimates." },
  { n: "03", icon: <PaletteIcon />, title: "UI Design",      desc: "We design how the software will look and feel before writing any code." },
  { n: "04", icon: <CodeIcon />, title: "Development",    desc: "Our developers build your software with clean, tested, and secure code." },
  { n: "05", icon: <CheckCircleIcon />, title: "Testing",        desc: "We thoroughly test everything to make sure it works perfectly." },
  { n: "06", icon: <RocketIcon />, title: "Deployment",     desc: "We launch your software and make it live for your users." },
  { n: "07", icon: <GearIcon />, title: "Support",        desc: "We stay with you after launch to fix issues and add new features." },
];

const techStack = ["React", "Next.js", "Node.js", "Python", "Java", "AWS", "Docker", "MongoDB", "MySQL", "PostgreSQL", "DynamoDB", "OpenAI", "TensorFlow", "Flutter", "React Native", "TypeScript"];

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#006BFF]/20 bg-[#EAF4FF] px-4 py-2 mb-5">
      <span className="text-sm font-semibold text-[#006BFF] tracking-wide" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>{children}</span>
    </div>
  );
}

export default function Services() {
  return (
    <>
      {/* ── Services ── */}
      <section className="bg-[#F7FAFC] py-24">
        <div className="section-shell">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
              Everything Your Business
              <br />
              <span className="gradient-text">Needs to Grow</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#475569]" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
              From idea to launch — we handle design, development, deployment, and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(0,107,255,0.1)" }}
                className="card bg-white p-6 cursor-pointer group"
              >
                <div className="h-12 w-12 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-2xl mb-5 group-hover:bg-[#006BFF] transition-colors duration-300">
                  <span className="group-hover:grayscale-0">{s.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>{s.title}</h3>
                <p className="text-sm leading-6 text-[#475569]" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>{s.desc}</p>
                <div className="mt-4 text-sm font-semibold text-[#006BFF] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
                  Learn more <span>→</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(0,107,255,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#006BFF] to-[#0052D9] px-8 py-3.5 text-sm font-semibold text-white cursor-pointer"
                style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}
              >
                Discuss Your Project →
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="bg-white py-24">
        <div className="section-shell">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <SectionLabel>Industries We Serve</SectionLabel>
            <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
              We Build Software for
              <br />
              <span className="gradient-text">Every Industry</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-[#475569]" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
              No matter what business you run, we have the experience to build the right solution for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -4, borderColor: "#006BFF", backgroundColor: "#EAF4FF" }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F7FAFC] p-5 cursor-pointer transition-all"
              >
                <span className="text-3xl">{ind.icon}</span>
                <span className="text-xs font-semibold text-[#0F172A] text-center leading-tight" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose CPNexs ── */}
      <section className="bg-[#F7FAFC] py-24">
        <div className="section-shell">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <SectionLabel>Why Choose CPNexs</SectionLabel>
            <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
              Why Hundreds of Businesses
              <br />
              <span className="gradient-text">Trust Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w, i) => (
              <motion.div
                key={w.title}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="card bg-white p-6"
              >
                <div className="text-3xl mb-4">{w.icon}</div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>{w.title}</h3>
                <p className="text-sm leading-6 text-[#475569]" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-white py-24">
        <div className="section-shell">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
              From Idea to
              <span className="gradient-text"> Live Product</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-[#475569]" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>
              A simple, transparent process so you always know what's happening with your project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((step, i) => (
              <motion.div
                key={step.n}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="card bg-white p-6 relative"
              >
                <div className="absolute top-4 right-4 text-xs font-bold text-[#006BFF]/30 tracking-widest" style={{ fontFamily: "var(--font-sora)" }}>{step.n}</div>
                <div className="h-12 w-12 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-2xl mb-4">{step.icon}</div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>{step.title}</h3>
                <p className="text-sm leading-6 text-[#475569]" style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif" }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack Marquee ── */}
      <section className="bg-[#F7FAFC] py-16 overflow-hidden border-y border-[#E2E8F0]">
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold text-[#94A3B8] uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-inter)" }}>Technologies We Use</span>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F7FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F7FAFC] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 animate-scroll-left w-max">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-2 bg-white border border-[#E2E8F0] rounded-xl px-5 py-2.5 whitespace-nowrap flex-shrink-0">
                <span className="text-sm font-semibold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
