import { FaHeart } from "react-icons/fa";

const hearts = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: 12 + Math.random() * 28,
  duration: 10 + Math.random() * 12,
  delay: Math.random() * 10,
  opacity: 0.2 + Math.random() * 0.7,
}));

export default function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <FaHeart
          key={heart.id}
          className="absolute animate-floatingHeart text-pink-400"
          style={{
            left: `${heart.left}%`,
            bottom: "-60px",
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        />
      ))}
    </div>
  );
}