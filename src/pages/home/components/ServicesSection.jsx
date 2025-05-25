// src/pages/home/components/ServicesSection.jsx
import { services } from "../data"

export default function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Servicios de IA Médica</h2>
          <p className="text-lg text-gray-600">
            Descubre cómo nuestra inteligencia artificial puede transformar cada aspecto de tu práctica médica
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ Icon, title, description }, idx) => (
            <div
              key={idx}
              className="group p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition"
            >
              <div className="mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                {/* Aquí montas el icono */}
                <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
    