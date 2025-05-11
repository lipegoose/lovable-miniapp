
const Pricing = () => {
  return (
    <section className="py-20 bg-white" id="planos">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Planos e Preços</h2>
          <p>Escolha o plano ideal para suas necessidades e comece a usar o MiniApp-i hoje mesmo.</p>
        </div>
        
        <div className="flex justify-center gap-8 mt-12">
          {/* Card Atualização Avulsa */}
          <div className="flex-1 max-w-sm bg-white rounded-lg p-10 text-center transition-all duration-300 hover:-translate-y-2.5 relative overflow-hidden shadow-md">
            <h3 className="text-2xl font-bold mb-4">Atualização Avulsa</h3>
            <div className="text-6xl font-bold mb-6">R$ 99<span className="text-base ml-1 font-normal text-gray-600 align-top">/único</span></div>
            
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
                    <span className="text-purple-600 mr-2 font-bold text-xl">✓</span>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            <a href="#cadastro" className="block w-full bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-medium hover:shadow-lg hover:bg-purple-700 transition-all">Quero esse plano</a>
          </div>
          
          {/* Card Atualização Instantânea */}
          <div className="flex-1 max-w-sm text-white rounded-lg p-10 text-center transition-all duration-300 hover:-translate-y-2.5 relative overflow-hidden shadow-xl" style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)" }}>
            <div className="absolute top-6 right-[-30px] bg-green-500 text-white px-8 py-1 text-xs font-semibold transform rotate-45">Popular</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Atualização Instantânea</h3>
            <div className="text-6xl font-bold mb-6">R$ 49<span className="text-base ml-1 font-normal text-white/80 align-top">/mês</span></div>
            
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
                    <span className="text-white mr-2 font-bold text-xl">✓</span>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            <a href="#cadastro" className="block w-full bg-white text-purple-600 py-3 px-6 rounded-full text-lg font-medium hover:shadow-lg hover:bg-gray-100 transition-all">Quero esse plano</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
