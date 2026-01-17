
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
import CategoryDetailPage from './components/CategoryDetailPage';
import BusinessProfilePage from './components/BusinessProfilePage';
import AdvertisePage from './components/AdvertisePage';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import QuoteModal from './components/QuoteModal';
import { Category } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'all-categories' | 'category-detail' | 'business-profile' | 'advertise'>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedBusiness, setSelectedBusiness] = useState<any>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  const openRegister = () => setIsRegisterModalOpen(true);
  const openQuote = (business?: any) => {
    if (business) setSelectedBusiness(business);
    setIsQuoteModalOpen(true);
  };

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setCurrentPage('category-detail');
  };

  const handleBusinessClick = (business: any) => {
    setSelectedBusiness(business);
    setCurrentPage('business-profile');
  };

  const handleNavigate = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-orange-100 selection:text-orange-900">
      <Navbar 
        onNavigate={handleNavigate} 
        currentPage={currentPage}
        onOpenRegister={openRegister}
      />
      
      <main className="pt-0 transition-opacity duration-500">
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-700">
            <Hero onOpenRegister={openRegister} onSeeCategories={() => setCurrentPage('all-categories')} />
            <FeaturedSlider />
            <Categories 
              onSeeAll={() => setCurrentPage('all-categories')} 
              onCategoryClick={handleCategoryClick}
            />
            <AdSection onOpenRegister={openRegister} />
            <JoinSection onOpenRegister={openRegister} />
            <WhyChooseUs />
            <PricingSection />
          </div>
        )}
        
        {currentPage === 'about' && (
          <AboutSection onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'advertise' && (
          <AdvertisePage 
            onBack={() => setCurrentPage('home')} 
            onOpenRegister={openRegister} 
            onViewAllCategories={() => setCurrentPage('all-categories')}
          />
        )}

        {currentPage === 'all-categories' && (
          <CategoriesPage 
            onBack={() => setCurrentPage('home')} 
            onCategoryClick={handleCategoryClick}
            onOpenRegister={openRegister}
          />
        )}

        {currentPage === 'category-detail' && selectedCategory && (
          <CategoryDetailPage 
            category={selectedCategory} 
            onBack={() => setCurrentPage('all-categories')} 
            onOpenRegister={openRegister}
            onBusinessClick={handleBusinessClick}
          />
        )}

        {currentPage === 'business-profile' && selectedBusiness && (
          <BusinessProfilePage 
            business={selectedBusiness} 
            onBack={() => setCurrentPage('category-detail')} 
            onOpenQuote={() => openQuote()}
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)} 
      />

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        businessName={selectedBusiness?.name || "Empresa"}
      />
    </div>
  );
}

export default App;
