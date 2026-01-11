
import React from 'react';

interface AdSectionProps {
  onOpenRegister: () => void;
}

const AdSection: React.FC<AdSectionProps> = ({ onOpenRegister }) => {
  return (
    <section id="advertise" className="relative py-24 overflow-hidden bg-gray-200">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 border border-orange-200 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                Rede Nacional de Painéis
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight">
                Destaque sua Marca nas <span className="text-orange-600 whitespace-nowrap">Maiores Avenidas</span>
              </h2>
            </div>
            <p className="text-gray-600 text-sm font-medium mb-5 leading-relaxed max-w-xl">
              Impacte milhares de moçambicanos diariamente com outdoors estrategicamente localizados.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Presença Institucional', desc: 'Campanhas de alto nível e confiança.' },
                { title: 'Visibilidade 24h', desc: 'Sua marca ativa o tempo todo.' },
                { title: 'Posicionamento VIP', desc: 'Entradas de cidades e polos comerciais.' },
                { title: 'Design de Impacto', desc: 'Consultoria para artes que vendem.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start group">
                  <div className="mt-1 bg-white shadow-sm rounded-lg p-1.5 shrink-0 group-hover:bg-orange-600 transition-colors duration-300">
                    <svg className="w-3.5 h-3.5 text-orange-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-tight">{item.title}</h4>
                    <p className="text-gray-500 text-[10px] font-medium leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <button 
                onClick={onOpenRegister}
                className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-black text-base uppercase tracking-widest transition-all shadow-xl shadow-orange-900/20 active:scale-95"
              >
                Consultar Disponibilidade
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              <div className="bg-[#2a2a2a] p-3 rounded-[0.5rem] shadow-2xl border-4 border-gray-700">
                <div className="bg-[#111] relative aspect-[16/9] overflow-hidden">
                  <div className="absolute inset-0 flex">
                    <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" alt="Motor e Engenharia" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                    <div className="absolute right-0 top-0 h-full w-1/2 flex items-end justify-end overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1507537297325-5928624c601e?auto=format&fit=crop&q=80&w=800" alt="Técnico Profissional" className="h-full object-cover grayscale-[0.5] contrast-[1.2]" />
                       <div className="absolute inset-0 bg-blue-900/20 mix-blend-color"></div>
                    </div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
                      <div className="flex justify-between items-start">
                        <div className="bg-white p-1.5 rounded-sm shadow-sm flex items-center gap-2 max-w-[120px]">
                           <div className="w-8 h-8 flex items-center justify-center border border-gray-100 p-1">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Emblem_of_Mozambique.svg" alt="Emblema de Moçambique" className="w-full" />
                           </div>
                           <div className="flex flex-col">
                             <div className="text-[5px] font-black uppercase text-gray-800 leading-none">Secretaria de Estado</div>
                             <div className="text-[4px] font-bold text-gray-600 leading-none mt-0.5">Do Ensino Técnico-Profissional</div>
                           </div>
                        </div>
                      </div>
                      <div className="max-w-[65%] mt-2">
                        <h3 className="text-white text-xl md:text-2xl font-black leading-tight mb-2 uppercase">"Por um ensino <br /><span className="text-white/90">técnico-profissional de</span> <br /><span className="bg-white text-gray-900 px-1">qualidade, relevante e inclusivo"</span></h3>
                      </div>
                      <div className="flex justify-between items-end border-t border-white/10 pt-2">
                        <div className="text-[6px] text-white/80 font-bold max-w-[200px] leading-tight">Rua de Kassuende Nº 167 R/C - Polana Cimento | Maputo, Moçambique<br />Email: info@seetp.gov.mz</div>
                        <div className="bg-[#004d2c] text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest border border-white/10">www.seetp.gov.mz</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-white/5 to-transparent pointer-events-none"></div>
                </div>
              </div>
              <div className="flex justify-around px-20">
                <div className="w-3 h-20 bg-gray-400/50"></div>
                <div className="w-3 h-20 bg-gray-400/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdSection;
