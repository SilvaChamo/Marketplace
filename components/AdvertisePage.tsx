
import React, { useState, useEffect } from 'react';

interface AdvertisePageProps {
  onBack: () => void;
  onOpenRegister: () => void;
  onViewAllCategories: () => void;
}

const AD_SECTORS = [
  {
    title: "Tecnologia & Inovação",
    color: "blue",
    ads: [
      { id: 1, brand: "MZ Cloud", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", desc: "Soluções de Hosting e Cloud em Maputo." },
      { id: 2, brand: "Appify MZ", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800", desc: "Desenvolvimento de apps mobile sob medida." },
      { id: 3, brand: "CyberSafe", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", desc: "Proteção de dados para empresas nacionais." },
      { id: 4, brand: "Telecom Pro", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800", desc: "Internet dedicada de alta velocidade." }
    ]
  },
  {
    title: "Gastronomia & Lazer",
    color: "orange",
    ads: [
      { id: 5, brand: "Restaurante Maré", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", desc: "Frutos do mar frescos com vista para o Índico." },
      { id: 6, brand: "Café Central", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800", desc: "O melhor pequeno-almoço executivo da cidade." },
      { id: 7, brand: "Lounge 24", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800", desc: "Cocktails exclusivos e música ao vivo." },
      { id: 8, brand: "Grill Master", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800", desc: "Cortes premium e churrasco tradicional." }
    ]
  },
  {
    title: "Imobiliário & Construção",
    color: "slate",
    ads: [
      { id: 9, brand: "Torres do Índico", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", desc: "Escritórios de luxo no coração de Maputo." },
      { id: 10, brand: "Matola Residenciais", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", desc: "Condomínios seguros para a sua família." },
      { id: 11, brand: "Constru MZ", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800", desc: "Materiais de construção de alta resistência." },
      { id: 12, brand: "Design Int", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800", desc: "Arquitetura e interiores corporativos." }
    ]
  }
];

const AdvertisePage: React.FC<AdvertisePageProps> = ({ onBack, onOpenRegister, onViewAllCategories }) => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [showPricing, setShowPricing] = useState(false);
  
  const videos = [
    "https://assets.mixkit.co/videos/preview/mixkit-modern-office-space-with-people-working-4441-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-city-traffic-at-night-with-light-trails-4432-large.mp4"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen pb-20 animate-in fade-in duration-700">
      {/* Modal de Tabela de Preços */}
      {showPricing && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setShowPricing(false)}></div>
          <div className="relative bg-white w-full max-w-5xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-black text-gray-900 tracking-tighter">Investimento Publicitário</h3>
                <button onClick={() => setShowPricing(false)} className="text-gray-400 hover:text-gray-900">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Impacto Local", price: "2.500", feat: ["Posição em Categoria", "Mini Banner Rotativo", "Relatório Mensal", "Suporte Email"] },
                  { name: "Premium Nacional", price: "7.500", feat: ["Banner Home Page", "Selo Verificado Gold", "Produção de Vídeo 15s", "Acesso VIP Eventos"], highlight: true },
                  { name: "Corporativo", price: "25.000", feat: ["Outdoors Digitais", "Gestor de Tráfego Dedicado", "Entrevistas Exclusivas", "Dashboard Real-time"] }
                ].map((plan, i) => (
                  <div key={i} className={`p-8 rounded-3xl border ${plan.highlight ? 'bg-orange-600 border-orange-500 shadow-2xl shadow-orange-600/20' : 'bg-gray-50 border-gray-100'}`}>
                    <h4 className={`font-black text-xl mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h4>
                    <div className="mb-8">
                      <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                      <span className={`text-[10px] font-bold ml-1 ${plan.highlight ? 'text-orange-100' : 'text-gray-400'}`}>MT/MÊS</span>
                    </div>
                    <ul className="space-y-4 mb-10">
                      {plan.feat.map((f, j) => (
                        <li key={j} className={`text-xs font-bold flex items-center gap-2 ${plan.highlight ? 'text-white' : 'text-gray-600'}`}>
                          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => { setShowPricing(false); onOpenRegister(); }}
                      className={`w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${plan.highlight ? 'bg-white text-orange-600 hover:bg-orange-50' : 'bg-gray-900 text-white hover:bg-black'}`}
                    >
                      Solicitar Plano
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Banner de Vídeo Grande (Showcase) - Altura aumentada com padding de 50px */}
      <section className="relative min-h-[85vh] w-full overflow-hidden flex items-center py-[50px]">
        <video 
          key={activeVideo}
          autoPlay muted loop playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-1000"
        >
          <source src={videos[activeVideo]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
        
        <div className="relative w-full z-10 px-6 md:px-20">
          <div className="container mx-auto">
            <button 
              onClick={onBack}
              className="mb-8 flex items-center gap-2 text-white/60 hover:text-orange-500 font-black uppercase text-[10px] tracking-[0.3em] transition-all group"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar ao Marketplace
            </button>
            <span className="text-orange-500 font-black uppercase tracking-[0.5em] text-[10px] block mb-4">Espaço Publicitário Premium</span>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-8 drop-shadow-2xl max-w-5xl">
              Destaque a sua Marca <br /> no Coração do Negócio
            </h1>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onOpenRegister}
                className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-2xl shadow-orange-600/20 active:scale-95 border-b-4 border-orange-800"
              >
                Reservar Meu Espaço
              </button>
              <button 
                onClick={() => setShowPricing(true)}
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/20 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all"
              >
                Ver Tabela de Preços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seções de Anúncios Categorizados */}
      <div className="container mx-auto px-6 -mt-20 relative z-20">
        {AD_SECTORS.map((sector, sIdx) => (
          <div key={sIdx} className="mb-24">
            <div className="flex items-center justify-between mb-8 border-l-4 border-orange-600 pl-6">
              <div>
                <h2 className="text-white text-3xl font-black tracking-tight">{sector.title}</h2>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Destaques verificados</p>
              </div>
              <button 
                onClick={onViewAllCategories}
                className="text-orange-500 font-black text-[10px] uppercase tracking-widest hover:text-white transition-colors"
              >
                Ver todos do sector →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sector.ads.map((ad) => (
                <div key={ad.id} className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all duration-500 shadow-2xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={ad.image} alt={ad.brand} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-white font-black text-lg tracking-tight group-hover:text-orange-500 transition-colors">{ad.brand}</h4>
                      <span className="bg-orange-600/10 text-orange-500 text-[8px] font-black px-2 py-1 rounded uppercase">AD</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium mb-6">{ad.desc}</p>
                    <button className="w-full bg-white/5 hover:bg-orange-600 text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all">
                      Saber Mais
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Banner Mini entre secções (Opcional) */}
            {sIdx === 0 && (
              <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-700 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-orange-900/20">
                <div className="text-center md:text-left">
                  <h3 className="text-white text-2xl font-black tracking-tighter mb-2 italic">Promoção Relâmpago de Anúncios!</h3>
                  <p className="text-orange-100 text-xs font-bold uppercase tracking-widest">50% de Desconto para Novos Parceiros em Maputo</p>
                </div>
                <button 
                  onClick={onOpenRegister}
                  className="bg-white text-orange-600 px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-gray-100 transition-colors shrink-0"
                >
                  Aproveitar Agora
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertisePage;
