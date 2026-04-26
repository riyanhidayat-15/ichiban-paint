import React from "react";

const CaraPakai = () => {
  return (
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
          <div className="text-red-600 font-medium mb-2">Sesudah pemakaian</div>
          <p className="text-zinc-700">
            Balik kaleng lalu semprot selama 3 detik untuk membersihkan sisa cat
            di nozzle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaraPakai;
