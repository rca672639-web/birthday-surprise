import { motion } from "framer-motion";

const words = [
  "Happy Birthday ❤️",
  "Beautiful",
  "Forever",
  "My Love",
  "Soulmate",
  "My Queen",
  "Sharlyn ❤️",
  "19 & Fabulous",
  "Always",
  "Blessed",
  "Love",
  "My Favorite Person",
  "Day One ❤️",
  "Endless Love",
  "You & Me",
  "Unforgettable",
  "My Sunshine",
  "You Matter",
  "Love You",
  "My Heart",
];

const floatingWords = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  text: words[Math.floor(Math.random() * words.length)],
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 18 + Math.random() * 15,
  delay: Math.random() * 10,
  size: 14 + Math.random() * 18,
}));

export default function FloatingWords() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {floatingWords.map((word) => (
        <motion.div
          key={word.id}
          initial={{
            x: -150,
            opacity: 0,
          }}
          animate={{
            x: window.innerWidth + 300,
            opacity: [0, 0.35, 0.35, 0],
          }}
          transition={{
            duration: word.duration,
            repeat: Infinity,
            delay: word.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${word.left}%`,
            top: `${word.top}%`,
            fontSize: `${word.size}px`,
            fontWeight: 600,
            color: "#6F4E37",
            whiteSpace: "nowrap",
          }}
        >
          {word.text}
        </motion.div>
      ))}
    </div>
  );
}