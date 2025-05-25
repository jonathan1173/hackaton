// src/pages/home/components/HeroSection.jsx
import { Link } from "react-router-dom"
import { heroFeatures, icons } from "../data"
const { ArrowRight, CheckCircle, Eye } = icons

export default function HeroSection() {
  return (
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

  )
}
