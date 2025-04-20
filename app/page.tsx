import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import EnhancedBackground from "@/components/enhanced-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-hidden relative">
      <EnhancedBackground />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
