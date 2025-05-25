// src/pages/home/components/TestimonialsSection.jsx
import { testimonials, icons } from "../data"
const { Star } = icons

export default function TestimonialsSection() {
  return (
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
  )
}
