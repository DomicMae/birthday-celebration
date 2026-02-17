const photos = [
  "/images/polaroid/1.jpg",
  "/images/polaroid/2.jpg",
  "/images/polaroid/3.jpg",
  "/images/polaroid/4.jpg",
  "/images/polaroid/5.jpg",
  "/images/polaroid/6.jpg",
  "/images/polaroid/7.jpg",
  "/images/polaroid/8.jpg",
];

export default function PolaroidCollage() {
  return (
    <section className="relative min-h-screen bg-black py-24 px-4 overflow-hidden">
      {/* subtle stars */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      <div className="relative max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
        {photos.map((src, i) => (
          <div
            key={i}
            className="bg-white p-3 pb-8 shadow-2xl"
            style={{
              transform: `rotate(${[-12, -6, -3, 3, 6, 10][i % 6]}deg)`,
            }}
          >
            <img
              src={src}
              alt={`Memory ${i + 1}`}
              className="w-40 h-52 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
