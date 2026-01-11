
import React from 'react';
import { CATEGORIES } from '../constants';
import { Category } from '../types';

interface CategoriesPageProps {
  onBack: () => void;
  onCategoryClick: (category: Category) => void;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ onBack, onCategoryClick }) => {
  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen pb-32">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-gray-400 hover:text-orange-600 font-bold transition-colors group mt-10"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar à Home
        </button>

        <div className="max-w-4xl mb-16">
          <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-xs block mb-4">Diretório Completo</span>
          <h2 className="text-5xl font-black text-gray-900 leading-tight tracking-tighter">
            Todos os Sectores <br /> <span className="text-orange-600">de Actividade</span>
          </h2>
          <p className="text-gray-500 mt-5 text-sm font-medium leading-relaxed max-w-2xl">
            Clique em uma categoria para descobrir as empresas líderes em cada sector do mercado moçambicano.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => onCategoryClick(cat)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-orange-500/30 transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col h-full"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-orange-600/20 transition-colors"></div>
                {/* Ícone central removido conforme solicitado */}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-black text-gray-900 mb-2 group-hover:text-orange-600 transition-colors tracking-tight">{cat.name}</h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed mb-6 flex-grow">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{cat.count} Empresas</p>
                  <span className="text-orange-600 font-bold text-[10px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Ver Empresas →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
