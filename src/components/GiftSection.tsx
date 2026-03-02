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
      image: "smartwatch.jpg",
      product: "Smartwatch",
      title: "For you....",
      description: "Hadiah untukmu supaya bisa lebih produktif dan aktif",
    },
  ];

  const singleGift = gifts[0];

  return (
    <section className="w-full min-h-screen py-12 flex items-center justify-center text-white">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="w-full max-w-md">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-extrabold text-white">
              The Surprise Collection
            </h2>
            <p className="mt-2 text-lg text-gray-400 italic">
              Small Gifts, Big Feelings
            </p>
          </motion.div>

          <GiftCard
            image={singleGift.image}
            product={singleGift.product}
            title={singleGift.title}
            description={singleGift.description}
          />
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
