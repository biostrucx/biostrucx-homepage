import React from "react";

function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://res.cloudinary.com/di4esyfmv/video/upload/v1750195850/uetvdyeh8r8avpywz30j.mp4"
      />

      {/* Capa oscura de superposición para mayor contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10" />

      {/* Contenido sobre el video */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Structures that Think.  
          <br />
          Materials that Heal.  
          <br />
          A Planet that Breathes.
        </h1>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <a
            href="#vision"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            Discover Our Vision
          </a>
          <a
            href="#live"
            className="bg-red-600 hover:bg-transparent border-2 border-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            Watch Live
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;


