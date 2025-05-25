// src/pages/home/components/CTASection.jsx
import { Link } from "react-router-dom"
import { icons } from "../data"
const { ArrowRight } = icons

export default function CTASection() {
  return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 sm:space-y-8">
            {/* title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              ¿Listo para revolucionar tu práctica médica?
            </h2>
            {/* descripcion  */}
            <p className="text-base sm:text-lg lg:text-xl text-blue-100">
              Únete a cientos de profesionales que ya confían en MediAI para mejorar sus diagnósticos y optimizar su
              tiempo.
            </p>

            {/* btn */}
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
  )
}
