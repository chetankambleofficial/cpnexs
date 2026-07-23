"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Brand Palette ─── */
const NAV_BG      = "#1F2F56";
const ACCENT      = "#3E7CB1";
const ACCENT_HOVER= "#4E8CC1";
const TEXT_ACTIVE = "#3E7CB1";
const TEXT_HOVER  = "#DEECFF";

/* ─── Mega Menu Data ─── */
const servicesMega = [
  { icon: <GlobeIcon />,   title: "Website Development",  desc: "Stunning, fast & SEO-optimised websites" },
  { icon: <CodeIcon />,    title: "Software Development", desc: "Custom enterprise-grade software solutions" },
  { icon: <ERPIcon />,     title: "ERP Solutions",        desc: "Integrated resource planning systems" },
  { icon: <CRMIcon />,     title: "CRM Solutions",        desc: "Manage relationships & boost retention" },
  { icon: <AIIcon />,      title: "AI Solutions",         desc: "Intelligent automation & ML pipelines" },
  { icon: <CloudIcon />,   title: "Cloud Services",       desc: "Scalable, secure cloud infrastructure" },
  { icon: <MobileIcon />,  title: "Mobile Apps",          desc: "iOS & Android apps users love" },
];

const solutionsMega = [
  { icon: <SchoolIcon />,    title: "EdTech Platform",      desc: "LMS & learning management systems" },
  { icon: <HospitalIcon />,  title: "HealthTech Solutions",  desc: "Hospital & clinic management" },
  { icon: <FactoryIcon />,   title: "Manufacturing ERP",    desc: "End-to-end factory automation" },
  { icon: <CartIcon />,      title: "E-Commerce Platform",  desc: "Online stores built to convert" },
  { icon: <HotelIcon />,     title: "Hospitality System",   desc: "Hotel & restaurant management" },
  { icon: <FinanceIcon />,   title: "FinTech Solutions",    desc: "Accounting, billing & invoicing" },
];

const industriesMega = [
  { label: "Education",      icon: <SchoolIcon /> },
  { label: "Healthcare",     icon: <HospitalIcon /> },
  { label: "Manufacturing",  icon: <FactoryIcon /> },
  { label: "Retail",         icon: <CartIcon /> },
  { label: "Hospitality",    icon: <HotelIcon /> },
  { label: "Finance",        icon: <FinanceIcon /> },
  { label: "Real Estate",    icon: <HomeIcon /> },
  { label: "Logistics",      icon: <TruckIcon /> },
];

/* ─── Nav Links ─── */
const NAV_ITEMS = [
  { label: "Home",       href: "/",           mega: null },
  { label: "Services",   href: "/services",   mega: null },
  { label: "Portfolio",  href: "/portfolio",  mega: null },
  { label: "Pricing",    href: "/pricing",    mega: null },
  { label: "Contact",    href: "/contact",    mega: null },
];

/* ─── Icon Components ─── */
function GlobeIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>;
}
function CodeIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
}
function ERPIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>;
}
function CRMIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>;
}
function AIIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>;
}
function CloudIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>;
}
function MobileIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>;
}
function SchoolIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
}
function HospitalIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M12 8v8M8 12h8"/></svg>;
}
function FactoryIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20V10l7-5v5l7-5v15M2 20h20M22 20V8"/></svg>;
}
function CartIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>;
}
function HotelIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}
function FinanceIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>;
}
function HomeIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}
function TruckIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
}
function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>;
}
function ChevronDown({ open }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9"/>
    </motion.svg>
  );
}
function ArrowRight() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
}

