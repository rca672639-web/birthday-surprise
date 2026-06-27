import { motion } from "framer-motion";

const fireworks = [
  { x: "20%", y: "25%" },
  { x: "50%", y: "15%" },
  { x: "80%", y: "30%" },
  { x: "35%", y: "50%" },
  { x: "70%", y: "45%" },
];

export default function Fireworks() {
  return (
    <>
      {fireworks.map((fw, index) => (
        <motion.div
          key={index}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: [0, 1.8, 0],
            opacity: [0, 1, 0],
          }}
          viewport={{ once: false }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.5,
          }}
          style={{
            left: fw.x,
            top: fw.y,
          }}
          className="absolute h-24 w-24 rounded-full border-4 border-yellow-300"
        />
      ))}
    </>
  );
}