import Portfolio from "../components/Portfolio";

export const metadata = {
  title: "Portfolio",
  description:
    "Explore CPNexs work — websites, apps, dashboards, and digital products built for real businesses.",
  alternates: { canonical: "https://www.cpnexs.com/portfolio" },
  openGraph: {
    url: "https://www.cpnexs.com/portfolio",
    title: "Portfolio — CPNexs",
    description:
      "Websites, apps, dashboards, and digital products built for real businesses.",
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}
