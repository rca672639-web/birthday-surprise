import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const hearts = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 6,
  duration: 8 + Math.random() * 8,
  size: 12 + Math.random() * 18,
}));

export default function FloatingHearts() {
  return (
    <>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: 120,
            opacity: 0,
          }}
          animate={{
            y: -900,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${heart.left}%`,
            bottom: "-80px",
            position: "absolute",
          }}
        >
          <FaHeart
            size={heart.size}
            className="text-pink-400"
          />
        </motion.div>
      ))}
    </>
  );
}