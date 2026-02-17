import { useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function BirthdayHeroGlamour() {
  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);
  const confettiSoundRef = useRef<HTMLAudioElement | null>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const toggleMusic = (): void => {
    const audio = backgroundMusicRef.current;
    if (!audio) return;

    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
    } else {
      audio.volume = 0.2;
      audio.play().then(() => setMusicPlaying(true));
    }
  };

  const fireConfettiWithSound = (): void => {
    confettiSoundRef.current?.play();

    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4">
      <audio ref={backgroundMusicRef} src="/happy-birthday-song.mp3" loop />
      <audio ref={confettiSoundRef} src="/confetti-sounds.mp3" preload="auto" />
      {/* Decorative SVG */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src="/component-main.svg"
          alt=""
          className="
        absolute top-0 left-1/2 -translate-x-1/2
        w-[140%] sm:w-[120%]
        opacity-40 sm:opacity-15
        blur-[2px] sm:blur-[1px]
      "
        />
      </div>

      {/* =====================
          DESKTOP background text
      ===================== */}
      <div className="absolute inset-0 hidden sm:flex flex-col items-center justify-center opacity-[0.20] select-none">
        <h1 className="text-[8vw] font-extrabold tracking-widest leading-none">
          HAPPY BIRTHDAY
        </h1>
        <h1 className="text-[8vw] font-extrabold tracking-widest leading-none">
          HAPPY BIRTHDAY
        </h1>
      </div>

      {/* =====================
          MAIN CONTENT
      ===================== */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md">
        {/* =====================
            MOBILE top text
        ===================== */}
        <h1 className="sm:hidden text-xl font-extrabold tracking-widest mb-4 opacity-70">
          HAPPY BIRTHDAY
        </h1>

        {/* =====================
            CARD
        ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            bg-white rounded-[2rem] overflow-hidden
            shadow-[0_25px_80px_rgba(0,0,0,0.85)]
            w-full max-w-[280px] sm:max-w-[300px]
          "
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3">
            <img
              src="Component.png"
              alt="Profile"
              className="w-7 h-7 rounded-full object-cover ring-2 ring-pink-400"
            />
            <span className="text-sm font-semibold text-black">sprxlly</span>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="Profile-main.jpeg"
              alt="Birthday"
              className="w-full h-[300px] object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-5 px-4 py-3 text-black">
            <span className="text-red-500 text-lg">❤️</span>
            <span className="text-lg">💬</span>
            <span className="text-lg">✈️</span>
            <span className="ml-auto text-lg">⋯</span>
          </div>
        </motion.div>

        {/* =====================
            MOBILE bottom text
        ===================== */}
        <h1 className="sm:hidden text-xl font-extrabold tracking-widest mt-4 opacity-70">
          HAPPY BIRTHDAY
        </h1>

        <motion.button
          onClick={toggleMusic}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="
    fixed bottom-6 right-6 z-50
    w-14 h-14 rounded-full
    flex items-center justify-center
    bg-[#1DB954]
    shadow-[0_10px_40px_rgba(29,185,84,0.6)]
    hover:shadow-[0_15px_50px_rgba(29,185,84,0.8)]
  "
          aria-label="Toggle music"
        >
          {musicPlaying ? (
            /* Pause Icon */
            <div className="flex gap-1">
              <span className="w-1.5 h-5 bg-black rounded-sm" />
              <span className="w-1.5 h-5 bg-black rounded-sm" />
            </div>
          ) : (
            /* Play Icon */
            <div
              className="ml-0.5 w-0 h-0 
      border-t-[8px] border-t-transparent
      border-b-[8px] border-b-transparent
      border-l-[14px] border-l-black"
            />
          )}
        </motion.button>

        <button
          onClick={fireConfettiWithSound}
          className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow hover:bg-yellow-600 transition mt-4"
        >
          🥳 Rayakan
        </button>

        {/* =====================
            CAPTION
        ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-4"
        >
          <h2 className="text-2xl font-extrabold">Miranda</h2>

          <p className="mt-2 text-sm text-gray-300">
            To another year of smiles, laughter, and moments worth remembering.
            May your days be filled with gentle happiness.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
