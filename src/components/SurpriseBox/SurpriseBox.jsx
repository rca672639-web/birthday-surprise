import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";

export default function SurpriseBox({ onOpen }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        rotate: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onOpen}
      className="cursor-pointer"
    >
      <div
        className="
          flex
          h-60
          w-60
          items-center
          justify-center
          rounded-3xl
          bg-gradient-to-br
          from-pink-500
          via-pink-400
          to-[#6F4E37]
          shadow-2xl
        "
      >
        <FaGift
          size={90}
          className="text-white"
        />
      </div>

      <h2
        className="mt-6 text-center text-4xl"
        style={{
          fontFamily: "Great Vibes",
        }}
      >
        Tap To Open ❤️
      </h2>
    </motion.div>
  );
}