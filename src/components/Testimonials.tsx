
import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const testimonialsData = [
  {
    text: "O MiniApp-i revolucionou minha forma de compartilhar contatos e informações profissionais. A inteligência artificial sugeriu um layout perfeito para minha especialidade médica.",
    name: "Dr. Ricardo Mendes",
    role: "Neurologista",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "O MiniApp-i revolucionou com A inteligência artificial e sugeriu um layout perfeito para minha especialidade médica.",
    name: "Ricardo Mendes",
    role: "Neuro",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "Como influencer, precisava de algo mais personalizado que o Linktree. O MiniApp-i me deu total liberdade criativa e as estatísticas me ajudam a entender melhor meu público.",
    name: "Luiza Campos",
    role: "Content Creator",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "Como precisava de algo mais personalizado que o Linktree, O MiniApp-i me deu total liberdade criativa e as estatísticas me ajudam a entender melhor meu público.",
    name: "Luiz Campos",
    role: "Content Creator",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "Implementamos o MiniApp-i para toda nossa equipe de vendas e os resultados foram impressionantes. A facilidade de atualização e o design profissional fizeram toda diferença.",
    name: "Fernando Alves",
    role: "Diretor Comercial",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg"
  }
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
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

  // Configuração de autoplay para garantir o loop infinito
  useEffect(() => {
    if (!api) return;
    
    const startAutoplay = () => {
      stopAutoplay();
      autoplayRef.current = setInterval(() => {
        api.scrollNext();
      }, 5000); // Intervalo maior (5 segundos) para ser menos intrusivo
    };
    
    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
    
    // Pausa o autoplay quando o mouse está sobre o carrossel
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>O que nossos clientes dizem</h2>
          <p>Confira a experiência de quem já utiliza o MiniApp-i para impulsionar sua presença digital.</p>
        </div>
        
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel 
            setApi={setApi}
            className="mx-auto"
            opts={{
              align: "center",
              loop: true,
              dragFree: true
            }}
          >
            <CarouselContent>
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="md:basis-1/3 basis-full"
                >
                  <div className="testimonial-card h-full bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={18} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-6 flex-grow">"{testimonial.text}"</p>
                    
                    <div className="flex items-center mt-auto">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-miniapp-primary">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white text-miniapp-primary z-10"
            />
            
            <CarouselNext 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white text-miniapp-primary z-10"
            />
          </Carousel>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex % testimonialsData.length ? "bg-miniapp-primary w-4" : "bg-gray-300"
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
