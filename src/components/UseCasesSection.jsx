import React from 'react'
import { Users, GraduationCap, Heart, Baby, MessageCircle, Calendar } from 'lucide-react'

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Users,
      title: "Células e Grupos",
      description: "Transforme suas células em momentos especiais! Engaje crianças e fortaleça vínculos familiares com atividades que ensinam enquanto divertem.",
      color: "bg-orange-500"
    },
    {
      icon: GraduationCap,
      title: "Escola Dominical",
      description: "Revolucione suas aulas! Recursos visuais profissionais que tornam o aprendizado bíblico interativo, memorável e cheio de significado.",
      color: "bg-blue-500"
    },
    {
      icon: Heart,
      title: "Devocional Familiar",
      description: "Crie tradições duradouras! Fortaleça a fé em família com momentos especiais que ensinam valores cristãos de forma natural e divertida.",
      color: "bg-red-500"
    },
    {
      icon: Baby,
      title: "Ministério Infantil",
      description: "Potencialize seu ministério! Material profissional que facilita o ensino bíblico e mantém as crianças atentas e participativas.",
      color: "bg-green-500"
    },
    {
      icon: MessageCircle,
      title: "Aconselhamento",
      description: "Ferramenta terapêutica! Ajude crianças a expressarem sentimentos e aprender valores através da arte e reflexão bíblica.",
      color: "bg-purple-500"
    },
    {
      icon: Calendar,
      title: "Eventos Especiais",
      description: "Momentos únicos! Ideal para retiros, acampamentos, festivais e eventos especiais da igreja com atividades que marcam vidas.",
      color: "bg-indigo-500"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Onde Usar Nossos Livros
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Versatilidade comprovada em diversos contextos cristãos
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon
            return (
              <div key={index} className="feature-card rounded-2xl p-8 text-center">
                <div className={`w-16 h-16 ${useCase.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="cta-button text-white font-bold text-lg px-10 py-3 rounded-full shadow-lg">
            QUERO VER AS OFERTAS
          </button>
        </div>
      </div>
    </section>
  )
}

export default UseCasesSection

