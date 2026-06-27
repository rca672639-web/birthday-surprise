import { useEffect, useState } from "react";
import useTypewriter from "../../hooks/useTypeWriter";
import Typewriter from "./Typewriter";

export default function ChatTypewriter({ messages = [], delayBetween = 800 }) {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!messages.length) return;

    setCurrentText("");
    setProgress(0);
  }, [index, messages]);

  const msg = messages[index] || "";
  const { displayText, progress: p, finished } = useTypewriter(msg);

  useEffect(() => {
    setCurrentText(displayText);
    setProgress(p);
  }, [displayText, p]);

  useEffect(() => {
    if (finished) {
      const t = setTimeout(() => {
        if (index < messages.length - 1) setIndex((s) => s + 1);
      }, delayBetween + 300);
      return () => clearTimeout(t);
    }
  }, [finished, index, messages.length, delayBetween]);

  return (
    <div className="space-y-4">
      {messages.slice(0, index).map((m, i) => (
        <div key={i} className="mx-auto max-w-3xl bg-white p-4 rounded-lg shadow-sm text-left md:text-center">
          {m}
        </div>
      ))}

      <div className="mx-auto max-w-3xl">
        <Typewriter text={currentText} progress={progress} />
      </div>
    </div>
  );
}
