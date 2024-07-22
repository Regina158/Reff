import React from "react";

const DaftarBerita = () => {
    return (
        <div className="flex flex-col items-center space-y-8 p-4">
            <div className="flex justify-between w-full md:mx-20 md:my-20">
                <h2 className="text-xl font-bold text-right">Berita Terbaru</h2>
                <h2 className="text-xl font-bold text-right">Berita Populer</h2>
            </div>
            <div className="flex w-full justify-between space-x-4">
                <div className="w-1/2 space-y-4">
                    {Array(4).fill(0).map((_, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-md flex items-center space-x-4 p-4">
                            <img src="/path/to/image.png" alt="Berita" className="w-24 h-24 object-cover rounded-l-2xl" />
                            <div className="flex-1">
                                <p className="text-sm">Diskominfo Selenggarakan Training Geographic Information System</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-1/2 space-y-4">
                    {Array(6).fill(0).map((_, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-md flex items-center space-x-4 p-4">
                            <img src="/path/to/image.png" alt="Berita" className="w-20 h-20 object-cover rounded-l-2xl" />
                            <div className="flex-1">
                                <p className="text-sm">Diskominfo Selenggarakan Training Geographic Information System</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="text-blue-500 mt-4">Lihat Selengkapnya...</button>
        </div>
    );
}

export default DaftarBerita;
