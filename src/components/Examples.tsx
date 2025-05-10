
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  }
];

const Examples = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? examplesData.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % examplesData.length);
  };
  
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
        
        <div className="max-w-md mx-auto relative">
          <div className="overflow-hidden relative min-h-[500px]">
            <div
              className="flex transition-transform duration-300 ease-in-out h-full"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {examplesData.map((example, index) => (
                <div key={index} className="min-w-full flex flex-col items-center">
                  <img
                    src={example.image}
                    alt={example.name}
                    className="h-[450px] w-auto object-cover rounded-lg shadow-lg"
                  />
                  <div className="mt-4 text-center">
                    <h4 className="font-semibold text-lg">{example.name}</h4>
                    <p className="text-gray-600">{example.profession}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous example"
          >
            <ChevronLeft className="text-miniapp-primary" size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next example"
          >
            <ChevronRight className="text-miniapp-primary" size={24} />
          </button>
          
          <div className="flex justify-center mt-4 gap-2">
            {examplesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-miniapp-primary w-4" : "bg-gray-300"
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
