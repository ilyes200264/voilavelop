"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { 
  MotionDiv, 
  StaggerContainer, 
  RedLineSeparator,
  TextReveal,
  AnimatedImage
} from "@/components/motion/motion-components"
import { useI18n } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useI18n()
  const cities = ["Montréal", "Québec", "Laval", "Ottawa"]

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="hero-video-container absolute inset-0">
        <div
          className="hero-video absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/Packages-596-Edit.jpg')`,
          }}
        />
        <div className="video-overlay absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="hero-content relative z-10 text-center text-white px-4 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div className="text-left px-6 md:px-12 py-16 bg-black/20 backdrop-blur-sm md:ml-12">
          <div className="max-w-md">
            {/* Simple, Bold Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-none">
              {t('home.hero.title')}
            </h1>
            
            {/* Clean Subtitle */}
            <p className="text-xl md:text-2xl font-light mb-12 opacity-90">
              {t('home.hero.subtitle')}
            </p>

            {/* Minimal Button */}
            <Button size="lg" className="bg-primary-red hover:bg-primary-red/90 text-white border-none rounded-none px-8 py-4 text-lg font-medium inline-flex items-center transition-colors">
              {t('home.hero.ctaButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Right Side - Empty Space/Visual Balance */}
        <div className="hidden md:block">
          {/* Intentionally left empty for visual balance */}
        </div>
      </div>
    </section>
  )
}
