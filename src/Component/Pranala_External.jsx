import React from "react";

const Pranala_external =()=> {
    return (
        <div className="w-1/3 text-right">
        <h1 className="font-bold text-teal-500 text-3xl mb-6">Pranala External</h1>
        <Carousel showThumbs={false}>
            <div className="flex flex-col bg-zinc-600 rounded-box p-4 justify-end items-center">
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
            {/* Add more slides as needed */}
            <div className="flex flex-col bg-zinc-600 rounded-box p-4 justify-end items-center">
            <img
                src="src/assets/logoA.jfif"
                className="w-20 mb-2"
                alt="Logo JDIH"
            />
            </div>
        </Carousel>
    </div>
    );
}

export default Pranala_external;