
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-miniapp-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">MiniApp-i</h2>
            <p className="mb-6 text-gray-300">
              Transforme sua presença digital com cartões interativos inteligentes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#publico-alvo" className="text-gray-300 hover:text-white transition-colors">Para Quem É</a></li>
              <li><a href="#exemplos" className="text-gray-300 hover:text-white transition-colors">Exemplos</a></li>
              <li><a href="#planos" className="text-gray-300 hover:text-white transition-colors">Planos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tutoriais</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="/cookies" className="text-gray-300 hover:text-white transition-colors">Política de Cookies</a></li>
              <li><a href="/lgpd" className="text-gray-300 hover:text-white transition-colors">LGPD</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">© 2025 MiniApp-i. Todos os direitos reservados. Uma criação HeRa-i.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
