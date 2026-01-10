
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* Logo - Lado Esquerdo */}
        <div className="flex items-center gap-2 justify-self-start">
          <div className="bg-orange-600 text-white p-2 rounded-lg font-bold text-xl">M</div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            MARKETPLACE
          </span>
        </div>

        {/* Menu - Centro - Espaçamento de letras reduzido (tracking-tight) */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium text-sm uppercase tracking-tight transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-orange-600' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Botão - Lado Direito */}
        <div className="justify-self-end">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95">
            Inscrever-se
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
