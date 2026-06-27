export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-[40px]
        border
        border-white/40
        bg-white/30
        backdrop-blur-xl
        shadow-2xl
        p-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}