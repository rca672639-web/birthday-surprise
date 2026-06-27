import { motion } from "framer-motion";
import GradientText from "../ui/GradientText";
import Button from "../ui/Button";

export default function HeroContent() {
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
      <p className="mb-6 text-lg uppercase tracking-[8px] text-[#6F4E37]">
        A Special Day
      </p>

      <h1
        className="text-6xl font-bold leading-tight md:text-8xl"
        style={{
          fontFamily: "Great Vibes",
        }}
      >
        Happy Birthday
      </h1>

      <GradientText
        className="block text-7xl md:text-9xl"
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
        max-w-2xl
        text-xl
        leading-9
        text-[#4B2E2B]
        "
      >
        "You are the most beautiful chapter
        my heart has ever written.
        Every moment with you is a memory
        I want to relive forever."
      </motion.p>

      <Button
        className="mt-12"
        onClick={() =>
          document
            .getElementById("letter")
            ?.scrollIntoView({
              behavior: "smooth",
            })
        }
      >
        Read My Letter ❤️
      </Button>
    </motion.div>
  );
}