import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="mb-16 text-center"
    >
      <h2
        className="text-5xl md:text-7xl text-[#4B2E2B]"
        style={{
          fontFamily: "Great Vibes",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6F4E37]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}