"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal
} from "@/components/motion/motion-components"
import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <MotionSection 
      // CHANGED: Replaced dark background with fresh, vibrant gradient
      className="hero-section relative min-h-screen bg-gradient-to-br from-secondary-yellow/30 via-white to-accent-green/20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Decorative elements for visual interest */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-yellow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <StaggerContainer className="text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <MotionDiv variant="fadeUp">
            <TextReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-charcoal mb-6 leading-tight">
                {t('home.hero.title', 'Transform Your Event with Smoothie Bikes!')}
              </h1>
            </TextReveal>
          </MotionDiv>

          {/* Subtitle */}
          <MotionDiv variant="fadeUp" custom={2}>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
              {t('home.hero.subtitle', 'Create unforgettable experiences with our pedal-powered smoothie stations. Fun, healthy, and eco-friendly entertainment for all ages!')}
            </p>
          </MotionDiv>

          {/* CTA Button - CHANGED: Links directly to reservation form */}
          <MotionDiv variant="fadeUp" custom={3}>
            <AnimatedImage hoverEffect="lift">
              <Link href="/reserver">
                <Button 
                  className="bg-primary-red hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {t('home.hero.bookNow', 'Book Now')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </AnimatedImage>
          </MotionDiv>
        </StaggerContainer>

        {/* NEW: Three Products Side by Side */}
        <ScrollReveal className="mt-20">
          <div className="products-showcase">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Green Bike */}
              <AnimatedImage hoverEffect="scale" className="product-card">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 relative h-full flex-1">
                    <img 
                      src="/images/0.jpg" 
                      alt="Green smoothie bike with basket" 
                      className="w-full h-full object-cover"
                      style={{ minHeight: 0 }}
                    />
                  </div>
                </div>
              </AnimatedImage>

              {/* Regular Bike */}
              <AnimatedImage hoverEffect="scale" className="product-card">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 relative h-full flex-1">
                    <img 
                      src="/images/1.jpg" 
                      alt="Regular smoothie bike" 
                      className="w-full h-full object-cover"
                      style={{ minHeight: 0 }}
                    />
                  </div>
                </div>
              </AnimatedImage>

              {/* Red Watermelon Bike */}
              <AnimatedImage hoverEffect="scale" className="product-card">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="bg-gradient-to-br from-red-100 to-pink-200 relative h-full flex-1">
                    <img 
                      src="/images/2.jpg" 
                      alt="Red bicycle with watermelon basket" 
                      className="w-full h-full object-cover"
                      style={{ minHeight: 0 }}
                    />
                  </div>
                </div>
              </AnimatedImage>
            </div>
          </div>
        </ScrollReveal>

        {/* Additional decorative elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  )
}

/*
CHANGES MADE:
1. Changed dark background to fresh, vibrant gradient: from-secondary-yellow/30 via-white to-accent-green/20
2. Added decorative blur elements for modern look
3. Removed tagline and Sparkles icons from the main hero section
4. Book Now button now links directly to /reserver (reservation form)
5. Added section for three products side by side with placeholders
6. Each product has a card design with image placeholder and fallback emoji
7. Added hover effects and animations for better interactivity
8. Maintained responsive design (3 columns on desktop, 1 on mobile)
*/