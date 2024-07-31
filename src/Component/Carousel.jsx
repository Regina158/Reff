import React, { useState, useEffect } from "react";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "src/assets/1.jpg",
        "src/assets/1.jpg",
        "src/assets/1.jpg"
    ];

    const nextSlide = () => {
        const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
        return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
    }, [currentIndex]);

    return (
        <div className="relative w-full h-[560px] overflow-hidden mt-4">
            <div className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <img key={index} className="w-full h-full object-cover" src={src} alt={`Slide ${index}`} />
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <h1 className="text-white font-bold text-center p-10 mt-32 ml-64 mr-56 text-4xl "> DINAS KOMUNIKASI DAN INFORMATIKA KOTA TANJUNGPINANG</h1>        
            </div>
           
        </div>
    );
}

export default Carousel;
