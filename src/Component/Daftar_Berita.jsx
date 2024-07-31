import React from "react";
import BeritaTerbaru from "./BeritaTerbaru";
import BeritaPopuler from "./BeritaPopuler";

const DaftarBerita = () => {
  return (
    <div className="relative w-[994px] h-[667.97px] mt-20 ml-20">
      <div className="absolute top-0 left-0 w-[269.65px] h-[55.49px] text-center text-black text-3xl font-bold font-lato leading-[18px]">
        Berita Terkini
      </div>
      <div className="absolute top-[12.56px] left-[790.33px] w-[163.51px] h-[30.36px] rounded-[10px] border border-black flex items-center justify-between px-2">
        <div className="w-6 h-6">
          <div className="w-6 h-6"></div>
        </div>
        <div className="w-[85px] text-center text-black text-[15px] font-bold font-lato leading-[18px]">
          Lihat Semua
        </div>
        <div className="w-6 h-6">
          <div className="w-6 h-6"></div>
        </div>
      </div>
      <img
        className="absolute top-[107.84px] left-[49.67px] w-[392.03px] h-[541.31px]"
        src="https://via.placeholder.com/392x541"
        alt="Berita"
      />
    </div>  
  );
}

export default DaftarBerita;
