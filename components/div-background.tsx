"use client"

export default function DivBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* Fundo escuro - z-index mais baixo */}
      <div className="absolute inset-0 bg-[#030303] z-[-3]"></div>

      {/* 5 linhas verticais - z-index mais alto que o fundo */}
      <div className="absolute top-0 bottom-0 w-px left-[10%] bg-gradient-to-b from-transparent via-white/50 to-transparent z-[-2]"></div>
      <div className="absolute top-0 bottom-0 w-px left-[30%] bg-gradient-to-b from-transparent via-white/50 to-transparent z-[-2]"></div>
      <div className="absolute top-0 bottom-0 w-px left-[50%] bg-gradient-to-b from-transparent via-white/50 to-transparent z-[-2]"></div>
      <div className="absolute top-0 bottom-0 w-px left-[70%] bg-gradient-to-b from-transparent via-white/50 to-transparent z-[-2]"></div>
      <div className="absolute top-0 bottom-0 w-px left-[90%] bg-gradient-to-b from-transparent via-white/50 to-transparent z-[-2]"></div>

      {/* Gradiente de sombra superior - z-index mais alto que as linhas */}
      <div className="absolute top-0 left-0 right-0 h-[20vh] bg-gradient-to-b from-black/70 to-transparent z-[-1]"></div>

      {/* Gradiente de sombra inferior - z-index mais alto que as linhas */}
      <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-black/70 to-transparent z-[-1]"></div>
    </div>
  )
}
