import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import { FaHeart } from "react-icons/fa";
import SurpriseBox from "../SurpriseBox/SurpriseBox";
import FloatingParticles from "../FloatingParticles/FloatingParticles";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      <HeroBackground />
      <FloatingHearts/>
      <FloatingParticles/>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <FaHeart
            className="mx-auto mb-6 text-pink-500"
            size={70}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 text-6xl md:text-8xl"
          style={{ fontFamily: "Great Vibes" }}
        >
         <>
  Happy Birthday

  <br />

  <span
    className="
    text-pink-500"
  >
    My Beautiful Love
  </span>
</>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="text-4xl font-bold text-pink-500"
        >
          Sharlyn ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 max-w-xl text-lg leading-8 text-[#4B2E2B]"
        >
          Today is all about celebrating the beautiful
          soul that you are.
          <br />
          A little surprise has been prepared with love.
        </motion.p>

        < SurpriseBox />

      </div>

    </section>
  );
}