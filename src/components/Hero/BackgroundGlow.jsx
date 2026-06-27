import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="
        absolute
        -top-40
        -left-32
        h-[450px]
        w-[450px]
        rounded-full
        bg-pink-400/30
        blur-[140px]
        "
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-0
        right-0
        h-[420px]
        w-[420px]
        rounded-full
        bg-yellow-300/30
        blur-[150px]
        "
      />

      <motion.div
        animate={{
          opacity: [.2,.6,.2]
        }}
        transition={{
          duration:6,
          repeat:Infinity
        }}
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-transparent
        via-white/5
        to-transparent
        "
      />
    </>
  );
}