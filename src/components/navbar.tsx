import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 lg:py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#home">
            <Image
              src={"/Ichiban Logo-05.png"}
              width={140}
              height={100}
              alt="logo"
            />
          </a>
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
        <a href="#buy" className="cursor-pointer transition-all">
          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-2.5 rounded-xl text-sm font-medium cursor-pointer">
            Beli Sekarang
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
