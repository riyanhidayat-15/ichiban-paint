import React from "react";

const IchibanPaintLP = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Navbar */}
      <nav className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="w-5 h-5"
              >
                <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z" />
                <path d="M12 22C7.03 22 3 17.97 3 13c4.97 0 9 4.03 9 9z" />
                <path d="M12 2v8" />
              </svg>
            </div>
            <span className="text-xl font-semibold tracking-wider">
              ICHIBAN PAINT
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#" className="text-zinc-400 hover:text-white transition">
              Produk
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition">
              Cara Pakai
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition">
              Warna
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition">
              Distributor
            </a>
          </div>

          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-2.5 rounded-xl text-sm font-medium">
            Beli Sekarang
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-zinc-900 pt-16 pb-20">
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

      {/* Key Features */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-red-500 text-sm font-semibold tracking-widest mb-2">
            KEY FEATURES
          </div>
          <h2 className="text-4xl font-bold mb-3">Kenapa Pilih Ichiban?</h2>
          <p className="text-zinc-400 max-w-md mb-12">
            Diformulasikan khusus untuk hasil terbaik di berbagai permukaan.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🌟",
                title: "More Shining",
                desc: "Hasil akhir berkilau elegan dan profesional yang mempercantik seluruh permukaan.",
              },
              {
                icon: "⚡",
                title: "Quick Dry Formula",
                desc: "Formulasi cepat kering mempercepat proses tanpa mengorbankan hasil sempurna.",
              },
              {
                icon: "🛡️",
                title: "High Coverage",
                desc: "Cukup 2x semprot, hasil cat tahan lama dan tidak mudah mengelupas maupun pudar.",
              },
              {
                icon: "☀️",
                title: "UV-Resistant Colors",
                desc: "Perlindungan UV efektif menjaga warna tetap cerah meskipun terkena sinar matahari langsung.",
              },
            ].map((feat, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-900/50 transition"
              >
                <div className="text-4xl mb-6">{feat.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feat.title}</h3>
                <p className="text-zinc-400 text-[15px] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Pemakaian */}
      <section className="py-20 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-red-600 text-sm font-semibold tracking-widest mb-2">
            CARA PEMAKAIAN
          </div>
          <h2 className="text-4xl font-bold mb-3 text-zinc-900">
            3 Langkah Mudah
          </h2>
          <p className="text-zinc-600 max-w-md mb-12">
            Dapatkan hasil profesional dengan cara yang simpel.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Bersihkan Permukaan",
                desc: "Pastikan permukaan kering, bebas dari minyak, karat, dan kotoran sebelum pengecatan.",
              },
              {
                num: "02",
                title: "Kocok Kaleng",
                desc: "Kocok selama 15–30 detik agar cat tercampur rata dan hasil optimal.",
              },
              {
                num: "03",
                title: "Semprot 2–3 Lapis",
                desc: "Semprot dengan jeda 5 menit tiap lapisan dari jarak 30 cm untuk hasil merata.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white border border-zinc-200 rounded-3xl p-8 hover:shadow-xl transition"
              >
                <div className="w-10 h-10 bg-red-600 text-white font-bold rounded-2xl flex items-center justify-center mb-6 text-lg">
                  {step.num}
                </div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-red-50 border border-red-100 rounded-3xl p-8">
            <div className="text-red-600 font-medium mb-2">
              Sesudah pemakaian
            </div>
            <p className="text-zinc-700">
              Balik kaleng lalu semprot selama 3 detik untuk membersihkan sisa
              cat di nozzle.
            </p>
          </div>
        </div>
      </section>

      {/* Pilihan Warna */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-red-500 text-sm font-semibold tracking-widest mb-2">
            PILIHAN WARNA
          </div>
          <h2 className="text-4xl font-bold mb-3">35+ Pilihan Warna</h2>
          <p className="text-zinc-400 mb-12">
            Primer, solid, metallic, glossy, hingga fluorescent.
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
            {[
              { color: "#C0392B", name: "Racing Red" },
              { color: "#1a1a2e", name: "Midnight" },
              { color: "#f0f0f0", name: "Pearl White" },
              { color: "#2980b9", name: "Ocean Blue" },
              { color: "#27ae60", name: "Lime Green" },
              { color: "#f39c12", name: "Sunset Gold" },
              { color: "#8e44ad", name: "Violet" },
              { color: "#888888", name: "Silver Met." },
              { color: "#222222", name: "Gloss Black" },
              { color: "#00eeff", name: "Fluor Cyan" },
              { color: "#ff4f00", name: "Fluor Orange" },
              { color: "#c8a96e", name: "Primer Coat" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-2xl border border-zinc-700 shadow-inner"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-xs text-zinc-400 mt-3 text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-zinc-500 mt-10 text-sm">
            + 23 warna lainnya tersedia di toko resmi
          </p>
        </div>
      </section>

      {/* Beli Di */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-red-500 text-sm font-semibold tracking-widest mb-2">
            BELI DI
          </div>
          <h2 className="text-4xl font-bold mb-3">Tersedia Di</h2>
          <p className="text-zinc-400 mb-12">
            Online maupun offline, mudah dijangkau di seluruh Indonesia.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* TikTok Shop */}
            <div className="bg-zinc-900 rounded-3xl p-8 text-center border border-zinc-800 hover:border-red-900/30 transition">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4">
                📱
              </div>
              <h3 className="font-semibold text-xl">TikTok Shop</h3>
              <p className="text-zinc-500 text-sm mt-1">ichibanmagic.paint</p>
            </div>

            {/* Shopee */}
            <div className="bg-zinc-900 rounded-3xl p-8 text-center border border-zinc-800 hover:border-red-900/30 transition">
              <div className="w-16 h-16 bg-orange-500/10 text-orange-500 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4">
                🛒
              </div>
              <h3 className="font-semibold text-xl">Shopee</h3>
              <p className="text-zinc-500 text-sm mt-1">Ichiban Paint</p>
            </div>

            {/* Tokopedia */}
            <div className="bg-zinc-900 rounded-3xl p-8 text-center border border-zinc-800 hover:border-red-900/30 transition">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4">
                🛍️
              </div>
              <h3 className="font-semibold text-xl">Tokopedia</h3>
              <p className="text-zinc-500 text-sm mt-1">
                Ichiban Paint Official
              </p>
            </div>
          </div>

          <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex items-center justify-center gap-6">
            <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-2xl">
              🏬
            </div>
            <div>
              <h3 className="font-semibold text-2xl">9 Cabang Retail</h3>
              <p className="text-zinc-400">Tersebar di seluruh Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <div>ICHIBAN PAINT — PT. Warnatama Cemerlang</div>
          <div className="mt-4 md:mt-0">cemerlangpaint.com</div>
        </div>
      </footer>
    </div>
  );
};

export default IchibanPaintLP;
