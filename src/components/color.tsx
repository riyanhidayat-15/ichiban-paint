import React from "react";

const Color = () => {
  return (
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
            { color: "#00A651", name: "FZ GREEN" },
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
  );
};

export default Color;
