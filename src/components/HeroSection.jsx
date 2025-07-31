import React from 'react'
import { Star, Home, Heart } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center text-white">
        {/* Logo */}
        <div className="mb-8 floating-animation">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-6">
            <div className="text-blue-600 font-bold text-lg">LCK</div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          35 Livros de Colorir
          <br />
          <span className="text-yellow-300">Cristãos</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
          Transforme momentos especiais com sua família, célula e escola dominical
        </p>

        {/* Book Cover Image */}
        <div className="mb-12 floating-animation">
          <div className="w-80 h-96 mx-auto bg-gradient-to-br from-yellow-200 to-orange-300 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-4 bg-white rounded-xl flex flex-col items-center justify-center p-6">
              <div className="text-blue-600 font-bold text-lg mb-2">35 LIVROS DE</div>
              <div className="text-blue-600 font-bold text-2xl mb-4">COLORIR</div>
              <div className="text-sm text-gray-600 mb-4">COM DEVOCIONAL INFANTIL</div>
              <div className="flex space-x-4 mb-4">
                <div className="w-16 h-20 bg-orange-200 rounded"></div>
                <div className="w-16 h-20 bg-blue-200 rounded"></div>
                <div className="w-16 h-20 bg-green-200 rounded"></div>
                <div className="w-16 h-20 bg-purple-200 rounded"></div>
              </div>
              <div className="flex space-x-8 text-center">
                <div className="w-12 h-16 bg-gray-200 rounded-full"></div>
                <div className="w-12 h-16 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Icons */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-medium">Células</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-medium">Escola Dominical</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-medium">Devocional Familiar</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="cta-button text-white font-bold text-xl px-12 py-4 rounded-full shadow-lg pulse-animation">
          QUERO VER AS OFERTAS
        </button>
      </div>
    </section>
  )
}

export default HeroSection

