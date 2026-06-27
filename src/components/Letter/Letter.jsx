import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";
import Typewriter from "../Typewriter/Typewriter";

import birthdayMessage from "../../data/birthdayMessage";
import useTypewriter from "../../hooks/useTypewriter";

export default function Letter() {
  const {
    displayText,
    progress,
  } = useTypewriter(birthdayMessage);

  return (
    <section
      id="letter"
      className="bg-[#FFF8F0] py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          title="A Letter Just For You ❤️"
        />

        <GlassCard>
          <Typewriter
            text={displayText}
            progress={progress}
          />
        </GlassCard>
      </div>
    </section>
  );
}