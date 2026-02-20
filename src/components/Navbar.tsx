import { useEffect, useState } from 'react';

interface NavbarProps {
  cartCount: number;
  toggleCart: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ cartCount, toggleCart, isDarkMode, toggleTheme }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-[60] mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center text-white">
      <a
        href="#"
        className="font-brutal font-bold text-2xl tracking-tighter hover:italic transition-all"
      >
        BESOKLAGI™
      </a>
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex space-x-6 text-[15px] uppercase tracking-[0.3em] font-bold">
          <a href="#drop" className="hover:text-blue-500 transition">
            Drop
          </a>
          <a href="#manifesto" className="hover:text-blue-500 transition">
            Manifesto
          </a>
        </div>
        
        <button 
          onClick={toggleTheme} 
          className="hover:text-blue-500 transition"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? (
            <i className="fa-solid fa-sun text-xl"></i>
          ) : (
            <i className="fa-solid fa-moon text-xl"></i>
          )}
        </button>

        <button
          onClick={toggleCart}
          className="relative p-2 hover:text-blue-500 transition"
        >
          <i className="fa-solid fa-bag-shopping text-4xl"></i>
          <span
            id="cart-count"
            className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
          >
            {cartCount}
          </span>
        </button>
      </div>
    </nav>
  );
}
