
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
      }, 7000); // Intervalo maior (7 segundos) para ser menos intrusivo
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
    <section className="py-20" style={{ background: "linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%)", color: "var(--white)" }}>
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-white" style={{ color: "var(--white)" }}>O que nossos clientes dizem</h2>
          <p className="text-white" style={{ color: "var(--white)" }}>Confira a experiência de quem já utiliza o MiniApp-i para impulsionar sua presença digital.</p>
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
                  <div className="testimonial-card h-full p-8 rounded-lg relative" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                    <div className="relative z-10">
                      <p className="mb-6 flex-grow text-white font-light italic">{testimonial.text}</p>
                      
                      <div className="flex items-center mt-auto">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-white mb-1">{testimonial.name}</h4>
                          <p className="text-sm text-white opacity-80 m-0">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-5 left-5 text-6xl opacity-20 font-serif z-0">"</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white text-purple-600 z-10 hover:bg-gray-50 hover:scale-105 transition-all"
            />
            
            <CarouselNext 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white text-purple-600 z-10 hover:bg-gray-50 hover:scale-105 transition-all"
            />
          </Carousel>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex % testimonialsData.length ? "bg-white w-4" : "bg-white/50"
                }`}
                style={{ backgroundColor: "var(--white)" }}
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
