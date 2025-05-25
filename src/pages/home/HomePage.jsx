// src/pages/home/HomePage.jsx
// import './styles.css'      // si necesitas estilos globales
import HeroSection        from './components/HeroSection'
import ServicesSection    from './components/ServicesSection'
import FeaturesSection    from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection         from './components/CTASection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
