import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("sticky", "top-0", "z-50", "bg-opacity-90", "backdrop-filter", "backdrop-blur-md");
      } else {
        navbar.classList.remove("sticky", "top-0", "z-50", "bg-opacity-90", "backdrop-filter", "backdrop-blur-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navbar" className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/Beranda" className="text-rose-600">Beranda</Link>
            </li>
            <li>
              <Link to="/Berita" className="text-white">Berita</Link>
            </li>
            <li>
              <a>Profil</a>
              <ul className="p-2">
                <li>
                  <Link to="/Selayang Pandang">Selayang Pandang</Link>
                </li>
                <li>
                  <Link to="/Visi & Misi">Visi & Misi</Link>
                </li>
                <li>
                  <Link to="/Struktur Organisasi">Struktur Organisasi</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">Item 3</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Diskominfo</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/Beranda" className="font-semibold">Beranda</Link>
          </li>
          <li>
            <Link to="/Berita" className="font-semibold">Berita</Link>
          </li>
          <li>
            <details>
              <summary>Profil</summary>
              <ul className="p-2">
                <li>
                  <Link to="/Selayang Pandang">Selayang Pandang</Link>
                </li>
                <li>
                  <Link to="/Visi & Misi">Visi & Misi</Link>
                </li>
                <li>
                  <Link to="/Struktur Organisasi">Struktur Organisasi</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/">Item 3</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/">
          <button className="btn">Button</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
