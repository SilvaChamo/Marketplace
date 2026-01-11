
import React from 'react';

interface AboutSectionProps {
  onBack?: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* 1. Secção Principal de História */}
      <section id="about" className="pt-20 pb-32 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
        <div className="container mx-auto px-6">
          {onBack && (
            <button 
              onClick={onBack}
              className="mb-12 flex items-center gap-2 text-gray-400 hover:text-orange-600 font-bold transition-colors group"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para Início
            </button>
          )}

          <div className="max-w-4xl mb-20">
            <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-xs block mb-4">A Nossa História</span>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1] tracking-tighter">
              A maior ponte entre <br /> <span className="text-orange-600">Empresas e Moçambique.</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Trabalho de Equipa" 
                  className="rounded-[3rem] shadow-2xl"
                />
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl hidden md:block border border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-5xl font-black text-orange-600 tracking-tighter">100%</span>
                    <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-1">Nacional</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-10">
              <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                Não somos apenas um site. Somos o motor digital que impulsiona o empreendedorismo local.
              </p>
              <p className="text-gray-500 leading-relaxed text-lg">
                O Marketplace nasceu de uma visão clara: digitalizar Moçambique, uma empresa de cada vez. Proporcionamos as ferramentas para que o seu negócio seja encontrado por quem realmente importa.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                  <div className="text-4xl mb-4">👁️</div>
                  <h4 className="text-gray-900 font-black mb-2 text-xl">Visão</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Ser a primeira escolha de busca comercial no país.</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                  <div className="text-4xl mb-4">💡</div>
                  <h4 className="text-gray-900 font-black mb-2 text-xl">Inovação</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Tecnologia de ponta ao serviço do comércio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Secção Relaxante: Nossos Serviços Base */}
      <section className="py-32 bg-orange-50/30">
        <div className="container mx-auto px-6 text-center">
          <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-4 block">Excelência em cada detalhe</span>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-20 tracking-tight">O que fazemos por si</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Visibilidade Digital', desc: 'Colocamos a sua marca no mapa das pesquisas em Moçambique.', icon: '🌐' },
              { title: 'Análise de Tráfego', desc: 'Relatórios detalhados sobre quem visita o seu perfil.', icon: '📊' },
              { title: 'Conexão Direta', desc: 'Integração total com WhatsApp e redes sociais.', icon: '📲' }
            ].map((s, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-5xl mb-6 transition-transform group-hover:scale-110 duration-500">{s.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h4>
                <p className="text-gray-500 max-w-xs mx-auto text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Secção de Equipa e Cards (Equipe à esquerda, texto/cards à direita) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Imagem Equipa à Esquerda */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                  alt="Nossa Equipa Marketplace" 
                  className="rounded-[3.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-600 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
              </div>
            </div>

            {/* Texto e Cards à Direita */}
            <div className="w-full lg:w-1/2">
              <div className="mb-12">
                <h3 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Gente que entende de gente</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  A nossa equipa é composta por especialistas apaixonados por tecnologia e marketing, prontos para elevar o seu negócio ao próximo nível.
                </p>
              </div>

              <div className="space-y-6">
                {/* Card Superior */}
                <div className="p-8 bg-gray-900 rounded-[2.5rem] shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <h4 className="text-orange-500 font-black text-xl mb-3">Cultura de Resultados</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Não focamos apenas em métricas de vaidade. O nosso objetivo é garantir que cada clique se transforme numa oportunidade real de venda para si.
                  </p>
                </div>
                {/* Card Inferior */}
                <div className="p-8 bg-orange-600 rounded-[2.5rem] shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <h4 className="text-white font-black text-xl mb-3">Compromisso Local</h4>
                  <p className="text-orange-100 text-sm leading-relaxed">
                    Conhecemos cada província e cada mercado. Adaptamos as nossas estratégias à realidade moçambicana, garantindo relevância cultural.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Secção Relaxante Final: Serviços de Apoio */}
      <section className="py-32 bg-blue-50/40 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Apoio que nunca para</h3>
            <p className="text-gray-500">O Marketplace oferece uma gama de serviços especializados para garantir o seu sucesso digital.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Fotografia Profissional', icon: '📸' },
              { title: 'Redação Criativa', icon: '✍️' },
              { title: 'Estratégia Social', icon: '📢' },
              { title: 'SEO Especializado', icon: '🚀' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] text-center border border-blue-100/50 hover:shadow-xl transition-all group">
                <div className="text-4xl mb-4 group-hover:rotate-12 transition-transform">{item.icon}</div>
                <h5 className="font-bold text-gray-800">{item.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
