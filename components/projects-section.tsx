"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Conecta",
    subtitle: "Transformando a Experiência Nutricional",
    description: "Refinando a experiência do usuário no acompanhamento nutricional.",
    categories: ["Redesign", "App", "SaaS"],
    image: "/images/banner-conecta.png",
    url: "https://medium.com/@dccarvalhojr/transformando-a-experiência-nutricional-redesign-do-app-conecta-d316219f4654",
  },
  {
    id: 2,
    title: "Mobinft",
    subtitle: "Descomplicando a Web3",
    description: "Aprimorando a jornada de compra de NFTs com UX Design: técnicas e estratégias.",
    categories: ["App"],
    image: "/images/banner-mobinft.png",
    url: "https://medium.com/@dccarvalhojr/mobinft-descomplicando-a-web3-simplificando-o-processo-de-compra-de-nfts-9a5e83e1d905",
  },
  {
    id: 3,
    title: "Caderno Online",
    subtitle: "Plataforma para gerenciamento de aulas e alunos",
    description: "Desafios na educação personalização de aulas e gestão de alunos para professores.",
    categories: ["Desktop", "SaaS"],
    image: "/images/banner-caderno-online.png",
    url: "https://medium.com/@dccarvalhojr/caderno-online-plataforma-para-gerenciamento-de-aulas-e-alunos-f67d889b8609",
  },
]

// Marcas com quem trabalhou
const brands = [
  {
    name: "Bradesco Seguros",
    logo: "/images/bradesco-logo.png",
  },
  {
    name: "Capgemini",
    logo: "/images/capgemini-logo.png",
  },
  {
    name: "Appstorm",
    logo: "/images/appstorm-logo.png",
  },
]

export default function ProjectsSection() {
  const [filter, setFilter] = useState("Todos")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    if (filter === "Todos") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.categories.includes(filter)))
    }
  }, [filter])

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
    <section id="projetos" className="py-20 px-4 relative">
      {/* Removido o comentário sobre o background */}

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos</h2>
          <div className="w-16 h-1 bg-neon-violet mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi, aplicando metodologias de design centrado no usuário e técnicas
            avançadas de UX/UI.
          </p>
        </div>

        <Tabs defaultValue="Todos" className="mb-12 scale-up">
          <TabsList className="bg-muted/30 backdrop-blur-sm mx-auto flex flex-wrap justify-center">
            <TabsTrigger value="Todos" onClick={() => setFilter("Todos")}>
              Todos
            </TabsTrigger>
            <TabsTrigger value="App" onClick={() => setFilter("App")}>
              App
            </TabsTrigger>
            <TabsTrigger value="Redesign" onClick={() => setFilter("Redesign")}>
              Redesign
            </TabsTrigger>
            <TabsTrigger value="Desktop" onClick={() => setFilter("Desktop")}>
              Desktop
            </TabsTrigger>
            <TabsTrigger value="SaaS" onClick={() => setFilter("SaaS")}>
              SaaS
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="scale-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="hover-lift overflow-hidden border-muted/30 bg-card/30 backdrop-blur-sm h-full flex flex-col">
                <div className="relative overflow-hidden h-56 group">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} - ${project.subtitle}`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-neon-violet/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex gap-2 mb-3">
                    {project.categories.map((category) => (
                      <Badge key={category} className="bg-muted/50">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <h4 className="text-white/70 text-sm font-medium mb-3">{project.subtitle}</h4>
                  <p className="text-white/60 text-sm">{project.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Link href={project.url} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full group border-neon-violet text-neon-violet hover:bg-neon-violet/10 btn-pulse"
                    >
                      Ver Detalhes
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Seção de marcas */}
        <div className="fade-in">
          <h3 className="text-xl text-center text-white/70 mb-8">Marcas com quem trabalhei</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="bg-[#1E1E1E] rounded-full px-6 py-3 flex items-center justify-center mb-2 w-[180px] h-[60px]">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    className="max-h-8 max-w-[120px] object-contain"
                  />
                </div>
                <span className="text-white/60 text-sm">{brand.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
