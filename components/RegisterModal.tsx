
import React, { useState } from 'react';
import { CATEGORIES } from '../constants';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    category: '',
    newsletter: true
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio para Mailchimp e CRM
    console.log('Lead registrado:', formData);
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors p-2 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 'form' ? (
          <div className="p-8 md:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-2">Registe a sua Empresa</h3>
              <p className="text-gray-500 text-sm font-medium">Junte-se à maior rede de negócios de Moçambique e receba leads qualificados.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Responsável pelo Registo</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all outline-none"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">E-mail para Contacto e Newsletter</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all outline-none"
                  placeholder="empresa@exemplo.co.mz"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Nome Comercial</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all outline-none"
                    placeholder="Nome da sua marca"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Sector de Actuação</label>
                  <select 
                    required
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all outline-none appearance-none"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                  >
                    <option value="">Escolha um sector...</option>
                    {CATEGORIES.map(cat => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-start gap-3 py-2">
                <input 
                  type="checkbox" 
                  id="newsletter_consent"
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600 cursor-pointer"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                />
                <label htmlFor="newsletter_consent" className="text-xs text-gray-500 font-medium leading-relaxed cursor-pointer select-none">
                  Aceito receber actualizações de mercado e subscrever-me na newsletter do Marketplace Moçambique.
                </label>
              </div>

              <button 
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all shadow-xl shadow-orange-900/20 active:scale-[0.98] mt-4"
              >
                Finalizar Registo
              </button>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">Sucesso!</h3>
            <p className="text-gray-500 text-sm font-medium mb-8">Recebemos a sua solicitação. Verifique o seu e-mail para os próximos passos de activação do seu perfil.</p>
            <button 
              onClick={() => { setStep('form'); onClose(); }}
              className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-black transition-colors"
            >
              Concluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
