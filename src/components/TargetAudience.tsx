
import { useState, useEffect, useRef } from 'react';
import { Stethoscope, Mic, BookOpen, Scale, Building, ChevronLeft, ChevronRight } from 'lucide-react';

const audienceData = [
  {
    icon: <Stethoscope />,
    title: "Médicos",
    description: "Compartilhe seus contatos, especialidades, convênios e horários de atendimento em um único lugar, facilitando o acesso dos seus pacientes."
  },
  {
    icon: <Mic />,
    title: "Influencers",
    description: "Centralize todos os seus links de redes sociais, projetos e parcerias em um cartão digital personalizado com sua identidade visual."
  },
  {
    icon: <BookOpen />,
    title: "Professores",
    description: "Disponibilize materiais didáticos, contatos e informações profissionais para seus alunos de forma organizada e acessível."
  },
  {
    icon: <Scale />,
    title: "Advogados",
    description: "Apresente suas áreas de atuação, formação acadêmica e canais de atendimento em um cartão digital profissional e elegante."
  },
  {
    icon: <Building />,
    title: "Empresas",
    description: "Crie um ponto central para seus produtos, serviços, contatos e redes sociais, melhorando a experiência dos seus clientes."
  }
];

const TargetAudience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % audienceData.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  
  const handlePrevClick = () => {
    setActiveIndex((prev) => (prev - 1 + audienceData.length) % audienceData.length);
  };
  
  const handleNextClick = () => {
    setActiveIndex((prev) => (prev + 1) % audienceData.length);
  };
  
  return (
    <section className="py-20 bg-gray-50" id="publico-alvo">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Para Quem É</h2>
          <p>O MiniApp-i é ideal para profissionais e empresas que desejam se destacar com uma presença digital moderna e eficiente.</p>
        </div>
        
        <div 
          className="relative max-w-5xl mx-auto"
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {audienceData.map((item, index) => {
              // In mobile, only show the active slide
              // In desktop (md+), show current, previous and next
              const shouldShow = 
                window.innerWidth < 768
                  ? index === activeIndex 
                  : (
                      index === activeIndex || 
                      index === (activeIndex - 1 + audienceData.length) % audienceData.length ||
                      index === (activeIndex + 1) % audienceData.length
                    );
              
              return shouldShow ? (
                <div
                  key={index}
                  className={`audience-item transition-all duration-300 ${
                    index === activeIndex ? "opacity-100 scale-100" : "md:opacity-70 md:scale-95"
                  }`}
                >
                  <div className="audience-icon">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-miniapp-primary">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ) : null;
            })}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white hover:bg-gray-100 text-miniapp-primary rounded-full p-2 shadow-md z-10"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white hover:bg-gray-100 text-miniapp-primary rounded-full p-2 shadow-md z-10"
            aria-label="Próximo slide"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-8 gap-2">
            {audienceData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-miniapp-primary scale-125" : "bg-gray-300"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
