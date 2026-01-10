
import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-hallway-4436-large.mp4',
    antetitle: 'COLOQUE',
    title: 'Sua empresa em destaque no',
    highlight: 'mercado nacional'
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-office-building-4435-large.mp4',
    antetitle: 'com o market place',
    title: 'Conectamos as melhores empresas',
    highlight: 'ao seu próximo cliente'
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c89eecaaad8e?auto=format&fit=crop&q=80&w=2000',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-creative-team-working-on-a-project-4444-large.mp4',
    antetitle: 'MARKETPLACE',
    title: 'A maior plataforma empresarial',
    highlight: 'em Moçambique'
  }
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Layers */}
      {SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Imagem de Fundo Estática */}
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay Escuro */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          </div>

          {/* Vídeo Dinâmico */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          >
            <source src={slide.video} type="video/mp4" />
          </video>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10 md:px-20 z-10">
        {/* max-w-5xl e o padding forçam a estrutura de 2 linhas conforme solicitado */}
        <div className="max-w-5xl w-full flex flex-col items-center px-6 md:px-12">
          
          {/* Antetítulo H4 */}
          <h4 className="text-orange-500 text-sm md:text-base font-black uppercase tracking-[0.4em] mb-6 drop-shadow-md animate-fade-in">
            {SLIDES[currentIndex].antetitle}
          </h4>

          {/* Título com duas linhas e espaçamento otimizado */}
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] leading-[1.1] mb-12 transition-all duration-1000 tracking-tighter">
            {SLIDES[currentIndex].title}
            <br />
            <span className="text-orange-500">
              {SLIDES[currentIndex].highlight}
            </span>
          </h1>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-orange-900/40 active:scale-95 border-b-4 border-orange-800">
              Anunciar Agora
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/30 px-12 py-5 rounded-2xl font-black text-xl transition-all hover:border-white/60">
              Ver Categorias
            </button>
          </div>
        </div>
      </div>

      {/* Indicadores de Progresso */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`group relative h-1.5 rounded-full transition-all duration-500 overflow-hidden ${
              i === currentIndex ? 'w-20 bg-white/20' : 'w-4 bg-white/40'
            }`}
          >
             {i === currentIndex && (
               <div className="absolute top-0 left-0 h-full bg-orange-600 animate-progress"></div>
             )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-progress {
          animation: progress 8s linear forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
