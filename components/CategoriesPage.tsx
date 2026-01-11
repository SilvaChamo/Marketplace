
import React from 'react';
import { CATEGORIES } from '../constants';
import { Category } from '../types';

interface CategoriesPageProps {
  onBack: () => void;
  onCategoryClick: (category: Category) => void;
  onOpenRegister: () => void;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ onBack, onCategoryClick, onOpenRegister }) => {
  return (
    <div className="animate-in fade-in duration-700 bg-white min-h-screen pb-32">
      {/* Banner de Topo Ajustado - Tipografia Mini */}
      <div className="relative h-[45vh] min-h-[350px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover" 
          alt="Diretório de Negócios" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
        <div className="absolute bottom-10 left-0 right-0">
          <div className="container mx-auto px-6">
            <button 
              onClick={onBack}
              className="mb-6 flex items-center gap-2 text-white/70 hover:text-white font-bold transition-colors group uppercase text-[9px] tracking-[0.2em]"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar à Home
            </button>
            
            <div className="max-w-3xl">
              <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[9px] block mb-2">Exploração de Mercado</span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter drop-shadow-2xl mb-4">
                Diretório Completo <br /> <span className="text-orange-500 text-2xl md:text-4xl">de Sectores Moçambicanos</span>
              </h2>
              <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed max-w-xl drop-shadow-md mb-8">
                Navegue pela nossa infraestrutura de negócios e descubra os líderes de mercado em cada sector de actividade em Moçambique.
              </p>

              {/* Botões Ativos */}
              <div className="flex flex-wrap gap-4 items-center">
                <button 
                  onClick={onOpenRegister}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-orange-900/40 active:scale-95 border-b-4 border-orange-800"
                >
                  Anunciar na Rede
                </button>
                <button 
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/30 px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all hover:border-white/60"
                >
                  Ajuda ao Usuário
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => onCategoryClick(cat)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-500/30 transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col h-full"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-orange-600/20 transition-colors"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="text-xl">{cat.icon}</span>
                  <h4 className="text-lg font-black text-gray-900 group-hover:text-orange-600 transition-colors tracking-tight">{cat.name}</h4>
                </div>
                <p className="text-gray-500 text-[11px] font-medium leading-relaxed mb-5 flex-grow">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                  <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">{cat.count} Empresas</p>
                  <span className="bg-orange-50 text-orange-600 font-black text-[8px] px-2.5 py-1 rounded-md uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">Explorar →</span>
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
