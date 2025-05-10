
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <a href="#" className="logo-link">
            <h1 className="text-2xl font-bold text-miniapp-primary">MiniApp-i</h1>
          </a>
          <button
            className="block lg:hidden text-miniapp-primary"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''} lg:flex lg:translate-y-0 lg:opacity-100 lg:static lg:shadow-none lg:p-0`}>
            <li><a href="#como-funciona" onClick={handleNavLinkClick} className="block py-2 hover:text-miniapp-primary transition-colors">Como Funciona</a></li>
            <li><a href="#publico-alvo" onClick={handleNavLinkClick} className="block py-2 hover:text-miniapp-primary transition-colors">Para Quem É</a></li>
            <li><a href="#exemplos" onClick={handleNavLinkClick} className="block py-2 hover:text-miniapp-primary transition-colors">Exemplos</a></li>
            <li><a href="#comparativo" onClick={handleNavLinkClick} className="block py-2 hover:text-miniapp-primary transition-colors">Comparativo</a></li>
            <li><a href="#planos" onClick={handleNavLinkClick} className="block py-2 hover:text-miniapp-primary transition-colors">Planos</a></li>
            <li><a href="#faq" onClick={handleNavLinkClick} className="block py-2 hover:text-miniapp-primary transition-colors">FAQ</a></li>
            <li><a href="#cadastro" onClick={handleNavLinkClick} className="btn">Cadastrar</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
