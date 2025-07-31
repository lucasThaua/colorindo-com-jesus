import React from 'react'
import { MessageCircle, Phone } from 'lucide-react'

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-4xl mb-4">💬</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Dúvidas? Fale conosco!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nossa equipe está pronta para ajudar você
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp */}
          <div className="feature-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">WhatsApp</h3>
            <p className="text-gray-600 mb-6">
              Fale diretamente conosco pelo WhatsApp para tirar suas dúvidas ou receber suporte
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full transition-colors">
              Falar no WhatsApp
            </button>
          </div>

          {/* Email Support */}
          <div className="feature-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Suporte por Email</h3>
            <p className="text-gray-600 mb-6">
              Envie sua dúvida por email e nossa equipe responderá em até 24 horas
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-full transition-colors">
              Enviar Email
            </button>
          </div>
        </div>

        {/* Support Hours */}
        <div className="bg-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Horário de Atendimento</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <div className="font-bold text-gray-800">Segunda a Sexta</div>
              <div>8h às 18h</div>
            </div>
            <div>
              <div className="font-bold text-gray-800">Sábados</div>
              <div>8h às 12h</div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            * Horário de Brasília. Respostas automáticas 24h por dia.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-12 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-blue-600 font-bold text-lg">LCK</div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Luz do Céu Kids BR</h3>
            <p className="text-gray-400">Transformando momentos especiais em família</p>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Luz do Céu Kids BR. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Material desenvolvido com amor para fortalecer a fé das crianças.
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default ContactSection

