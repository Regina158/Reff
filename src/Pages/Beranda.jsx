import React from "react";
import Navbar from "../Component/Navbar";
import Carousel from "../Component/Carousel"; 
import Daftar_Berita from "../Component/Daftar_Berita";
import Infografis from "../Component/Infografis";
import Pranala_Kota from "../Component/Pranala_Kota";
import Footer from "../Component/Footer";
import Gpr from "../Component/Gpr";


const Beranda = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Daftar_Berita/>
            
            <Infografis/>
            <Pranala_Kota/>
            <Footer/>
            
        </div>
    );
}

export default Beranda;

