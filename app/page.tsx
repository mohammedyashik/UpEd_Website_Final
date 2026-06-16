import Hero from "@/components/home/hero/Hero"
import Navbar from "@/components/shared/Navbar"
import TrustBar from "@/components/home/trust/TrustBar"
import HomePrograms from "@/components/home/programs/HomePrograms" // Activated your clean layout import route
import WhyUpEd from "@/components/home/why-uped/WhyUpEd"
import ResultsSection from "@/components/home/results/ResultsSection"
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection"
import CTASection from "@/components/home/cta/CTASection"
import Footer from "@/components/shared/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <TrustBar />
      
      {/* Activated and dropped right into your workflow stack smoothly */}
      <HomePrograms />
      
      <WhyUpEd />
      <ResultsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}