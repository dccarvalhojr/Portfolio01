"use client"

import { useEffect, useRef } from "react"

export default function SiteBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window size
    const setCanvasSize = () => {
      const scale = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * scale
      canvas.height = Math.max(window.innerHeight, document.documentElement.scrollHeight) * scale
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${Math.max(window.innerHeight, document.documentElement.scrollHeight)}px`

      // Scale the context to ensure correct drawing
      ctx.scale(scale, scale)

      draw()
    }

    // Draw the background
    function draw() {
      if (!ctx || !canvas) return

      const width = window.innerWidth
      const height = Math.max(window.innerHeight, document.documentElement.scrollHeight)

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Darker black background
      ctx.fillStyle = "#030303"
      ctx.fillRect(0, 0, width, height)

      // Draw 5 vertical lines with gradient
      const lineWidth = 1
      const linePositions = [width * 0.1, width * 0.3, width * 0.5, width * 0.7, width * 0.9]

      linePositions.forEach((x) => {
        // Create gradient for the line
        const gradient = ctx.createLinearGradient(0, 0, 0, height)
        gradient.addColorStop(0, "rgba(255, 255, 255, 0)")
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)") // Increased opacity to 0.5
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        // Draw the line
        ctx.beginPath()
        ctx.strokeStyle = gradient
        ctx.lineWidth = lineWidth
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()

        // Add a glow effect to make the line more visible
        ctx.beginPath()
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
        ctx.lineWidth = lineWidth + 2
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      })

      // Top shadow gradient
      const topGradient = ctx.createLinearGradient(0, 0, 0, height * 0.2)
      topGradient.addColorStop(0, "rgba(0, 0, 0, 0.7)")
      topGradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = topGradient
      ctx.fillRect(0, 0, width, height * 0.2)

      // Bottom shadow gradient
      const bottomGradient = ctx.createLinearGradient(0, height * 0.8, 0, height)
      bottomGradient.addColorStop(0, "rgba(0, 0, 0, 0)")
      bottomGradient.addColorStop(1, "rgba(0, 0, 0, 0.7)")

      ctx.fillStyle = bottomGradient
      ctx.fillRect(0, height * 0.8, width, height * 0.2)
    }

    // Initial setup
    setCanvasSize()

    // Handle window resize
    window.addEventListener("resize", setCanvasSize)

    // Handle scroll to update canvas height if needed
    const handleScroll = () => {
      const currentHeight = Math.max(window.innerHeight, document.documentElement.scrollHeight)
      if (Number.parseInt(canvas.style.height) !== currentHeight) {
        setCanvasSize()
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Redraw on interval to ensure it's always visible
    const interval = setInterval(() => {
      handleScroll()
      draw()
    }, 1000)

    // Force an immediate redraw after a short delay to ensure everything is loaded
    setTimeout(() => {
      setCanvasSize()
      draw()
    }, 100)

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      window.removeEventListener("scroll", handleScroll)
      clearInterval(interval)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Increased z-index to ensure visibility
        pointerEvents: "none",
        display: "block", // Ensure the canvas is displayed as a block element
      }}
    />
  )
}
