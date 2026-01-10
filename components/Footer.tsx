
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-600 text-white p-2 rounded-lg font-bold text-xl">M</div>
              <span className="font-bold text-xl tracking-tight">MARKETPLACE</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              O diretório líder de empresas em Moçambique. Transformando o comércio tradicional em experiências digitais modernas através do nosso Marketplace.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'linkedin', 'twitter'].map((social) => (
                <div key={social} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 cursor-pointer transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-white/50 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-500">Links Úteis</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tabela de Preços</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte ao Cliente</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog de Negócios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-500">Categorias Populares</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Imobiliárias</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Educação e Ensino</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Saúde e Bem-estar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Eventos e Lazer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-500">Newsletter</h4>
            <p className="text-gray-400 mb-6">Receba tendências de mercado e dicas de marketing.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-gray-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-600 w-full"
              />
              <button className="bg-orange-600 hover:bg-orange-700 px-4 rounded-xl transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2024 Marketplace. Todos os direitos reservados. Feito com ❤️ para Moçambique.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
