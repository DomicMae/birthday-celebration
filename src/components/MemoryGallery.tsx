export default function MemoryGallery() {
  return (
    <section className="relative bg-black text-white px-4 py-0 md:py-16 flex justify-center">
      <div className="max-w-5xl w-full relative">
        {/* CAPTION */}
        <div className="text-center">
          <p className="font-script text-2xl text-white/80">
            See All You Memories
          </p>
          <p className="uppercase tracking-widest text-sm text-white/60">
            MIRANDA!
          </p>
        </div>
        {/* FRAME 1 - KIRI ATAS */}
        <div className="flex justify-center md:mb-0">
          <div
            className="relative bg-[#111] p-6 rounded-sm shadow-xl aspect-[4/3]
w-[250px] sm:w-[380px] md:w-[420px]
justify-center
rotate-90
"
          >
            {/* Film text */}
            <span className="absolute left-2 top-6 text-xs tracking-widest rotate-180 writing-vertical text-white/50">
              VINTAGE
            </span>
            <span className="absolute right-2 top-6 text-xs tracking-widest writing-vertical text-white/50">
              FILMFRAME 420
            </span>

            {/* Tape */}
            <div className="absolute -left-0.5 top-47 md:top-85 -translate-x-1/2 w-24 h-6 bg-white/30 rotate-90 blur-[0.3px]" />

            {/* Image */}
            <div className="w-full border-4 border-black rotate-180">
              <img
                src="memory-1.jpeg"
                alt="Memory 1"
                className="w-full object-cover"
              />
            </div>

            <span className="absolute left-2 bottom-2 text-xs text-white/40">
              205
            </span>
          </div>
        </div>

        <div
          className="
  flex flex-col
  md:flex-row
  gap-12 md:gap-24
  items-center md:items-end
  justify-center md:justify-center
   space-y-4 mb-12
"
        >
          {/* FRAME 2 */}
          <div
            className="relative bg-[#111] p-6 rounded-sm shadow-xl
  w-[280px] sm:w-[320px] md:w-[360px]
  -rotate-2"
          >
            <span className="absolute left-2 top-6 text-xs tracking-widest rotate-180 writing-vertical text-white/50">
              FILMFRAME 420
            </span>
            <span className="absolute right-2 top-6 text-xs tracking-widest writing-vertical text-white/50">
              VINTAGE
            </span>

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-white/25 -rotate-2 blur-[0.3px]" />

            <div className="border-4 border-black">
              <img
                src="/memory-2.jpeg"
                alt="Memory 2"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="absolute right-2 bottom-2 text-xs text-white/40">
              205
            </span>
          </div>

          {/* FRAME 3 */}
          <div
            className="relative bg-[#111] p-6 rounded-sm shadow-xl
  w-[280px] sm:w-[320px] md:w-[360px]
  rotate-4"
          >
            <span className="absolute left-2 top-6 text-xs tracking-widest rotate-180 writing-vertical text-white/50">
              FILMFRAME 420
            </span>
            <span className="absolute right-2 top-6 text-xs tracking-widest writing-vertical text-white/50">
              VINTAGE
            </span>

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-white/25 -rotate-2 blur-[0.3px]" />

            <div className="border-4 border-black">
              <img
                src="/memory-3.jpeg"
                alt="Memory 3"
                className="w-full object-cover"
              />
            </div>

            <span className="absolute right-2 bottom-2 text-xs text-white/40">
              206
            </span>
          </div>
        </div>

        {/* FRAME 4 - KIRI ATAS */}
        <div className="flex justify-center md:mb-0 py-12">
          <div
            className="relative bg-[#111] p-6 rounded-sm shadow-xl aspect-[4/3]
w-[350px] md:w-[700px]
justify-center
rotate-4
ml-0
"
          >
            {/* Film text */}
            <span className="absolute left-2 top-6 text-xs tracking-widest rotate-180 writing-vertical text-white/50">
              VINTAGE
            </span>
            <span className="absolute right-2 top-6 text-xs tracking-widest writing-vertical text-white/50">
              FILMFRAME 420
            </span>

            {/* Tape */}
            <div className="absolute left-45 md:left-90 -top-3 md:-top-3 -translate-x-1/2 w-24 h-6 bg-white/30 blur-[0.3px]" />

            {/* Image */}
            <div className="h-full w-[300px] md:w-[650px] overflow-hidden border-4 border-black rotate-0">
              <img
                src="memory-4.jpeg"
                alt="Memory 4"
                className="w-full h-full object-cover scale-125"
              />
            </div>

            <span className="absolute left-2 bottom-2 text-xs text-white/40">
              205
            </span>
          </div>
        </div>

        {/* FRAME 5 - KIRI ATAS */}
        <div className="flex justify-center md:mb-0 pb-12">
          <div
            className="relative bg-[#111] p-6 rounded-sm shadow-xl aspect-[4/3]
w-[350px] md:w-[700px]
justify-center
-rotate-4
ml-0
"
          >
            {/* Film text */}
            <span className="absolute left-2 top-6 text-xs tracking-widest rotate-180 writing-vertical text-white/50">
              VINTAGE
            </span>
            <span className="absolute right-2 top-6 text-xs tracking-widest writing-vertical text-white/50">
              FILMFRAME 420
            </span>

            {/* Tape */}
            <div className="absolute left-45 md:left-90 -top-3 md:-top-3 -translate-x-1/2 w-24 h-6 bg-white/30 blur-[0.3px]" />

            {/* Image */}
            <div className="h-full w-[300px] md:w-[650px] overflow-hidden border-4 border-black rotate-0">
              <img
                src="memory-5.jpeg"
                alt="Memory 5"
                className="w-full h-full object-cover scale-100"
              />
            </div>

            <span className="absolute left-2 bottom-2 text-xs text-white/40">
              205
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
