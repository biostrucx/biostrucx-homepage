// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;

