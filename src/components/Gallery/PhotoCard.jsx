import { motion } from "framer-motion";

export default function PhotoCard({
  image,
  title,
}) {
  return (
    <a href={image} target="_blank" rel="noreferrer" className="block">
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          rotate: -4,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotate: 0,
        }}
        whileHover={{
          scale: 1.04,
          rotate: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          overflow-hidden
          rounded-3xl
          bg-white
          p-4
          shadow-2xl
        "
      >
        <img
          src={image}
          alt={title}
          className="
            h-[420px]
            w-full
            rounded-2xl
            object-cover
          "
        />

        <h3
          className="
            mt-6
            text-center
            text-2xl
          "
        >
          {title}
        </h3>
      </motion.div>
    </a>
  );
}
