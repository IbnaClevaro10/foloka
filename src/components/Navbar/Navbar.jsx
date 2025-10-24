import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-lg text-white fixed w-full z-50 top-0 left-0 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-7 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl tracking-tight font-bold text-primary">Foloka</h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="text-primary">Home</a></li>
          <li><a href="#about" className="text-primary">Tentang</a></li>
        </ul>

        {/* Burger Icon */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary px-6 py-4 space-y-3">
          <a href="#home" className="block hover:text-cyan-400">Home</a>
          <a href="#about" className="block hover:text-cyan-400">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
