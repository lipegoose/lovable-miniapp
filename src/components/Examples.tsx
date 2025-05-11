import { useEffect, useRef, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from '@/hooks/use-mobile';
import type { CarouselApi } from "@/components/ui/carousel";

const examplesData = [
  {
    image: "https://miniapp-i.com.br/cards/01.png",
    name: "Ricardo Souza",
    profession: "Engenheiro Civil"
  },
  {
    image: "https://miniapp-i.com.br/cards/02.png",
    name: "Carolina Alves",
    profession: "Baby Sitter"
  },
  {
    image: "https://miniapp-i.com.br/cards/03.png",
    name: "Priscila Fonseca",
    profession: "Psicóloga"
  },
  {
    image: "https://miniapp-i.com.br/cards/04.png",
    name: "Mariana Melo",
    profession: "Nails Designer"
  },
  {
    image: "https://miniapp-i.com.br/cards/06.png",
    name: "Larisse Lopes",
    profession: "Personal Web"
  }
];

const Examples = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isHovering, setIsHovering] = useState(false);

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

  // Autoplay functionality
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
    <section className="py-20 bg-white" id="exemplos">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Exemplos Reais</h2>
          <p>Veja como profissionais de diferentes áreas estão utilizando o MiniApp-i para impulsionar sua presença digital.</p>
        </div>
        
        <div 
          className="max-w-5xl mx-auto relative min-h-[615px]"
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
              {examplesData.map((example, index) => (
                <CarouselItem 
                  key={index} 
                  className="basis-full md:basis-1/3 flex justify-center"
                >
                  <div 
                    className={`transition-all duration-300 flex flex-col items-center px-4 ${
                      index === activeIndex % examplesData.length 
                        ? "scale-110 opacity-100 py-7" 
                        : "scale-90 opacity-60"
                    }`}
                  >
                    <img
                      src={example.image}
                      alt={example.name}
                      className="h-[450px] w-auto object-cover rounded-lg shadow-lg"
                    />
                    {index === activeIndex % examplesData.length && (
                      <div className="mt-4 text-center flex items-center justify-center">
                        {/* Botão de navegação anterior à esquerda do texto */}
                        <CarouselPrevious 
                          className="relative static mx-2 z-10"
                          variant="outline"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            color: 'var(--primary)',
                            border: 'none',
                            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                            width: '40px',
                            height: '40px',
                            transition: 'color 0.3s ease, background-color 0.3s ease',
                            margin: '12px 12px 0 0',
                          }}
                        />
                        
                        <div>
                          <h4 className="font-semibold text-lg">{example.name}</h4>
                          <p className="text-gray-600">{example.profession}</p>
                        </div>
                        
                        {/* Botão de navegação posterior à direita do texto */}
                        <CarouselNext 
                          className="relative static mx-2 z-10"
                          variant="outline"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            color: 'var(--primary)',
                            border: 'none',
                            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                            width: '40px',
                            height: '40px',
                            transition: 'color 0.3s ease, background-color 0.3s ease',
                            margin: '12px 0 0 12px',
                          }}
                        />
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Fixando a posição dos indicadores de navegação com absolute positioning */}
          <div className="absolute bottom-0 left-0 right-0 h-16 flex justify-center items-center gap-2">
            {examplesData.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex % examplesData.length ? "w-4" : "bg-gray-300"
                }`}
                style={{
                  backgroundColor: index === activeIndex % examplesData.length ? 'var(--primary)' : '',
                }}
                aria-label={`Example ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
