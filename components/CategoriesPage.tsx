
import React from 'react';
import { CATEGORIES } from '../constants';

interface CategoriesPageProps {
  onBack: () => void;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ onBack }) => {
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
          Voltar
        </button>

        <div className="max-w-4xl mb-16">
          <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-xs block mb-4">Exploração Completa</span>
          <h2 className="text-5xl font-black text-gray-900 leading-tight tracking-tighter">
            Diretório de Categorias <br /> <span className="text-orange-600">Empresariais</span>
          </h2>
          <p className="text-gray-500 mt-5 text-sm font-medium leading-relaxed max-w-2xl">
            Navegue por todos os setores ativos da nossa economia. Cada categoria abriga dezenas de fornecedores verificados e prontos para atender às suas necessidades profissionais e pessoais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 shadow-lg">
                <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-orange-600/40 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center text-4xl transform group-hover:scale-125 transition-transform duration-500 drop-shadow-xl">
                  {cat.icon}
                </div>
              </div>
              <h4 className="text-lg font-black text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">{cat.name}</h4>
              <p className="text-xs text-gray-400 font-black uppercase tracking-widest">{cat.count} Empresas Listadas</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
