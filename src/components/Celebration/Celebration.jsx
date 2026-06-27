import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";

import Confetti from "./Confetti";
import FloatingGlow from "./FloatingGlow";

export default function Celebration() {
  return (
    <section className="relative overflow-hidden bg-[#4B2E2B] py-32 text-white">
      <FloatingGlow />
      <Confetti />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <SectionTitle
          title="Happy 19th Birthday ❤️"
          subtitle="May every dream you have find its way to you."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <GlassCard className="bg-white/10 border-white/20 text-center text-white">
            <h2
              className="text-5xl md:text-7xl"
              style={{ fontFamily: "Great Vibes" }}
            >
              Sharlyn
            </h2>

            <p className="mt-8 text-xl leading-10">
              Thank you for bringing light,
              warmth and happiness into my life.
            </p>

            <p className="mt-6 text-xl leading-10">
              I hope this little surprise reminds you
              how deeply you are loved,
              today and always.
            </p>

            <div
              className="mt-16 text-4xl"
              style={{ fontFamily: "Great Vibes" }}
            >
              Forever yours ❤️
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}