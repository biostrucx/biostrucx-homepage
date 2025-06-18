import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSection />
      {/* Aquí agregaremos luego la sección Our Mission, etc. */}
    </div>
  );
}

export default App;


