import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
