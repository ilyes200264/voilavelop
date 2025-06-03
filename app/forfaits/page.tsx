"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal,
  RedLineSeparator
} from "@/components/motion/motion-components"

export default function ForfaitsPage() {
  const packages = [
    {
      id: "la-petite-koki",
      title: "La petite Koki",
      tagline: "Le favori de tous les temps des enfants!",
      description: "Parfait pour les anniversaires, les graduations de garderie ou les festivals familiaux.",
      ageRange: "5-10 ans",
      duration: "1-2 heures",
      capacity: "25-50 smoothies",
      startingPrice: "299",
      image: "/placeholder.svg?height=300&width=400",
      color: "border-t-primary-red",
    },
    {
      id: "pop-solo",
      title: "Pop Solo",
      tagline: "Un succès garanti avec les ados, adultes et familles!",
      description: "Parfait pour les événements scolaires, les fêtes de bureau ou tout rassemblement festif.",
      ageRange: "10+ ans",
      duration: "1.5-2.5 heures",
      capacity: "50-75 smoothies",
      startingPrice: "449",
      image: "/placeholder.svg?height=300&width=400",
      color: "border-t-secondary-yellow",
    },
    {
      id: "double-fun",
      title: "Double Fun",
      tagline: "Deux fois plus de vélos = deux fois plus d'énergie!",
      description: "Parfait pour les festivals communautaires, les activations de marque, les collectes de fonds.",
      ageRange: "Tous âges",
      duration: "2-4 heures",
      capacity: "100-300 smoothies",
      startingPrice: "699",
      image: "/placeholder.svg?height=300&width=400",
      color: "border-t-trust-blue",
    },
    {
      id: "ready-set-blend",
      title: "Ready Set Blend",
      tagline: "Compétition amicale et team building!",
      description: "Parfait pour les événements corporatifs et les activités de consolidation d'équipe.",
      ageRange: "16+ ans",
      duration: "2-3 heures",
      capacity: "75-150 smoothies",
      startingPrice: "599",
      image: "/placeholder.svg?height=300&width=400",
      color: "border-t-accent-green",
    },
    {
      id: "defi-parent-enfant",
      title: "Défi Parent-Enfant",
      tagline: "Créez des liens familiaux en pédalant ensemble!",
      description: "Une expérience intergénérationnelle parfaite pour les événements familiaux.",
      ageRange: "Familles",
      duration: "1.5-2 heures",
      capacity: "40-80 smoothies",
      startingPrice: "399",
      image: "/placeholder.svg?height=300&width=400",
      color: "border-t-creative-purple",
    },
    {
      id: "la-smoothie-parade",
      title: "La Smoothie Parade",
      tagline: "L'expérience ultime pour les grands événements!",
      description: "Parfait pour les festivals, les foires et les grands rassemblements communautaires.",
      ageRange: "Tous âges",
      duration: "4-8 heures",
      capacity: "300-500 smoothies",
      startingPrice: "999",
      image: "/placeholder.svg?height=300&width=400",
      color: "border-t-primary-red",
    },
    {
      id: "signature",
      title: "Forfait Signature",
      tagline: "Entièrement personnalisé pour votre marque!",
      description: "Solution premium avec personnalisation complète pour les activations de marque haut de gamme.",
      ageRange: "Sur mesure",
      duration: "Flexible",
      capacity: "Sur mesure",
      startingPrice: "Sur devis",
      image: "/placeholder.svg?height=300&width=400",
      color: "border-t-dark-charcoal",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Page Hero */}
        <MotionSection className="page-hero bg-gradient-to-br from-primary-red to-secondary-yellow text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <TextReveal>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Forfaits</h1>
            </TextReveal>
            
            <RedLineSeparator className="w-16 mx-auto mb-8" />
            
            <ScrollReveal delay={0.3}>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Choisissez le forfait parfait pour votre événement. De l'intime au spectaculaire, nous avons l'expérience
                qu'il vous faut.
              </p>
            </ScrollReveal>
          </div>
        </MotionSection>

        {/* Packages Grid */}
        <MotionSection className="py-20 bg-light-gray">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">Découvrez nos forfaits</h2>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Une expérience unique et mémorable pour tous types d'événements
                </p>
              </ScrollReveal>
            </ScrollReveal>
            
            <StaggerContainer className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
              {packages.map((pkg, index) => (
                <MotionDiv
                  key={pkg.id}
                  variant="fadeUp"
                  custom={index}
                  className={`package-card bg-white rounded-2xl overflow-hidden shadow-lg ${pkg.color} border-t-4`}
                >
                  <AnimatedImage hoverEffect="lift" className="h-full">
                    <div className="package-image relative">
                      <Image
                        src={pkg.image || "/placeholder.svg"}
                        alt={pkg.title}
                        width={400}
                        height={300}
                        className="w-full h-52 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <span className="text-primary-red font-bold">
                          {pkg.startingPrice === "Sur devis" ? pkg.startingPrice : `${pkg.startingPrice}$`}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="package-header mb-6">
                        <h3 className="text-2xl font-bold text-dark-charcoal mb-3">{pkg.title}</h3>
                        <p className="text-primary-red font-semibold text-lg mb-4">{pkg.tagline}</p>
                        <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
                      </div>

                      <div className="package-badges flex flex-wrap gap-3 my-6">
                        <span className="badge bg-light-gray text-dark-charcoal px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                          {pkg.ageRange}
                        </span>
                        <span className="badge bg-light-gray text-dark-charcoal px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                          {pkg.duration}
                        </span>
                        <span className="badge bg-light-gray text-dark-charcoal px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                          {pkg.capacity}
                        </span>
                      </div>

                      <div className="package-footer mt-8 text-center">
                        <AnimatedImage hoverEffect="scale">
                          <Link href={`/forfaits/${pkg.id}`} className="block w-full">
                            <Button className="w-full bg-primary-red text-white hover:bg-primary-red/90 py-3 text-lg font-semibold">
                              En savoir plus
                            </Button>
                          </Link>
                        </AnimatedImage>
                      </div>
                    </div>
                  </AnimatedImage>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* CTA Section */}
        <MotionSection className="py-20 bg-gradient-to-br from-primary-red to-secondary-yellow text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <StaggerContainer className="cta-content">
                <MotionDiv variant="fadeUp">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Besoin d'aide pour choisir?</h2>
                </MotionDiv>
                
                <RedLineSeparator className="w-16 mb-6" />
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-8">
                    Notre équipe peut vous aider à sélectionner le forfait parfait pour votre événement ou créer une solution
                    entièrement personnalisée.
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp" className="flex flex-col sm:flex-row gap-4">
                  <AnimatedImage hoverEffect="lift">
                    <Link href="/contact">
                      <Button className="bg-white text-primary-red px-8 py-3 text-lg font-semibold hover:bg-gray-100">
                        Demander une soumission
                      </Button>
                    </Link>
                  </AnimatedImage>
                  
                  <AnimatedImage hoverEffect="lift">
                    <Link href="tel:+1-XXX-XXX-XXXX">
                      <Button 
                        variant="outline" 
                        className="border-white text-white hover:bg-white hover:text-primary-red px-8 py-3 text-lg font-semibold">
                        Appelez-nous
                      </Button>
                    </Link>
                  </AnimatedImage>
                </MotionDiv>
              </StaggerContainer>
              
              <ScrollReveal>
                <div className="testimonial-card bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                  <div className="quote-icon text-4xl mb-4 text-white/80">"</div>
                  <p className="text-xl italic mb-6">Nous avons réservé Voilà Vélo Fruité pour notre journée corporative et ce fut un succès retentissant! L'équipe était professionnelle et nos employés ont adoré l'expérience.</p>
                  <div className="testimonial-author flex items-center">
                    <div className="author-avatar w-12 h-12 bg-white/30 rounded-full mr-4"></div>
                    <div className="author-info">
                      <h4 className="font-bold">Marie Lemieux</h4>
                      <p className="text-sm">Directrice RH, Entreprise XYZ</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </MotionSection>
      </main>

      <Footer />
    </div>
  )
}