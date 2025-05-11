
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-20 bg-white" id="planos">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Planos e Preços</h2>
          <p>Escolha o plano ideal para suas necessidades e comece a usar o MiniApp-i hoje mesmo.</p>
        </div>
        
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3 className="pricing-title">Atualização Avulsa</h3>
            <div className="pricing-price">R$ 99<span className="pricing-period">/único</span></div>
            
            <ul className="pricing-features">
              {[
                "Criação do seu MiniApp",
                "1 atualização incluída",
                "Domínio personalizado",
                "Suporte por 30 dias",
                "Estatísticas básicas"
              ].map((feature, index) => (
                <li key={index}>
                  <span className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            <a href="#cadastro" className="btn pricing-btn">Quero esse plano</a>
          </div>
          
          <div className="pricing-card featured">
            <div className="popular-badge">Popular</div>
            <h3 className="pricing-title">Atualização Instantânea</h3>
            <div className="pricing-price">R$ 49<span className="pricing-period">/mês</span></div>
            
            <ul className="pricing-features">
              {[
                "Atualizações ilimitadas",
                "Domínio personalizado",
                "Suporte prioritário",
                "Estatísticas avançadas",
                "Recursos de IA premium",
                "Integração com redes sociais"
              ].map((feature, index) => (
                <li key={index}>
                  <span className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            <a href="#cadastro" className="btn pricing-btn">Quero esse plano</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pricing-cards {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 50px;
        }
        
        .pricing-card {
          flex: 1;
          max-width: 350px;
          background-color: var(--light-gray);
          border-radius: var(--border-radius);
          padding: 40px 30px;
          text-align: center;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }
        
        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--box-shadow);
        }
        
        .pricing-card.featured {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          color: var(--white);
          box-shadow: 0 10px 30px rgba(106, 17, 203, 0.3);
        }
        
        .popular-badge {
          position: absolute;
          top: 15px;
          right: -30px;
          background-color: var(--success);
          color: var(--white);
          padding: 5px 30px;
          font-size: 0.8rem;
          transform: rotate(45deg);
        }
        
        .pricing-title {
          font-size: 1.5rem;
          margin-bottom: 15px;
        }
        
        .pricing-price {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
        }
        
        .pricing-period {
          font-size: 0.9rem;
          color: var(--gray);
        }
        
        .featured .pricing-period {
          color: rgba(255, 255, 255, 0.8);
        }
        
        .pricing-features {
          list-style: none;
          margin: 30px 0;
          text-align: left;
        }
        
        .pricing-features li {
          margin-bottom: 15px;
        }
        
        .featured .pricing-features li svg {
          color: var(--white);
        }
        
        .pricing-btn {
          width: 100%;
        }
        
        .featured .btn {
          background: var(--white);
          color: var(--primary);
        }
        
        .featured .btn:hover {
          background: rgba(255, 255, 255, 0.9);
        }
      `}</style>
    </section>
  );
};

export default Pricing;
