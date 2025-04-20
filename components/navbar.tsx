"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white hover:text-neon-violet transition-colors">
          Daniel Junior
        </Link>

        {/* Menu para desktop */}
        <div className="hidden md:flex space-x-8">
          <Link href="#sobre" className="text-white/70 hover:text-neon-violet transition-colors">
            Sobre
          </Link>
          <Link href="#projetos" className="text-white/70 hover:text-neon-violet transition-colors">
            Projetos
          </Link>
          <Link href="#servicos" className="text-white/70 hover:text-neon-violet transition-colors">
            Serviços
          </Link>
          <Link href="#contato" className="text-white/70 hover:text-neon-violet transition-colors">
            Contato
          </Link>
        </div>

        {/* Botão de menu para mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="#sobre"
              className="text-white/70 hover:text-neon-violet transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="#projetos"
              className="text-white/70 hover:text-neon-violet transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projetos
            </Link>
            <Link
              href="#servicos"
              className="text-white/70 hover:text-neon-violet transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="#contato"
              className="text-white/70 hover:text-neon-violet transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
