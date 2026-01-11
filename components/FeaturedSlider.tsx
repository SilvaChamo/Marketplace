
import React, { useRef, useEffect, useState } from 'react';

const FEATURED_BUSINESSES = [
  {
    id: '1',
    name: 'Supermercado Recheio',
    category: 'Varejo',
    location: 'Maputo',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    rating: 5
  },
  {
    id: '2',
    name: 'Polana Serena',
    category: 'Turismo',
    location: 'Maputo',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    rating: 5
  },
  {
    id: '3',
    name: 'Restaurante Zambi',
    category: 'Gastronomia',
    location: 'Marginal',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    rating: 5
  },
  {
    id: '4',
    name: 'Construtora Índico',
    category: 'Engenharia',
    location: 'Matola',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    rating: 4
  },
  {
    id: '5',
    name: 'BIM - Banco Internacional',
    category: 'Banca',
    location: 'Maputo',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800',
    rating: 5
  },
  {
    id: '6',
    name: 'Vodacom Moçambique',
    category: 'Telecom',
    location: 'Maputo',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
    rating: 5
  }
];

const EXTENDED_BUSINESSES = [...FEATURED_BUSINESSES, ...FEATURED_BUSINESSES, ...FEATURED_BUSINESSES];

const FeaturedSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const firstItem = current.firstElementChild as HTMLElement;
      if (!firstItem) return;
      const itemWidth = firstItem.offsetWidth + 24;
      current.scrollBy({
        left: direction === 'left' ? -itemWidth : itemWidth,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScrollReset = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: scrollWidth / 3, behavior: 'instant' as any });
      } else if (scrollLeft <= 5) {
        scrollRef.current.scrollTo({ left: scrollWidth / 3, behavior: 'instant' as any });
      }
    };
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScrollReset);
      currentRef.scrollTo({ left: currentRef.scrollWidth / 3, behavior: 'instant' as any });
    }
    return () => currentRef?.removeEventListener('scroll', handleScrollReset);
  }, []);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      scroll('right');
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-5 gap-6">
          <div>
            <span className="text-orange-600 font-bold uppercase tracking-widest text-[10px]">Parceiros Premium</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 tracking-tight">Destaques da Semana</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="w-10 h-10 bg-gray-400/20 text-black rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-sm active:scale-95">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 bg-gray-400/20 text-black rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-sm active:scale-95">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div ref={scrollRef} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-2 -mx-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {EXTENDED_BUSINESSES.map((biz, index) => (
            <div key={`${biz.id}-${index}`} className="relative min-w-[260px] md:min-w-[calc(25%-18px)] aspect-square overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-700 bg-white rounded-2xl snap-start">
              <img src={biz.image} alt={biz.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                <div className="w-9 h-9 bg-white/20 backdrop-blur-xl border border-white/40 rounded-lg flex items-center justify-center text-white hover:text-orange-500 transition-colors shadow-xl">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
              <div className="absolute top-4 left-4 z-20"><div className="bg-orange-600 text-white text-[8px] font-black px-3 py-1.5 uppercase tracking-widest shadow-lg rounded-full">Premium</div></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <div className="flex items-center gap-2 mb-1"><span className="text-orange-400 font-bold text-[8px] uppercase tracking-widest bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">{biz.category}</span></div>
                <h3 className="text-white text-lg font-black mb-1 leading-tight drop-shadow-md">{biz.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (<svg key={i} className={`w-2.5 h-2.5 ${i < biz.rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
                </div>
                <div className="flex items-center text-white/90 text-[10px] gap-1.5 font-bold uppercase tracking-widest">
                  <svg className="w-3 h-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                  {biz.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default FeaturedSlider;
