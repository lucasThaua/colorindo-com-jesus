import React from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import UseCasesSection from './components/UseCasesSection'
import BenefitsSection from './components/BenefitsSection'
import TestimonialsSection from './components/TestimonialsSection'
import PricingSection from './components/PricingSection'
import GuaranteesSection from './components/GuaranteesSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteesSection />
      <FAQSection />
      <ContactSection />
    </div>
  )
}

export default App

