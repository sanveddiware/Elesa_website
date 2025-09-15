// src/components/layout/Footer.jsx

import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#070122] text-gray-300 py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Brand */}
        <div className="flex flex-col items-start">
  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
    ELESA
  </h1>
  <p className="text-white text-base mt-2">
    Empowering students through collaboration and innovation.
  </p>
</div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
    Follow us on:
  </h1>
          <a 
      href="https://www.instagram.com/elesa_wce/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-pink-500 transition"
    >
      <Instagram size={28} />
    </a>

    <a 
      href="https://www.linkedin.com/company/elesa-wce/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-500 transition"
    >
      <Linkedin size={28} />
    </a>

    <a 
      href="https://www.facebook.com/wcesELESA?mibextid=ZbWKwL" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-600 transition"
    >
      <Facebook size={28} />
    </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ELESA. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
