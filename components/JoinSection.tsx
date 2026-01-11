
import React from 'react';

interface JoinSectionProps {
  onOpenRegister: () => void;
}

const JoinSection: React.FC<JoinSectionProps> = ({ onOpenRegister }) => {
  return (
    <section id="advertise" className="relative py-[15vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2000" alt="Mercado em Moçambique" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/95 to-orange-900/80 backdrop-blur-[1px]"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] font-black tracking-[0.3em] uppercase mb-6 border border-white/20">Expansão Comercial</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">Posicione sua marca na maior vitrine empresarial de Moçambique</h2>
            <p className="text-sm font-medium text-orange-50/90 mb-5 leading-relaxed">
              Não permita que sua empresa fique invisível no ambiente digital. Nossa plataforma processa milhares de intenções de compra mensalmente, conectando diretamente quem produz com quem consome em todas as províncias.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-md border border-white/10">
                  <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-black text-lg mb-2">Escalabilidade de Vendas</h4>
                  <p className="text-orange-100/60 text-[10px] font-medium leading-relaxed">Implementamos algoritmos de recomendação que sugerem seu serviço para clientes com alto potencial de conversão.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-md border border-white/10">
                  <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-white font-black text-lg mb-2">Geolocalização Estratégica</h4>
                  <p className="text-orange-100/60 text-[10px] font-medium leading-relaxed">Garantimos que sua empresa apareça com prioridade para usuários em sua localidade no momento exato da necessidade.</p>
                </div>
              </div>
            </div>
            <button 
              onClick={onOpenRegister}
              className="bg-orange-600 text-white hover:bg-orange-500 px-10 py-5 rounded-xl font-black text-lg transition-all shadow-2xl hover:scale-[1.02] active:scale-95 border-b-4 border-orange-800"
            >
              Cadastrar Empresa Agora
            </button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="bg-white rounded-3xl p-6 w-full max-w-2xl shadow-2xl relative overflow-hidden group">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-8 shadow-inner border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80&w=1200" 
                  alt="Colaboração Profissional" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              <div className="flex justify-between items-center text-center gap-4 py-4 px-2">
                <div className="flex-1">
                  <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1 tracking-tighter">1.2k+</div>
                  <div className="text-gray-400 text-[9px] font-black uppercase tracking-widest">Parceiros Ativos</div>
                </div>
                <div className="w-px h-10 bg-gray-100"></div>
                <div className="flex-1">
                  <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1 tracking-tighter">85%</div>
                  <div className="text-gray-400 text-[9px] font-black uppercase tracking-widest">Taxa Retenção</div>
                </div>
                <div className="w-px h-10 bg-gray-100"></div>
                <div className="flex-1">
                  <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1 tracking-tighter">24h</div>
                  <div className="text-gray-400 text-[9px] font-black uppercase tracking-widest">Monitoramento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
