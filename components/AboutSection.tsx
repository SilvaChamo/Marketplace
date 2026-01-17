
import React from 'react';

interface AboutSectionProps {
  onBack?: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onBack }) => {
  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Banner de Topo - Padronizado 400px */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover" 
          alt="Sobre o Marketplace" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
        <div className="absolute bottom-10 left-0 right-0">
          <div className="container mx-auto px-6">
            {onBack && (
              <button 
                onClick={onBack}
                className="mb-6 flex items-center gap-2 text-white/70 hover:text-white font-bold transition-colors group uppercase text-[9px] tracking-[0.2em]"
              >
                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar
              </button>
            )}
            
            <div className="max-w-4xl">
              <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px] block mb-2">A Nossa Missão</span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter drop-shadow-2xl mb-4">
                Digitalizar o comércio <br /> 
                <span className="text-orange-500">moçambicano!</span>
              </h1>
              <p className="text-white/80 text-sm md:text-lg font-medium leading-relaxed max-w-2xl drop-shadow-md">
                Mais do que um diretório, somos o ecossistema que formaliza e potencializa a presença online de marcas moçambicanas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <section id="about-content" className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Trabalho de Equipa" 
                  className="rounded-3xl shadow-2xl border border-gray-100"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl hidden md:block border border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-5xl font-black text-orange-600 tracking-tighter">100%</span>
                    <span className="text-gray-400 font-black uppercase text-[9px] tracking-[0.2em] mt-2">Foco Nacional</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight uppercase">
                Potencializando o <br /> <span className="text-orange-600">mérito nacional</span>
              </h2>
              {/* Descrição reduzida para o tamanho de um h6 (text-xs/12px) com letras normais */}
              <p className="text-gray-500 text-xs font-normal leading-relaxed max-w-xl">
                O Marketplace nasceu da necessidade crítica de conectar o talento empresarial local com um público cada vez mais digitalizado. Desde pequenos varejistas até grandes indústrias, nossa missão é democratizar o acesso às ferramentas de marketing de alto nível, permitindo que o sucesso seja acessível a todos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors group">
                  <div className="text-4xl mb-5 transition-transform group-hover:scale-110">👁️</div>
                  <h4 className="text-gray-900 font-black mb-3 text-sm tracking-widest uppercase">Visão 2030</h4>
                  <p className="text-gray-400 text-[10px] font-normal leading-relaxed">Tornar-nos a espinha dorsal do comércio eletrônico em Moçambique, integrando buscas, pagamentos e logística num só local.</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors group">
                  <div className="text-4xl mb-5 transition-transform group-hover:scale-110">💡</div>
                  <h4 className="text-gray-900 font-black mb-3 text-sm tracking-widest uppercase">Inovação Social</h4>
                  <p className="text-gray-400 text-[10px] font-normal leading-relaxed">Utilizar a tecnologia como ferramenta de inclusão econômica, trazendo visibilidade para negócios de todas as províncias.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secção Serviços */}
      <section className="py-32 bg-gray-50/50 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Padrão de Excelência</span>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-20 tracking-tighter uppercase">Pilares de Atuação</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Autoridade Digital', desc: 'Criamos perfis institucionais que transmitem confiança imediata aos seus futuros clientes e parceiros.', icon: '🌐' },
              { title: 'Inteligência Analítica', desc: 'Transformamos dados complexos de tráfego em insights simples para você tomar melhores decisões de negócio.', icon: '📊' },
              { title: 'Conversão Direta', desc: 'Pontes de contato otimizadas para que o interesse do cliente se transforme em conversa no WhatsApp em segundos.', icon: '📲' }
            ].map((s, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-5xl mb-8 transition-transform group-hover:scale-110 duration-500 drop-shadow-lg">{s.icon}</div>
                <h4 className="text-lg font-black text-gray-900 mb-4 uppercase tracking-widest">{s.title}</h4>
                <p className="text-gray-400 max-w-xs mx-auto text-[11px] font-normal leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
