
import React from 'react';
import { CATEGORIES } from '../constants';
import { Category } from '../types';

interface CategoriesProps {
  onSeeAll: () => void;
  onCategoryClick: (category: Category) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onSeeAll, onCategoryClick }) => {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">Diretório Profissional</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight tracking-tight">
              Explore por Categorias
            </h2>
            <p className="text-gray-500 mt-4 text-base font-medium">
              Clique em uma categoria para visualizar as empresas e serviços disponíveis.
            </p>
          </div>
          <button 
            onClick={onSeeAll}
            className="hidden md:block bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-xl font-bold transition-all active:scale-95"
          >
            Ver Tudo
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.slice(0, 8).map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => onCategoryClick(cat)}
              className="relative group aspect-square overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-2xl bg-black"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-50" style={{ backgroundImage: `url(${cat.image})` }} />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:from-orange-950/90 transition-all duration-500"></div>
              
              <div className="relative h-full p-8 flex flex-col justify-end">
                {/* Ícone removido conforme solicitado */}
                
                <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-black text-white mb-1 group-hover:text-orange-400 transition-colors tracking-tighter">{cat.name}</h3>
                  <p className="text-orange-200/80 font-bold text-[9px] uppercase tracking-[0.2em]">{cat.count} Empresas Registadas</p>
                </div>

                <div className="mt-4 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                  <p className="text-white/80 text-[11px] font-medium leading-relaxed border-t border-white/10 pt-4">
                    {cat.description}
                  </p>
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
