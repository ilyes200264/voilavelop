"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [animationStarted, setAnimationStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

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
          <div className="city-names flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            {cities.map((city, index) => (
              <h1
                key={city}
                className={`city-name text-xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-xl transition-all duration-800 ${
                  animationStarted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {city}
              </h1>
            ))}
          </div>

          {/* Red Accent Line */}
          <div
            className={`hero-accent-line w-24 h-1 bg-primary-red mx-auto mb-8 transition-all duration-600 ${
              animationStarted ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          />

          {/* Main Value Proposition */}
          <p
            className={`hero-tagline text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8 text-white inline-block backdrop-blur-sm bg-black/20 px-4 py-3 rounded-lg transition-all duration-800 ${
              animationStarted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "750ms" }}
          >
            Créez un événement mémorable qui soit amusant, innovant et qui promeut la durabilité avec une différence que
            votre équipe appréciera.
          </p>

          {/* Primary CTA */}
          <div
            className={`hero-cta transition-all duration-800 ${
              animationStarted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <Button size="lg" className="btn-primary text-base px-6 py-3 shadow-xl">
              Demander une soumission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
