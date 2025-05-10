
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
    image: "https://placehold.co/300x500/294158/FFFFFF/png?text=Ricardo+Souza",
    name: "Ricardo Souza",
    profession: "Engenheiro Civil"
  },
  {
    image: "https://placehold.co/300x500/1E88E5/FFFFFF/png?text=Carolina+Alves",
    name: "Carolina Alves",
    profession: "Baby Sitter"
  },
  {
    image: "https://placehold.co/300x500/42A5F5/FFFFFF/png?text=Priscila+Fonseca",
    name: "Priscila Fonseca",
    profession: "Psicóloga"
  },
  {
    image: "https://placehold.co/300x500/e91e63/FFFFFF/png?text=Mariana+Melo",
    name: "Mariana Melo",
    profession: "Nails Designer"
  },
  {
    image: "https://placehold.co/300x500/ff9800/FFFFFF/png?text=Larisse+Lopes",
    name: "Larisse Lopes",
    profession: "Personal Web"
  }
];

const Examples = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

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

    startAutoplay();

    // Event listeners to stop/start autoplay on user interaction
    api.on("pointerDown", stopAutoplay);
    api.on("pointerUp", startAutoplay);

    return () => {
      stopAutoplay();
      api.off("pointerDown", stopAutoplay);
      api.off("pointerUp", startAutoplay);
    };
  }, [api]);

  return (
    <section className="py-20 bg-white" id="exemplos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-miniapp-primary mb-4">Exemplos</h2>
          <h3 className="text-xl text-gray-700">
            Já são mais de 1400 Mídias produzidas para todo o Brasil. Não perca mais tempo e{" "}
            <a href="#cadastro" className="text-miniapp-primary hover:underline">
              faça seu cadastro.
            </a>
          </h3>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
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
                        ? "scale-110 opacity-100" 
                        : "scale-90 opacity-60"
                    }`}
                  >
                    <img
                      src={example.image}
                      alt={example.name}
                      className="h-[450px] w-auto object-cover rounded-lg shadow-lg"
                    />
                    {index === activeIndex % examplesData.length && (
                      <div className="mt-4 text-center">
                        <h4 className="font-semibold text-lg">{example.name}</h4>
                        <p className="text-gray-600">{example.profession}</p>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-10 bg-white text-miniapp-primary" 
            />
            
            <CarouselNext 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-10 bg-white text-miniapp-primary" 
            />
          </Carousel>
          
          <div className="flex justify-center mt-4 gap-2">
            {examplesData.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex % examplesData.length ? "bg-miniapp-primary w-4" : "bg-gray-300"
                }`}
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
