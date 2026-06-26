import { motion } from "framer-motion";

export default function QuoteCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mx-auto my-28 max-w-4xl rounded-3xl bg-[#6F4E37] p-12 text-center text-white shadow-2xl"
    >
      <p
        className="text-5xl"
        style={{
          fontFamily: "Great Vibes",
        }}
      >
        "Distance may separate us,
        but love keeps our hearts
        together forever."
      </p>
    </motion.div>
  );
}