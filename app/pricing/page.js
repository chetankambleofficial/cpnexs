import Pricing from "../components/Pricing";

export const metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for websites, apps, and custom digital solutions. No hidden fees.",
  alternates: { canonical: "https://www.cpnexs.com/pricing" },
  openGraph: {
    url: "https://www.cpnexs.com/pricing",
    title: "Pricing — CPNexs",
    description: "Simple, transparent pricing for websites, apps, and custom digital solutions.",
  },
};

export default function PricingPage() {
  return <Pricing />;
}
