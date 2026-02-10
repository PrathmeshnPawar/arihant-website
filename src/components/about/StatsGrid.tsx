import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const stats = [
  { label: "Years of Experience", value: "30+" },
  { label: "Active Investors", value: "2.5+ Lakh" },
  { label: "Corporate Clients", value: "1000+" },
  { label: "Pan India Presence", value: "120+ Cities" },
];



export function StatsGrid() {
  return (
    <motion.section
      className="bg-arihant-violet-soft py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp}>
            <p className="text-4xl font-bold text-arihant-green md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-3 text-base text-gray-700">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

