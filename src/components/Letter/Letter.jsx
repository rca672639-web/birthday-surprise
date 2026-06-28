import { useState } from "react";
import { FaRegEnvelope, FaHeart } from "react-icons/fa";
import SectionTitle from "../UI/SectionTitle";
import GlassCard from "../UI/GlassCard";
import Typewriter from "../Typewriter/Typewriter";

import birthdayMessage from "../../data/birthdayMessage";
import useTypewriter from "../../hooks/useTypeWriter";

export default function Letter({ visible = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    displayText,
    progress,
  } = useTypewriter(birthdayMessage);

  if (!visible) return null;

  return (
    <section
      id="letter"
      className="relative overflow-hidden bg-[#FFF8F0] py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,207,232,0.35),transparent_40%)]"></div>
      <div className="mx-auto max-w-5xl px-6 relative" style={{ paddingTop: "28px", paddingBottom: "28px" }}>
        <SectionTitle
          title="A Letter Just For You ❤️"
        />

        <div className="mx-auto max-w-3xl relative">
          <div className="pointer-events-none absolute -top-8 left-6 hidden sm:flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-200/90 text-white shadow-lg">
              <span className="text-2xl">🌹</span>
            </div>
            <div className="space-y-2">
              <div className="h-5 w-5 rounded-full bg-pink-300 shadow-md" />
              <div className="h-6 w-6 rounded-full bg-[#FDE8EF] shadow-md" />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="group relative w-full overflow-hidden rounded-[40px] border border-pink-200/70 bg-gradient-to-br from-[#FFF4F6] via-[#FFF0F3] to-[#FFE6ED] p-8 text-left shadow-[0_30px_70px_rgba(0,0,0,0.1)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,207,232,0.3),transparent_40%)]"></div>

            <div className="absolute left-1/2 top-3 h-24 w-[85%] -translate-x-1/2 rounded-b-[3rem] bg-white/90 shadow-[0_20px_40px_rgba(255,255,255,0.9)]" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4 text-[#6F4E37]">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-[28px] border border-pink-200/80 bg-white shadow-inner overflow-hidden">
                  <span className="absolute inset-x-0 top-0 h-10 bg-pink-100/90 transform origin-bottom -translate-y-1/2 rotate-[25deg] envelope-flap" />
                  <FaRegEnvelope className="relative z-10 text-5xl text-pink-500 envelope-bounce" />
                  <div className="absolute -bottom-2 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-pink-400 shadow-md" />
                </div>
                <div className="pt-1">
                  <p className="text-3xl font-semibold">Envelope of Love</p>
                  <p className="mt-2 text-sm text-[#4B2E2B]">
                    Click to {isOpen ? "close" : "open"} your letter
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#EC4899]">
                <div className="grid gap-2">
                  <div className="h-4 w-4 rounded-full bg-pink-300 shadow-sm" />
                  <div className="h-5 w-5 rounded-full bg-[#FBCFE8] shadow-sm" />
                </div>
                <FaHeart className="h-10 w-10 text-pink-500" />
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="h-3 rounded-full bg-pink-300" />
              <div className="h-3 rounded-full bg-[#FBCFE8]" />
              <div className="h-3 rounded-full bg-[#FDE8EF]" />
            </div>
          </button>

          {isOpen && (
            <GlassCard className="mt-10 bg-white/95">
              <Typewriter
                text={displayText}
                progress={progress}
              />

              <div
                className="mt-10 text-right text-3xl text-[#6F4E37]"
                style={{
                  fontFamily: "Great Vibes",
                }}
              >
                — Forever Yours ❤️
              </div>
            </GlassCard>
          )}
        </div>
      </div>
    </section>
  );
}
