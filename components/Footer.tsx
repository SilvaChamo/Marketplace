
import React from 'react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'all-categories' | 'advertise') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, page: 'home' | 'about' | 'all-categories' | 'advertise') => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAnchorLink = (e: React.MouseEvent, anchorId: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={(e) => handleNav(e, 'home')}>
              <div className="bg-orange-600 text-white p-2 rounded-lg font-bold text-xl">M</div>
              <span className="font-bold text-xl tracking-tight uppercase">MARKETPLACE</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              O diretório líder de empresas em Moçambique. Transformando o comércio tradicional em experiências digitais modernas através do nosso Marketplace.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'linkedin', 'twitter'].map((social) => (
                <a 
                  key={social} 
                  href={`https://${social}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 cursor-pointer transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-white/20 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black mb-6 text-orange-500 uppercase tracking-widest">Links Úteis</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" onClick={(e) => handleNav(e, 'home')} className="hover:text-white transition-colors font-medium">Página Inicial</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'all-categories')} className="hover:text-white transition-colors font-medium">Categorias</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'advertise')} className="hover:text-white transition-colors font-medium">Publicidade</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'about')} className="hover:text-white transition-colors font-medium">Sobre Nós</a></li>
              <li><a href="#pricing" onClick={(e) => handleAnchorLink(e, 'pricing')} className="hover:text-white transition-colors font-medium">Planos & Preços</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black mb-6 text-orange-500 uppercase tracking-widest">Destaques</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" onClick={(e) => handleNav(e, 'all-categories')} className="hover:text-white transition-colors font-medium">Comércio Geral</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'all-categories')} className="hover:text-white transition-colors font-medium">Tecnologia</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'all-categories')} className="hover:text-white transition-colors font-medium">Serviços</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'all-categories')} className="hover:text-white transition-colors font-medium">Gastronomia</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black mb-6 text-orange-500 uppercase tracking-widest">Newsletter</h4>
            <p className="text-gray-400 mb-6 text-sm">Receba tendências de mercado e dicas de marketing diretamente no seu e-mail.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-gray-800 border-none rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-orange-600 w-full outline-none text-white"
              />
              <button className="bg-orange-600 hover:bg-orange-700 px-4 rounded-xl transition-all active:scale-95 flex items-center justify-center shrink-0 shadow-lg shadow-orange-900/20">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2024 Marketplace Moçambique. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
