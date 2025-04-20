"use client"
import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Fingerprint, Code, PenTool, Users, Database, Zap } from "lucide-react"

export default function AboutSection() {
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

  // Atualizar os ícones de habilidades
  const skills = [
    { name: "Design Thinking", icon: <Fingerprint className="h-6 w-6 text-neon-violet" /> },
    { name: "HTML, CSS, JavaScript", icon: <Code className="h-6 w-6 text-neon-violet" /> },
    { name: "UX/UI Design", icon: <PenTool className="h-6 w-6 text-neon-violet" /> },
    { name: "Pesquisas & Testes", icon: <Users className="h-6 w-6 text-neon-violet" /> },
    { name: "Figma Expert", icon: <Database className="h-6 w-6 text-neon-violet" /> },
    { name: "Metodologias Ágeis", icon: <Zap className="h-6 w-6 text-neon-violet" /> },
  ]

  return (
    <section id="sobre" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-16 h-1 bg-neon-violet mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="slide-in-left relative h-full">
            <div className="relative overflow-hidden rounded-xl border border-muted/30 bg-card/30 backdrop-blur-sm h-full">
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Product Designer & Desenvolvedor</h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Com mais de 3 anos de experiência, combino conhecimentos técnicos em UX/UI com habilidades de
                  desenvolvimento front-end para criar experiências digitais completas.
                </p>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Minha abordagem de design é centrada no usuário e orientada por dados, aplicando metodologias como
                  Design Thinking e Lean UX para criar soluções que equilibram as necessidades dos usuários com os
                  objetivos de negócio.
                </p>
              </div>
            </div>
          </div>

          <div className="slide-in-right h-full">
            <div className="relative overflow-hidden rounded-xl border border-muted/30 bg-card/30 backdrop-blur-sm h-full">
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-6">Habilidades Técnicas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <Card key={index} className="bg-card/30 backdrop-blur-sm border border-muted/30">
                      <CardContent className="p-4 flex items-center gap-3">
                        {skill.icon}
                        <span className="text-white/80">{skill.name}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
