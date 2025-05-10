
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    text: "O MiniApp-i revolucionou minha forma de compartilhar contatos e informações profissionais. A inteligência artificial sugeriu um layout perfeito para minha especialidade médica.",
    name: "Dr. Ricardo Mendes",
    role: "Neurologista",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "Como influencer, precisava de algo mais personalizado que o Linktree. O MiniApp-i me deu total liberdade criativa e as estatísticas me ajudam a entender melhor meu público.",
    name: "Luiza Campos",
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
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>O que nossos clientes dizem</h2>
          <p>Confira a experiência de quem já utiliza o MiniApp-i para impulsionar sua presença digital.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card flex flex-col">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
