import { FaHeart } from "react-icons/fa";

const hearts = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: 12 + Math.random() * 30,
  duration: 10 + Math.random() * 10,
  delay: Math.random() * 8,
  opacity: 0.2 + Math.random() * 0.7,
}));

export default function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <FaHeart
          key={heart.id}
          className="absolute text-pink-400 animate-floatingHeart"
          style={{
            left: `${heart.left}%`,
            bottom: "-60px",
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        />
      ))}
    </div>
  );
}