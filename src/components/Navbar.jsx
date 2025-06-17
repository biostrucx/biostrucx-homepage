import React from "react";

function Navbar() {
  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 tracking-wide">
          BioStrucX
        </div>

        {/* Menú central */}
        <nav className="flex flex-wrap justify-center gap-x-6 text-sm font-medium text-gray-700">
          {[
            { label: "Home", href: "#home" },
            { label: "Our Mission", href: "#mission" },
            { label: "BioStruct Design", href: "#design" },
            { label: "BioX Materials", href: "#materials" },
            { label: "Modular Structures", href: "#modular" },
            { label: "Launchpad", href: "#launchpad" },
            { label: "BioStrucX Live", href: "#platform" },
            { label: "Impact", href: "#impact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-gray-800 hover:text-blue-400 transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500 after:opacity-0 hover:after:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Sección derecha: Shop + More */}
        <div className="flex items-center gap-x-6 text-sm font-medium text-gray-700">
          <a
            href="#shop"
            className="relative text-gray-800 hover:text-blue-400 transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500 after:opacity-0 hover:after:opacity-100"
          >
            Shop
          </a>
          <div className="relative group">
            <button className="relative text-gray-800 hover:text-blue-400 transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500 after:opacity-0 group-hover:after:opacity-100">
              More ▼
            </button>
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md overflow-hidden z-10">
              <a href="#careers" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Careers
              </a>
              <a href="#supplier" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Be a Supplier
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;



