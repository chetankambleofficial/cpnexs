"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home",      href: "/" },
  { label: "Services",  href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing",   href: "/pricing" },
  { label: "Contact",   href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full max-w-5xl rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-[#111]/80 shadow-2xl shadow-black/40 backdrop-blur-2xl"
              : "border-white/8 bg-[#0d0d0d]/75 shadow-xl shadow-black/30 backdrop-blur-xl"
          }`}
        >
          {/* subtle inner top highlight */}
          <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="flex items-center justify-between px-4 py-2.5">

            {/* ── Brand ── */}
            <Link href="/" className="flex items-center gap-2.5 no-underline group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex h-8 w-8 items-center justify-center rounded-lg"
              >
                <img src="/images/logowhite.png" alt="CPNexs" className="h-8 w-8 object-contain" />
              </motion.div>
              <span className="brand-name text-lg leading-none">CPNexs</span>
            </Link>

            {/* ── Desktop links ── */}
            <nav className="hidden md:flex items-center gap-0.5">
              {links.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link key={href} href={href} className="relative px-3.5 py-1.5 no-underline">
                    {isActive && (
                      <motion.span
                        layoutId="pill"
                        className="absolute inset-0 rounded-lg bg-white/12"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 text-[13px] font-medium tracking-[-0.01em] transition-colors duration-150 ${
                      isActive ? "text-white" : "text-white/45 hover:text-white/80"
                    }`}>
                      {label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* ── Right ── */}
            <div className="flex items-center gap-2">
              {/* available dot — desktop only */}
              <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[10px] font-semibold tracking-wide text-white/50">Available</span>
              </div>

              {/* CTA — desktop */}
              <Link href="/contact" className="hidden md:block no-underline">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-lg bg-white px-4 py-1.5 text-[13px] font-semibold text-[#0d0d0d] shadow-sm cursor-pointer tracking-[-0.01em] transition-opacity hover:opacity-90"
                >
                  Start Project
                </motion.div>
              </Link>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setMobileOpen(v => !v)}
                className="flex md:hidden h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 cursor-pointer"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-[4.5px] w-[14px]">
                  <motion.span animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }} className="block h-px w-full bg-white/70 origin-center" />
                  <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-px w-full bg-white/70" />
                  <motion.span animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }} className="block h-px w-full bg-white/70 origin-center" />
                </div>
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-[76px] z-50 overflow-hidden rounded-2xl border border-white/10 bg-[#111]/95 p-3 shadow-2xl shadow-black/60 backdrop-blur-2xl md:hidden"
            >
              {/* inner glow top */}
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <ul className="list-none m-0 p-0 flex flex-col gap-0.5">
                {links.map(({ label, href }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.22 }}
                  >
                    <Link
                      href={href}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[13px] font-medium no-underline tracking-[-0.01em] transition-colors ${
                        pathname === href
                          ? "bg-white/10 text-white"
                          : "text-white/45 hover:bg-white/6 hover:text-white/80"
                      }`}
                    >
                      {label}
                      {pathname === href && <span className="h-1.5 w-1.5 rounded-full bg-white/60" />}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-2.5 pt-2.5 border-t border-white/8">
                <Link href="/contact" className="no-underline">
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: 0.22 }}
                    className="block w-full rounded-xl bg-white py-2.5 text-center text-[13px] font-semibold text-[#0d0d0d] tracking-[-0.01em] cursor-pointer"
                  >
                    Start Project
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
