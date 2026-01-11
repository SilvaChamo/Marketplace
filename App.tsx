
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
import CategoriesPage from './components/CategoriesPage';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'all-categories'>('home');
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const openRegister = () => setIsRegisterModalOpen(true);

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-orange-100 selection:text-orange-900 scroll-smooth">
      <Navbar 
        onNavigate={(page: any) => setCurrentPage(page)} 
        currentPage={currentPage}
        onOpenRegister={openRegister}
      />
      
      <main className="transition-all duration-500">
        {currentPage === 'home' && (
          <>
            <Hero onOpenRegister={openRegister} onSeeCategories={() => setCurrentPage('all-categories')} />
            <FeaturedSlider />
            <Categories onSeeAll={() => setCurrentPage('all-categories')} />
            <AdSection onOpenRegister={openRegister} />
            <JoinSection onOpenRegister={openRegister} />
            <WhyChooseUs />
            <PricingSection />
          </>
        )}
        
        {currentPage === 'about' && (
          <div className="pt-20">
            <AboutSection onBack={() => setCurrentPage('home')} />
          </div>
        )}

        {currentPage === 'all-categories' && (
          <div className="pt-20">
            <CategoriesPage onBack={() => setCurrentPage('home')} />
          </div>
        )}
      </main>

      <Footer onNavigate={(page: any) => setCurrentPage(page)} />

      {/* Modal de Registro para Anúncio / Mailchimp */}
      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)} 
      />
    </div>
  );
}

export default App;
