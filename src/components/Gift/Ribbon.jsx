import { motion } from "framer-motion";

export default function Ribbon({ opened }) {
  return (
    <>
      {/* Vertical Ribbon */}
      <motion.div
        animate={{
          opacity: opened ? 0 : 1,
        }}
        className="
        absolute
        left-1/2
        top-0
        h-full
        w-5
        -translate-x-1/2
        rounded-full
        bg-pink-500
        "
      />

      {/* Horizontal Ribbon */}
      <motion.div
        animate={{
          opacity: opened ? 0 : 1,
        }}
        className="
        absolute
        top-1/2
        left-0
        h-5
        w-full
        -translate-y-1/2
        rounded-full
        bg-pink-500
        "
      />

      {/* Bow */}
      <motion.div
        animate={{
          scale: opened ? 0 : 1,
          rotate: opened ? 90 : 0,
        }}
        transition={{
          duration: .6,
        }}
        className="
        absolute
        left-1/2
        top-0
        -translate-x-1/2
        -translate-y-1/2
        "
      >
        <div className="flex">
          <div className="h-8 w-8 rounded-full border-8 border-pink-500 border-r-transparent" />
          <div className="h-8 w-8 rounded-full border-8 border-pink-500 border-l-transparent" />
        </div>
      </motion.div>
    </>
  );
}