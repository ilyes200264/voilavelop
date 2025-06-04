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
      {/* Background Video Placeholder */}
      <div className="hero-video-container absolute inset-0">
        <div
          className="hero-video absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/Packages-596-Edit.jpg')`,
          }}
        />
        <div className="video-overlay absolute inset-0 bg-gradient-to-br from-black/30 to-primary-red/30" />
      </div>

      {/* Hero Content */}
      <div className="hero-content relative z-10 text-center text-white px-4">
        <div className="container mx-auto max-w-3xl">
          {/* City Names with Animation */}
          <StaggerContainer fast className="city-names flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            {cities.map((city, index) => (
              <MotionDiv
                key={city}
                variant="fadeDown"
                custom={index}
                className="city-name text-xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-xl"
              >
                {city}
              </MotionDiv>
            ))}
          </StaggerContainer>

          {/* Red Accent Line */}
          <RedLineSeparator className="w-24 mx-auto mb-8" />

          {/* Main Value Proposition */}
          <TextReveal delay={0.5}>
            <p className="hero-tagline text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8 text-white inline-block backdrop-blur-sm bg-black/20 px-4 py-3 rounded-lg">
              {t('hero.subtitle')}
            </p>
          </TextReveal>

          {/* Primary CTA */}
          <AnimatedImage hoverEffect="lift" delay={0.6}>
            <Button size="lg" className="btn-primary text-base px-6 py-3 shadow-xl">
              {t('hero.ctaButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </AnimatedImage>
        </div>
      </div>
    </section>
  )
}
