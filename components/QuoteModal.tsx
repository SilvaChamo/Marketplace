
import React, { useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  businessName: string;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, businessName }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    product: '',
    quantity: '',
    urgency: 'Normal',
    message: '',
    contact: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Cotação enviada:', formData);
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors p-2 z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 'form' ? (
          <div className="p-8 md:p-10">
            <div className="mb-8">
              <span className="text-orange-600 font-black text-[10px] uppercase tracking-widest block mb-2">Pedido de Cotação</span>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">Solicitar à {businessName}</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">Produto ou Serviço Desejado</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-600 outline-none"
                  placeholder="Ex: 50 Sacos de Cimento, Consultoria TI..."
                  value={formData.product}
                  onChange={(e) => setFormData({...formData, product: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">Quantidade</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-600 outline-none"
                    placeholder="Ex: 10 un / 5 kg"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">Urgência</label>
                  <select 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-600 outline-none appearance-none"
                    value={formData.urgency}
                    onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                  >
                    <option>Normal (2-3 dias)</option>
                    <option>Alta (Hoje)</option>
                    <option>Baixa (Sem pressa)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">Seu Contacto (WhatsApp/Email)</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-600 outline-none"
                  placeholder="+258 ..."
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">Detalhes Adicionais</label>
                <textarea 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-600 outline-none h-24 resize-none"
                  placeholder="Descreva especificações técnicas ou dúvidas..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-orange-900/20 active:scale-[0.98] mt-4"
              >
                Enviar Solicitação
              </button>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">Pedido Enviado!</h3>
            <p className="text-gray-500 text-sm font-medium mb-8">A {businessName} foi notificada e entrará em contacto em breve através dos dados fornecidos.</p>
            <button 
              onClick={onClose}
              className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-black transition-colors"
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;
