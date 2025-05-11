
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
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <a href="#cadastro" className="btn pricing-btn">Quero esse plano</a>
          </div>
          
          <div className="pricing-card featured">
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
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <a href="#cadastro" className="btn pricing-btn">Quero esse plano</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
