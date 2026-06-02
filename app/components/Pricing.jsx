"use client";

export default function Pricing() {
  const plans = [
    {
      badge: "Limited Offer",
      name: "Starter",
      desc: "Perfect for small businesses getting online",
      price: "Rs. 2,999",
      period: " /project",
      features: ["5-page responsive website", "Mobile optimized design", "Basic SEO setup", "Contact form integration", "1 month free support", "Fast delivery in 7 days"],
      featured: false,
      btnText: "Get Started",
    },
    {
      badge: "Most Popular",
      featured: true,
      name: "Growth",
      desc: "For growing businesses needing real impact",
      price: "Rs. 7,999",
      period: " /project",
      features: ["10-page custom website", "CMS or admin panel", "Advanced SEO and analytics", "Payment gateway integration", "Social media integration", "3 months free support", "Priority delivery in 5 days"],
      btnText: "Choose Growth",
    },
    {
      badge: "Full Power",
      name: "Enterprise",
      desc: "End-to-end solutions for larger needs",
      price: "Custom",
      period: "",
      features: ["Custom web or mobile app", "AI and automation features", "Dedicated project manager", "Cloud infrastructure setup", "API development and integration", "12 months priority support", "SLA-backed delivery"],
      featured: false,
      btnText: "Request Quote",
    },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-cream px-4 py-20 md:px-8 md:py-28" id="pricing">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-coral">Simple Pricing</div>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-normal text-ink md:text-6xl">Pick the launch lane that fits.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-ink/60">
            Clear packages for websites and custom quotes for products that need deeper planning.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              className={`relative rounded-3xl border p-7 transition-all hover:-translate-y-1 ${
                plan.featured
                  ? "border-ink bg-ink text-white shadow-2xl shadow-ink/20 md:-mt-4"
                  : "border-ink/10 bg-paper text-ink shadow-sm"
              }`}
              key={plan.name}
            >
              <div className={`mb-7 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${plan.featured ? "bg-sun text-ink" : "bg-ink/8 text-ink/65"}`}>
                {plan.badge}
              </div>
              <h3 className="font-heading text-2xl font-bold">{plan.name}</h3>
              <p className={`mt-2 text-sm leading-6 ${plan.featured ? "text-white/58" : "text-ink/58"}`}>{plan.desc}</p>
              <div className="mt-8">
                <span className="font-heading text-4xl font-bold tracking-normal md:text-5xl">{plan.price}</span>
                <span className={plan.featured ? "text-white/45" : "text-ink/45"}>{plan.period}</span>
              </div>
              <ul className="mt-8 flex list-none flex-col gap-3 p-0">
                {plan.features.map((feature) => (
                  <li className={`flex gap-3 text-sm leading-5 ${plan.featured ? "text-white/72" : "text-ink/66"}`} key={feature}>
                    <span className={`mt-1 h-2 w-2 flex-shrink-0 rounded-full ${plan.featured ? "bg-sun" : "bg-reef"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollToSection("contact")}
                className={`mt-9 w-full rounded-full px-5 py-3 text-sm font-bold transition-all cursor-pointer ${
                  plan.featured ? "bg-sun text-ink hover:bg-paper" : "bg-ink text-white hover:bg-coral"
                }`}
              >
                {plan.btnText}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
