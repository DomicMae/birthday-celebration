import { useEffect, useRef, useState } from "react";
import BirthdayHeader from "../components/BirthdayHeader";
import GiftGallery, { type GiftItem } from "../components/GiftGallery";
import BirthdayCard from "../components/BirthdayCard";
import GiftSection from "../components/GiftSection";
import BirthdayHeroGlamour from "../components/BirthdayHeroGlamour";
import MemoryGallery from "../components/MemoryGallery";
import PolaroidCollage from "../components/PolaroidCollage";

/* =====================
   Component
===================== */
export default function HomePage() {
  const [countdown, setCountdown] = useState<number>(2);
  const [showMainContent, setShowMainContent] = useState<boolean>(false);

  const birthdayCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowMainContent(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* =====================
     Data
  ===================== */

  const gifts: GiftItem[] = [
    { name: "Keychain", image: "keychain.svg" },
    { name: "Foto Kita", image: "photo.svg" },
    { name: "Bunga", image: "flower.svg" },
  ];

  /* =====================
     Loading Screen
  ===================== */

  if (!showMainContent) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-500 via-white to-blue-200 relative overflow-hidden">
        <img
          src="/Header.svg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover blur-lg opacity-30"
        />
        <div className="z-10 text-center">
          <h1 className="text-6xl font-bold text-purple-700 drop-shadow-lg">
            ⏳ {countdown}
          </h1>
          <p className="mt-4 text-xl text-gray-700 font-medium">
            Mohon tunggu sebentar...
          </p>
        </div>
      </div>
    );
  }

  /* =====================
     Main Content
  ===================== */

  return (
    <div className="min-h-screen bg-black">
      <section className="w-full min-h-screen">
        <BirthdayHeroGlamour />
      </section>

      <section className="w-full min-h-screen">
        <MemoryGallery />
      </section>

      {/* <section className="w-full min-h-screen">
        <PolaroidCollage />
      </section> */}

      {/* Header */}
      {/* <section className="w-full min-h-screen">
        <BirthdayHeader
          onOpenGift={() =>
            birthdayCardRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </section> */}

      {/* Birthday Card */}
      {/* <section ref={birthdayCardRef} className="w-full min-h-screen"></section> */}

      {/* Gift Section */}
      <section className="w-full min-h-screen">
        <BirthdayCard />
        <GiftSection />
      </section>

      {/* Gift Gallery */}
      <section className="w-full min-h-screen">
        <GiftGallery gifts={gifts} />
      </section>
    </div>
  );
}
