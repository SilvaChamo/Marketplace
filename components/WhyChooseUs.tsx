
import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-orange-600 font-black uppercase tracking-widest text-[10px] mb-4 block">Diferenciais Competitivos</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-5 tracking-tight">Porque o <span className="text-orange-600">Marketplace</span> é a escolha certa para sua expansão?</h2>
            <p className="text-gray-600 text-sm font-medium mb-5 leading-relaxed max-w-xl">
              Diferente de diretórios comuns, oferecemos um ecossistema completo de marketing. Não apenas listamos seu nome; construímos sua autoridade digital através de SEO avançado e integração com canais de venda direta.
            </p>
            <div className="space-y-8">
              <div className="flex gap-5 items-start group">
                <div className="text-orange-600 bg-orange-50 p-3 rounded-xl transform group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-black text-gray-900 mb-2">Visibilidade em Motores de Busca</h4>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed max-w-md">Otimizamos cada perfil individualmente para que sua empresa apareça no topo do Google quando clientes buscarem por serviços específicos em sua localidade.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start group">
                <div className="text-blue-600 bg-blue-50 p-3 rounded-xl transform group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-black text-gray-900 mb-2">Métricas de Desempenho em Tempo Real</h4>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed max-w-md">Acesse um painel exclusivo para visualizar quantos clientes viram seu perfil, clicaram no seu WhatsApp e quais os horários de maior procura pelo seu serviço.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex gap-6 items-center">
            <div className="flex flex-col gap-6 w-1/2">
              <div className="bg-[#0f172a] p-8 rounded-2xl shadow-xl flex flex-col justify-center h-48 transform transition-transform hover:-translate-y-1 cursor-default">
                <span className="text-gray-500 text-[9px] font-black mb-3 block uppercase tracking-[0.2em]">Crescimento 2024</span>
                <div className="text-4xl font-black text-orange-500 mb-2 tracking-tighter">+85%</div>
                <p className="text-gray-400 text-[11px] font-medium leading-relaxed">Aumento verificado na geração de leads qualificados para o setor de serviços logo no primeiro trimestre de adesão.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-start justify-center h-48 transform transition-transform hover:translate-y-1 cursor-default">
                <div className="text-blue-600 mb-4"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div>
                <h4 className="text-gray-900 font-black text-base mb-2">Ecossistema Colaborativo</h4>
                <p className="text-gray-500 text-[10px] font-medium leading-relaxed">Conecte-se com outros CEOs moçambicanos em fóruns privados para troca de experiências e parcerias B2B exclusivas.</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-1/2 -mt-12">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-start justify-center h-48 transform transition-transform hover:translate-y-1 cursor-default">
                <div className="text-orange-600 mb-4"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div>
                <h4 className="text-gray-900 font-black text-base mb-2">Suporte Local 24/7</h4>
                <p className="text-gray-500 text-[10px] font-medium leading-relaxed">Equipa técnica sediada em Maputo pronta para auxiliar na criação do seu catálogo e otimização das fotos dos seus produtos.</p>
              </div>
              <div className="bg-orange-600 p-8 rounded-2xl shadow-xl flex flex-col items-start justify-center h-48 transform transition-transform hover:-translate-y-1 cursor-default">
                <div className="text-white mb-4"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M5 9l1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7z"/></svg></div>
                <h4 className="text-white font-black text-base mb-2">SEO de Alta Performance</h4>
                <p className="text-white/90 text-[10px] font-medium leading-relaxed">Utilizamos as mais recentes técnicas de indexação semântica para garantir que seu negócio domine as buscas orgânicas locais.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
