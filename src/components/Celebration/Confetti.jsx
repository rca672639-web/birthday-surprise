import { useMemo } from "react";

export default function Confetti() {
  const pieces = useMemo(() => {
    const streams = 6;
    const perStream = 12; // total ~72
    const colors = [
      "#EC4899",
      "#FACC15",
      "#6F4E37",
      "#FFFFFF",
      "#F472B6",
      "#F59E0B",
    ];

    const arr = [];

    // center the streams around the middle
    const center = 50;
    const spacing = 8; // percent between streams

    for (let s = 0; s < streams; s++) {
      const baseLeft = center - (spacing * (streams - 1)) / 2 + s * spacing;

      for (let i = 0; i < perStream; i++) {
        const jitter = (Math.random() - 0.5) * 6; // +/-3%
        arr.push({
          id: s * perStream + i,
          left: Math.min(100, Math.max(0, baseLeft + jitter)),
          delay: Math.random() * 4 + i * 0.08,
          duration: 3 + Math.random() * 3,
          rotate: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    return arr;
  }, []);

  return (
    <div className="pointer-events-none absolute left-0 right-0 top-0 h-[40vh] overflow-hidden z-0">
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