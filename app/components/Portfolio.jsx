"use client";

export default function Portfolio() {
  const projects = [
    {
      cardClass: "lg:row-span-2 lg:min-h-[540px]",
      tone: "bg-[#162033]",
      tag: "Web Development",
      title: "Next-Gen Digital Agency",
      desc: "A bold landing experience with conversion-focused sections and premium motion-ready layouts.",
      accent: "bg-sun",
      titleColor: "text-white",
      descColor: "text-white/72",
      tagClass: "bg-white/12 text-white",
    },
    {
      cardClass: "",
      tone: "bg-[#f0d9c2]",
      tag: "Web + Mobile",
      title: "HealthCare Platform",
      desc: "Patient management, booking flows, and a calm operational interface.",
      accent: "bg-coral",
      titleColor: "text-[#3c2418]",
      descColor: "text-[#5f4432]",
      tagClass: "bg-[#3c2418]/10 text-[#3c2418]",
    },
    {
      cardClass: "",
      tone: "bg-[#dbeee9]",
      tag: "SaaS",
      title: "Analytics Dashboard",
      desc: "Performance reporting, role-based workflows, and team management.",
      accent: "bg-reef",
      titleColor: "text-[#123d38]",
      descColor: "text-[#315b55]",
      tagClass: "bg-[#123d38]/10 text-[#123d38]",
    },
    {
      cardClass: "",
      tone: "bg-[#e7dcf4]",
      tag: "E-Commerce",
      title: "E-Commerce Store",
      desc: "Fast product browsing, clean checkout, and growth-ready integrations.",
      accent: "bg-plum",
      titleColor: "text-[#2f1f49]",
      descColor: "text-[#594772]",
      tagClass: "bg-[#2f1f49]/10 text-[#2f1f49]",
    },
  ];

  return (
    <section className="bg-ink px-4 py-20 text-white md:px-8 md:py-28" id="work">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-sun">Our Portfolio</div>
            <h2 className="mt-3 font-heading text-4xl font-bold tracking-normal md:text-6xl">Work that feels built, not templated.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-white/58">
            Every project is shaped around the customer journey, the business model, and the launch timeline.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              className={`group relative overflow-hidden rounded-3xl border border-white/10 p-7 shadow-2xl shadow-black/20 ${project.tone} ${project.cardClass}`}
              key={project.title}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_44%)]" />
              <div className={`absolute right-7 top-7 h-16 w-16 rounded-2xl ${project.accent} transition-transform group-hover:rotate-6 group-hover:scale-110`} />
              <div className="relative z-10 flex min-h-[260px] flex-col justify-end">
                <span className={`mb-4 w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur ${project.tagClass}`}>
                  {project.tag}
                </span>
                <h3 className={`font-heading text-3xl font-bold md:text-4xl ${project.titleColor}`}>{project.title}</h3>
                <p className={`mt-3 max-w-lg text-sm leading-6 ${project.descColor}`}>{project.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
