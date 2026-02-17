import { useState } from "react";
import confetti from "canvas-confetti";

/* =====================
   Types
===================== */
export interface GiftItem {
  name: string;
  image: string;
}

interface GiftGalleryProps {
  gifts: GiftItem[];
}

/* =====================
   Component
===================== */
export default function GiftGallery({ gifts }: GiftGalleryProps) {
  const [selected, setSelected] = useState<GiftItem[]>([]);
  const [showPodium, setShowPodium] = useState<boolean>(false);

  const handleSelect = (gift: GiftItem): void => {
    if (selected.includes(gift)) return;
    if (selected.length < 3) {
      setSelected((prev) => [...prev, gift]);
    }
  };

  const showResults = (): void => {
    setShowPodium(true);
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const resetSelection = (): void => {
    setSelected([]);
    setShowPodium(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-8 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Selamat Datang di Galeri Hadiah 🎁
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light">
            Pilih 3 hadiah favoritmu, lalu lihat siapa juaranya!
          </p>
        </div>
      </header>

      {!showPodium ? (
        <main className="flex-grow bg-gradient-to-r py-12">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Pilih Hadiah Favoritmu 🎁
              </h2>
              <p className="mt-2 text-lg text-gray-700">
                Klik pada hadiah yang menurutmu paling menarik.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg w-full px-4">
                {gifts.map((gift, index) => {
                  const isSelected = selected.includes(gift);

                  return (
                    <div
                      key={index}
                      onClick={() => handleSelect(gift)}
                      className={`shadow-lg rounded-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl cursor-pointer relative border-4 ${
                        isSelected ? "border-purple-500" : "border-transparent"
                      }`}
                    >
                      <img
                        src={gift.image}
                        alt={gift.name}
                        className="w-full h-48 object-cover"
                      />

                      <div className="p-4 text-center">
                        <h3 className="font-semibold text-gray-800">
                          {gift.name}
                        </h3>
                      </div>

                      {isSelected && (
                        <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full shadow">
                          #{selected.indexOf(gift) + 1}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {selected.length === 3 && (
              <div className="mt-10 text-center">
                <button
                  onClick={showResults}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all"
                >
                  🎉 Tampilkan Pemenang!
                </button>
              </div>
            )}
          </div>
        </main>
      ) : (
        <main className="flex-grow py-16 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-5xl font-extrabold mb-3">
                🏆 Peringkat Hadiah Favorit
              </h2>
              <p className="text-xl text-gray-700">
                Berikut hadiah pilihan terbaik menurutmu:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-y-8 gap-x-6">
              {selected.map((gift, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-8 md:px-12 flex flex-col items-center scale-110 mt-8 transition-all duration-500"
                >
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-xl border-4 border-purple-400">
                    <img
                      src={gift.image}
                      alt={gift.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="mt-4 text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    {gift.name}
                  </p>

                  <div
                    className={`mt-3 px-4 py-2 rounded-full font-bold text-white text-sm sm:text-base md:text-lg shadow-md ${
                      index === 0
                        ? "bg-yellow-500"
                        : index === 1
                          ? "bg-gray-400"
                          : "bg-orange-500"
                    }`}
                  >
                    {index === 0
                      ? "🥇 Juara 1"
                      : index === 1
                        ? "🥈 Juara 2"
                        : "🥉 Juara 3"}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button
                onClick={resetSelection}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-full shadow-lg text-lg transition-all"
              >
                🔁 Pilih Ulang
              </button>
            </div>
          </div>
        </main>
      )}

      <footer className="bg-purple-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()}</p>
          <p className="mt-2 text-sm">Galeri Hadiah. Semua hak dilindungi.</p>
          <p className="mt-2 text-sm">
            Dibuat dengan ❤️ untuk menghadirkan kebahagiaan.
          </p>
        </div>
      </footer>
    </div>
  );
}
