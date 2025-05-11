import { useState } from 'react';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica para verificar se as senhas coincidem
    if (formData.password !== formData.confirmPassword) {
      toast.error('As senhas não coincidem', {
        description: 'Por favor, verifique se as senhas digitadas são iguais.'
      });
      return;
    }
    
    // For demo purposes, just show success toast
    toast.success('Cadastro realizado com sucesso!', {
      description: 'Verifique seu e-mail para confirmar sua conta.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <section className="py-24 bg-white" id="cadastro">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Comece Agora</h2>
          <p className="text-xl text-gray-600">Crie sua conta e tenha seu MiniApp pronto em minutos.</p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg overflow-hidden" style={{ boxShadow: "var(--box-shadow)" }}>
          <div className="grid md:grid-cols-2">
            <div className="p-10">
              <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group mb-5">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                    placeholder="Seu nome"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group mb-5">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                    placeholder="seu@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group mb-5">
                  <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                    placeholder="(00) 00000-0000"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group mb-5">
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                    placeholder="Crie uma senha segura"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group mb-6">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                    placeholder="Confirme sua senha"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-md hover:from-purple-700 hover:to-indigo-700 transition-all font-medium shadow-md"
                >
                  Criar minha conta
                </button>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Já tem uma conta? <a href="#" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">Faça login</a>
                  </p>
                </div>
              </form>
              
              <div className="mt-10">
                <p className="text-center text-gray-600 mb-4 font-medium">Precisa de ajuda?</p>
                <div className="flex justify-center gap-6">
                  <a href="mailto:contato@miniapp-i.com.br" className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
                    <Mail size={18} />
                    contato@miniapp-i.com.br
                  </a>
                  <a href="https://wa.me/5500000000000" className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-purple-600">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-700 to-indigo-800 p-10 text-white flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3">MiniApp-i</h2>
                <p className="text-gray-200">Seu cartão digital inteligente com IA</p>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">Benefícios</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-purple-300 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Cartão digital personalizado com IA</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-purple-300 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Compartilhe facilmente via QR Code</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-purple-300 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Atualizações em tempo real</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-purple-300 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Integração com redes sociais</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-purple-300 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Analytics de visualizações</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-900/30 p-5 rounded-lg">
                <p className="text-sm text-gray-200 italic">
                  "O MiniApp-i revolucionou minha forma de compartilhar contatos e informações profissionais."
                </p>
                <div className="mt-3 flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Depoimento" 
                    className="h-10 w-10 rounded-full mr-3 border-2 border-purple-300"
                  />
                  <div>
                    <p className="font-medium">Dr. Ricardo Mendes</p>
                    <p className="text-xs text-gray-300">Neurologista</p>
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
