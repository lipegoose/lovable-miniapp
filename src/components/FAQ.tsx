
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "Como funciona o MiniApp-i?",
    answer: "O MiniApp-i é uma plataforma web que permite criar cartões digitais interativos personalizados. Após o cadastro, você pode personalizar seu MiniApp com suas informações, links e estilo visual. Nossa inteligência artificial ajuda a otimizar o conteúdo e layout. Quando finalizado, você recebe um link único para compartilhar com seu público."
  },
  {
    question: "Tem plano gratuito?",
    answer: "Oferecemos um período de teste gratuito de 7 dias para que você possa experimentar todas as funcionalidades do MiniApp-i. Após esse período, será necessário escolher um dos nossos planos pagos para continuar utilizando a plataforma com todos os recursos."
  },
  {
    question: "Posso usar domínio próprio?",
    answer: "Sim! Todos os planos do MiniApp-i incluem a possibilidade de usar seu domínio próprio sem custo adicional. Basta configurar os registros DNS do seu domínio conforme nossas instruções e seu MiniApp estará disponível no seu endereço personalizado."
  },
  {
    question: "Como funciona a inteligência artificial?",
    answer: "Nossa IA analisa seu perfil, segmento de atuação e conteúdo fornecido para sugerir textos otimizados, organização de links e elementos visuais que melhor se adequam ao seu público-alvo. A inteligência artificial também aprende com o comportamento dos visitantes para sugerir melhorias contínuas no seu MiniApp."
  },
  {
    question: "Posso cancelar a assinatura a qualquer momento?",
    answer: "Sim, você pode cancelar sua assinatura a qualquer momento diretamente na sua área de cliente. Ao cancelar, você continuará com acesso às funcionalidades até o final do período já pago. Não há taxas de cancelamento ou contratos de fidelidade."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Perguntas Frequentes</h2>
          <p>Tire suas dúvidas sobre o MiniApp-i e descubra como ele pode ajudar você ou sua empresa.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border-b border-gray-200 ${activeIndex === index ? 'bg-gray-50' : ''}`}
            >
              <button
                className="w-full py-4 px-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className="font-medium text-lg text-miniapp-primary">{item.question}</h3>
                <ChevronDown 
                  className={`transition-transform duration-200 ${activeIndex === index ? 'transform rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-6 pt-0">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
