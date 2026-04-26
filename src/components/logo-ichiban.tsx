const LogoIchiban = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="bg-red-700 w-12 h-20 flex items-center justify-center rounded-md relative">
        <span className="text-white text-6xl font-bold">香</span>

        <div
          className="absolute bottom-0 w-0 h-0 
        border-l-[64px] border-l-transparent
        border-r-[64px] border-r-transparent
        border-t-[20px] border-t-red-700 translate-y-full"
        ></div>
      </div>

      <div className="text-white font-extrabold leading-none">
        <div className="text-6xl">ICHIBAN</div>
        <div className="text-6xl">PAINT</div>
      </div>
    </div>
  );
};

export default LogoIchiban;
