export default function Balloons() {
  const colors = [
    "#EC4899",
    "#FACC15",
    "#6F4E37",
    "#C084FC",
    "#FB7185",
    "#F59E0B",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {colors.map((color, index) => (
        <div
          key={index}
          className="absolute animate-floatingBalloon"
          style={{
            left: `${10 + index * 15}%`,
            bottom: "-120px",
            width: "70px",
            height: "90px",
            borderRadius: "50%",
            background: color,
            animationDuration: `${16 + index * 2}s`,
            animationDelay: `${index * 1.5}s`,
          }}
        >
          <div
            style={{
              width: "2px",
              height: "70px",
              background: "#999",
              margin: "90px auto 0",
            }}
          />
        </div>
      ))}
    </div>
  );
}