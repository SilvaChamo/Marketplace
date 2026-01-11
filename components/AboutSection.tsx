
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden relative">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-40"></div>

      <div className="container mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-xs block mb-4">Quem Somos</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
            Impulsionando a Economia <br /> <span className="text-orange-600">Digital de Moçambique</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Lado Esquerdo: Imagens e Stats */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="Reunião de negócios em Moçambique" 
                className="rounded-[3rem] shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              {/* Badge Flutuante */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] hidden md:block border border-gray-100">
                <div className="flex flex-col">
                  <span className="text-5xl font-black text-orange-600 tracking-tighter">100%</span>
                  <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mt-1">Foco Nacional</span>
                </div>
              </div>
            </div>
            {/* Círculo decorativo */}
            <div className="absolute -top-12 -left-12 w-48 h-48 border-[16px] border-orange-100 rounded-full -z-10"></div>
          </div>

          {/* Lado Direito: Conteúdo e Valores */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                O <span className="font-bold text-gray-900">MARKETPLACE</span> é a resposta moderna para empresas que buscam visibilidade real num mercado em constante evolução.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Nascemos em Maputo com a visão de que cada empreendedor moçambicano, do micro ao macro, merece uma montra digital de classe mundial. Nossa plataforma não é apenas um diretório; é um ecossistema de crescimento.
              </p>
            </div>

            {/* Grid de Valores/Pilares */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Transparência', desc: 'Dados reais de visualizações e leads para sua empresa.', icon: '🎯' },
                { title: 'Inovação', desc: 'Sempre à frente com as melhores tecnologias de busca.', icon: '🚀' },
                { title: 'Comunidade', desc: 'Fortalecendo parcerias entre marcas nacionais.', icon: '🤝' },
                { title: 'Suporte Local', desc: 'Equipa dedicada em solo nacional para te apoiar.', icon: '🇲🇿' }
              ].map((v, i) => (
                <div key={i} className="group p-6 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-[2rem] border border-transparent hover:border-orange-100">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h4 className="text-gray-900 font-black mb-2 text-lg uppercase tracking-tight">{v.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center gap-6">
               <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-black italic">"M"</div>
               <div>
                 <p className="text-sm font-bold text-gray-900 leading-tight">Direção Executiva</p>
                 <p className="text-xs text-gray-500 uppercase tracking-widest">Marketplace Moçambique</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
