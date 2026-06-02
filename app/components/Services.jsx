"use client";

export default function Services() {
  const services = [
    { mark: "01", title: "Web Development", desc: "Responsive business websites, landing pages, dashboards, and product experiences built for speed and conversion.", accent: "from-blue-500 to-reef" },
    { mark: "02", title: "Mobile Apps", desc: "Android and iOS apps with clean flows, reliable architecture, and polished customer-facing screens.", accent: "from-coral to-sun" },
    { mark: "03", title: "AI Solutions", desc: "Automation, chat experiences, data workflows, and AI-assisted tools that remove repetitive work.", accent: "from-plum to-blue-500" },
    { mark: "04", title: "UI/UX Design", desc: "Interface design systems, prototypes, and user journeys that make complex products feel simple.", accent: "from-sun to-coral" },
    { mark: "05", title: "Custom Software", desc: "Secure internal tools, admin panels, APIs, and integrations tailored to how your business operates.", accent: "from-reef to-green-400" },
    { mark: "06", title: "Digital Marketing", desc: "SEO, analytics, paid campaign foundations, and content-ready pages designed to capture qualified leads.", accent: "from-plum to-coral" },
  ];

  const techStack = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AI/ML",
    "Flutter",
    "AWS",
    "Firebase",
    "MongoDB",
    "PostgreSQL",
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28" id="services">
        <div className="absolute left-0 top-16 h-64 w-64 rounded-full bg-coral/10 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-reef/10 blur-3xl" />
        <div className="section-shell">
          <div className="relative grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <div className="w-fit rounded-full border border-coral/20 bg-coral/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-coral">
                What We Do
              </div>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-normal text-ink md:text-6xl">
                Your digital build team, from idea to launch.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-ink/62">
                Strategy, design, engineering, and growth support under one roof, shaped for founders and local businesses that need practical results.
              </p>
              <div className="mt-7 grid max-w-sm grid-cols-3 gap-3">
                {["Plan", "Design", "Ship"].map((step) => (
                  <div key={step} className="rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-center shadow-sm">
                    <span className="text-sm font-bold text-ink">{step}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white shadow-lg shadow-ink/10 transition-all hover:-translate-y-1 hover:bg-coral cursor-pointer"
              >
                Discuss Your Project
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((item) => (
                <button
                  className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-paper p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-coral/40 hover:shadow-xl hover:shadow-ink/8 cursor-pointer"
                  key={item.title}
                  onClick={() => scrollToSection("contact")}
                >
                  <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${item.accent} opacity-15 transition group-hover:scale-125 group-hover:opacity-25`} />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-sm font-bold text-coral">{item.mark}</span>
                      <span className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${item.accent} shadow-lg shadow-ink/10`} />
                    </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/58">{item.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ink/70 group-hover:text-coral">
                      Start here
                      <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                        -&gt;
                      </span>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-4 py-16 md:px-8 md:py-24">
        <div className="section-shell grid gap-10 rounded-[2rem] border border-ink/10 bg-cream p-6 shadow-xl shadow-ink/5 md:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <div className="w-fit rounded-full border border-reef/20 bg-reef/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-reef">
              Our Expertise
            </div>
            <h2 className="mt-3 font-heading text-4xl font-bold tracking-normal text-ink md:text-5xl">Modern stack. Human delivery.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-ink/60">
              We choose tools that keep your product fast, maintainable, and ready for the next stage of your business.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {techStack.map((tech) => (
              <span className="rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-center text-sm font-bold text-ink shadow-sm transition hover:-translate-y-1 hover:border-reef/30 hover:text-reef" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
