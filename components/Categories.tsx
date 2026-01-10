
import React from 'react';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">Diretório Profissional</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight tracking-tight">
              Explore por Categorias
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              Conecte-se com fornecedores e serviços verificados em todo o território nacional.
            </p>
          </div>
          <button className="hidden md:block bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-xl font-bold transition-all">
            Ver Tudo
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="relative group aspect-square overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-[1.5rem]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${cat.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-orange-950/90 transition-colors duration-500"></div>
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="bg-white/20 backdrop-blur-xl w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 transform group-hover:-translate-y-2 group-hover:bg-orange-600 transition-all duration-500 border border-white/20 shadow-xl">{cat.icon}</div>
                <h3 className="text-2xl font-black text-white mb-1 group-hover:text-orange-400 transition-colors">{cat.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-orange-200/80 font-bold text-[10px] uppercase tracking-[0.2em]">{cat.count} Empresas</p>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transform group-hover:translate-x-2 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
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
