import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const current = window.scrollY;

      setWidth((current / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <div
      className="
      fixed
      left-0
      top-0
      z-[999]
      h-1
      bg-pink-500
      "
      style={{
        width: `${width}%`,
      }}
    />
  );
}