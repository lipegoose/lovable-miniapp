
import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation would go here in a real implementation
    
    // For demo purposes, just show success toast
    toast.success('Cadastro realizado com sucesso!', {
      description: 'Verifique seu e-mail para confirmar sua conta.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      password: ''
    });
  };

  return (
    <section className="py-20 bg-gray-50" id="cadastro">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Comece Agora</h2>
          <p>Crie sua conta e tenha seu MiniApp pronto em minutos.</p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-miniapp-primary focus:border-miniapp-primary transition-all"
                    placeholder="Seu nome"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-miniapp-primary focus:border-miniapp-primary transition-all"
                    placeholder="seu@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-miniapp-primary focus:border-miniapp-primary transition-all"
                    placeholder="(00) 00000-0000"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-miniapp-primary focus:border-miniapp-primary transition-all"
                    placeholder="Crie uma senha segura"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                
                <button type="submit" className="btn w-full text-center">
                  Cadastrar
                </button>
              </form>
              
              <div className="mt-8">
                <p className="text-center text-gray-600 mb-4">Precisa de ajuda?</p>
                <div className="space-y-2">
                  <a href="mailto:contato@miniapp-i.com.br" className="flex items-center justify-center gap-2 text-miniapp-primary hover:underline">
                    <Mail size={18} />
                    contato@miniapp-i.com.br
                  </a>
                  <a href="https://wa.me/5500000000000" className="flex items-center justify-center gap-2 text-miniapp-primary hover:underline">
                    <Phone size={18} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block relative bg-miniapp-primary">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Transforme sua presença digital</h3>
                  <p className="mb-6">Com o MiniApp-i você centraliza suas informações profissionais em um cartão digital inteligente e personalizado.</p>
                  <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <p className="text-lg font-semibold">Mais de 1400 profissionais</p>
                    <p>já estão usando o MiniApp-i</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
