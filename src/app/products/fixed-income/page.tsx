
import { BondsSection } from "@/components/fixed-income/BondsSection";
import { ShieldCheck, Landmark, FileText, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const products = [
  {
    title: "Corporate Fixed Deposits",
    desc: "Earn higher and stable returns by investing in company deposits.",
    icon: Landmark,
  },
  {
    title: "Bonds",
    desc: "Invest in debt instruments issued by corporations and institutions.",
    icon: BarChart3,
  },
  {
    title: "NCDs",
    desc: "Diversify your portfolio with Non-Convertible Debentures.",
    icon: FileText,
  },
  {
    title: "Debt Funds",
    desc: "Professionally managed fixed income mutual fund solutions.",
    icon: ShieldCheck,
  },
];

export const metadata = {
title: "Fixed Income Investments – Bonds, FDs & NCDs | Arihant",
  description:
      "Explore Corporate Bonds, Fixed Deposits, NCDs and Debt Funds offering stable and predictable returns.",
  alternates: {
     canonical: "https://arihant-website-356i.vercel.app/products/fixed-income",
  },
};

export default function FixedIncomePage() {
  return (
    <main className="bg-linear-to-b from-white to-emerald-50/40 min-h-screen">

      {/* HERO */}
      <motion.section
        className="mx-auto max-w-7xl px-6 pt-16 pb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="grid gap-10 md:grid-cols-2">

          <div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold text-arihant-violet"
            >
              Fixed Income Investment Options
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-gray-600 leading-relaxed"
            >
              Our range of fixed income offerings cater to investors seeking
              predictable returns, stability, and diversification across
              high-quality instruments.
            </motion.p>

            <motion.button
              variants={fadeUp}
              className="mt-6 rounded-full bg-arihant-green px-6 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              Invest Now
            </motion.button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <motion.div
                  key={product.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-white p-5 shadow-sm border border-black/5 hover:shadow-md transition"
                >
                  <Icon className="h-6 w-6 text-arihant-green mb-3" />
                  <h3 className="font-semibold text-arihant-violet">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* BONDS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <BondsSection />
      </motion.div>

      {/* HIGHLIGHT */}
      <motion.section
        className="mx-auto max-w-7xl px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="rounded-3xl bg-white p-8 shadow-sm border border-black/5">
          <h2 className="text-2xl font-bold text-arihant-violet">
            Boost your returns with Corporate FDs & NCDs
          </h2>
          <p className="mt-2 text-gray-600">
            Fixed interest, higher returns — invest in corporate fixed deposits
            and non-convertible debentures of high-quality companies.
          </p>
        </div>
      </motion.section>

      {/* FEATURES */}
      <motion.section
        className="mx-auto max-w-7xl px-6 pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeUp} whileHover={{ y: -3 }} className="rounded-3xl bg-emerald-50 p-8">
            <h3 className="font-semibold text-arihant-violet">
              One-stop for Fixed Income Investments
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Wide range of fixed income offerings for every risk profile.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} whileHover={{ y: -3 }} className="rounded-3xl bg-white p-8 shadow-sm border border-black/5">
            <h3 className="font-semibold text-arihant-violet">
              Why Arihant?
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              With our proven track record, investors benefit from stable and
              predictable returns with full transparency.
            </p>
          </motion.div>
        </div>
      </motion.section>

    </main>
  );
}
