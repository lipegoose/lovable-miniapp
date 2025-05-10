
import { UserPlus, Paintbrush, Share2 } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="how-it-works py-20" id="como-funciona">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Como Funciona</h2>
          <p>Crie seu cartão digital em apenas 3 passos simples e comece a compartilhar com seu público.</p>
        </div>
        
        <div className="steps">
          <div className="step">
            <div className="step-icon">
              <UserPlus size={30} />
            </div>
            <h3>Faça seu cadastro</h3>
            <p>Registre-se em nossa plataforma com seus dados básicos e crie sua conta em segundos.</p>
          </div>
          
          <div className="step">
            <div className="step-icon">
              <Paintbrush size={30} />
            </div>
            <h3>Personalize sua mídia</h3>
            <p>Escolha cores, adicione links, fotos e informações com ajuda da nossa inteligência artificial.</p>
          </div>
          
          <div className="step">
            <div className="step-icon">
              <Share2 size={30} />
            </div>
            <h3>Compartilhe com um clique</h3>
            <p>Distribua seu MiniApp nas redes sociais, cartão de visita ou QR Code e acompanhe os resultados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
