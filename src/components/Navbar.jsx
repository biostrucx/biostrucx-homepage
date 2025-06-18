import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50); // cambia fondo del navbar
      setShowLogin(y > 600); // muestra login después de sección 3 aprox
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl tracking-widest">
          BioStrucX
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-white text-sm font-semibold">
          <a href="#design" className="hover:text-green-400">BioStruct Design</a>
          <a href="#modular" className="hover:text-green-400">Modular Structures</a>
          <a href="#live" className="hover:text-green-400">BioStrucX Live</a>
          <a href="#shop" className="hover:text-green-400">Shop</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>

          {/* Dropdown More */}
          <div className="relative group">
            <button className="hover:text-green-400">More ▾</button>
            <div className="absolute left-0 mt-2 w-40 bg-black text-white text-sm rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <a href="#careers" className="block px-4 py-2 hover:bg-gray-800">Careers</a>
              <a href="#supplier" className="block px-4 py-2 hover:bg-gray-800">Be a Supplier</a>
            </div>
          </div>
        </div>

        {/* Login Button */}
        {showLogin && (
          <div>
            <a
              href="/login"
              className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-xl text-sm font-semibold"
            >
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

