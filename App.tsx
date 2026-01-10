
import React from 'react';
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
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-orange-100 selection:text-orange-900 scroll-smooth">
      <Navbar />
      
      <main>
        {/* Banner Principal com Slide de Vídeos */}
        <Hero />

        {/* Slider de Empresas em Destaque */}
        <FeaturedSlider />

        {/* Categorias Segmentadas */}
        <Categories />

        {/* Secção de Publicidade Outdoor */}
        <AdSection />

        {/* Secção Faça Parte / Call to Action */}
        <JoinSection />

        {/* Porquê escolher a Mozconect */}
        <WhyChooseUs />

        {/* Sobre Nós / Institucional */}
        <AboutSection />

        {/* Planos e Preços */}
        <PricingSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
