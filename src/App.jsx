import LoginPage from './components/LoginPage';
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
return (
  <div className="bg-black text-white min-h-screen">
    <Navbar />
    <LoginPage />
    <HeroSection />
    {/* Aquí agregaremos luego la sección Our Mission, etc. */}
  </div>
);
}

export default App;


