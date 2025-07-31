import React from 'react'
import { Shield, CreditCard, Download, Check } from 'lucide-react'

const GuaranteesSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Compra 100% Segura",
      features: [
        "Pagamento processado por plataforma segura",
        "Criptografia SSL de 256 bits",
        "Garantia de reembolso em 7 dias",
        "Download imediato após confirmação",
        "Suporte dedicado via WhatsApp"
      ],
      subtitle: "Aceitos todos os cartões e PIX"
    },
    {
      icon: Check,
      title: "Garantia de 7 Dias",
      features: [
        "Sem burocracias",
        "Reembolso total",
        "Compra 100% segura"
      ],
      subtitle: "Se por qualquer motivo você não ficar 100% satisfeita com nossos livros de colorir, devolvemos seu dinheiro sem perguntas!"
    },
    {
      icon: CreditCard,
      title: "Pagamento Seguro",
      features: [
        "SSL Certificado",
        "Dados protegidos",
        "Transação segura"
      ],
      subtitle: "Sua compra é protegida pelos melhores sistemas de segurança. Dados criptografados e transação 100% segura."
    },
    {
      icon: Download,
      title: "Acesso Imediato",
      features: [
        "Download instantâneo",
        "Arquivos em alta qualidade",
        "Suporte incluso"
      ],
      subtitle: "Após a confirmação do pagamento, você recebe imediatamente todos os 35 livros de colorir em seu email."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon
            return (
              <div key={index} className="text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">{guarantee.title}</h3>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  {guarantee.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Subtitle */}
                <p className="text-gray-600 text-sm leading-relaxed">{guarantee.subtitle}</p>
              </div>
            )
          })}
        </div>

        {/* Payment Methods */}
        <div className="text-center mt-16">
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Formas de Pagamento Aceitas</h3>
            <div className="flex flex-wrap justify-center items-center space-x-6 space-y-2">
              <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold">VISA</div>
              <div className="bg-red-600 text-white px-4 py-2 rounded font-bold">MASTERCARD</div>
              <div className="bg-orange-600 text-white px-4 py-2 rounded font-bold">ELO</div>
              <div className="bg-purple-600 text-white px-4 py-2 rounded font-bold">HIPERCARD</div>
              <div className="bg-green-600 text-white px-4 py-2 rounded font-bold">PIX</div>
              <div className="bg-yellow-600 text-white px-4 py-2 rounded font-bold">BOLETO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuaranteesSection

