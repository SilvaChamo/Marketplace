
import React from 'react';
import { CATEGORIES } from '../constants';

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">Explore por Categorias</h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto mb-5 rounded-full"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Encontre exatamente o que você precisa entre os milhares de estabelecimentos parceiros em todo o território nacional.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="relative group aspect-square overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-[1.25rem]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${cat.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-orange-950/90 transition-colors duration-500"></div>
              <div className="relative h-full p-6 flex flex-col justify-end">
                <div className="bg-white/30 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 transform group-hover:-translate-y-1 group-hover:bg-orange-600 transition-all duration-500 border border-white/40 shadow-xl">{cat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{cat.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-orange-200/80 font-medium text-xs uppercase tracking-wider">{cat.count} Empresas</p>
                  <svg className="w-5 h-5 text-white/60 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
