export default function GradientText({
  children,
  className = "",
}) {
  return (
    <span
      className={`
      bg-gradient-to-r
      from-pink-500
      via-[#6F4E37]
      to-yellow-500
      bg-clip-text
      text-transparent
      ${className}
      `}
    >
      {children}
    </span>
  );
}