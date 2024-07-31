import React from "react";

const Footer = () => {
    return (
        <footer className="footer bg-base-300 text-base-content p-10 ">
            <div className="footer-content flex justify-between items-center md:mx-20">
                <div className="contact-info flex items-center">
                    <img src="src/assets/logoD.png" alt="Logo" className="w-20 h-20" /> {/* Update with the actual path to the logo */}
                    <div className="address ml-4">
                        <h4>Diskominfo Tanjungpinang Kota</h4>
                        <p>Jalan Daeng Celak, Komplek Perkantoran,</p>
                        <p>Gedung C Lantai 1 & 2, Senggarang,</p>
                        <p>Kecamatan Tanjungpinang Kota, Tanjungpinang, Kepulauan Riau</p>
                        <p>Email: kominfo@tanjungpinangkota.go.id</p>
                    </div>
                </div>
                <div className="social-media">
                    <h6>Hubungi kami</h6>
                    <div className="social-links flex gap-4">
                        <a href="https://facebook.com" className="link link-hover flex items-center">
                            <svg className="h-8 w-8 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>  {/* Update with the actual path to the icon */}
                           
                        </a>
                        <a href="https://instagram.com" className="link link-hover flex items-center">
                        <svg className="h-8 w-8 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>  {/* Update with the actual path to the icon */}
                        </a>
                        <a href="https://youtube.com" className="link link-hover flex items-center">
                        <svg className="h-8 w-8 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>  {/* Update with the actual path to the icon */}
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-note mt-4 text-center">
                <p>@Dinas Komunikasi dan Informatika Tanjungpinang Kota</p>
            </div>
        </footer>
    );
}

export default Footer;
