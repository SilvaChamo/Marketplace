
import React, { useState } from 'react';

interface BusinessProfilePageProps {
  business: any;
  onBack: () => void;
  onOpenQuote: () => void;
}

const BusinessProfilePage: React.FC<BusinessProfilePageProps> = ({ business, onBack, onOpenQuote }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(`Olá ${business.name}, vi o vosso perfil no Marketplace e gostaria de mais informações.`);
    window.open(`https://wa.me/258840000000?text=${message}`, '_blank');
  };

  const handleVisitWebsite = () => {
    window.open('https://www.google.com', '_blank');
  };

  const productImages = business.images || [business.image];

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-700 bg-white min-h-screen">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" 
            alt="Produto ampliado" 
          />
        </div>
      )}

      <div className="relative h-[45vh] overflow-hidden">
        <img src={productImages[0]} className="w-full h-full object-cover" alt={business.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
        <div className="absolute bottom-10 left-0 right-0">
          <div className="container mx-auto px-6">
            <button 
              onClick={onBack}
              className="mb-8 flex items-center gap-2 text-white/70 hover:text-white font-bold transition-colors group"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para Lista
            </button>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-orange-600 rounded-3xl flex items-center justify-center text-4xl font-black text-white shadow-2xl">
                  {business.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">{business.name}</h1>
                    {business.verified && (
                      <span className="bg-blue-500 text-white p-1 rounded-full">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      </span>
                    )}
                  </div>
                  <p className="text-orange-400 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                    {business.location}, Moçambique
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={handleWhatsAppContact}
                  className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-xl flex items-center gap-2 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  WhatsApp
                </button>
                <button 
                  onClick={handleVisitWebsite}
                  className="bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-xl hover:scale-105"
                >
                  Visitar Website
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight uppercase">Sobre a Empresa</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                A {business.name} é uma referência no mercado de {business.location}. Com anos de experiência e um compromisso inabalável com a qualidade, oferecemos soluções inovadoras que atendem às necessidades específicas dos nossos clientes nacionais e internacionais. Nosso foco é a excelência em cada detalhe.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight uppercase">Produtos & Portfólio</h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Clique para ampliar</p>
              </div>
              
              <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x">
                {productImages.map((img: string, i: number) => (
                  <div 
                    key={i} 
                    className="min-w-[300px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in snap-start relative bg-gray-100"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      alt={`Produto ${i + 1}`} 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white">
                        <p className="font-black text-sm uppercase">Item de Portfólio #{i + 1}</p>
                        <p className="text-[10px] text-white/70 font-bold uppercase mt-1">Alta Qualidade Garantida</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight uppercase">Serviços e Especialidades</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {['Consultoria Estratégica', 'Suporte Técnico 24/7', 'Gestão de Projetos', 'Inovação Digital'].map((item) => (
                  <li key={item} className="flex items-center gap-3 p-5 bg-gray-50 rounded-2xl border border-gray-100 font-bold text-gray-700 hover:border-orange-200 transition-colors">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-950 p-8 rounded-[2.5rem] text-white shadow-2xl sticky top-24">
              <h3 className="text-xl font-black mb-8 uppercase tracking-widest text-orange-500">Informações Rápidas</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Horário de Funcionamento</p>
                    <p className="font-bold text-sm">Segunda - Sexta: 08:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Telefone de Contacto</p>
                    <p className="font-bold text-sm">+258 84 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Endereço Fiscal</p>
                    <p className="font-bold text-sm">Av. das Estâncias, {business.location}</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                   <button 
                    onClick={onOpenQuote}
                    className="w-full bg-orange-600 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 hover:scale-[1.02] active:scale-95"
                   >
                     Solicitar Orçamento
                   </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </div>
                <h4 className="text-blue-900 font-black uppercase tracking-tight text-sm">Empresa Verificada</h4>
              </div>
              <p className="text-blue-700 text-xs leading-relaxed font-medium">Esta empresa passou por nosso processo de auditoria e cumpre com todos os requisitos legais em Moçambique.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfilePage;
