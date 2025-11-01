import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-lg text-white fixed w-full z-50 top-0 left-0 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-7 flex justify-between items-center">

        <h1 className="text-4xl tracking-tight font-bold text-primary">Foloka</h1>

        <ul className="hidden md:flex space-x-8">
          <li>
            <Scroll to="hero" smooth={true} duration={600} className="cursor-pointer text-primary">
              Home
            </Scroll>
          </li>

          <li>
            <Scroll to="recomandation" smooth={true} duration={600} className="cursor-pointer text-primary">
              Rekomendasi
            </Scroll>
          </li>

          <li>
            <Scroll to="howitworks" smooth={true} duration={600} className="cursor-pointer text-primary">
              Kenapa?
            </Scroll>
          </li>

          <li>
            <RouterLink to="/tentang" className="text-primary">
              Tentang
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/profil" className="text-primary">
              Profil
            </RouterLink>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary px-6 py-4 space-y-3">
          <Scroll to="hero" smooth={true} duration={600} className="block hover:text-cyan-400">
            Home
          </Scroll>
          <RouterLink to="/tentang" className="block hover:text-cyan-400">
            Tentang
          </RouterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
