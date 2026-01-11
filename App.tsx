
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
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import QuoteModal from './components/QuoteModal';
import { Category } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'all-categories' | 'category-detail' | 'business-profile'>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedBusiness, setSelectedBusiness] = useState<any>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedCategory, selectedBusiness]);

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
            <Categories 
              onSeeAll={() => setCurrentPage('all-categories')} 
              onCategoryClick={handleCategoryClick}
            />
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
            <CategoriesPage 
              onBack={() => setCurrentPage('home')} 
              onCategoryClick={handleCategoryClick}
            />
          </div>
        )}

        {currentPage === 'category-detail' && selectedCategory && (
          <div className="pt-20">
            <CategoryDetailPage 
              category={selectedCategory} 
              onBack={() => setCurrentPage('all-categories')} 
              onOpenRegister={openRegister}
              onBusinessClick={handleBusinessClick}
            />
          </div>
        )}

        {currentPage === 'business-profile' && selectedBusiness && (
          <div className="pt-20">
            <BusinessProfilePage 
              business={selectedBusiness} 
              onBack={() => setCurrentPage('category-detail')} 
              onOpenQuote={() => openQuote()}
            />
          </div>
        )}
      </main>

      <Footer onNavigate={(page: any) => setCurrentPage(page)} />

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
