import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="bg-zinc-900 pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-end">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-zinc-800 border border-zinc-700 text-red-500 text-xs font-medium px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            JAPAN TECHNOLOGY
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
            Cat Semprot <span className="text-red-500">All In One</span>
            <br />
            Magic Paint
          </h1>

          <p className="text-zinc-400 text-lg max-w-md">
            Hasil profesional, cepat kering, tahan lama. Cocok untuk plastik,
            metal, dan kayu. Tersedia dalam 35+ pilihan warna.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl font-medium text-lg">
              Lihat Produk
            </button>
            <button className="border border-zinc-700 hover:bg-zinc-800 transition px-8 py-4 rounded-2xl font-medium text-lg">
              Cara Pemakaian
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 pt-8 border-t border-zinc-800">
            <div>
              <div className="text-4xl font-bold text-white">35+</div>
              <div className="text-zinc-500 text-sm mt-1">Pilihan Warna</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">300cc</div>
              <div className="text-zinc-500 text-sm mt-1">Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">9</div>
              <div className="text-zinc-500 text-sm mt-1">Cabang Retail</div>
            </div>
          </div>
        </div>

        {/* Right - Spray Can */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-52">
            {/* Spray Can */}
            <div className="relative mx-auto w-40">
              {/* Nozzle */}
              <div className="w-5 h-7 bg-zinc-400 rounded-t mx-auto"></div>
              {/* Lid */}
              <div className="w-28 h-8 bg-zinc-300 rounded-t mx-auto"></div>

              {/* Can Body */}
              <div className="relative h-72 w-40 bg-red-600 rounded-3xl overflow-hidden shadow-2xl mx-auto">
                {/* Label */}
                <div className="absolute inset-x-0 top-16 text-center">
                  <div className="text-white text-2xl font-black tracking-widest">
                    ICHIBAN
                  </div>
                  <div className="text-red-200 text-xs tracking-widest mt-1">
                    ALL-IN-ONE
                  </div>
                  <div className="text-red-100 text-[10px] opacity-75">
                    MAGIC PAINT
                  </div>

                  <div className="mt-6 bg-white/10 backdrop-blur-sm inline-block px-5 py-1 rounded-xl">
                    <div className="text-white text-xs font-semibold tracking-wider">
                      MORE SHINING
                    </div>
                  </div>
                </div>

                {/* Bottom Stripe */}
                <div className="absolute bottom-0 inset-x-0 h-24 bg-zinc-950 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white font-bold text-sm">300ml</div>
                    <div className="text-zinc-500 text-xs">Acrylic Base</div>
                  </div>
                </div>
              </div>

              {/* Shadow */}
              <div className="w-28 h-4 bg-black/50 blur-md rounded-full mx-auto -mt-3"></div>
            </div>

            {/* Color Dots */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                "#C0392B",
                "#1a1a2e",
                "#f5f5f5",
                "#2980b9",
                "#27ae60",
                "#f39c12",
                "#8e44ad",
              ].map((color, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-zinc-700"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
