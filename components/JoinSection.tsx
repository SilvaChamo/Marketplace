
import React from 'react';

const JoinSection: React.FC = () => {
  return (
    <section id="advertise" className="relative py-[20vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2000" alt="Mercado em Moçambique" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/95 to-orange-800/80 backdrop-blur-[2px]"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Layout: Card na esquerda (flex-row-reverse), Texto na direita com separação de 30px */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-[30px]">
          
          {/* Lado Direito: Conteúdo de Texto */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold tracking-widest uppercase mb-6">Oportunidade Única</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Faça parte da maior rede empresarial</h2>
            <p className="text-xl text-orange-50 mb-10 leading-relaxed">Não perca as oportunidades do mercado moçambicano. Milhares de consumidores buscam diariamente por serviços como os seus. Posicione-se agora.</p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4 items-start">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Crescimento Acelerado</h4>
                  <p className="text-orange-100/70 text-sm">Aumente sua base de clientes em até 3x no primeiro semestre.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Visibilidade Local</h4>
                  <p className="text-orange-100/70 text-sm">Apareça para quem está perto de você em Maputo, Matola e Beira.</p>
                </div>
              </div>
            </div>
            <button className="bg-white text-orange-900 hover:bg-orange-50 px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl hover:scale-105 active:scale-95">Cadastrar Minha Empresa</button>
          </div>

          {/* Lado Esquerdo: Card com Imagem de Referência e Padding de 20px */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="bg-white rounded-[3rem] p-[20px] w-full max-w-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              {/* Imagem do Card: Inclusão e Colaboração Africana */}
              <div className="rounded-[2rem] overflow-hidden aspect-[16/9] mb-8 shadow-sm border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80&w=1200" 
                  alt="Inclusão e Colaboração Profissional" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Estatísticas com letras cinzentas */}
              <div className="flex justify-between items-center text-center gap-2 pb-4 px-4">
                <div className="flex-1">
                  <div className="text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter">500+</div>
                  <div className="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-widest">Empresas</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="flex-1">
                  <div className="text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter">10K+</div>
                  <div className="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-widest">Pesquisas/Dia</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="flex-1">
                  <div className="text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter">24/7</div>
                  <div className="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-widest">Suporte</div>
                </div>
              </div>

              {/* Detalhe sutil de decoração */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JoinSection;
