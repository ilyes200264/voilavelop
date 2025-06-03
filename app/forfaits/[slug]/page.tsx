"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"
import { IconMapper } from "@/components/ui/icon-mapper"
import { PackageDetailsClient, IncludesSection } from "@/components/package-details-client"
import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal,
  RedLineSeparator
} from "@/components/motion/motion-components"

interface PackagePageProps {
  params: { slug: string }
}

export default function PackagePage({ params }: PackagePageProps) {
  const { slug } = params

  // Mock package data - in real app, this would come from a CMS or database
  const packageData = {
    "la-petite-koki": {
      title: "La petite Koki",
      tagline: "Le favori de tous les temps des enfants!",
      description:
        "Parfait pour les anniversaires, les graduations de garderie ou les festivals familiaux, ce forfait apporte plaisir, rire et smoothies savoureux à toute célébration! Nos vélos adaptés aux enfants sont sécuritaires et amusants, créant des souvenirs inoubliables pour les petits pédaleurs.",
      ageRange: "5-10 ans",
      duration: "1-2 heures",
      capacity: "25-50 smoothies",
      heroImage: "/images/velo-smoothie-1.jpg",
      options: [
        {
          title: "Option Petite Fête",
          price: "299",
          duration: "1 heure",
          smoothies: "25",
          includes: [
            "1 vélo mélangeur adapté aux enfants",
            "25 smoothies délicieux",
            "1 heure d'animation énergique",
            "Musique et ambiance festive",
            "Ingrédients frais et colorés",
          ],
          idealFor: "Parfait pour les petites fêtes d'anniversaire (10-15 enfants) ou les événements intimes.",
        },
        {
          title: "Option Grande Célébration",
          price: "449",
          duration: "2 heures",
          smoothies: "50",
          includes: [
            "1 vélo mélangeur adapté aux enfants",
            "50 smoothies délicieux",
            "2 heures de divertissement",
            "Animation interactive avec jeux",
            "Décorations colorées incluses",
            "Personnalisation possible",
          ],
          idealFor: "Idéal pour les grandes fêtes (20-30 enfants), graduations de garderie ou festivals familiaux.",
          featured: true,
        },
      ],
      includes: [
        {
          iconName: "bike",
          title: "Vélo mélangeur sécuritaire",
          description: "Vélo spécialement adapté pour les enfants de 5-10 ans avec toutes les mesures de sécurité",
        },
        {
          iconName: "glass",
          title: "Smoothies frais",
          description: "Ingrédients frais et colorés, parfaits pour les goûts des enfants",
        },
        {
          iconName: "theater",
          title: "Animation énergique",
          description: "Animateur professionnel qui engage les enfants et crée une atmosphère festive",
        },
        {
          iconName: "music",
          title: "Musique et ambiance",
          description: "Playlist adaptée aux enfants et équipement sonore professionnel",
        },
      ],
      perfectFor: [
        {
          title: "Fêtes d'anniversaire",
          description: "Créez une fête d'anniversaire unique que les enfants n'oublieront jamais",
          image: "/images/gallery-1.jpg",
        },
        {
          title: "Graduations de garderie",
          description: "Célébrez cette étape importante avec une activité amusante et saine",
          image: "/images/gallery-2.jpg",
        },
        {
          title: "Festivals familiaux",
          description: "Ajoutez une attraction populaire qui plaira aux enfants et aux parents",
          image: "/images/gallery-3.jpg",
        },
      ],
    },
  }

  const currentPackage = packageData[slug as keyof typeof packageData]

  if (!currentPackage) {
    return <div>Package not found</div>
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-4 bg-gray-50">
          <div className="container mx-auto px-4">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-primary-red">
                    Accueil
                  </Link>
                </li>
                <li>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </li>
                <li>
                  <Link href="/forfaits" className="text-gray-600 hover:text-primary-red">
                    Forfaits
                  </Link>
                </li>
                <li>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </li>
                <li className="text-primary-red font-medium">{currentPackage.title}</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Package Hero - Styled like original site */}
        <section className="package-hero py-16 bg-white">
          <div className="container mx-auto px-4">
            <PackageDetailsClient packageData={currentPackage} />
          </div>
        </section>

        {/* Package Options */}
        <MotionSection id="options" className="package-options py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-12">
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">Options disponibles</h2>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choisissez l'option qui convient le mieux à votre événement et à votre budget</p>
              </ScrollReveal>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {currentPackage.options.map((option, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                  className={`option-card bg-white rounded-2xl p-8 shadow-lg relative ${
                    option.featured ? "ring-2 ring-primary-red" : ""
                  }`}
                >
                  <AnimatedImage hoverEffect="lift" className="h-full">
                    {option.featured && (
                      <div className="featured-badge absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-red text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Plus populaire
                      </div>
                    )}

                    <div className="option-header text-center mb-6">
                      <h3 className="text-xl font-bold text-dark-charcoal mb-2">{option.title}</h3>
                      <div className="text-3xl font-bold text-primary-red">{option.price}$</div>
                    </div>

                    <div className="option-details mb-6">
                      <h4 className="font-semibold text-dark-charcoal mb-3">Inclus:</h4>
                      <ul className="space-y-2">
                        {option.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="option-ideal-for mb-6">
                      <h4 className="font-semibold text-dark-charcoal mb-2">Idéal pour:</h4>
                      <p className="text-gray-600 text-sm">{option.idealFor}</p>
                    </div>

                    <AnimatedImage hoverEffect="scale">
                      <Link href="#booking">
                        <Button
                          className={`w-full ${
                            option.featured
                              ? "bg-primary-red text-white"
                              : "bg-gray-100 text-dark-charcoal hover:bg-primary-red hover:text-white"
                          }`}
                        >
                          Choisir cette option
                        </Button>
                      </Link>
                    </AnimatedImage>
                  </AnimatedImage>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* What's Included */}
        <MotionSection className="whats-included py-16 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-8">
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">Ce qui est inclus</h2>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Votre expérience Voilà Vélo Fruité comprend tout ce dont vous avez besoin pour un événement réussi</p>
              </ScrollReveal>
            </ScrollReveal>

            <IncludesSection includes={currentPackage.includes} />
          </div>
        </MotionSection>

        {/* Perfect For */}
        <MotionSection className="perfect-for py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-12">
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">Parfait pour</h2>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ce forfait est idéal pour une variété d'événements et d'occasions spéciales</p>
              </ScrollReveal>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {currentPackage.perfectFor.map((useCase, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                >
                  <AnimatedImage hoverEffect="lift" className="use-case bg-white rounded-2xl overflow-hidden shadow-lg">
                    <div className="use-case-image relative">
                      <Image
                        src={useCase.image || "/placeholder.svg"}
                        alt={useCase.title}
                        width={400}
                        height={250}
                        className="w-full h-52 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{useCase.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                    </div>
                  </AnimatedImage>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* CTA Section */}
        <MotionSection id="booking" className="py-16 bg-primary-red text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <StaggerContainer className="cta-content">
                <MotionDiv variant="fadeUp">
                  <h2 className="text-3xl font-bold mb-4">Prêt à réserver {currentPackage.title}?</h2>
                </MotionDiv>
                
                <RedLineSeparator className="w-16 mb-6" />
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-8 opacity-90">
                    Contactez-nous pour une soumission personnalisée et réservez votre date dès aujourd'hui!
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp" className="flex flex-col sm:flex-row gap-4">
                  <AnimatedImage hoverEffect="lift">
                    <Link href="/contact">
                      <Button className="bg-white text-primary-red px-8 py-3 hover:bg-gray-100">
                        Demander une soumission
                      </Button>
                    </Link>
                  </AnimatedImage>
                  
                  <AnimatedImage hoverEffect="lift">
                    <Link href="tel:+1-XXX-XXX-XXXX">
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-primary-red px-8 py-3"
                      >
                        Appelez maintenant
                      </Button>
                    </Link>
                  </AnimatedImage>
                </MotionDiv>
              </StaggerContainer>
              
              <ScrollReveal>
                <div className="testimonial-card bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                  <div className="quote-icon text-4xl mb-4 text-white/80">"</div>
                  <p className="text-xl italic mb-6">Notre expérience avec {currentPackage.title} a été absolument incroyable! Nos invités ont adoré l'interactivité et les smoothies étaient délicieux.</p>
                  <div className="testimonial-author flex items-center">
                    <div className="author-avatar w-12 h-12 bg-white/30 rounded-full mr-4"></div>
                    <div className="author-info">
                      <h4 className="font-bold">Isabelle Tremblay</h4>
                      <p className="text-sm">Montréal, QC</p>
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