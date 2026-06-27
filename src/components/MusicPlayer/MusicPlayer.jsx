import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay, FaMusic } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
      >
        <source
          src="/music/birthday.mp3"
          type="audio/mpeg"
        />
      </audio>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setPlaying(!playing)}
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

      {!playing && (
        <div
          className="
          fixed
          bottom-24
          right-5
          rounded-full
          bg-white
          px-4
          py-2
          shadow-lg
          "
        >
          <div className="flex items-center gap-2">

            <FaMusic />

            <span className="text-sm">
              Tap for music
            </span>

          </div>
        </div>
      )}
    </>
  );
}