export default function BirthdayMessage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 via-pink-50 to-yellow-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-purple-800 drop-shadow-md">
            Selamat Ulang Tahun! 🎂
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium text-gray-700">
            Nikmati hari istimewamu dengan kebahagiaan yang tak terhingga!
          </p>
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center">
          <button
            type="button"
            className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-pink-600 focus:ring-2 focus:ring-pink-300 transition-all"
          >
            🎁 Buka Hadiah
          </button>

          <button
            type="button"
            className="ml-4 bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300 transition-all"
          >
            🥳 Rayakan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
