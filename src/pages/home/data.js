// src/pages/home/data.js
import {
  Brain, Stethoscope, Calendar, FileText,
  Shield, Clock, Users, CheckCircle,
  ArrowRight, Star, Activity, Zap, Heart, Eye
} from "lucide-react"

export const services = [
  { Icon: Brain,         title: "Análisis de Radiografías",      description: "IA avanzada…" },
  { Icon: Stethoscope,   title: "Consultas Menores",            description: "Evaluación inicial…" },
  { Icon: Calendar,      title: "Reservaciones Inteligentes",    description: "Sistema automatizado…" },
  { Icon: FileText,      title: "Informes Médicos",             description: "Generación automática…" }
]

export const features = [
  { Icon: Shield, title: "Seguridad Garantizada", description: "Cumplimiento total con HIPAA y protección…" },
  { Icon: Clock,  title: "Disponible 24/7",        description: "Acceso a servicios de IA médica las 24 horas" },
  { Icon: Users,  title: "Equipo Especializado",   description: "Desarrollado por médicos y especialistas" }
]

export const testimonials = [
  { name: "Dr y Ing Jonathan Samuel", role: "Radióloga", content: "La precisión en el análisis…", rating: 5 },
  { name: "Dr. Carlos Ruiz",          role: "Médico General", content: "Las consultas menores…", rating: 5 }
]

export const heroFeatures = [
  { Icon: Activity, title: "Diagnóstico Rápido", description: "Resultados en segundos" },
  { Icon: Zap,      title: "IA Avanzada",        description: "Tecnología de última generación" },
  { Icon: Heart,    title: "Cuidado Personalizado", description: "Adaptado a cada paciente" }
]

export const icons = { ArrowRight, CheckCircle, Star, Eye }
