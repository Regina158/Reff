import React from "react";

const Pranala_Internal = () => {
  return (
    <div className="flex flex-col md:mx-20 md:my-20 lg:col-span-3">
        <h1 className="font-bold text-teal-500 text-3xl mb-6">Pranala Web Internal Kota Tanjungpinang</h1>
        <div className="grid grid-cols-3">
            <div className="flex flex-row w-48 bg-zinc-600 rounded-box p-4 justify-start items-center">
                <img
                    src="src/assets/logojdih.png"
                    className="w-20"
                    alt="Logo JDIH"
                />
                <img
                    src="src/assets/logoD.png"
                    className="w-20"
                    alt="Logo Dinas Tanjungpnang Kota"
                />
            </div>

            <div className="flex flex-col w-40 bg-zinc-600 rounded-box p-4 justify-start items-center ">
            <img
                src="src/assets/logojdih.png"
                className="w-20"
                alt="Logo JDIH 1"
            />
            <img
                src="src/assets/logojdih.png"
                className="w-20"
                alt="Logo JDIH 2"
            />
            </div>

            <div className="flex flex-col w-40 bg-zinc-600 rounded-box p-4 justify-start items-center ">
            <img
                src="src/assets/logojdih.png"
                className="w-20"
                alt="Logo JDIH 1"
            />
            <img
                src="src/assets/logojdih.png"
                className="w-20"
                alt="Logo JDIH 2"
            />
            </div>
      </div>
    </div>
  );
};

export default Pranala_Internal;
