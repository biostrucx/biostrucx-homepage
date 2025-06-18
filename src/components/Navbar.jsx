import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white font-semibold text-sm tracking-wide">
        
        {/* LOGO */}
        <div className="text-xl font-extrabold">BioStrucX</div>

        {/* MENU CENTER */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:text-green-400">Home</a>
          <a href="#mission" className="hover:text-green-400">Our Mission</a>
          <a href="#design" className="hover:text-green-400">BioStruct Design</a>
          <a href="#materials" className="hover:text-green-400">BioX Materials</a>
          <a href="#modular" className="hover:text-green-400">Modular Structures</a>
          <a href="#launchpad" className="hover:text-green-400">Launchpad</a>
          <a href="#live" className="hover:text-green-400">BioStrucX Live</a>
          <a href="#impact" className="hover:text-green-400">Impact</a>
          <a href="#shop" className="hover:text-green-400">Shop</a>

          {/* MORE DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="hover:text-green-400 flex items-center"
            >
              More ▼
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-44 bg-black text-white rounded-md shadow-lg border border-gray-700 z-10">
                <a href="#careers" className="block px-4 py-2 hover:bg-gray-800">Careers</a>
                <a href="#supplier" className="block px-4 py-2 hover:bg-gray-800">Be a Supplier</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
