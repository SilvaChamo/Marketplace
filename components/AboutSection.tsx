
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
            <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-xs block mb-4">A Nossa Jornada</span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
              Construindo a infraestrutura digital <br /> <span className="text-orange-600">para o comércio moçambicano.</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Trabalho de Equipa" 
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl hidden md:block border border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-5xl font-black text-orange-600 tracking-tighter">100%</span>
                    <span className="text-gray-400 font-black uppercase text-[9px] tracking-[0.2em] mt-2">Foco Nacional</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-10">
              <p className="text-2xl text-gray-800 leading-relaxed font-bold tracking-tight">
                Mais do que um diretório, somos o ecossistema que formaliza e potencializa a presença online de marcas moçambicanas.
              </p>
              <p className="text-gray-500 leading-relaxed text-lg">
                O Marketplace nasceu da necessidade crítica de conectar o talento empresarial local com um público cada vez mais digitalizado. Desde pequenos varejistas até grandes indústrias, nossa missão é democratizar o acesso às ferramentas de marketing de alto nível, permitindo que o mérito do produto seja o único fator determinante para o sucesso.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="text-4xl mb-5">👁️</div>
                  <h4 className="text-gray-900 font-black mb-3 text-lg">Visão 2030</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Tornar-nos a espinha dorsal do comércio eletrônico em Moçambique, integrando buscas, pagamentos e logística num só local.</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="text-4xl mb-5">💡</div>
                  <h4 className="text-gray-900 font-black mb-3 text-lg">Inovação Social</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Utilizar a tecnologia como ferramenta de inclusão econômica, trazendo visibilidade para negócios de todas as províncias.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Secção Serviços */}
      <section className="py-32 bg-orange-50/40">
        <div className="container mx-auto px-6 text-center">
          <span className="text-gray-400 font-black uppercase tracking-widest text-[9px] mb-4 block">Padrão de Excelência</span>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-20 tracking-tight">Pilares de Atuação</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Autoridade Digital', desc: 'Criamos perfis institucionais que transmitem confiança imediata aos seus futuros clientes e parceiros.', icon: '🌐' },
              { title: 'Inteligência Analítica', desc: 'Transformamos dados complexos de tráfego em insights simples para você tomar melhores decisões de negócio.', icon: '📊' },
              { title: 'Conversão Direta', desc: 'Pontes de contato otimizadas para que o interesse do cliente se transforme em conversa no WhatsApp em segundos.', icon: '📲' }
            ].map((s, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-5xl mb-8 transition-transform group-hover:scale-110 duration-500 drop-shadow-lg">{s.icon}</div>
                <h4 className="text-xl font-black text-gray-900 mb-4">{s.title}</h4>
                <p className="text-gray-500 max-w-xs mx-auto text-sm leading-relaxed font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Secção de Equipa */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                  alt="Equipa Marketplace" 
                  className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-orange-600 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="mb-14">
                <h3 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Talento local, visão global</h3>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                  Nossa equipe é formada por estrategistas, designers e engenheiros que conhecem profundamente as particularidades do mercado de Maputo a Pemba. Combinamos esse "saber local" com as melhores práticas tecnológicas globais.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-8 bg-gray-900 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-800">
                  <h4 className="text-orange-500 font-black text-xl mb-4">Cultura de Hipercrescimento</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Não entregamos apenas "likes". Focamos em ROI (Retorno sobre Investimento). Desenvolvemos estratégias que garantem que sua presença em nossa plataforma se pague rapidamente através de novos contratos fechados.
                  </p>
                </div>
                <div className="p-8 bg-orange-600 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-orange-500">
                  <h4 className="text-white font-black text-xl mb-4">Ética e Transparência</h4>
                  <p className="text-orange-50 text-sm leading-relaxed">
                    Valorizamos parcerias de longo prazo. Todos os nossos processos de publicidade e indexação são transparentes, garantindo que você entenda exatamente onde seu investimento está gerando mais valor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Secção Final */}
      <section className="py-32 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-orange-600 font-black uppercase tracking-widest text-[9px] mb-4 block">Suporte Especializado</span>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">Apoio operacional completo</h3>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">O Marketplace oferece serviços complementares para garantir que sua presença digital seja impecável desde o primeiro dia de ativação.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Sessões de Fotos', desc: 'Produção visual profissional para seus produtos e sede.', icon: '📸' },
              { title: 'Copywriting VIP', desc: 'Textos persuasivos escritos por especialistas em vendas.', icon: '✍️' },
              { title: 'Gestão de Anúncios', desc: 'Campanhas patrocinadas dentro e fora da plataforma.', icon: '📢' },
              { title: 'Google My Business', desc: 'Otimização completa do seu perfil geográfico externo.', icon: '🚀' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl text-center border border-gray-100 hover:shadow-2xl hover:border-orange-200 transition-all group">
                <div className="text-4xl mb-5 group-hover:rotate-12 transition-transform">{item.icon}</div>
                <h5 className="font-black text-gray-900 mb-3">{item.title}</h5>
                <p className="text-gray-400 text-[11px] leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
