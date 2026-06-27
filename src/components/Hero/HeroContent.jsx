import { motion } from "framer-motion";
import GradientText from "../ui/GradientText";
import Button from "../ui/Button";

export default function HeroContent({ onReadLetter }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      className="z-20 max-w-3xl text-center"
    >
      <p className="mb-6 text-sm uppercase tracking-[6px] text-[#6F4E37] sm:text-base">
        A Special Day; Special Like You
      </p>

      <h1
        className="text-4xl font-bold leading-tight md:text-6xl"
        style={{
          fontFamily: "Great Vibes",
        }}
      >
        Happy Birthday
      </h1>

      <GradientText
        className="block text-5xl md:text-7xl"
      >
        Sharlyn
      </GradientText>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
        }}
        className="
        mx-auto
        mt-8
        max-w-xl
        text-base
        leading-8
        text-[#4B2E2B]
        sm:text-lg
        "
      >
        "You are the most beautiful chapter
        my heart has ever written.
        Every moment with you is a memory
        I want to relive forever."
      </motion.p>

      <Button
        className="mt-10 md:mt-12"
        onClick={() => {
          if (onReadLetter) onReadLetter();
        }}
      >
        Read My Letter ❤️
      </Button>
    </motion.div>
  );
}