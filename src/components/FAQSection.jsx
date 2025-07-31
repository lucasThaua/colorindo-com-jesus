import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      question: "Como recebo os livros?",
      answer: "Após a confirmação do pagamento, você receberá um email com o link para download de todos os 35 livros de colorir em formato PDF de alta qualidade."
    },
    {
      question: "Posso imprimir quantas vezes quiser?",
      answer: "Sim! Você pode imprimir quantas cópias quiser, quando quiser. O acesso é vitalício e sem limitações de impressão."
    },
    {
      question: "Qual a faixa etária recomendada?",
      answer: "Os livros são ideais para crianças de 3 a 12 anos, mas podem ser aproveitados por toda a família em momentos de devocional."
    },
    {
      question: "Os arquivos funcionam em qualquer impressora?",
      answer: "Sim! Os arquivos estão em formato PDF de alta resolução e funcionam em qualquer impressora doméstica ou profissional."
    },
    {
      question: "Preciso de internet para usar os livros?",
      answer: "Não! Após o download, você pode usar os livros offline, imprimir e usar quando e onde quiser, sem necessidade de internet."
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Se você não ficar 100% satisfeito com o produto, devolvemos seu dinheiro integralmente em até 7 dias, sem perguntas ou burocracias."
    },
    {
      question: "Que tipo de papel devo usar?",
      answer: "Recomendamos papel sulfite comum (75g) ou papel mais grosso (120g) para melhor resultado. Evite papel muito fino que pode borrar."
    },
    {
      question: "Os livros têm versículos bíblicos?",
      answer: "Sim! Cada livro contém versículos bíblicos relacionados à história, tornando o momento de colorir também um momento de aprendizado espiritual."
    },
    {
      question: "Quanto tempo demora para receber?",
      answer: "O acesso é imediato! Assim que o pagamento for confirmado, você recebe o email com os links de download em poucos minutos."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre nossos livros de colorir cristãos
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="cta-button text-white font-bold text-lg px-12 py-4 rounded-full shadow-lg">
            TIREI MINHAS DÚVIDAS, QUERO COMPRAR
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQSection

