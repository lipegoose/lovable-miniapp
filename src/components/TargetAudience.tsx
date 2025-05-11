
import { useState, useEffect, useRef } from 'react';
import { Stethoscope, Mic, BookOpen, Scale, Building, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

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
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Controle do índice ativo
  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);
  
  // Funcionalidade de autoplay
  useEffect(() => {
    if (!api) return;
    
    const startAutoplay = () => {
      stopAutoplay();
      autoplayRef.current = setInterval(() => {
        api.scrollNext();
      }, 3000);
    };
    
    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
    
    // Apenas inicia o autoplay se não estiver com o mouse sobre o carrossel
    if (!isHovering) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    
    return () => {
      stopAutoplay();
    };
  }, [api, isHovering]);
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  return (
    <section className="target-audience py-20" id="publico-alvo">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Para Quem É</h2>
          <p>O MiniApp-i é ideal para profissionais e empresas que desejam se destacar com uma presença digital moderna e eficiente.</p>
        </div>
        
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel 
            setApi={setApi}
            className="mx-auto"
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              containScroll: false,
            }}
          >
            <CarouselContent>
              {audienceData.map((item, index) => (
                <CarouselItem 
                  key={index} 
                  className="md:basis-1/3 basis-full"
                >
                  <div className="audience-item">
                    <div className="audience-icon">
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 z-10"
              variant="outline"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: 'var(--primary)',
                border: 'none',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                width: '40px',
                height: '40px',
                transition: 'color 0.3s ease, background-color 0.3s ease',
              }}
            />
            
            <CarouselNext 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 z-10"
              variant="outline"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: 'var(--primary)',
                border: 'none',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                width: '40px',
                height: '40px',
                transition: 'color 0.3s ease, background-color 0.3s ease',
              }}
            />
          </Carousel>
          
          <div className="flex justify-center mt-8 gap-2">
            {audienceData.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex % audienceData.length ? "bg-miniapp-primary w-4" : "bg-gray-300"
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
