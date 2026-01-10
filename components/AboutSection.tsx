
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                alt="Nossa Equipa" 
                className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-gray-50 transition-transform hover:scale-[1.02] duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 p-8 rounded-[2rem] shadow-xl z-20 hidden md:block">
                <div className="text-white text-4xl font-black tracking-tighter">10+</div>
                <div className="text-orange-100 text-[10px] font-bold uppercase tracking-widest">Anos de Experiência</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-xs">Nossa Missão</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight tracking-tight">
                Conectando o Coração do Comércio Moçambicano
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              O Marketplace nasceu da necessidade de digitalizar e dar visibilidade às empresas de Moçambique. De Maputo ao Rovuma, nossa plataforma serve como a ponte digital entre marcas de excelência e consumidores exigentes.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-black text-gray-900 mb-2">Inovação Local</h4>
                <p className="text-gray-500 text-xs">Tecnologia desenvolvida a pensar nas particularidades do nosso mercado.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-black text-gray-900 mb-2">Impacto Social</h4>
                <p className="text-gray-500 text-xs">Apoiamos o crescimento de PMEs locais através da visibilidade gratuita e premium.</p>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Membro" />
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-900 italic">"Juntos, construímos o futuro digital de Moçambique."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
