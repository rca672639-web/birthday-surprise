import { motion } from "framer-motion";
import { FaHeart, FaStar } from "react-icons/fa";
import hero1Photo from "../../assets/images/hero1.jpeg";

const orbitHearts = [
  { angle: 0, delay: 0 },
  { angle: 90, delay: 1 },
  { angle: 180, delay: 2 },
  { angle: 270, delay: 3 },
];

const sparkles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 3,
  size: 8 + Math.random() * 10,
}));

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-pink-300/20 blur-3xl" />

      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        h-[360px]
        w-[360px]
        rounded-full
        border-2
        border-dashed
        border-[#6F4E37]/40
        "
      />

      {/* Orbit Hearts */}
      {orbitHearts.map((heart) => (
        <motion.div
          key={heart.angle}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "transform",
            delay: heart.delay,
          }}
          className="
          absolute
          h-[360px]
          w-[360px]
          "
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${heart.angle}deg)`,
            }}
          >
            <FaHeart
              className="text-pink-500"
              size={20}
            />
          </div>
        </motion.div>
      ))}

      {/* Sparkles */}
      <div className="absolute inset-0">
        {sparkles.map((star) => (
          <motion.div
            key={star.id}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.6, 1.4, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: star.delay,
            }}
            style={{
              position: "absolute",
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
          >
            <FaStar
              size={star.size}
              className="text-yellow-400"
            />
          </motion.div>
        ))}
      </div>

      {/* Image Frame */}
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        whileHover={{
          scale: 1.03,
        }}
        className="
        relative
        z-20
        overflow-hidden
        rounded-full
        border-[10px]
        border-white
        shadow-[0_30px_70px_rgba(0,0,0,.25)]
        "
      >
        <img
          src={hero1Photo}
          alt="Sharlyn"
          className="
          h-[340px]
          w-[340px]
          object-cover
          md:h-[430px]
          md:w-[430px]
          "
        />
      </motion.div>

      {/* Floating Badge */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        bottom-0
        -translate-x-1/2
        rounded-full
        bg-white
        px-5
        py-2
        shadow-xl
        sm:px-6
        sm:py-3
        "
      >
        <p className="font-semibold text-sm text-[#6F4E37] sm:text-base">
          ❤️ Forever My Favorite
        </p>
      </motion.div>

    </div>
  );
}