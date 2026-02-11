import Hero from "../components/home/Hero";
import Pillars from "../components/home/Pillars";
import Trust from "../components/home/Trust";
import Products from "../components/home/Products";
import CTA from "../components/home/CTA";
export const metadata = {
  title: "Arihant Capital – Investment & Trading Platform",
  description:
    "Invest in Equities, Bonds, Mutual Funds, IPOs and Fixed Income products with Arihant. Research-driven strategies and disciplined investing.",
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <Trust />
      <Products />
      <CTA />
    </>
  );
}
