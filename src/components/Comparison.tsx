
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: "Design Personalizado",
    miniapp: { has: true, description: "Totalmente personalizável" },
    competitor: { has: false, description: "Opções limitadas" }
  },
  {
    feature: "Inteligência Artificial",
    miniapp: { has: true, description: "Sugestões de textos e layout" },
    competitor: { has: false, description: "Não possui" }
  },
  {
    feature: "Interatividade",
    miniapp: { has: true, description: "Mídia interativa e responsiva" },
    competitor: { has: false, description: "Páginas estáticas" }
  },
  {
    feature: "Domínio Próprio",
    miniapp: { has: true, description: "Incluso sem custo adicional" },
    competitor: { has: false, description: "Apenas em planos pagos" }
  },
  {
    feature: "Análise de Desempenho",
    miniapp: { has: true, description: "KPIs detalhados" },
    competitor: { has: false, description: "Análise básica" }
  }
];

const Comparison = () => {
  return (
    <section className="py-20 bg-gray-50" id="comparativo">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>MiniApp-i vs Linktree</h2>
          <p>Descubra por que o MiniApp-i é a escolha ideal para seu cartão digital interativo.</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-miniapp-primary text-white">
                <th className="py-4 px-6 text-left">Recursos</th>
                <th className="py-4 px-6 text-left">MiniApp-i</th>
                <th className="py-4 px-6 text-left">Linktree</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-4 px-6 font-medium">{item.feature}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 mr-2">
                        <Check size={14} className="text-green-600" />
                      </span>
                      {item.miniapp.description}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 mr-2">
                        <X size={14} className="text-red-600" />
                      </span>
                      {item.competitor.description}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="text-center mt-12">
          <a href="#cadastro" className="btn">Experimente as vantagens do MiniApp-i</a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
