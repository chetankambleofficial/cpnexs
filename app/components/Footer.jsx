"use client";

export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    ["Services", "services"],
    ["Portfolio", "work"],
    ["Pricing", "pricing"],
    ["Contact", "contact"],
  ];

  return (
    <footer className="bg-midnight px-4 py-14 text-white md:px-8">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper">
              <img src="/images/logocolor.png" alt="CPNexs Logo" className="h-8 w-8 object-contain" />
            </span>
            <div>
              <div className="font-heading text-2xl font-bold">CPNexs</div>
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/38">Next-Gen Digital Solutions</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {links.map(([label, id]) => (
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white/62 no-underline transition-all hover:bg-white/10 hover:text-white"
                key={id}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center">
          <p className="m-0 text-sm text-white/42">Copyright 2026 CPNexs. All rights reserved. Built by Chetan Prakash Kamble.</p>
          <div className="flex gap-2">
            {["f", "in", "x", "ig"].map((item) => (
              <a className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/50 no-underline transition-all hover:bg-sun hover:text-ink" href="#" onClick={(e) => e.preventDefault()} key={item}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
