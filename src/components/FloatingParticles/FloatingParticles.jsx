const particles = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: 2 + Math.random() * 4,
  duration: 2 + Math.random() * 5,
  delay: Math.random() * 5,
}));

export default function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full bg-yellow-300 animate-twinkle"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}