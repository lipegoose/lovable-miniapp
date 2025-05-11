
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container mx-auto px-4">
        <div className="hero-content flex flex-col lg:flex-row items-center gap-12">
          <div className="hero-text lg:w-1/2">
            <h1 className="font-bold">
              Seu Cartão Digital Inteligente, Personalizado e Instantâneo.
            </h1>
            <p>
              <strong>Crie, compartilhe e gerencie seu MiniApp com inteligência artificial.</strong>
            </p>
            <a href="#cadastro" className="btn text-lg flex items-center gap-2 md:inline-flex">
              <span>🎯 Criar meu MiniApp Agora</span>
              <ArrowRight size={20} />
            </a>
          </div>
          <div className="hero-image lg:w-1/2">
            <div className="relative">
              <img
                src="https://miniapp-i.com.br/img/mockup2.png"
                alt="MiniApp-i Preview"
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
