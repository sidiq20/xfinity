export default function Hero({ onNavigate }) {
  return (
    <div className="relative bg-xfinity-dark text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
            Fast Internet starts here
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Get reliable Internet with download speeds up to 2000 Mbps
          </p>
          <div className="space-x-4">
            <button
              onClick={() => onNavigate('login')}
              className="bg-xfinity-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Shop Now
            </button>
            <button
              onClick={() => onNavigate('login')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}