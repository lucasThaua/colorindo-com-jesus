import React from 'react'
import { Heart, Brain, Clock, Download, Shield, Star } from 'lucide-react'

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Valores Cristãos Sólidos",
      description: "Histórias bíblicas cuidadosamente adaptadas que ensinam amor, fé, perdão e bondade de forma natural e memorável",
      color: "bg-red-500"
    },
    {
      icon: Brain,
      title: "Desenvolvimento Completo",
      description: "Estimula criatividade, coordenação motora fina, concentração e habilidades cognitivas essenciais para o crescimento",
      color: "bg-purple-500"
    },
    {
      icon: Clock,
      title: "Tempo de Qualidade",
      description: "Momentos especiais em família longe das telas, fortalecendo vínculos e criando memórias duradouras",
      color: "bg-green-500"
    },
    {
      icon: Download,
      title: "Acesso Vitalício",
      description: "Download instantâneo após compra, imprima ilimitadamente, use offline, sem dependência de internet",
      color: "bg-blue-500"
    },
    {
      icon: Shield,
      title: "Conteúdo Seguro",
      description: "Material 100% cristão, livre de violência, desenvolvido por educadores cristãos experientes",
      color: "bg-orange-500"
    },
    {
      icon: Star,
      title: "Qualidade Premium",
      description: "Ilustrações profissionais, alta resolução para impressão, papel e formato otimizados para crianças",
      color: "bg-yellow-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Benefícios Únicos e Comprovados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Para o desenvolvimento das crianças
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="feature-card rounded-2xl p-8">
                <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection

