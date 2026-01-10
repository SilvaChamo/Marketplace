
import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-5 tracking-tight">Porque escolher o <span className="text-orange-600">Marketplace</span> para o seu negócio?</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">Em um mercado dinâmico como o moçambicano, a presença digital é uma necessidade. Nossa plataforma oferece as ferramentas para destacar sua empresa.</p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="text-orange-600 transform group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-0.5">Visibilidade Total</h4>
                  <p className="text-gray-500 text-xs max-w-xs">Apareça nos primeiros resultados das buscas locais.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="text-blue-600 transform group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-0.5">Crescimento Exponencial</h4>
                  <p className="text-gray-500 text-xs max-w-xs">Aumente as suas vendas com campanhas segmentadas.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex gap-6 items-center">
            <div className="flex flex-col gap-6 w-1/2">
              <div className="bg-[#0f172a] p-6 rounded-[1.5rem] shadow-2xl flex flex-col justify-center h-40 transform transition-transform hover:-rotate-1 cursor-default">
                <span className="text-gray-400 text-[10px] font-semibold mb-2 block uppercase tracking-widest">Métrica 2024</span>
                <div className="text-3xl font-black text-orange-600 mb-2 tracking-tighter">+85%</div>
                <p className="text-gray-400 text-[10px] leading-relaxed">Aumento médio de leads no primeiro mês.</p>
              </div>
              <div className="bg-white p-6 rounded-[1.5rem] shadow-2xl border border-gray-50 flex flex-col items-start justify-center h-40 transform transition-transform hover:rotate-1 cursor-default">
                <div className="text-blue-600 mb-3"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div>
                <h4 className="text-gray-900 font-bold text-sm mb-1">Comunidade Ativa</h4>
                <p className="text-gray-500 text-[10px] leading-relaxed">Fóruns exclusivos de empresários.</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-1/2 -mt-10">
              <div className="bg-white p-6 rounded-[1.5rem] shadow-2xl border border-gray-50 flex flex-col items-start justify-center h-40 transform transition-transform hover:rotate-1 cursor-default">
                <div className="text-orange-600 mb-3"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div>
                <h4 className="text-gray-900 font-bold text-sm mb-1">Mapa Preciso</h4>
                <p className="text-gray-500 text-[10px] leading-relaxed">Geolocalização para te encontrarem.</p>
              </div>
              <div className="bg-orange-600 p-6 rounded-[1.5rem] shadow-2xl flex flex-col items-start justify-center h-40 transform transition-transform hover:-rotate-1 cursor-default">
                <div className="text-white mb-3"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M5 9l1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7z"/></svg></div>
                <h4 className="text-white font-bold text-sm mb-1">SEO de Topo</h4>
                <p className="text-white/90 text-[10px] leading-relaxed">Otimização para Google inclusa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
