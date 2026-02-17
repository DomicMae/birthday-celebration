import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<number>(10);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer: number = window.setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [timeLeft]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 via-white to-blue-50 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-800">
        Hitung Mundur!
      </h2>

      <div className="text-4xl md:text-9xl font-extrabold text-white bg-purple-700 p-8 rounded-full shadow-2xl">
        {timeLeft}
      </div>

      {timeLeft === 0 && (
        <p className="mt-6 text-2xl md:text-3xl font-semibold text-green-700 animate-bounce">
          Waktunya Merayakan! 🎉
        </p>
      )}
    </section>
  );
}
