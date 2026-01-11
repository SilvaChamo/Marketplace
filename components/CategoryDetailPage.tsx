
import React, { useState, useEffect } from 'react';
import { Category } from '../types';

interface CategoryDetailPageProps {
  category: Category;
  onBack: () => void;
  onOpenRegister: () => void;
  onBusinessClick: (business: any) => void;
}

const MOCK_BUSINESSES = [
  { id: '1', name: 'Elite Solutions', location: 'Maputo', rating: 5, verified: true, images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800'] },
  { id: '2', name: 'Pérola do Índico', location: 'Beira', rating: 4, verified: false, images: ['https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'] },
  { id: '3', name: 'Global Connect', location: 'Nampula', rating: 5, verified: true, images: ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'] },
  { id: '4', name: 'MZ Inovações', location: 'Matola', rating: 3, verified: true, images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'] },
  { id: '5', name: 'Serviços Rápidos Lda', location: 'Maputo', rating: 4, verified: false, images: ['https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1556155092-8d4a27354644?auto=format&fit=crop&q=80&w=800'] },
  { id: '6', name: 'Comércio & Cia', location: 'Tete', rating: 5, verified: true, images: ['https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'] },
];

const BusinessCard: React.FC<{ biz: any; onBusinessClick: (biz: any) => void }> = ({ biz, onBusinessClick }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % biz.images.length);
    }, 4000 + Math.random() * 2000); 
    return () => clearInterval(timer);
  }, [biz.images.length]);

  return (
    <div 
      onClick={() => onBusinessClick(biz)}
      className="relative h-72 rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-700"
    >
      {biz.images.map((img: string, idx: number) => (
        <img 
          key={idx}
          src={img} 
          alt={biz.name} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentImg ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
      
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1 z-20">
        {biz.images.map((_: any, idx: number) => (
          <div 
            key={idx} 
            className={`h-1 rounded-full transition-all duration-500 ${idx === currentImg ? 'w-4 bg-orange-600' : 'w-1 bg-white/40'}`}
          />
        ))}
      </div>

      <div className="relative h-full p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 w-10 h-10 rounded-xl flex items-center justify-center text-white font-black">
            {biz.name.charAt(0)}
          </div>
          {biz.verified && (
            <span className="bg-orange-600 text-white text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md shadow-lg flex items-center gap-1">
              Verificado
            </span>
          )}
        </div>
        
        <div>
          <h4 className="text-xl font-black text-white mb-1 group-hover:text-orange-400 transition-colors tracking-tight">{biz.name}</h4>
          <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-1">
            <svg className="w-3 h-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
            {biz.location}, MZ
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-3 h-3 ${i < biz.rating ? 'text-orange-400' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <span className="text-white text-[9px] font-black uppercase tracking-widest group-hover:text-orange-400 transition-colors flex items-center gap-1">
              Ver Perfil 
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryDetailPage: React.FC<CategoryDetailPageProps> = ({ category, onBack, onOpenRegister, onBusinessClick }) => {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-500 bg-gray-50 min-h-screen pb-24">
      <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={category.image} className="w-full h-full object-cover" alt={category.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
        <div className="absolute bottom-14 left-0 right-0">
          <div className="container mx-auto px-6">
            <button 
              onClick={onBack}
              className="mb-8 flex items-center gap-2 text-white/70 hover:text-white font-bold transition-colors group"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Todas as Categorias
            </button>
            <div className="flex items-end gap-8">
              <div className="text-7xl md:text-8xl drop-shadow-2xl">{category.icon}</div>
              <div className="mb-2">
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-2">{category.name}</h1>
                <p className="text-orange-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">{category.count} Empresas Encontradas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-28">
              <h3 className="font-black text-gray-900 mb-4 uppercase tracking-tighter text-lg">Sobre esta Categoria</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {category.description}
              </p>
              <div className="pt-8 border-t border-gray-50">
                <button 
                  onClick={onOpenRegister}
                  className="w-full bg-orange-600 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20"
                >
                  Anunciar aqui
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Empresas em Destaque</h2>
              <div className="flex gap-2 w-full sm:w-auto">
                <select className="bg-white border border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500 px-5 py-3 shadow-sm outline-none w-full sm:w-auto cursor-pointer hover:border-orange-500 transition-colors">
                  <option>Mais Relevantes</option>
                  <option>Melhor Classificadas</option>
                  <option>Mais Recentes</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MOCK_BUSINESSES.map((biz) => (
                <BusinessCard key={biz.id} biz={biz} onBusinessClick={onBusinessClick} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;
