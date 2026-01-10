
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSlider from './components/FeaturedSlider';
import AdSection from './components/AdSection';
import Categories from './components/Categories';
import JoinSection from './components/JoinSection';
import WhyChooseUs from './components/WhyChooseUs';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      
      <main>
        {/* Banner Principal com Slide de Vídeos */}
        <Hero />

        {/* Slider de Empresas em Destaque */}
        <FeaturedSlider />

        {/* Secção de Publicidade Outdoor */}
        <AdSection />

        {/* Categorias Segmentadas */}
        <Categories />

        {/* Secção Faça Parte */}
        <JoinSection />

        {/* Porquê escolher a Mozconect */}
        <WhyChooseUs />

        {/* NOVO: Planos e Preços em Meticais */}
        <PricingSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
