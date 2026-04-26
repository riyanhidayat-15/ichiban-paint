import React from "react";

const Features = () => {
  return (
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
  );
};

export default Features;
