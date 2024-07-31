import React from "react";
import Navbar from "../Component/Navbar";

const VisiMisi = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="md:mx-32 md:my-20 p-10 bg-white rounded-lg shadow-md">
        <h2 className="font-bold text-3xl mb-4">
          Visi
          <hr className="border-t-2 border-red-500 w-32 mt-2" />
        </h2>
        <p className="text-xl mb-6 text-center font-bold">
          “Tanjungpinang Sebagai Kota yang Maju, Berbudaya dan Sejahtera dalam Harmoni Kebhinekaan Masyarakat Madani”
        </p>

        <h2 className="font-bold text-3xl mb-4">
          Misi
          <hr className="border-t-2 border-blue-500 w-32 mt-2" />
        </h2>
        <ul className="list-decimal list-inside text-lg space-y-4">
          <li>
            Meningkatkan kualitas sumber daya manusia yang agamis, berbudaya, berwawasan kebangsaan, dan berdaya saing global.
          </li>
          <li>
            Meningkatkan pengembangan pariwisata dan pengembangan ekonomi kreatif.
          </li>
          <li>
            Mengembangkan dan melestarikan khasanah budaya lokal dan nusantara untuk menciptakan kehidupan masyarakat yang harmonis, bertoleransi, dan kebhinnekaan guna mendukung pembangunan berkelanjutan.
          </li>
          <li>
            Mewujudkan tata kelola pemerintahan yang profesional, berwibawa, amanah, transparan, dan akuntabel didukung dengan struktur birokrasi yang berintegrasi dan kompeten.
          </li>
          <li>
            Melanjutkan pembangunan yang adil dan merata serta menciptakan iklim investasi dan usaha kondusif yang berwawasan lingkungan dan sistem pengupahan yang berkeadilan.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VisiMisi;
