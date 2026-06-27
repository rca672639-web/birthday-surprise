import { FaHeart } from "react-icons/fa";

const petals = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duration: 12 + Math.random() * 8,
  size: 12 + Math.random() * 18,
}));

export default function RosePetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((petal) => (
        <FaHeart
          key={petal.id}
          className="absolute text-pink-400 opacity-70"
          style={{
            left: `${petal.left}%`,
            top: "-30px",
            fontSize: `${petal.size}px`,
            animation: `petalFall ${petal.duration}s linear ${petal.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}