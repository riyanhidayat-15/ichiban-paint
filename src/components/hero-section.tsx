import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-zinc-950 overflow-hidden flex items-center "
    >
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[length:60px_60px]" />

      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950/95 to-zinc-950/80 z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[90vh]">
          <div className="space-y-8 pt-10 lg:pt-0">
            <div className="inline-flex items-center gap-3 bg-zinc-900/80 border border-zinc-700 backdrop-blur-xl px-3 py-1 rounded-3xl">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse ring-2 ring-red-500/30" />
              <span className="text-red-400 text-xs font-normal tracking-widest">
                JAPAN TECHNOLOGY
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter text-white">
              Cat Semprot{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                All In One
              </span>
              <br />
              Magic Paint
            </h1>

            <p className="text-zinc-400 text-sm md:text-lg max-w-lg leading-relaxed">
              Hasil profesional, cepat kering, tahan lama. Cocok untuk plastik,
              metal, kayu, dan banyak lagi. Tersedia dalam 35+ warna premium.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-5 py-2 rounded-2xl font-semibold text-sm flex items-center justify-center gap-3 shadow-xl shadow-red-900/50 hover:shadow-2xl">
                Lihat Semua Produk
                <span className="group-hover:translate-x-1 transition">→</span>
              </button>

              <button className="border border-zinc-600 hover:border-zinc-400 hover:bg-zinc-900 transition-all duration-300 text-white px-5 py-2 rounded-2xl font-medium text-sm">
                Video Cara Pakai
              </button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✔</span> Cepat Kering 5 Menit
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✔</span> Tahan Cuaca Ekstrem
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✔</span> 35+ Warna
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-[520px] lg:max-w-[620px]">
              <Image
                src="/Mock Up Kaleng Aerosol + Tutup .png"
                alt="Pylox Cat Semprot Magic Paint"
                width={800}
                height={800}
                priority
                className="w-full h-auto drop-shadow-2xl scale-110 lg:scale-125 transition-transform duration-700 hover:scale-130"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-orange-500/20 to-transparent blur-3xl -z-10 rounded-full" />

              <div className="absolute -top-6 -right-6 bg-zinc-900 border border-red-500/50 text-red-400 text-xs font-bold px-6 py-3 rounded-2xl backdrop-blur-xl shadow-xl">
                NEW FORMULA 2026
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-zinc-500">
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-500 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
