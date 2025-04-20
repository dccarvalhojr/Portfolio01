"use client"

import { useState } from "react"

export default function DebugBackground() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 bg-neon-violet text-white px-3 py-1 rounded-md z-50"
      >
        Debug Background
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black/80 p-4 rounded-md text-white max-w-md pointer-events-auto">
          <h3 className="text-lg font-bold mb-2">Background Debug</h3>
          <p className="mb-2">5 linhas verticais devem estar visíveis em:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>10% da largura da tela</li>
            <li>30% da largura da tela</li>
            <li>50% da largura da tela</li>
            <li>70% da largura da tela</li>
            <li>90% da largura da tela</li>
          </ul>
          <div className="flex justify-between">
            <button
              onClick={() => {
                // Force redraw of the canvas
                const canvas = document.querySelector("canvas")
                if (canvas) {
                  const event = new Event("resize")
                  window.dispatchEvent(event)
                }
              }}
              className="bg-blue-500 text-white px-3 py-1 rounded-md"
            >
              Forçar Redesenho
            </button>
            <button onClick={toggleVisibility} className="bg-red-500 text-white px-3 py-1 rounded-md">
              Fechar
            </button>
          </div>
        </div>
      </div>

      {/* Linhas de referência */}
      <div className="absolute inset-0">
        <div className="absolute top-0 bottom-0 w-px bg-red-500 left-[10%]"></div>
        <div className="absolute top-0 bottom-0 w-px bg-red-500 left-[30%]"></div>
        <div className="absolute top-0 bottom-0 w-px bg-red-500 left-[50%]"></div>
        <div className="absolute top-0 bottom-0 w-px bg-red-500 left-[70%]"></div>
        <div className="absolute top-0 bottom-0 w-px bg-red-500 left-[90%]"></div>
      </div>
    </div>
  )
}
