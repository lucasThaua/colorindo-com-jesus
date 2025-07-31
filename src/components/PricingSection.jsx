import React from 'react'
import { Check, Gift } from 'lucide-react'

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-red-500 text-white px-6 py-2 rounded-full inline-block mb-6 font-bold">
            OFERTA LIMITADA - Apenas no dia 27/07/25
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Escolha Sua Oferta Especial
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Livros de qualidade profissional para enriquecer seus momentos de fé
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Package */}
          <div className="price-card bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pacote Básico</h3>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-gray-500 line-through text-xl">R$ 47,00</span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">-79%</span>
                </div>
                <div className="text-5xl font-bold text-green-600 mb-2">R$ 10,00</div>
                <div className="text-gray-600">Você economiza R$ 37,00</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">35 Livros de Colorir Completos</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Download Imediato</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Acesso Vitalício</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Garantia de 7 dias</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full cta-button text-white font-bold text-lg py-4 rounded-full">
              QUERO O PACOTE BÁSICO
            </button>
          </div>

          {/* Premium Package */}
          <div className="price-card bg-white rounded-2xl p-8 shadow-lg border-4 border-green-500 relative">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                MAIS VENDIDO
              </div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pacote Premium</h3>
              
              {/* Price */}
              <div className="mb-6">
                <div className="text-5xl font-bold text-green-600 mb-2">R$ 17,00</div>
                <div className="text-gray-600">Você economiza R$ 171,00</div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <div className="text-center font-bold text-gray-800 mb-4">
                TUDO DO PACOTE BÁSICO +
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-yellow-50 p-3 rounded-lg">
                  <Gift className="w-5 h-5 text-yellow-500" />
                  <div>
                    <div className="font-bold text-gray-800">BÔNUS 1: 5 Vídeos de Histórias Bíblicas</div>
                    <div className="text-green-600 font-bold">R$ 97,00</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-yellow-50 p-3 rounded-lg">
                  <Gift className="w-5 h-5 text-yellow-500" />
                  <div>
                    <div className="font-bold text-gray-800">BÔNUS 2: 18 Versículos Ilustrados</div>
                    <div className="text-green-600 font-bold">R$ 39,00</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-yellow-50 p-3 rounded-lg">
                  <Gift className="w-5 h-5 text-yellow-500" />
                  <div>
                    <div className="font-bold text-gray-800">BÔNUS 3: Calendário Bíblico Semanal</div>
                    <div className="text-green-600 font-bold">R$ 35,00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full cta-button text-white font-bold text-lg py-4 rounded-full">
              QUERO O PACOTE PREMIUM
            </button>
          </div>
        </div>

        {/* Security Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-full">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4" />
            </div>
            <span className="font-bold">Compra 100% Segura</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection

