import { FaRegEnvelope } from "react-icons/fa";
import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";
import Typewriter from "../Typewriter/Typewriter";

import poem from "../../data/poem";
import useTypewriter from "../../hooks/useTypewriter";

import RosePetals from "./RosePetals";

export default function Poem({ visible = true }) {
  if (!visible) return null;

  const {
    displayText,
    progress,
  } = useTypewriter(poem);

  return (
    <section
      className="relative overflow-hidden bg-[#6F4E37] py-32"
    >
      <RosePetals />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        <SectionTitle
          title="A Little Piece of My Heart"
          subtitle="Every word reminds me of you."
        />

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="absolute inset-x-0 top-0 mx-auto h-24 w-4/5 rounded-b-[3rem] bg-[#FFF1F4]/90 shadow-[0_25px_60px_rgba(255,255,255,0.45)]" />
            <div className="absolute left-1/2 top-6 h-20 w-20 -translate-x-1/2 rounded-[28px] border border-pink-200/80 bg-white shadow-inner">
              <FaRegEnvelope className="m-auto mt-4 text-4xl text-pink-500 envelope-bounce" />
            </div>
            <div className="relative pt-16">
              <GlassCard className="bg-[#FFF8F0]/95 border-pink-100/80 shadow-[0_30px_60px_rgba(236,73,153,0.16)]">

                <Typewriter
                  text={displayText}
                  progress={progress}
                />

                <div
                  className="mt-16 text-right text-5xl text-[#6F4E37]"
                  style={{
                    fontFamily: "Great Vibes",
                  }}
                >
                  — Forever Yours ❤️
                </div>

              </GlassCard>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}