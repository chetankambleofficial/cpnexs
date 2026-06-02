"use client";

export default function Navbar() {
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
    <nav className="fixed top-8 left-0 right-0 z-50 px-4 md:px-8">
      <div className="section-shell flex items-center justify-between rounded-full border border-white/15 bg-midnight/78 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <button
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Go to top"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper">
            <img src="/images/logocolor.png" alt="CPNexs" className="h-7 w-7 object-contain" />
          </span>
          <span className="hidden sm:block text-left">
            <span className="block font-heading text-sm font-bold text-white leading-none">CPNexs</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-white/45 mt-1">Digital Studio</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {links.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/68 no-underline transition-colors hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollToSection("contact")}
          className="rounded-full bg-sun px-5 py-2.5 text-sm font-bold text-ink shadow-lg shadow-sun/20 transition-all hover:-translate-y-0.5 hover:bg-paper active:translate-y-0 cursor-pointer"
        >
          Start Project
        </button>
      </div>
    </nav>
  );
}
