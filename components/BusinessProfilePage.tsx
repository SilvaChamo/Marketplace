
import React, { useState, useEffect, useRef } from 'react';

interface BusinessProfilePageProps {
  business: any;
  onBack: () => void;
  onOpenQuote: () => void;
}

const BusinessProfilePage: React.FC<BusinessProfilePageProps> = ({ business, onBack, onOpenQuote }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const baseImages = business.images || [business.image];
  const productImages = [...baseImages, ...baseImages, ...baseImages];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(`Olá ${business.name}, vi o vosso perfil no Marketplace e gostaria de mais informações.`);
    window.open(`https://wa.me/258840000000?text=${message}`, '_blank');
  };

  const handleVisitWebsite = () => {
    window.open('https://www.google.com', '_blank');
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const itemWidth = (current.firstElementChild as HTMLElement)?.offsetWidth + 16 || 300;
      current.scrollBy({
        left: direction === 'left' ? -itemWidth : itemWidth,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      scroll('right');
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovering]);

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
      setTimeout(() => {
        currentRef.scrollTo({ left: currentRef.scrollWidth / 3, behavior: 'instant' as any });
      }, 100);
    }
    return () => currentRef?.removeEventListener('scroll', handleScrollReset);
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-700 bg-white min-h-screen">
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" 
            alt="Produto ampliado" 
          />
        </div>
      )}

      {/* Banner da Empresa - Mínimo 350px */}
      <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={baseImages[0]} className="w-full h-full object-cover" alt={business.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
        <div className="absolute bottom-12 left-0 right-0">
          <div className="container mx-auto px-6">
            <button 
              onClick={onBack}
              className="mb-8 flex items-center gap-2 text-white/70 hover:text-white font-bold transition-colors group"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar
            </button>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-orange-600 rounded-3xl flex items-center justify-center text-4xl md:text-5xl font-black text-white shadow-2xl border-4 border-white/10">
                  {business.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter drop-shadow-lg">{business.name}</h1>
                    {business.verified && (
                      <span className="bg-blue-500 text-white p-1 rounded-full shadow-lg">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      </span>
                    )}
                  </div>
                  <p className="text-orange-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                    {business.location}, Moçambique
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleWhatsAppContact}
                  title="Contactar via WhatsApp"
                  className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-green-600 transition-all shadow-xl hover:scale-110 active:scale-90"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </button>
                <button 
                  onClick={handleVisitWebsite}
                  className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                  Visitar Website
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight uppercase">Sobre a Empresa</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                A {business.name} é uma referência no mercado de {business.location}. Com anos de experiência e um compromisso inabalável com a qualidade, oferecemos soluções inovadoras que atendem às necessidades específicas dos nossos clientes.
              </p>
            </div>
            
            <div 
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="relative"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight uppercase">Produtos & Portfólio</h3>
                <div className="flex gap-3">
                  <button 
                    onClick={() => scroll('left')} 
                    className="w-12 h-12 bg-gray-900/70 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all shadow-xl active:scale-90 group"
                  >
                    <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button 
                    onClick={() => scroll('right')} 
                    className="w-12 h-12 bg-gray-900/70 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all shadow-xl active:scale-90 group"
                  >
                    <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
              
              <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {productImages.map((img: string, i: number) => (
                  <div 
                    key={i} 
                    className="min-w-[300px] md:min-w-[calc(25%-18px)] aspect-video rounded-3xl overflow-hidden shadow-lg group cursor-zoom-in snap-start relative bg-gray-100 shrink-0"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      alt={`Produto ${i + 1}`} 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl text-white">
                        <p className="font-black text-[9px] uppercase truncate">Destaque #{(i % baseImages.length) + 1}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tight uppercase">Especialidades</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {['Consultoria', 'Suporte Técnico', 'Gestão', 'Inovação'].map((item) => (
                  <li key={item} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 font-bold text-gray-700 text-base">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-[25px]">
              {/* Card de Contacto */}
              <div className="bg-gray-950 p-8 md:p-10 rounded-[3rem] text-white shadow-2xl">
                <h3 className="text-xl font-black mb-8 uppercase tracking-widest text-orange-500">Info Contacto</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Funcionamento</p>
                      <p className="font-bold text-sm text-gray-200">Seg - Sex: 08:00 - 18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Localização</p>
                      <p className="font-bold text-sm text-gray-200">{business.location}, MZ</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <button 
                      onClick={onOpenQuote}
                      className="w-full bg-orange-600 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 active:scale-95"
                    >
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>
              </div>

              {/* Card de Verificação - Separado a 25px e Fixo junto */}
              <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100 flex items-center gap-5 shadow-lg">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </div>
                <p className="text-blue-700 text-xs font-black uppercase leading-tight tracking-tight">Empresa Verificada pelo Marketplace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default BusinessProfilePage;
