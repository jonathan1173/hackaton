// src/pages/home/components/FeaturesSection.jsx
import { features } from "../data"

export default function FeaturesSection() {
  return (
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
                {features.map(({ Icon, title, description }, index) => (
                    <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                        <div className="text-blue-600">
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        </div>
                        <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{description}</p>
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
  )
}
