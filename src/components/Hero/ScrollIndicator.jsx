import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="
      absolute
      bottom-10
      left-1/2
      -translate-x-1/2
      text-[#6F4E37]
      "
    >
      <FaChevronDown size={26} />

      <p className="mt-2 text-sm tracking-[4px] uppercase">
        Scroll
      </p>
    </motion.div>
  );
}