/* ─── Mega Menu Components ─── */
function ServicesMegaMenu({ onClose }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[820px] rounded-2xl overflow-hidden z-50"
      style={{ background: "#fff", boxShadow: "0 20px 60px rgba(31,47,86,0.18), 0 4px 16px rgba(0,0,0,0.08)" }}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>What We Build</p>
            <h3 className="text-lg font-bold mt-0.5" style={{ color: "#1F2F56", fontFamily: "'Space Grotesk', sans-serif" }}>Our Services</h3>
          </div>
          <Link href="/services" onClick={onClose}
            className="flex items-center gap-1.5 text-sm font-semibold no-underline transition-colors"
            style={{ color: ACCENT }}>
            View All Services <ArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {servicesMega.map((s) => (
            <Link key={s.title} href="/services" onClick={onClose}
              className="group flex items-start gap-3.5 rounded-xl p-3.5 no-underline transition-all hover:shadow-sm"
              style={{ background: "transparent" }}
              onMouseEnter={e => e.currentTarget.style.background = "#F3F8FF"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              <div className="flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center transition-colors"
                style={{ background: "#EEF4FB", color: ACCENT }}>
                {s.icon}
              </div>
              <div>
                <p className="text-sm font-semibold leading-snug" style={{ color: "#1F2F56", fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</p>
                <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "#6B7EA4" }}>{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-6 py-3.5 flex items-center justify-between" style={{ background: "#F3F8FF", borderTop: "1px solid #DEECFF" }}>
        <p className="text-xs" style={{ color: "#6B7EA4" }}>Need help choosing the right service?</p>
        <Link href="/contact" onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-lg px-4 py-2 no-underline transition-all"
          style={{ background: ACCENT, color: "#fff" }}>
          Get Free Consultation <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

function SolutionsMegaMenu({ onClose }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] rounded-2xl overflow-hidden z-50"
      style={{ background: "#fff", boxShadow: "0 20px 60px rgba(31,47,86,0.18), 0 4px 16px rgba(0,0,0,0.08)" }}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>Industry Solutions</p>
            <h3 className="text-lg font-bold mt-0.5" style={{ color: "#1F2F56", fontFamily: "'Space Grotesk', sans-serif" }}>Built for Your Industry</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {solutionsMega.map((s) => (
            <Link key={s.title} href="/services" onClick={onClose}
              className="group flex items-start gap-3.5 rounded-xl p-3.5 no-underline transition-all"
              style={{ background: "transparent" }}
              onMouseEnter={e => e.currentTarget.style.background = "#F3F8FF"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              <div className="flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center"
                style={{ background: "#EEF4FB", color: ACCENT }}>
                {s.icon}
              </div>
              <div>
                <p className="text-sm font-semibold leading-snug" style={{ color: "#1F2F56", fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</p>
                <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "#6B7EA4" }}>{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function IndustriesMegaMenu({ onClose }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[520px] rounded-2xl overflow-hidden z-50"
      style={{ background: "#fff", boxShadow: "0 20px 60px rgba(31,47,86,0.18), 0 4px 16px rgba(0,0,0,0.08)" }}>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: ACCENT }}>Industries We Serve</p>
        <div className="grid grid-cols-4 gap-2">
          {industriesMega.map((ind) => (
            <Link key={ind.label} href="/services" onClick={onClose}
              className="flex flex-col items-center gap-2 rounded-xl p-3.5 no-underline transition-all text-center"
              style={{ background: "transparent" }}
              onMouseEnter={e => e.currentTarget.style.background = "#F3F8FF"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              <div className="h-10 w-10 rounded-xl flex items-center justify-center"
                style={{ background: "#EEF4FB", color: ACCENT }}>
                {ind.icon}
              </div>
              <span className="text-xs font-semibold leading-tight" style={{ color: "#1F2F56" }}>{ind.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Navbar ─── */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeMega, setActiveMega]   = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setActiveMega(null); }, [pathname]);

  /* Close mega menu when clicking outside */
  useEffect(() => {
    if (!activeMega) return;
    const handler = (e) => {
      if (!e.target.closest("[data-navbar]")) setActiveMega(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [activeMega]);

  const handleMouseEnter = (mega) => {
    clearTimeout(timeoutRef.current);
    if (mega) setActiveMega(mega);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMega(null), 120);
  };

  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const navHeight = scrolled ? "60px" : "76px";

  return (
    <>
      {/* ── Fixed Navbar ── */}
      <motion.header
        data-navbar
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          background: NAV_BG,
          height: navHeight,
          transition: "height 0.3s ease, box-shadow 0.3s ease",
          boxShadow: scrolled ? "0 4px 24px rgba(31,47,86,0.35)" : "0 2px 12px rgba(31,47,86,0.2)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 1rem", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>

          {/* ── Logo ── */}
          <Link href="/" className="no-underline" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
              <div style={{
                width: scrolled ? "32px" : "36px",
                height: scrolled ? "32px" : "36px",
                borderRadius: "9px",
                background: "linear-gradient(135deg, #3E7CB1 0%, #2A5B8F 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.3s ease",
                boxShadow: "0 2px 8px rgba(62,124,177,0.4)",
              }}>
                <img src="/images/logocolor.png" alt="CPNexs" style={{ height: scrolled ? "20px" : "22px", width: scrolled ? "20px" : "22px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{
                  fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif",
                  fontWeight: 700,
                  fontSize: scrolled ? "16px" : "18px",
                  color: "#fff",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  transition: "font-size 0.3s ease",
                  whiteSpace: "nowrap",
                }}>
                  CP<span style={{ color: ACCENT_HOVER }}>nexs</span>
                </div>
                {!isMobile && (
                  <div style={{
                    fontSize: "10px",
                    color: "rgba(222,236,255,0.65)",
                    fontWeight: 400,
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                    marginTop: "2px",
                    fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif",
                    whiteSpace: "nowrap",
                  }}>
                    Next-Gen Digital Solutions
                  </div>
                )}
              </div>
            </motion.div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav style={{ display: isMobile ? "none" : "flex", alignItems: "center", gap: "2px", flex: 1, justifyContent: "center" }}>
            {NAV_ITEMS.map(({ label, href, mega }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              const isOpen = activeMega === mega && mega !== null;

              return (
                <div key={label} style={{ position: "relative" }}
                  onMouseEnter={() => handleMouseEnter(mega)}
                  onMouseLeave={handleMouseLeave}>
                  <Link href={href}
                    className="no-underline"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "6px 14px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: 500,
                      fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif",
                      color: active ? TEXT_ACTIVE : "rgba(255,255,255,0.88)",
                      transition: "color 0.2s, background 0.2s",
                      position: "relative",
                      whiteSpace: "nowrap",
                      background: active ? "rgba(62,124,177,0.15)" : "transparent",
                    }}
                    onMouseEnter={e => {
                      if (!active) {
                        e.currentTarget.style.color = TEXT_HOVER;
                        e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                      }
                    }}
                    onMouseLeave={e => {
                      if (!active) {
                        e.currentTarget.style.color = "rgba(255,255,255,0.88)";
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {label}
                    {mega && <ChevronDown open={isOpen} />}
                    {active && (
                      <motion.span
                        layoutId="nav-active-line"
                        style={{
                          position: "absolute",
                          bottom: "-2px",
                          left: "14px",
                          right: "14px",
                          height: "2px",
                          borderRadius: "2px",
                          background: ACCENT,
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        onMouseEnter={() => handleMouseEnter(mega)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {mega === "services"   && <ServicesMegaMenu onClose={() => setActiveMega(null)} />}
                        {mega === "solutions"  && <SolutionsMegaMenu onClose={() => setActiveMega(null)} />}
                        {mega === "industries" && <IndustriesMegaMenu onClose={() => setActiveMega(null)} />}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* ── Right Section ── */}
          <div style={{ display: isMobile ? "none" : "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
            {/* Phone */}
            <a href="tel:+919844538521"
              style={{ display: "flex", alignItems: "center", gap: "7px", color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "13px", fontWeight: 500, fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}>
              <div style={{ height: "30px", width: "30px", borderRadius: "8px", background: "rgba(62,124,177,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT_HOVER, flexShrink: 0 }}>
                <PhoneIcon />
              </div>
              <span className="hidden xl:block" style={{ letterSpacing: "0.01em" }}>+91 98445 38521</span>
            </a>

            {/* Divider */}
            <div style={{ width: "1px", height: "28px", background: "rgba(255,255,255,0.12)" }} />

            {/* CTA Button */}
            <Link href="/contact" className="no-underline">
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: `0 6px 24px rgba(62,124,177,0.5)`, y: -1 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  background: ACCENT,
                  color: "#fff",
                  padding: "9px 18px",
                  borderRadius: "14px",
                  fontSize: "13px",
                  fontWeight: 600,
                  fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  boxShadow: "0 3px 12px rgba(62,124,177,0.35)",
                  letterSpacing: "0.01em",
                }}
              >
                Get Free Consultation
                <ArrowRight />
              </motion.div>
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <div style={{ display: isMobile ? "flex" : "none", flexShrink: 0 }}>
            <button
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "40px",
                width: "40px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.08)",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "18px" }}>
                <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  style={{ display: "block", height: "1.5px", width: "100%", background: "#fff", borderRadius: "2px", transformOrigin: "center" }} />
                <motion.span animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  style={{ display: "block", height: "1.5px", width: "100%", background: "#fff", borderRadius: "2px" }} />
                <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  style={{ display: "block", height: "1.5px", width: "100%", background: "#fff", borderRadius: "2px", transformOrigin: "center" }} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Full-Screen Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{ position: "fixed", inset: 0, zIndex: 55, background: "rgba(10,18,40,0.7)", backdropFilter: "blur(4px)" }}
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "320px",
                maxWidth: "90vw",
                zIndex: 60,
                background: NAV_BG,
                display: "flex",
                flexDirection: "column",
                boxShadow: "-8px 0 40px rgba(10,18,40,0.5)",
              }}
            >
              {/* Drawer Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <Link href="/" onClick={() => setMobileOpen(false)} className="no-underline" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "9px", background: "linear-gradient(135deg, #3E7CB1, #2A5B8F)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src="/images/logocolor.png" alt="CPNexs" style={{ height: "22px", width: "22px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif", fontWeight: 700, fontSize: "17px", color: "#fff", lineHeight: 1.1 }}>
                      CP<span style={{ color: ACCENT_HOVER }}>nexs</span>
                    </div>
                    <div style={{ fontSize: "10px", color: "rgba(222,236,255,0.55)", marginTop: "2px" }}>Next-Gen Digital Solutions</div>
                  </div>
                </Link>
                <button onClick={() => setMobileOpen(false)}
                  style={{ width: "34px", height: "34px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </div>

              {/* Drawer Nav */}
              <div style={{ flex: 1, overflowY: "auto", padding: "16px 12px" }}>
                {NAV_ITEMS.map(({ label, href, mega }, i) => {
                  const active = pathname === href || (href !== "/" && pathname.startsWith(href));
                  const isExpandable = mega !== null;
                  const isExpanded = mobileExpanded === label;

                  return (
                    <motion.div key={label}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}>
                      {isExpandable ? (
                        <div>
                          <button
                            onClick={() => setMobileExpanded(isExpanded ? null : label)}
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "13px 16px",
                              borderRadius: "12px",
                              border: "none",
                              background: active ? "rgba(62,124,177,0.2)" : "transparent",
                              color: active ? ACCENT_HOVER : "rgba(255,255,255,0.85)",
                              fontSize: "15px",
                              fontWeight: 600,
                              fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif",
                              cursor: "pointer",
                              marginBottom: "2px",
                              textAlign: "left",
                            }}
                          >
                            {label}
                            <ChevronDown open={isExpanded} />
                          </button>
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                style={{ overflow: "hidden", paddingLeft: "12px", marginBottom: "4px" }}>
                                {(mega === "services" ? servicesMega : mega === "solutions" ? solutionsMega : industriesMega.map(ind => ({ title: ind.label, icon: ind.icon, desc: "" }))).map((item) => (
                                  <Link key={item.title || item.label} href={href} onClick={() => setMobileOpen(false)}
                                    className="no-underline"
                                    style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", borderRadius: "9px", color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500, marginBottom: "2px" }}
                                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "#fff"; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}>
                                    <span style={{ color: ACCENT_HOVER, opacity: 0.8 }}>{item.icon}</span>
                                    <span>{item.title}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link href={href} onClick={() => setMobileOpen(false)}
                          className="no-underline"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "13px 16px",
                            borderRadius: "12px",
                            color: active ? ACCENT_HOVER : "rgba(255,255,255,0.85)",
                            fontSize: "15px",
                            fontWeight: 600,
                            fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif",
                            background: active ? "rgba(62,124,177,0.2)" : "transparent",
                            marginBottom: "2px",
                            transition: "background 0.2s",
                          }}
                          onMouseEnter={e => { if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
                          onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}>
                          {label}
                          {active && <span style={{ height: "7px", width: "7px", borderRadius: "50%", background: ACCENT }} />}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer Footer */}
              <div style={{ padding: "16px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", gap: "10px" }}>
                <a href="tel:+919844538521"
                  style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)", textDecoration: "none" }}>
                  <div style={{ height: "36px", width: "36px", borderRadius: "9px", background: "rgba(62,124,177,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT_HOVER, flexShrink: 0 }}>
                    <PhoneIcon />
                  </div>
                  <div>
                    <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", fontWeight: 500, margin: 0 }}>Call / WhatsApp</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#fff", margin: 0, marginTop: "2px" }}>+91 98445 38521</p>
                  </div>
                </a>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="no-underline block">
                  <motion.div
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    style={{
                      width: "100%",
                      padding: "14px",
                      borderRadius: "14px",
                      background: `linear-gradient(135deg, ${ACCENT}, #2A5B8F)`,
                      textAlign: "center",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: 700,
                      fontFamily: "var(--font-heading), 'Alegreya Sans SC', sans-serif",
                      cursor: "pointer",
                      boxShadow: "0 4px 16px rgba(62,124,177,0.4)",
                      letterSpacing: "0.01em",
                    }}>
                    Get Free Consultation →
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
