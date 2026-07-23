"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "Services",  href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing",   href: "/pricing" },
  { label: "Contact",   href: "/contact" },
];

/* ─── Main Navbar ─── */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl border-b border-[#E2E8F0] shadow-md"
            : "bg-white border-b border-[#E2E8F0]/60"
        }`}
        style={{ height: scrolled ? "68px" : "80px" }}
      >
        <div className="section-shell h-full flex items-center justify-between gap-6" style={{ maxWidth: "1280px" }}>

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0 group">
            <motion.div
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <img src="/images/logocolor.png" alt="CPNexs" className="object-contain transition-all"
                style={{ height: scrolled ? "34px" : "40px", width: scrolled ? "34px" : "40px" }} />
            </motion.div>
            <div>
              <div className="font-bold text-[#0F172A] leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-righteous)", fontSize: scrolled ? "17px" : "19px" }}>
                CP<span className="text-[#006BFF]">nexs</span>
              </div>
              <div className="text-[10px] text-[#94A3B8] font-medium leading-none mt-0.5 hidden sm:block"
                style={{ fontFamily: "var(--font-inter)" }}>Next-Gen Digital Solutions</div>
            </div>
          </Link>

          {/* ── Center Nav ── */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link key={label} href={href}
                  className={`relative flex items-center px-4 py-2 text-sm font-medium no-underline rounded-lg transition-colors ${
                    active ? "text-[#006BFF] bg-[#EAF4FF]" : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                  }`}
                  style={{ fontFamily: "var(--font-righteous)" }}
                >
                  {label}
                  {active && (
                    <motion.span layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#006BFF]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Right CTAs ── */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Phone */}
            <a href="tel:+919844538521"
              className="flex items-center gap-2 text-sm font-medium text-[#475569] hover:text-[#006BFF] no-underline transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}>
              <div className="h-8 w-8 rounded-lg bg-[#EAF4FF] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#006BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="hidden xl:block">+91 98445 38521</span>
            </a>

            <Link href="/contact" className="no-underline">
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: "0 6px 24px rgba(0,107,255,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#006BFF] to-[#0052D9] px-5 py-2.5 text-sm font-semibold text-white cursor-pointer"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Get Free Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] cursor-pointer flex-shrink-0"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px] w-4">
              <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-full bg-[#0F172A] origin-center rounded-full" />
              <motion.span animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block h-[1.5px] w-full bg-[#0F172A] rounded-full" />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-full bg-[#0F172A] origin-center rounded-full" />
            </div>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[300px] bg-white shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#E2E8F0]">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 no-underline">
                  <img src="/images/logocolor.png" alt="CPNexs" className="h-8 w-8 object-contain" />
                  <span className="font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-righteous)" }}>
                    CP<span className="text-[#006BFF]">nexs</span>
                  </span>
                </Link>
                <button onClick={() => setMobileOpen(false)}
                  className="h-8 w-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center cursor-pointer bg-[#F8FAFC]">
                  <svg className="w-4 h-4 text-[#475569]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer nav */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {navLinks.map(({ label, href }, i) => (
                  <motion.div key={label}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}>
                    <Link href={href} onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium no-underline transition-colors ${
                        pathname === href ? "bg-[#EAF4FF] text-[#006BFF]" : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                      }`}
                      style={{ fontFamily: "var(--font-righteous)" }}>
                      {label}
                      {pathname === href && <span className="h-1.5 w-1.5 rounded-full bg-[#006BFF]" />}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Drawer footer */}
              <div className="px-4 py-4 border-t border-[#E2E8F0] space-y-3">
                <a href="tel:+919844538521"
                  className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] px-4 py-3 no-underline hover:border-[#006BFF]/30 transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-[#EAF4FF] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#006BFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#94A3B8] font-medium" style={{ fontFamily: "var(--font-inter)" }}>Call / WhatsApp</p>
                    <p className="text-sm font-semibold text-[#0F172A]" style={{ fontFamily: "var(--font-inter)" }}>+91 98445 38521</p>
                  </div>
                </a>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="no-underline block">
                  <div className="w-full rounded-xl bg-gradient-to-r from-[#006BFF] to-[#0052D9] py-3.5 text-center text-sm font-semibold text-white cursor-pointer"
                    style={{ fontFamily: "var(--font-inter)" }}>
                    Get Free Consultation →
                  </div>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
