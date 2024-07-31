import React from "react";

const Pranala_Kota = () => {
  return (
    <div className="flex flex-row justify-between md:mx-20 md:my-20 lg:col-span-3">
        {/* Disebelah kiri */}
        <div className="w-1/3">
            <h1 className="font-bold text-teal-500 text-3xl mb-6">Pranala Kota</h1>
            <div className="grid grid-cols-3 gap-4 item-center">
                <div className="flex flex-col bg-zinc-600 rounded-box p-4 justify-start items-center">
                    <img
                        src="src/assets/logojdih.png"
                        className="w-20 mb-2"
                        alt="Logo JDIH"
                    />
                    <img
                        src="src/assets/logoD.png"
                        className="w-20"
                        alt="Logo Dinas Tanjungpinang Kota"
                    />
                </div>
            </div>
        </div>

        {/* Ditengah */}
        <div className="w-1/3 text-center">
            <h1 className="font-bold text-teal-500 text-3xl mb-6">Pranala Internal</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col bg-zinc-600 rounded-box p-4 justify-center items-center">
                    <img
                        src="src/assets/logojdih.png"
                        className="w-20 mb-2"
                        alt="Logo JDIH"
                    />
                    <img
                        src="src/assets/logoD.png"
                        className="w-20"
                        alt="Logo Dinas Tanjungpinang Kota"
                    />
                </div>
            </div>
        </div>

        {/* Disebelah kanan */}
        <div className="w-1/3 text-right">
            <h1 className="font-bold text-teal-500 text-3xl mb-6">Pranala External</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-row bg-zinc-600 rounded-box p-4 justify-end items-center">
                    <img
                        src="src/assets/logojdih.png"
                        className="w-20 mb-2"
                        alt="Logo JDIH"
                    />
                    <img
                        src="src/assets/logoD.png"
                        className="w-20 ml-1"
                        alt="Logo Dinas Tanjungpinang Kota"
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Pranala_Kota;
