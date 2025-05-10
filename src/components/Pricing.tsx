
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-20 bg-white" id="planos">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Planos e Preços</h2>
          <p>Escolha o plano ideal para suas necessidades e comece a usar o MiniApp-i hoje mesmo.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="pricing-card flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-miniapp-primary">Atualização Avulsa</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">R$ 99</span>
              <span className="text-gray-500">/único</span>
            </div>
            
            <ul className="mb-8 space-y-3 flex-grow">
              {[
                "Criação do seu MiniApp",
                "1 atualização incluída",
                "Domínio personalizado",
                "Suporte por 30 dias",
                "Estatísticas básicas"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 mr-2">
                    <Check size={12} className="text-green-600" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <a href="#cadastro" className="btn w-full text-center">Quero esse plano</a>
          </div>
          
          <div className="pricing-card featured flex flex-col">
            <div className="absolute top-0 right-0 bg-miniapp-primary text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg">
              Popular
            </div>
            <h3 className="text-xl font-bold mb-4 text-miniapp-primary">Atualização Instantânea</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">R$ 49</span>
              <span className="text-gray-500">/mês</span>
            </div>
            
            <ul className="mb-8 space-y-3 flex-grow">
              {[
                "Atualizações ilimitadas",
                "Domínio personalizado",
                "Suporte prioritário",
                "Estatísticas avançadas",
                "Recursos de IA premium",
                "Integração com redes sociais"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 mr-2">
                    <Check size={12} className="text-green-600" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <a href="#cadastro" className="btn w-full text-center bg-miniapp-secondary">Quero esse plano</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
