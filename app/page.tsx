import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ValuePropositionSection } from "@/components/value-proposition-section"
import { BenefitsSection } from "@/components/benefits-section"
import { PackagesSection } from "@/components/packages-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SustainabilitySection } from "@/components/sustainability-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <BenefitsSection />
        <PackagesSection />
        <TestimonialsSection />
        <SustainabilitySection />
      </main>
      <Footer />
    </div>
  )
}
