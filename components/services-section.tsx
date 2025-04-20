"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, LayoutGrid, Cpu, GitMerge } from "lucide-react"

const services = [
  {
    title: "Criação de Landing Pages",
    description: "Desenvolvimento de páginas de conversão otimizadas para seus objetivos de negócio.",
    icon: <LayoutGrid className="h-10 w-10 text-neon-violet" />,
  },
  {
    title: "Softwares de Gestão",
    description: "Design e desenvolvimento de sistemas para otimizar processos internos e fluxos de trabalho.",
    icon: <GitMerge className="h-10 w-10 text-neon-violet" />,
  },
  {
    title: "Implementação de IA",
    description: "Integração de soluções de inteligência artificial para melhorar a experiência do usuário.",
    icon: <Cpu className="h-10 w-10 text-neon-violet" />,
  },
  {
    title: "Metodologia Lean UX",
    description: "Abordagem ágil e centrada no usuário para desenvolvimento contínuo de produtos.",
    icon: <Lightbulb className="h-10 w-10 text-neon-violet" />,
  },
]

export default function ServicesSection() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .scale-up")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    fadeElements.forEach((el) => observer.observe(el))

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="servicos" className="py-20 px-4 bg-black/20 backdrop-blur-sm relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviços</h2>
          <div className="w-16 h-1 bg-neon-violet mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Ofereço soluções completas de design e desenvolvimento, com foco em resultados e na experiência do usuário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="scale-up h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-muted/30 bg-card/30 backdrop-blur-sm group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-muted/20 transition-colors duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-white/60">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
