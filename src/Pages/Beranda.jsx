import React from "react";
import Navbar from "../Component/Navbar";
import Carousel from "../Component/Carousel"; 
import Daftar_Berita from "../Component/Daftar_Berita";


const Beranda = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Daftar_Berita/>
        </div>
    );
}

export default Beranda;

