import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";

export default function SurpriseBox() {
  const openGift = () => {
    const section = document.getElementById("letter");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 1.2,
        duration: 0.8,
        type: "spring",
      }}
      className="mt-12"
    >
      <motion.button
        whileHover={{
          scale: 1.08,
          rotate: -3,
        }}
        whileTap={{
          scale: 0.95,
        }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        onClick={openGift}
        className="
        flex
        items-center
        gap-4
        rounded-full
        bg-[#6F4E37]
        px-10
        py-5
        text-white
        shadow-2xl"
      >
        <FaGift size={28} />

        <span className="font-semibold">
          Open Your Surprise ❤️
        </span>
      </motion.button>
    </motion.div>
  );
}