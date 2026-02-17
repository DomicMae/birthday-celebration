/* eslint-disable react-hooks/immutability */
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";

/* =====================
   Component
===================== */
export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [wish, setWish] = useState<string>("");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const handleSubmitWish = (): void => {
    if (!wish.trim() || hasSubmitted) return;

    setHasSubmitted(true);
    setIsOpen(false); // tutup surat setelah submit
  };

  const handleCloseLetter = () => {
    setIsOpen(false);
  };

  const handleOpen = (): void => {
    setIsOpen((prev) => !prev);
  };

  // Trigger confetti once ketika surat dibuka
  useEffect(() => {
    if (isOpen) {
      fireConfetti();
    }
  }, [isOpen]);

  const fireConfetti = (): void => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;

    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 1000,
    };

    const randomInRange = (min: number, max: number): number =>
      Math.random() * (max - min) + min;

    const interval: number = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <div className="flex items-center justify-center bg-black px-4 py-32">
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-3xl">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
          A Letter for This Chapter
        </h2>
        {/* Amplop Tertutup */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              className="
              w-full
              h-[220px] sm:h-[260px] md:h-[360px]
              bg-white
              rounded-md
              shadow-2xl
              cursor-pointer
              relative
              overflow-hidden
              flex
              justify-center
              items-center
              text-center
              px-4
            "
              onClick={handleOpen}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              {/* Segitiga Amplop */}
              <motion.div
                className="
                absolute
                inset-x-0
                -top-16 sm:-top-20
                mx-auto
                w-72 sm:w-96
                h-24 sm:h-28
                bg-gradient-to-r
                from-pink-500
                to-red-500
                rounded-t-xl
                shadow-md
              "
              />

              <motion.p
                className="
                text-lg sm:text-lg md:text-2xl
                font-semibold
                text-gray-700
              "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                🎀 Open the envelope to begin 🎀
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Surat Terbuka */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white p-4 rounded-md">
                {!hasSubmitted ? (
                  <>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-4">
                      ✨ Make a Wish ✨
                    </h1>

                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                      Write one meaningful wish for this year
                    </p>

                    <textarea
                      value={wish}
                      onChange={(e) => setWish(e.target.value)}
                      placeholder="Tulis permohonan di sini..."
                      className="
          w-full
          min-h-[120px]
          p-3
          border
          border-gray-300
          rounded-lg
          text-gray-800
          focus:outline-none
          focus:ring-2
          focus:ring-purple-400
          resize-none
        "
                    />

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSubmitWish}
                      className="
          mt-6
          px-6
          py-3
          bg-gradient-to-r
          from-purple-500
          to-purple-700
          text-white
          font-semibold
          rounded-full
          shadow-md
          hover:shadow-xl
          transition-all
        "
                    >
                      🌠 Submit Wish 🌠
                    </motion.button>
                  </>
                ) : (
                  <>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-4">
                      💌 Thank You 💌
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                      In this new chapter of your life,
                      <br /> you’ve planted a single wish.
                      <br />
                      May the path ahead feel a little lighter.
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCloseLetter}
                      className="
    px-6 py-2
    text-sm font-medium
    rounded-full
    bg-purple-600
    text-white
    hover:bg-purple-700
    transition
  "
                    >
                      Close the Letter
                    </motion.button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
