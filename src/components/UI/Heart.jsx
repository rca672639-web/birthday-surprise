import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Heart({
  size = 28,
  color = "#EC4899",
}) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.25, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.4,
      }}
    >
      <FaHeart
        size={size}
        color={color}
      />
    </motion.div>
  );
}