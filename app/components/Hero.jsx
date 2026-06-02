"use client";

import Image from "next/image";

export default function Hero() {
  const timelineSteps = ["Plan", "Build", "Launch"];
  const priceBars = [
    ["Typical Agency", "h-28", "bg-white/18"],
    ["CPNexs", "h-16", "bg-gradient-to-t from-green-400 to-blue-400"],
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050816] px-6 pt-28 pb-20 md:px-12"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.12),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <span className="font-heading text-base font-bold text-white">
                CPNexs
              </span>
              <span className="h-4 w-px bg-white/20" aria-hidden="true" />
              <span>Trusted by Startups & Growing Businesses</span>
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
              Build Faster.
              <br />
              <span className="text-blue-500">
                Grow Smarter.
              </span>
              <br />
              Scale Without Limits.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              We craft high-performance websites, AI solutions,
              cloud platforms, and digital experiences that
              drive measurable business growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
              >
                Start Your Project
              </button>

              <button
                onClick={() => scrollToSection("work")}
                className="rounded-xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/5"
              >
                View Our Work
              </button>
            </div>

            {/* Social Proof */}
           
           
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />
              <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-green-400/20 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-200/80">
                      Why Choose CPNexs
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                      Fast builds. Fair pricing.
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 p-3">
                    <Image
                      src="/images/logowhite.png"
                      alt="CPNexs"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>

                <p className="mt-4 max-w-lg text-base leading-7 text-slate-300">
                  Launch-ready websites, apps, and digital solutions with a
                  quick process and transparent cost.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-white">
                        Launch Flow
                      </p>
                      <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs font-bold text-green-300">
                        Speed focused
                      </span>
                    </div>

                    <div className="mt-5 flex items-center">
                      {timelineSteps.map((step, index) => (
                        <div key={step} className="flex flex-1 items-center">
                          <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/30 bg-blue-500/15 text-sm font-bold text-white">
                            {index + 1}
                          </div>
                          {index < timelineSteps.length - 1 && (
                            <div className="h-1 flex-1 bg-gradient-to-r from-blue-400 to-green-400" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 grid grid-cols-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {timelineSteps.map((step) => (
                        <span key={step}>{step}</span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-sm font-semibold text-white">
                      Price Advantage
                    </p>
                    <div className="mt-4 flex h-28 items-end justify-center gap-7">
                      {priceBars.map(([label, height, color]) => (
                        <div key={label} className="flex flex-col items-center gap-2">
                          <div className={`w-12 rounded-t-xl ${height} ${color}`} />
                          <span className="max-w-20 text-center text-[11px] leading-4 text-slate-400">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["Fast Delivery", "Affordable", "Support"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-green-300/20 bg-green-400/10 px-4 py-3 text-center text-sm font-bold text-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-green-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
