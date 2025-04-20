"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Preparar os parâmetros do template
    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
      to_email: "uxdanieljr@gmail.com",
    }

    try {
      // Enviar email usando EmailJS diretamente
      await emailjs.send("service_x6g9qmh", "template_lbpsznn", templateParams, "iWPAipcDH75YQz_el")

      // Reset do formulário após envio bem-sucedido
      setFormState({ name: "", email: "", message: "" })
      setIsSubmitted(true)

      // Feedback temporário para o usuário
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error("Erro ao enviar formulário:", err)
      setError("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-20 px-4 relative">
      <div className="absolute bottom-0 -left-60 w-full h-full overflow-hidden pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contato</h2>
          <div className="w-16 h-1 bg-neon-violet mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Vamos conversar sobre seu projeto? Entre em contato e vamos transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="slide-in-left"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="bg-muted/30 border-muted/50 backdrop-blur-sm focus:border-neon-violet focus:ring-neon-violet/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  required
                  className="bg-muted/30 border-muted/50 backdrop-blur-sm focus:border-neon-violet focus:ring-neon-violet/30 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Descreva seu projeto ou ideia"
                  rows={5}
                  required
                  className="bg-muted/30 border-muted/50 backdrop-blur-sm resize-none focus:border-neon-violet focus:ring-neon-violet/30 transition-all"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-neon-violet hover:bg-neon-violet/80 text-white font-semibold btn-pulse hover-scale"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : isSubmitted ? "Mensagem Enviada!" : "Enviar Mensagem"}
              </Button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 mt-2"
                >
                  Obrigado pelo contato! Retornarei em breve.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-400 mt-2"
                >
                  {error}
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="slide-in-right space-y-6"
          >
            <div className="grid gap-4">
              <Card className="bg-card/30 backdrop-blur-sm border border-muted/30">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-muted/20 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-neon-violet" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Email</p>
                    <p className="text-white">uxdanieljr@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur-sm border border-muted/30">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-muted/20">
                    <Phone className="h-5 w-5 text-neon-violet" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Telefone</p>
                    <p className="text-white">+55 (12) 98829-8554</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur-sm border border-muted/30">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-muted/20">
                    <Linkedin className="h-5 w-5 text-neon-violet" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/dccarvalhojr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-neon-violet transition-colors"
                    >
                      linkedin.com/in/dccarvalhojr
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
