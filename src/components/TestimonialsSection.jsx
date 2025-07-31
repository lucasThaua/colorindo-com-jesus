import React from 'react'
import { Star } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe e Líder de Célula",
      content: "Os livros transformaram nossos momentos em família! As crianças adoram colorir e aprender sobre Jesus ao mesmo tempo.",
      rating: 5,
      image: "MS"
    },
    {
      name: "Pastor João",
      role: "Pastor de Ministério Infantil",
      content: "Material de excelente qualidade! Uso nas aulas da escola dominical e as crianças ficam super engajadas.",
      rating: 5,
      image: "PJ"
    },
    {
      name: "Ana Costa",
      role: "Professora de Escola Dominical",
      content: "Comprei para usar nas minhas aulas e foi um sucesso! As ilustrações são lindas e as histórias muito bem contadas.",
      rating: 5,
      image: "AC"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Depoimentos Reais dos Nossos Clientes
          </h2>
          
          {/* Rating */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-xl text-gray-600">4,9/5 - 347 avaliações</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card rounded-2xl p-8 shadow-lg">
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonial Showcase */}
        <div className="bg-gray-100 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-64 h-96 mx-auto bg-gray-800 rounded-xl mb-6 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-sm mb-2">Sara Oliveira</div>
                <div className="text-xs mb-4">Mãe de 2 filhos</div>
                <div className="text-xs leading-relaxed px-4">
                  "Bom dia. Comprei este produto e até agora não consegui baixar. Vocês vão me ajudar ou não?"
                </div>
                <div className="mt-4 space-y-2">
                  <div className="bg-purple-600 text-xs py-1 px-2 rounded">Oi Sara!</div>
                  <div className="bg-purple-600 text-xs py-1 px-2 rounded">Bom dia!</div>
                  <div className="bg-purple-600 text-xs py-1 px-2 rounded">Vou te ajudar!</div>
                </div>
                <div className="text-xs mt-4">
                  Por favor o comprovante de pagamento e email para a conta do Gmail
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Nosso suporte está sempre pronto para ajudar você!"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

