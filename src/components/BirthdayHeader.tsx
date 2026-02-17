import { useRef, useState } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import "../birthday-header.css";

/* =====================
   Props
===================== */
interface BirthdayHeaderProps {
  onOpenGift: () => void;
}

/* =====================
   Component
===================== */
export default function BirthdayHeader({ onOpenGift }: BirthdayHeaderProps) {
  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);
  const confettiSoundRef = useRef<HTMLAudioElement | null>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  /* =====================
     Handlers
  ===================== */
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

  /* =====================
     Render
  ===================== */
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Audio */}
      <audio ref={backgroundMusicRef} src="/happy-birthday-song.mp3" loop />
      <audio ref={confettiSoundRef} src="/confetti-sounds.mp3" preload="auto" />

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="/Header.svg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Toggle Music */}
      <motion.button
        onClick={toggleMusic}
        className="absolute top-6 right-6 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {musicPlaying ? "⏸️ Jeda Musik" : "🎵 Mainkan Musik"}
      </motion.button>

      {/* Card */}
      <motion.div
        className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 text-center max-w-md w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/Gift.svg"
          alt="Gift"
          className="w-20 h-20 mx-auto mb-4 bh-float"
        />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-800">
          🎉 Selamat Ulang Tahun! 🎉
        </h1>

        <p className="mt-4 text-gray-700 text-base sm:text-lg">
          Hari ini adalah hari spesialmu. Nikmati setiap momennya ✨
        </p>

        <p className="mt-2 italic text-gray-600 text-sm sm:text-base">
          “Semoga kebahagiaan dan kesuksesan selalu menyertaimu.”
        </p>

        <img
          src="/UwU.svg"
          alt="UwU"
          className="w-24 h-24 mx-auto mt-6 bh-float"
        />

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenGift}
            className="bg-pink-500 text-white px-6 py-3 rounded-full shadow hover:bg-pink-600 transition"
          >
            🎀 Buka Surat
          </button>

          <button
            onClick={fireConfettiWithSound}
            className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow hover:bg-yellow-600 transition"
          >
            🥳 Rayakan
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Jangan lupa buat harapanmu 🎁
        </p>
      </motion.div>
    </section>
  );
}
