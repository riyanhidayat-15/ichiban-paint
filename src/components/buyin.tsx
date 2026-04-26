const Buyin = () => {
  return (
    <section id="buy" className="py-20 bg-zinc-950 transition ease-in-out">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-red-500 text-sm font-semibold tracking-widest mb-2">
          BELI DI
        </div>
        <h2 className="text-4xl font-bold mb-3">Tersedia Di</h2>
        <p className="text-zinc-400 mb-12">
          Online maupun offline, mudah dijangkau di seluruh Indonesia.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <a href="https://www.tiktok.com/@ichibanmagic.paint?is_from_webapp=1&sender_device=pc">
            <div className="bg-zinc-900 rounded-3xl p-8 text-center border border-zinc-800 hover:border-red-900/30 transition">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4">
                📱
              </div>
              <h3 className="font-semibold text-xl">TikTok Shop</h3>
              <p className="text-zinc-500 text-sm mt-1">ichibanmagic.paint</p>
            </div>
          </a>

          <a href="https://shopee.co.id/ichibanmagic.paint?entryPoint=ShopBySearch&searchKeyword=ichiban">
            <div className="bg-zinc-900 rounded-3xl p-8 text-center border border-zinc-800 hover:border-red-900/30 transition">
              <div className="w-16 h-16 bg-orange-500/10 text-orange-500 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4">
                🛒
              </div>
              <h3 className="font-semibold text-xl">Shopee</h3>
              <p className="text-zinc-500 text-sm mt-1">Ichiban Paint</p>
            </div>
          </a>

          <a href="https://tk.tokopedia.com/ZS9rVv7sr/">
            <div className="bg-zinc-900 rounded-3xl p-8 text-center border border-zinc-800 hover:border-red-900/30 transition">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4">
                🛍️
              </div>
              <h3 className="font-semibold text-xl">Tokopedia</h3>
              <p className="text-zinc-500 text-sm mt-1">
                Ichiban Paint Official
              </p>
            </div>
          </a>
        </div>

        <a
          href="https://www.google.com/maps/search/Ichiban+Paint"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-8"
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex items-center justify-center gap-6 hover:bg-zinc-800 transition cursor-pointer">
            <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-2xl">
              🏬
            </div>

            <div>
              <h3 className="font-semibold text-2xl">9 Cabang Retail</h3>
              <p className="text-zinc-400">Tersebar di seluruh Indonesia</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Buyin;
