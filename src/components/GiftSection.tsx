/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../gift.css";

/* =====================
   Types
===================== */
interface GiftItem {
  image: string;
  product: string;
  title: string;
  description: string;
}

interface GiftCardProps {
  image: string;
  product: string;
  title: string;
  description: string;
}

/* =====================
   GiftSection
===================== */
export default function GiftSection() {
  const gifts: GiftItem[] = [
    {
      image: "keychain.svg",
      product: "keychain",
      title: "Unwrap the Moments",
      description: "Hadiah pertama yang sangat spesial untukmu!",
    },
    {
      image: "photo.svg",
      product: "photo",
      title: "Unwrap the Moments",
      description: "Semoga ini membawa kebahagiaan untukmu!",
    },
    {
      image: "flower.svg",
      product: "flower",
      title: "Unwrap the Moments",
      description: "Selamat, ini adalah hadiah ketiga untukmu!",
    },
  ];

  return (
    <section className="w-full min-h-screen py-12 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold">The Surprise Collection</h2>
          <p className="mt-2 text-lg text-gray-700">
            Small Gifts, Big Feelings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {gifts.map((gift, index) => (
            <GiftCard
              key={index}
              image={gift.image}
              product={gift.product}
              title={gift.title}
              description={gift.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================
   GiftCard
===================== */
function GiftCard({ image, product, title, description }: GiftCardProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleOpenGift = (): void => {
    setIsOpened(true);
  };

  return (
    <motion.div
      className="gift-card bg-white rounded-xl shadow-lg p-6 text-center relative hover:shadow-2xl transition-all duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <div
        onClick={handleOpenGift}
        className="cursor-pointer flex flex-col items-center"
      >
        <AnimatePresence>
          {!isOpened && (
            <motion.img
              key="box"
              src="Gift.svg"
              alt="Gift Box"
              className="w-24 h-24"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpened && (
            <motion.img
              key="opened"
              src={image}
              alt={title}
              className="w-40 h-40 rounded-lg shadow-md"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </AnimatePresence>
      </div>

      <motion.h3
        className="text-xl font-semibold text-gray-800 mt-4 capitalize"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {isOpened ? product : title}
      </motion.h3>

      {isOpened && (
        <motion.p
          className="mt-2 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
