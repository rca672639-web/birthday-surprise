import { useMemo } from "react";

export default function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 160 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 4,
        rotate: Math.random() * 360,
        color: [
          "#EC4899",
          "#FACC15",
          "#6F4E37",
          "#FFFFFF",
          "#F472B6",
          "#F59E0B",
        ][Math.floor(Math.random() * 6)],
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            width: "8px",
            height: "18px",
            borderRadius: "3px",
            background: piece.color,
            transform: `rotate(${piece.rotate}deg)`,
            animation: `confettiFall ${piece.duration}s linear ${piece.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}