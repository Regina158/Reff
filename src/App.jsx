import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beranda from './Pages/Beranda';
import Berita from './Pages/Berita';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Beranda" element={<Beranda />} />
        <Route path="/Berita" element={<Berita />} />
        <Route path="/" element={<Beranda />} /> {/* Tambahkan route default */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
