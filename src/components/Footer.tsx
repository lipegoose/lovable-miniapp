
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="footer-logo">
            <div className="mb-4">
              <img src="https://miniapp-i.com.br/img/logo_miniapp-i_semfundo.png" alt="MiniApp-i" style={{ width: '230px', height: 'auto' }} />
            </div>
            <p className="mb-6 text-gray-600">
              Transforme sua presença digital com cartões interativos inteligentes.
            </p>
            <div className="social-links flex space-x-3">
              <a href="#" className="bg-gray-200 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={20} className="text-gray-600 hover:text-white transition-colors" />
              </a>
              <a href="#" className="bg-gray-200 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={20} className="text-gray-600 hover:text-white transition-colors" />
              </a>
              <a href="#" className="bg-gray-200 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} className="text-gray-600 hover:text-white transition-colors" />
              </a>
              <a href="#" className="bg-gray-200 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube size={20} className="text-gray-600 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#como-funciona" className="text-gray-600 hover:text-purple-600 hover:font-bold transition-all">Como Funciona</a></li>
              <li><a href="#publico-alvo" className="text-gray-600 hover:text-purple-600 hover:font-bold transition-all">Para Quem É</a></li>
              <li><a href="#exemplos" className="text-gray-600 hover:text-purple-600 hover:font-bold transition-all">Exemplos</a></li>
              <li><a href="#planos" className="text-gray-600 hover:text-purple-600 hover:font-bold transition-all">Planos</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3 className="font-bold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#faq" className="text-gray-600 hover:text-purple-600 hover:font-bold transition-all">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 hover:font-bold transition-all">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 hover:font-bold transition-all">Tutoriais</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 hover:font-bold transition-all">Contato</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-600 hover:text-purple-600 hover:font-bold transition-all">Termos de Uso</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-purple-600 hover:font-bold transition-all">Política de Privacidade</a></li>
              <li><a href="/cookies" className="text-gray-600 hover:text-purple-600 hover:font-bold transition-all">Política de Cookies</a></li>
              <li><a href="/lgpd" className="text-gray-600 hover:text-purple-600 hover:font-bold transition-all">LGPD</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-500">&copy; 2025 MiniApp-i. Todos os direitos reservados. Uma criação <a href="https://hera-i.com.br/" className="inline-flex items-center" target="_blank" rel="noopener noreferrer" title="HeRa-i"><img src="https://hera-i.com.br/imgs/logo.png" alt="HeRa-i" className="h-5 hover:opacity-80 transition-opacity" /></a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
