import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";
import Typewriter from "../Typewriter/Typewriter";

import poem from "../../data/poem";
import useTypewriter from "../../hooks/useTypewriter";

import RosePetals from "./RosePetals";

export default function Poem() {

  const {
    displayText,
    progress,
  } = useTypewriter(poem);

  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#6F4E37]
      py-32
      "
    >
      <RosePetals />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        <SectionTitle
          title="A Little Piece of My Heart"
          subtitle="Every word reminds me of you."
        />

        <GlassCard
          className="
          bg-[#FFF8F0]/95
          "
        >

          <Typewriter
            text={displayText}
            progress={progress}
          />

          <div
            className="
            mt-16
            text-right
            text-5xl
            text-[#6F4E37]
            "
            style={{
              fontFamily: "Great Vibes",
            }}
          >
            — Forever Yours ❤️
          </div>

        </GlassCard>

      </div>

    </section>
  );
}