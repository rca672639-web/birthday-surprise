import { motion } from "framer-motion";

const stars = Array.from({ length: 80 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 4 + 1,
  delay: Math.random() * 4,
}));

export default function Stars() {
  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: star.delay,
          }}
          style={{
            position: "absolute",
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            background: "white",
          }}
        />
      ))}
    </>
  );
}