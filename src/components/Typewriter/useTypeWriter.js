import { useEffect, useState } from "react";

export default function useTypewriter(text) {
  const [displayText, setDisplayText] = useState("");
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let index = 0;
    let timeout;

    const type = () => {
      if (index >= text.length) {
        setFinished(true);
        return;
      }

      const current = text.slice(0, index + 1);

      setDisplayText(current);
      setProgress((index / text.length) * 100);

      let delay = 35;

      switch (text[index]) {
        case ",":
          delay = 180;
          break;

        case ".":
        case "!":
        case "?":
          delay = 450;
          break;

        case "\n":
          delay = 800;
          break;

        default:
          delay = 35;
      }

      index++;

      timeout = setTimeout(type, delay);
    };

    type();

    return () => clearTimeout(timeout);
  }, [text]);

  return {
    displayText,
    progress,
    finished,
  };
}