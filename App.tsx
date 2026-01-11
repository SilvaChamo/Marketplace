
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSlider from './components/FeaturedSlider';
import AdSection from './components/AdSection';
import Categories from './components/Categories';
import JoinSection from './components/JoinSection';
import WhyChooseUs from './components/WhyChooseUs';
import PricingSection from './components/PricingSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  // Faz o scroll para o topo sempre que mudar de "página"
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-orange-100 selection:text-orange-900 scroll-smooth">
      <Navbar onNavigate={(page: 'home' | 'about') => setCurrentPage(page)} currentPage={currentPage} />
      
      <main className="transition-all duration-500">
        {currentPage === 'home' ? (
          <>
            {/* Conteúdo da Home Page */}
            <Hero />
            <FeaturedSlider />
            <Categories />
            <AdSection />
            <JoinSection />
            <WhyChooseUs />
            <PricingSection />
          </>
        ) : (
          <div className="pt-20"> {/* Espaçamento para a Navbar fixa */}
            <AboutSection onBack={() => setCurrentPage('home')} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
