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
      {/* Background Image - Using a fresher background */}
      <div className="hero-video-container absolute inset-0">
        <div
          className="hero-video absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/6.jpg')`,
          }}
        />
        <div className="video-overlay absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
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
            
            {/* Bold Slogan */}
            <p className="text-xl md:text-2xl font-bold mb-6 text-primary-red">
              GOOD VIBES, GREEN RIDES, GREAT TASTE.
            </p>
            
            {/* Clean Subtitle */}
            <p className="text-xl md:text-2xl font-light mb-12 opacity-90">
              {t('home.hero.subtitle')}
            </p>

            {/* Book Now Button - Linked to form */}
            <Button size="lg" className="bg-primary-red hover:bg-primary-red/90 text-white border-none rounded-none px-8 py-4 text-lg font-medium inline-flex items-center transition-colors" asChild>
              <a href="/reserver">
                {t('home.hero.ctaButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Right Side - Product Images */}
        <div className="hidden md:flex flex-col items-center justify-center gap-4">
          <div className="flex gap-4">
            <AnimatedImage hoverEffect="scale" className="w-1/3">
              <img src="/images/0.jpg" alt="Green bicycle" className="rounded-lg shadow-lg" />
            </AnimatedImage>
            <AnimatedImage hoverEffect="scale" className="w-1/3">
              <img src="/images/1.jpg" alt="Red bicycle" className="rounded-lg shadow-lg" />
            </AnimatedImage>
            <AnimatedImage hoverEffect="scale" className="w-1/3">
              <img src="/images/2.jpg" alt="Yellow bicycle" className="rounded-lg shadow-lg" />
            </AnimatedImage>
          </div>
        </div>
      </div>
    </section>
  )
}
