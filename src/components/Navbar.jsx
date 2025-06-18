import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-extrabold text-xl tracking-wide">
          BioStrucX
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 text-white text-sm font-semibold">
          <a href="#design" className="hover:text-green-400 transition">BioStruct Design</a>
          <a href="#modular" className="hover:text-green-400 transition">Modular Structures</a>
          <a href="#live" className="hover:text-green-400 transition">BioStrucX Live</a>
          <a href="#shop" className="hover:text-green-400 transition">Shop</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>

          {/* More dropdown opcional */}
          <div className="relative group">
            <button className="hover:text-green-400">More ▾</button>
            <div className="absolute mt-2 w-40 bg-black text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <a href="#careers" className="block px-4 py-2 hover:bg-gray-800">Careers</a>
              <a href="#supplier" className="block px-4 py-2 hover:bg-gray-800">Be a Supplier</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

