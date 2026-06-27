import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

import Stars from "./Stars";

export default function Intro({ onFinish }) {
  const messages = [
    "Someone has been waiting...",
    "For this very day...",
    "Every smile...",
    "Every heartbeat...",
    "Every memory...",
    "Has led here...",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= messages.length) return;

    const timer = setTimeout(() => {
      setIndex((value) => value + 1);
    }, 2200);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-black">
      <Stars />

      <div className="relative z-10 text-center text-white">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}
          className="mb-10"
        >
          <FaHeart
            size={70}
            className="mx-auto text-pink-500"
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {index < messages.length ? (
            <motion.h1
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -40,
              }}
              transition={{
                duration: 0.8,
              }}
              className="text-3xl md:text-5xl"
            >
              {messages[index]}
            </motion.h1>
          ) : (
            <motion.button
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={onFinish}
              className="rounded-full bg-pink-500 px-10 py-5 text-xl font-semibold"
            >
              🎁 Tap To Begin
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}