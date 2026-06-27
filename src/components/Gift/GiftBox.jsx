import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaStar,
  FaGift,
} from "react-icons/fa";

export default function GiftBox({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const hearts = Array.from({ length: 70 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 700,
    y: (Math.random() - 0.5) * 700,
    size: 10 + Math.random() * 25,
    delay: Math.random() * 0.6,
  }));

  const openGift = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      onOpen?.();
    }, 2600);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#fffdf9] to-pink-50">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute h-[700px] w-[700px] rounded-full bg-pink-300/20 blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-yellow-200/30 blur-[140px]"
      />

      {/* Floating Stars */}

      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <FaStar
            size={8 + Math.random() * 12}
            className="text-yellow-400"
          />
        </motion.div>
      ))}

      {/* Gift */}

      <motion.div
        whileHover={{
          scale: 1.04,
          rotate: -2,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={openGift}
        className="relative cursor-pointer"
      >

        {/* Shadow */}

        <motion.div
          animate={{
            scaleX: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute left-1/2 top-[270px] h-10 w-52 -translate-x-1/2 rounded-full bg-black/15 blur-xl"
        />

        {/* Lid */}

        <motion.div
          animate={{
            rotate: opened ? -35 : 0,
            y: opened ? -140 : 0,
            x: opened ? -45 : 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="absolute -top-8 h-20 w-60 rounded-xl bg-[#8B5E3C] shadow-2xl origin-bottom"
        >

          <div className="absolute left-1/2 h-full w-5 -translate-x-1/2 bg-pink-500" />

        </motion.div>

        {/* Box */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
          }}
          className="relative h-56 w-60 overflow-hidden rounded-2xl bg-gradient-to-br from-[#A47148] via-[#8B5E3C] to-[#6F4E37] shadow-[0_30px_60px_rgba(0,0,0,.25)]"
        >

          <div className="absolute left-1/2 h-full w-5 -translate-x-1/2 bg-pink-500" />

          <div className="absolute top-1/2 h-5 w-full -translate-y-1/2 bg-pink-500" />

          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">

            <div className="flex">

              <div className="h-10 w-10 rounded-full border-[10px] border-pink-500 border-r-transparent" />

              <div className="h-10 w-10 rounded-full border-[10px] border-pink-500 border-l-transparent" />

            </div>

          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />

        </motion.div>

        {/* Icon */}

        {!opened && (

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >

            <FaGift
              size={45}
              className="text-white"
            />

          </motion.div>

        )}

        {/* Explosion */}

        <AnimatePresence>

          {opened &&
            hearts.map((heart) => (

              <motion.div
                key={heart.id}
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 0.2,
                }}
                animate={{
                  x: heart.x,
                  y: heart.y,
                  opacity: 0,
                  scale: 1.8,
                  rotate: 720,
                }}
                transition={{
                  duration: 2.5,
                  delay: heart.delay,
                }}
                className="absolute left-1/2 top-1/2"
              >

                <FaHeart
                  size={heart.size}
                  className="text-pink-500"
                />

              </motion.div>

            ))}

        </AnimatePresence>

      </motion.div>

      {/* Bottom Text */}

      {!opened && (

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
          }}
          className="absolute bottom-20 text-center"
        >

          <h2
            className="text-5xl text-[#6F4E37]"
            style={{
              fontFamily: "Great Vibes",
            }}
          >
            A Gift Filled With Love
          </h2>

          <p className="mt-5 text-xl text-[#6F4E37]">
            Click to unwrap your birthday surprise ❤️
          </p>

        </motion.div>

      )}

    </section>
  );
}