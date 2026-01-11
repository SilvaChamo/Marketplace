
import React, { useState } from 'react';

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const plans = [
    { name: 'Essencial', description: 'Para pequenos negócios locais.', monthlyPrice: 950, annualPrice: 6500, features: ['Perfil completo', '1 categoria específica', 'WhatsApp direto', 'Galeria: 5 fotos', 'Suporte e-mail'], buttonText: 'Começar Agora', isPopular: false },
    { name: 'Impulso', description: 'Destaque para médias empresas.', monthlyPrice: 2500, annualPrice: 18000, features: ['Tudo do Essencial', 'Selo Verificado', '3 categorias', 'Prioridade nas buscas', 'Relatórios', 'Suporte 24/7'], buttonText: 'Impulsionar', isPopular: true, tag: 'ECONOMIZE 40%' },
    { name: 'Elite', description: 'Para grandes marcas.', monthlyPrice: 7500, annualPrice: 54000, features: ['Tudo do Impulso', 'Banner Home', 'Categorias Ilimitadas', 'Gestor Dedicado', 'Vídeo Promocional', 'Redes Sociais'], buttonText: 'Domine o Mercado', isPopular: false }
  ];

  return (
    <section id="pricing" className="relative py-24 overflow-hidden bg-gray-200">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">Planos e Investimentos</h2>
          <p className="text-gray-600 mb-4 max-w-xl mx-auto font-medium text-sm leading-relaxed">Escolha o nível de visibilidade ideal para o seu negócio.</p>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-white p-1 rounded-2xl flex items-center relative w-60 h-12 border border-gray-300 shadow-sm">
              <button onClick={() => setIsAnnual(true)} className={`relative z-10 flex-1 h-full rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1 ${isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>
                Anual <span className="bg-orange-600 text-white text-[7px] px-1.5 py-0.5 rounded-md">-40%</span>
              </button>
              <button onClick={() => setIsAnnual(false)} className={`relative z-10 flex-1 h-full rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center ${!isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>Mensal</button>
              <div className={`absolute top-1 left-1 bg-gray-100 shadow-inner rounded-xl h-10 w-[116px] transition-transform duration-500 ease-in-out border border-gray-200 ${!isAnnual ? 'translate-x-[118px]' : 'translate-x-0'}`} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl pt-8 px-8 pb-8 transition-all duration-700 hover:shadow-2xl flex flex-col transform 
                ${plan.isPopular 
                  ? 'ring-4 ring-orange-500 shadow-2xl scale-105 z-10' 
                  : 'border border-gray-100 shadow-xl opacity-95'
                }`}
            >
              {plan.isPopular && (<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">MAIS ESCOLHIDO</div>)}
              <div className="mb-6">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-xs font-medium mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-gray-400">MT</span>
                  <span className="text-4xl font-black text-gray-900 tracking-tighter">{isAnnual ? Math.floor(plan.annualPrice / 12).toLocaleString() : plan.monthlyPrice.toLocaleString()}</span>
                  <span className="text-gray-400 font-bold uppercase text-[9px] tracking-widest">/mês</span>
                </div>
                {isAnnual && (<p className="text-[9px] text-orange-600 mt-1 font-black uppercase tracking-widest">MT {plan.annualPrice.toLocaleString()} / ano</p>)}
              </div>
              <button className={`w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest mb-8 transition-all active:scale-95 shadow-lg ${plan.isPopular ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-gray-900 text-white hover:bg-black'}`}>{plan.buttonText}</button>
              <div className="space-y-3 flex-grow mb-4">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className={`mt-0.5 rounded-full p-1 shrink-0 ${plan.isPopular ? 'bg-orange-600' : 'bg-gray-200'}`}><svg className={`w-2.5 h-2.5 ${plan.isPopular ? 'text-white' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M5 13l4 4L19 7" /></svg></div>
                    <span className="text-gray-800 text-xs font-bold leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
