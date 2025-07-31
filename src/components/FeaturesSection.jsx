import React from 'react'

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Conheça Nossos Livros Cristãos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias bíblicas cuidadosamente ilustradas para ensinar valores cristãos de forma lúdica e educativa
          </p>
        </div>

        {/* Book Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Book 1 */}
          <div className="feature-card rounded-2xl p-6 text-center">
            <div className="w-full h-64 bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-white font-bold text-lg">A ARCA DE NOÉ</div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">A Arca de Noé</h3>
            <p className="text-gray-600">Uma aventura colorida sobre obediência e fé</p>
          </div>

          {/* Book 2 */}
          <div className="feature-card rounded-2xl p-6 text-center">
            <div className="w-full h-64 bg-gradient-to-br from-green-200 to-green-400 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-white font-bold text-lg">DAVI E GOLIAS</div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Davi e Golias</h3>
            <p className="text-gray-600">Coragem e confiança em Deus</p>
          </div>

          {/* Book 3 */}
          <div className="feature-card rounded-2xl p-6 text-center">
            <div className="w-full h-64 bg-gradient-to-br from-purple-200 to-purple-400 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-white font-bold text-lg">JESUS E AS CRIANÇAS</div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Jesus e as Crianças</h3>
            <p className="text-gray-600">O amor de Jesus pelas crianças</p>
          </div>
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

export default FeaturesSection

