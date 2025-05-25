"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Activity, Menu, X } from "lucide-react"
import './styles.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-400 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo - Esquina Izquierda */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Activity className="w-7 h-7 text-blue-600" />
            <div className="text-xl font-bold">
              <span className="text-blue-600">Medi</span>
              <span className="text-black transition-transform duration-300 group-hover:scale-120 inline-block">IA</span>
            </div>
          </div>

          {/* Desktop Navigation - Esquina Derecha */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium rounded-lg hover:bg-gray-50"
            >
              Inicio
            </Link>
            <Link
              to="/servicios"
              className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium rounded-lg hover:bg-gray-50"
            >
              Servicios
            </Link>
            <Link
              to="/dashboard"
              className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="pt-4 space-y-2 border-t border-gray-100">
            <Link
              to="/"
              className="block px-4 py-2.5 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 font-medium rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/servicios"
              className="block px-4 py-2.5 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 font-medium rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              to="/dashboard"
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 mt-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
