
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-20 bg-white" id="planos">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Planos e Preços</h2>
          <p>Escolha o plano ideal para suas necessidades e comece a usar o MiniApp-i hoje mesmo.</p>
        </div>
        
        <div className="flex justify-center gap-8 mt-12">
          <div className="flex-1 max-w-sm bg-gray-100 rounded-lg p-10 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2.5 relative overflow-hidden">
            <h3 className="text-2xl font-semibold mb-4">Atualização Avulsa</h3>
            <div className="text-4xl font-bold mb-5">R$ 99<span className="text-sm font-normal text-gray-600">/único</span></div>
            
            <ul className="list-none my-8 text-left">
              {[
                "Criação do seu MiniApp",
                "1 atualização incluída",
                "Domínio personalizado",
                "Suporte por 30 dias",
                "Estatísticas básicas"
              ].map((feature, index) => (
                <li key={index} className="mb-4">
                  <span className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            <a href="#cadastro" className="block w-full bg-miniapp-primary text-white py-3 px-4 rounded hover:bg-miniapp-secondary transition-colors">Quero esse plano</a>
          </div>
          
          <div className="flex-1 max-w-sm bg-gradient-to-br from-miniapp-primary to-miniapp-secondary text-white rounded-lg p-10 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2.5 relative overflow-hidden">
            <div className="absolute top-5 right-[-30px] bg-green-500 text-white px-8 py-1 text-xs font-semibold transform rotate-45">Popular</div>
            <h3 className="text-2xl font-semibold mb-4">Atualização Instantânea</h3>
            <div className="text-4xl font-bold mb-5">R$ 49<span className="text-sm font-normal text-white/80">/mês</span></div>
            
            <ul className="list-none my-8 text-left">
              {[
                "Atualizações ilimitadas",
                "Domínio personalizado",
                "Suporte prioritário",
                "Estatísticas avançadas",
                "Recursos de IA premium",
                "Integração com redes sociais"
              ].map((feature, index) => (
                <li key={index} className="mb-4">
                  <span className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-white" />
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            <a href="#cadastro" className="block w-full bg-white text-miniapp-primary py-3 px-4 rounded hover:bg-white/90 transition-colors">Quero esse plano</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
