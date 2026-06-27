import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import music1Src from "../../assets/music/music1.mp3";
import music3Src from "../../assets/music/music3.mp3";

export default function MusicPlayer({ startPlaying = false }) {
  const aRef = useRef(null);
  const bRef = useRef(null);
  const activeRef = useRef("a");
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(null);
  const crossfadeStartedRef = useRef(false);

  const srcFor = (idx) => (idx === 1 ? music1Src : music3Src);

  useEffect(() => {
    const audio = aRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (track !== 3 || crossfadeStartedRef.current) return;
      if (audio.duration && audio.currentTime) {
        const remaining = audio.duration - audio.currentTime;
        if (remaining <= 12) {
          crossfadeTo(1);
          crossfadeStartedRef.current = true;
        }
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
  }, [track]);

  useEffect(() => {
    if (!startPlaying) return;
    const audio = aRef.current;
    if (!audio) return;

    audio.src = srcFor(3);
    audio.loop = false;
    audio.preload = "auto";
    audio.volume = 1;
    audio.currentTime = 0;
    setTrack(3);
    setPlaying(true);
    audio.play().catch(() => {});
  }, [startPlaying]);

  useEffect(() => {
    const current = activeRef.current === "a" ? aRef.current : bRef.current;
    if (!current) return;
    if (playing) current.play().catch(() => {});
    else current.pause();
  }, [playing]);

  function crossfadeTo(nextIdx) {
    const fromAudio = activeRef.current === "a" ? aRef.current : bRef.current;
    const toAudio = activeRef.current === "a" ? bRef.current : aRef.current;
    if (!fromAudio || !toAudio) return;

    toAudio.src = srcFor(nextIdx);
    toAudio.loop = true;
    toAudio.preload = "auto";
    toAudio.volume = 0;
    toAudio.currentTime = 0;
    if (playing) {
      toAudio.play().catch(() => {});
    }

    const duration = 3000;
    const steps = 60;
    const stepMs = duration / steps;
    let i = 0;

    const fade = setInterval(() => {
      i += 1;
      const t = i / steps;
      toAudio.volume = Math.min(1, t);
      fromAudio.volume = Math.max(0, 1 - t);
      if (i >= steps) {
        clearInterval(fade);
        fromAudio.pause();
        fromAudio.currentTime = 0;
        activeRef.current = activeRef.current === "a" ? "b" : "a";
        setTrack(nextIdx);
      }
    }, stepMs);
  }

  return (
    <>
      <audio ref={aRef} />
      <audio ref={bRef} />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setPlaying((p) => !p)}
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-[#6F4E37]
          text-white
          shadow-2xl
        "
      >
        {playing ? <FaPause /> : <FaPlay />}
      </motion.button>
    </>
  );
}
