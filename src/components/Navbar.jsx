import React from "react";

function Navbar() {
  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 tracking-wide">BioStrucX</div>
        <nav className="hidden md:flex flex-wrap gap-5 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#mission" className="hover:text-blue-500 transition">Our Mission</a>
          <a href="#design" className="hover:text-blue-500 transition">BioStruct Design</a>
          <a href="#materials" className="hover:text-blue-500 transition">BioX Materials</a>
          <a href="#modular" className="hover:text-blue-500 transition">Modular Structures</a>
          <a href="#launchpad" className="hover:text-blue-500 transition">Launchpad</a>
          <a href="#platform" className="hover:text-blue-500 transition">BioStrucX Live</a>
          <a href="#impact" className="hover:text-blue-500 transition">Impact</a>
          <a href="#shop" className="hover:text-blue-500 transition">Shop</a>
          
          <div className="relative group">
            <button className="hover:text-blue-500 transition">More ▼</button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md overflow-hidden z-10">
              <a href="#careers" className="block px-4 py-2 text-sm hover:bg-gray-100">Careers</a>
              <a href="#supplier" className="block px-4 py-2 text-sm hover:bg-gray-100">Be a Supplier</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

