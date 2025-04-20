"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
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
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-16">
      {/* Removido o comentário sobre o background */}

      <div className="text-center max-w-3xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          Transformando ideias em experiências digitais que convertem.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mb-12 text-white/60 max-w-xl mx-auto"
        >
          <span className="text-gradient">Product Designer</span> com foco em UX/UI e desenvolvimento front-end
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href="#projetos">
            <Button
              className="bg-neon-violet hover:bg-neon-violet/80 text-white font-semibold btn-pulse hover-scale"
              size="lg"
            >
              Ver Projetos
            </Button>
          </Link>
          <Link href="#contato">
            <Button
              variant="outline"
              className="border-neon-violet text-neon-violet hover:bg-neon-violet/10 btn-pulse hover-scale"
              size="lg"
            >
              Contato
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white/60"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  )
}
