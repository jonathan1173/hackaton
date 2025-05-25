import { Link } from "react-router-dom"
import {
  Brain,
  Stethoscope,
  Calendar,
  FileText,
  Shield,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Activity,
  Zap,
  Heart,
  Eye,
} from "lucide-react"

const HomePage = () => {
  const services = [
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Análisis de Radiografías",
      description:
        "IA avanzada para detectar anomalías en rayos X, tomografías y resonancias magnéticas con precisión médica.",
    },
    {
      icon: <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Consultas Menores",
      description: "Evaluación inicial de síntomas comunes y recomendaciones de tratamiento basadas en IA médica.",
    },
    {
      icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Reservaciones Inteligentes",
      description: "Sistema automatizado para agendar citas médicas según disponibilidad y urgencia del caso.",
    },
    {
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Informes Médicos",
      description: "Generación automática de reportes médicos detallados y análisis de resultados de laboratorio.",
    },
  ]

  const features = [
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Seguridad Garantizada",
      description: "Cumplimiento total con HIPAA y protección de datos médicos",
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Disponible 24/7",
      description: "Acceso a servicios de IA médica las 24 horas del día",
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Equipo Especializado",
      description: "Desarrollado por médicos y especialistas en IA",
    },
  ]

  const testimonials = [
    {
      name: "Dr y Ing Jonathan Samuel",
      role: "Radióloga",
      content: "La precisión en el análisis de radiografías ha mejorado significativamente nuestro diagnóstico.",
      rating: 5,
    },
    {
      name: "Dr. Carlos Ruiz",
      role: "Médico General",
      content: "Las consultas menores automatizadas nos han permitido optimizar el tiempo con pacientes.",
      rating: 5,
    },
  ]

  const heroFeatures = [
    {
      icon: <Activity className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Diagnóstico Rápido",
      description: "Resultados en segundos",
    },
    {
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "IA Avanzada",
      description: "Tecnología de última generación",
    },
    {
      icon: <Heart className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Cuidado Personalizado",
      description: "Adaptado a cada paciente",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Revoluciona la
                  <span className="text-blue-600 block sm:inline"> Medicina</span> con
                  <span className="text-blue-600 block sm:inline"> IA</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Transforma tu práctica médica con IA avanzada para análisis de radiografías, consultas automatizadas y
                  gestión inteligente de citas médicas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group text-sm sm:text-base"
                >
                  Comenzar Ahora
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm sm:text-base">
                  Ver Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 max-w-md mx-auto lg:max-w-none">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">99.2%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Precisión</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Disponible</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Médicos</div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative mt-8 lg:mt-0">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      <span className="text-white font-semibold text-sm sm:text-base">Análisis en Progreso</span>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-white/20 h-2 sm:h-3 rounded-full overflow-hidden">
                      <div className="bg-white h-full w-3/4 rounded-full animate-pulse"></div>
                    </div>
                    <div className="bg-white/20 h-2 sm:h-3 rounded-full overflow-hidden">
                      <div className="bg-white h-full w-1/2 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {heroFeatures.map((feature, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                      <div className="text-white mb-2 flex justify-center">{feature.icon}</div>
                      <h3 className="text-white font-semibold text-xs sm:text-sm mb-1">{feature.title}</h3>
                      <p className="text-white/80 text-xs">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Success Card */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Diagnóstico Completado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Servicios de IA Médica</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo nuestra inteligencia artificial puede transformar cada aspecto de tu práctica médica
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="text-blue-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">¿Por qué elegir MediAI?</h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600">
                  Nuestra plataforma combina la experiencia médica con la tecnología más avanzada para ofrecer
                  resultados excepcionales.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                      <div className="text-blue-600">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Features Card */}
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <div className="space-y-4 sm:space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold text-lg sm:text-xl">Panel de Control</h3>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Mock Dashboard Elements */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-xs sm:text-sm">Análisis Completados</span>
                        <span className="text-white font-bold text-sm sm:text-base">1,247</span>
                      </div>
                      <div className="bg-white/20 h-1 sm:h-2 rounded-full overflow-hidden">
                        <div className="bg-green-400 h-full w-4/5 rounded-full"></div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-xs sm:text-sm">Precisión Promedio</span>
                        <span className="text-white font-bold text-sm sm:text-base">99.2%</span>
                      </div>
                      <div className="bg-white/20 h-1 sm:h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-400 h-full w-full rounded-full"></div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-xs sm:text-sm">Tiempo Promedio</span>
                        <span className="text-white font-bold text-sm sm:text-base">2.3s</span>
                      </div>
                      <div className="bg-white/20 h-1 sm:h-2 rounded-full overflow-hidden">
                        <div className="bg-purple-400 h-full w-1/4 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Lo que dicen los profesionales</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Testimonios reales de médicos que ya utilizan MediAI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-xl">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              ¿Listo para revolucionar tu práctica médica?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100">
              Únete a cientos de profesionales que ya confían en MediAI para mejorar sus diagnósticos y optimizar su
              tiempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors group text-sm sm:text-base"
              >
                Comenzar Prueba Gratuita
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-sm sm:text-base">
                Solicitar Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
