import React from "react";
import Navbar from "../Component/Navbar";
import DaftarBerita from "../Component/Daftar_Berita";

const SelayangPandang =()=>{
    return (
        <div>
            <Navbar/>
            <div className="Justify-center rounded-box md:mx-20">
                <h2 className="text-teal-500 text-xl font-bold  md:my-15">Sejarah
                </h2>
                <hr className="font-bold"/>
                
                <p className="mt-5 text-justify ">Sejak tahun 1983 melalui Peraturan Pemerintah Nomor 31 Tahun 1983, Tanjungpinang berstatus sebagai kota administratif bagian dari Kabupaten Kepulauan Riau, Provinsi Riau. Bersama dengan Dumai yang telah lebih dulu menjadi kota administratif pada tahun 1979, Tanjungpinang merupakan kota administratif kedua di Provinsi Riau. Dasar pembentukan kota administratif di Indonesia ketika itu diatur dalam Undang-Undang Nomor 5 Tahun 1974 tentang Pokok-Pokok Pemerintahan Daerah. Meski berstatus sebagai kota administratif, Tanjungpinang bukanlah sebuah kota otonom karena tidak memiliki Dewan Perwakilan Rakyat Daerah (DPRD). Kota aministratif dipimpin oleh walikota administratif yang bertanggung jawab kepada bupati kabupaten Kepulauan Riau.</p>
                <p className="mt-5 text-justify">Pada tahun 1999 pemerintah mengeluarkan undang-undang baru tentang pemerintahan daerah yaitu Undang-Undang Nomor 22 Tahun 1999 tentang Pemerintahan Daerah. Undang-undang yang dikenal dengan undang-undang otonomi daerah itu lantas membagi wilayah pemerintahan daerah di Indonesia hanya dengan wilayah provinsi, dan wilayah kabupaten atau kota. Tidak ada lagi wilayah pemerintahan dengan status kotamadya, dan kota administratif. Undang-undang otonomi daerah tersebut menyebabkan seluruh wilayah kotamadya dan kota administratif dapat ditingkatkan menjadi kota otonom, atau sebaliknya juga dapat dikembalikan kepada daerah kabupaten induknya.</p>
            </div>
        </div>
    );
}

export default SelayangPandang;