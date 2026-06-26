import { useEffect, useState } from "react";

export default function Cursor() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((current) => !current);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block w-2 h-6 bg-pink-500 align-middle" style={{ opacity: visible ? 1 : 0 }} />
  );
}
