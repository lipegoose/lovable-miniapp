
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
    <section className="comparison py-20 bg-gray-50" id="comparativo">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>MiniApp-i vs Linktree</h2>
          <p>Descubra por que o MiniApp-i é a escolha ideal para seu cartão digital interativo.</p>
        </div>
        
        <div className="overflow-x-auto" style={{ padding: '0 10px 12px' }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Recursos</th>
                <th>MiniApp-i</th>
                <th>Linktree</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index}>
                  <td className="feature-name">{item.feature}</td>
                  <td>
                    <div className="flex items-center">
                      <Check className="check-icon mr-2" />
                      {item.miniapp.description}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <X className="x-icon mr-2" />
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
