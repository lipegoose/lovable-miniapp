
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white" id="hero">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-miniapp-primary mb-6">
              Seu Cartão Digital Inteligente, Personalizado e Instantâneo.
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              <strong>Crie, compartilhe e gerencie seu MiniApp com inteligência artificial.</strong>
            </p>
            <a href="#cadastro" className="btn text-lg flex items-center gap-2 md:inline-flex">
              <span>🎯 Criar meu MiniApp Agora</span>
              <ArrowRight size={20} />
            </a>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-30"></div>
              <div className="relative bg-white p-4 rounded-xl shadow-xl">
                <img
                  src="https://placehold.co/600x400/294158/FFFFFF/png?text=MiniApp-i+Preview"
                  alt="MiniApp-i Preview"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
