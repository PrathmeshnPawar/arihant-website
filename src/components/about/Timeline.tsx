import { fadeUp, stagger } from "@/lib/animations";

const timeline = [
  {
    year: "1992",
    event: "Arihant Capital founded with a vision of ethical investing.",
  },
  {
    year: "2005",
    event: "Expanded operations across major Indian cities.",
  },
  {
    year: "2015",
    event: "Launched digital trading platforms for retail investors.",
  },
  {
    year: "2024",
    event: "Serving over 2.5 lakh investors nationwide.",
  },
];

import { motion } from "framer-motion";

export function CompanyTimeline() {
  return (
    <motion.section
      className="bg-arihant-violet-soft py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          variants={fadeUp}
          className="mb-14 text-center text-4xl font-bold text-arihant-violet"
        >
          Our Journey
        </motion.h2>

        <motion.div variants={stagger} className="space-y-10">
          {timeline.map((item) => (
            <motion.div
              key={item.year}
              variants={fadeUp}
              className="flex items-start gap-8"
            >
              <span className="text-xl font-bold text-arihant-green md:text-2xl">
                {item.year}
              </span>
              <p className="text-lg leading-relaxed text-gray-700">
                {item.event}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
