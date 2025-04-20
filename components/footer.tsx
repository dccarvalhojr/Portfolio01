"use client"

import { Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-10 px-4 bg-black/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Daniel Junior</h3>
            <p className="text-white/60 mt-1">Product Designer</p>
          </div>

          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="https://linkedin.com/in/dccarvalhojr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/20 hover:bg-neon-violet/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-white/80" />
            </motion.a>
          </div>
        </div>

        <div className="border-t border-muted/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Daniel Junior. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <a href="#sobre" className="text-white/40 hover:text-white/80 text-sm transition-colors">
              Sobre
            </a>
            <a href="#projetos" className="text-white/40 hover:text-white/80 text-sm transition-colors">
              Projetos
            </a>
            <a href="#contato" className="text-white/40 hover:text-white/80 text-sm transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
