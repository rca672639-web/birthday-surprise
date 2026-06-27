import { motion } from "framer-motion";

export default function GiftLid({ opened }) {
  return (
    <motion.div
      animate={{
        rotate: opened ? -28 : 0,
        y: opened ? -120 : 0,
        x: opened ? -30 : 0,
      }}
      transition={{
        duration: 1,
      }}
      className="
      absolute
      -top-6
      h-16
      w-full
      rounded-xl
      bg-[#8B5E3C]
      shadow-xl
      origin-bottom
      "
    />
  );
}