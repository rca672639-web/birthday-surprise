import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Animated Gradient */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-[#FFF8F0]
        via-pink-100
        to-purple-200
        bg-[length:400%_400%]"
        style={{
          animation: "gradient 15s ease infinite",
        }}
      />

      {/* Brown Glow */}

      <motion.div
        animate={{
          x: [0, 100, -80, 0],
          y: [0, -40, 80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
        }}
        className="
        absolute
        left-0
        top-20
        h-80
        w-80
        rounded-full
        bg-[#6F4E37]
        opacity-20
        blur-3xl"
      />

      {/* Pink Glow */}

      <motion.div
        animate={{
          x: [0, -120, 100, 0],
          y: [0, 80, -40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
        }}
        className="
        absolute
        right-.1
        bottom-.1
        h-96
        w-96
        rounded-full
        bg-pink-400
        opacity-25
        blur-3xl"
      />
    </>
  );
}