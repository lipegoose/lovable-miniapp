
import { UserPlus, Paintbrush, Share2 } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white" id="como-funciona">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Como Funciona</h2>
          <p>Crie seu cartão digital em apenas 3 passos simples e comece a compartilhar com seu público.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="step-icon">
              <UserPlus />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-miniapp-primary">Faça seu cadastro</h3>
            <p className="text-gray-600">
              Registre-se em nossa plataforma com seus dados básicos e crie sua conta em segundos.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="step-icon">
              <Paintbrush />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-miniapp-primary">Personalize sua mídia</h3>
            <p className="text-gray-600">
              Escolha cores, adicione links, fotos e informações com ajuda da nossa inteligência artificial.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="step-icon">
              <Share2 />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-miniapp-primary">Compartilhe com um clique</h3>
            <p className="text-gray-600">
              Distribua seu MiniApp nas redes sociais, cartão de visita ou QR Code e acompanhe os resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
