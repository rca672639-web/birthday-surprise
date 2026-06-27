import { useEffect, useState } from "react";

export default function useTypewriter(text) {
  const [displayText, setDisplayText] = useState("");
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let index = 0;
    let timer;

    function write() {
      if (index >= text.length) {
        setFinished(true);
        return;
      }

      setDisplayText(text.slice(0, index + 1));
      setProgress(((index + 1) / text.length) * 100);

      const char = text[index];

      let delay = 20;

      if (char === ",") delay = 180;
      if (char === ".") delay = 500;
      if (char === "!") delay = 500;
      if (char === "?") delay = 500;
      if (char === "\n") delay = 700;

      index++;

      timer = setTimeout(write, delay);
    }

    write();

    return () => clearTimeout(timer);
  }, [text]);

  return {
    displayText,
    progress,
    finished,
  };
}