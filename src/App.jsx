import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beranda from './Pages/Beranda';
import Berita from './Pages/Berita';
import SelayangPandang from './Pages/SelayangPandang';
import VisiMisi from './Pages/VisiMisi';
import StrukturOrganisasi from './Pages/StrukturOrganisasi';
import Pengumuman from './Pages/Pengumuman';
import Kalender from './Pages/Kalender';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Beranda" element={<Beranda />} />
        <Route path="/Berita" element={<Berita />} />
        <Route path="/" element={<Beranda />} /> 
        <Route path="/SelayangPandang" element={<SelayangPandang />} /> 
        <Route path="/VisiMisi" element={<VisiMisi/>} /> 
        <Route path="/StrukturOrganisasi" element={<StrukturOrganisasi/>} /> 
        <Route path="/Pengumuman" element={<Pengumuman/>} /> 
        <Route path="/Kalender" element={<Kalender/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
