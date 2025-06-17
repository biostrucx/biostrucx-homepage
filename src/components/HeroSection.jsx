import React from "react";

function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1622994710032-92c3e4dc6e8c?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="text-center max-w-3xl z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide text-blue-100 drop-shadow-lg">
          Structures that Think.  
          <br />
          Materials that Heal.  
          <br />
          A Planet that Breathes.
        </h1>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <a
            href="#vision"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
          >
            Discover Our Vision
          </a>
          <a
            href="#live"
            className="bg-red-600 hover:bg-transparent border-2 border-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
          >
            Watch Live
          </a>
        </div>
      </div>

      {/* Opcional: overlay para oscurecer la imagen */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
    </section>
  );
}

export default HeroSection;

