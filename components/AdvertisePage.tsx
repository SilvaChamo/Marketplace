
import React, { useState } from 'react';

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
  const [showPricing, setShowPricing] = useState(false);

  return (
    <div className="bg-white min-h-screen pb-20 animate-in fade-in duration-700">
      {/* Modal de Tabela de Preços */}
      {showPricing && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setShowPricing(false)}></div>
          <div className="relative bg-white w-full max-w-5xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-black text-gray-900 tracking-tighter">Investimento Publicitário</h3>
                <button onClick={() => setShowPricing(false)} className="text-gray-400 hover:text-gray-900 p-2">
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

      {/* Banner de Topo - Padronizado 400px */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover" 
          alt="Publicidade Marketplace" 
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
              Voltar
            </button>
            
            <div className="max-w-4xl">
              <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px] block mb-2">Marketplace Moçambique</span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter drop-shadow-2xl mb-8">
                Digitalizar o comércio <br /> 
                <span className="text-orange-50">moçambicano!</span>
              </h1>

              {/* Botões Ativos Dentro do Banner */}
              <div className="flex flex-wrap gap-4 items-center">
                <button 
                  onClick={onOpenRegister}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all shadow-xl shadow-orange-900/40 active:scale-95 border-b-4 border-orange-800"
                >
                  Anunciar Agora
                </button>
                <button 
                  onClick={() => setShowPricing(true)}
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/30 px-8 py-3.5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all hover:border-white/60"
                >
                  Ver Planos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seções de Anúncios Categorizados */}
      <div className="container mx-auto px-6 py-20 relative z-20">
        {AD_SECTORS.map((sector, sIdx) => (
          <div key={sIdx} className="mb-24">
            <div className="flex items-center justify-between mb-8 border-l-4 border-orange-600 pl-6">
              <div>
                <h3 className="text-gray-900 text-3xl font-black tracking-tight whitespace-nowrap">{sector.title}</h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Destaques verificados</p>
              </div>
              <button 
                onClick={onViewAllCategories}
                className="text-orange-600 font-black text-[10px] uppercase tracking-widest hover:text-gray-900 transition-colors"
              >
                Ver todos do sector →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sector.ads.map((ad) => (
                <div key={ad.id} className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-orange-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={ad.image} alt={ad.brand} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-gray-900 font-black text-lg tracking-tight group-hover:text-orange-600 transition-colors">{ad.brand}</h4>
                      <span className="bg-orange-600/10 text-orange-600 text-[8px] font-black px-2 py-1 rounded uppercase">AD</span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed font-medium mb-6">{ad.desc}</p>
                    <button className="w-full bg-gray-50 hover:bg-orange-600 text-gray-900 hover:text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all">
                      Saber Mais
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertisePage;
