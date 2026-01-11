
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  onNavigate: (page: 'home' | 'about' | 'all-categories' | 'advertise') => void;
  currentPage: string;
  onOpenRegister: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href === '#about') onNavigate('about');
    else if (href === '#categories') onNavigate('all-categories');
    else if (href === '#advertise') onNavigate('advertise');
    else if (href === '#') onNavigate('home');
    setIsMobileMenuOpen(false);
  };

  const shouldBeWhite = isScrolled || currentPage !== 'home';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      shouldBeWhite ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 shrink-0 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="bg-orange-600 text-white w-10 h-10 flex items-center justify-center rounded-xl font-black text-xl shadow-lg shadow-orange-600/20">M</div>
            <span className={`font-black text-xl tracking-tighter ${shouldBeWhite ? 'text-gray-900' : 'text-white'}`}>
              MARKETPLACE
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-bold text-[13px] uppercase tracking-normal transition-all duration-300 hover:scale-105 ${
                  shouldBeWhite ? 'text-gray-600 hover:text-orange-600' : 'text-white/80 hover:text-white'
                } ${currentPage === link.href.replace('#', '') ? 'text-orange-600' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenRegister}
              className="hidden sm:block bg-orange-600 hover:bg-orange-700 text-white px-7 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-orange-600/20 active:scale-95"
            >
              Anunciar Empresa
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${shouldBeWhite ? 'text-gray-900' : 'text-white'}`}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'}`}>
          <div className="flex flex-col p-6 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-900 font-black text-lg uppercase tracking-tighter hover:text-orange-600"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => { onOpenRegister(); setIsMobileMenuOpen(false); }}
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-black uppercase tracking-widest"
            >
              Anunciar Agora
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
