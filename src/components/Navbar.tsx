
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/40 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-black text-xl italic tracking-tighter group-hover:rotate-12 transition-transform duration-300">
            TZS
          </div>
          <span className="font-heading text-xl font-bold tracking-tight">PIXELS</span>
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#services" className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">Systems</a>
          <a href="#portfolio" className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">Portfolio</a>
          <a href="#process" className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">Method</a>
          <a href="#pricing" className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="bg-white hover:bg-gray-200 text-black px-7 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all active:scale-95">
            Get Started
          </a>
        </div>

        <button className="md:hidden text-white p-2 glass-card rounded-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
