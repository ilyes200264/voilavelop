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

  // Product images array for easier management
  const productImages = [
    { src: "/images/0.jpg", alt: "Green bicycle" },
    { src: "/images/1.jpg", alt: "Red bicycle" },
    { src: "/images/2.jpg", alt: "Yellow bicycle" },
  ]

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
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
      <div className="hero-content relative z-10 text-center text-white px-4 w-full max-w-7xl mx-auto mt-6 md:mt-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left px-6 md:px-12 py-16 bg-black/20 backdrop-blur-sm lg:ml-12">
            <div className="max-w-md">
              {/* Simple, Bold Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-none">
                {t('home.hero.title')}
              </h1>
              
              {/* Bold Slogan */}
              <p className="text-lg md:text-xl lg:text-2xl font-bold mb-6 text-primary-red">
                GOOD VIBES, GREEN RIDES, GREAT TASTE.
              </p>
              
              {/* Clean Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl font-light mb-12 opacity-90">
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
          
          {/* Right Side - Product Images - Enhanced for better mobile visibility */}
          <div className="flex flex-col items-center justify-center gap-4 px-4">
            {/* Main Product Images Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full max-w-lg">
              {productImages.slice(0, 3).map((image, index) => (
                <AnimatedImage 
                  key={index}
                  hoverEffect="scale" 
                  className="w-full"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-28 sm:h-32 md:h-40 object-cover rounded-lg shadow-lg" 
                    loading="eager"
                  />
                </AnimatedImage>
              ))}
            </div>
            
            {/* Additional Product Images - Now showing 3 on mobile, all 3 on larger screens */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full max-w-lg mt-2">
              {productImages.slice(3, 6).map((image, index) => (
                <AnimatedImage 
                  key={index + 3}
                  hoverEffect="scale" 
                  className="w-full"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-20 sm:h-24 md:h-32 object-cover rounded-lg shadow-lg opacity-90 hover:opacity-100 transition-opacity" 
                    loading="eager"
                  />
                </AnimatedImage>
              ))}
            </div>

            {/* Product Showcase Text */}
            <div className="text-center mt-2 sm:mt-4">
              <p className="text-sm md:text-base text-white/90 font-medium">
                {t('home.hero.productShowcase', 'Nos vélos smoothie disponibles')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}