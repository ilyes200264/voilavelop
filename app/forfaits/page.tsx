"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal,
  RedLineSeparator,
  PageTransition,
  ImageMaskReveal
} from "@/components/motion/motion-components"

export default function ForfaitsPage() {
  const { t } = useI18n();
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
      image: "/images/velo-smoothie-1.jpg",
      color: "bg-primary-red",
      textColor: "text-white",
      features: [
        "1 vélo mélangeur adapté aux enfants",
        "Animation et musique festive",
        "Recettes et menu coloré"
      ]
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
      image: "/images/velo-smoothie-2.jpg",
      color: "bg-secondary-yellow",
      textColor: "text-dark-charcoal",
      features: [
        "1 vélo mélangeur pour adultes",
        "Atmosphère festive et animée",
        "Recettes santé personnalisées"
      ]
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
      image: "/images/velo-smoothie-3.jpg",
      color: "bg-trust-blue",
      textColor: "text-white",
      features: [
        "2 vélos mélangeurs pour adultes",
        "Installation complète avec tables",
        "Musique et ambiance dynamique"
      ]
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
      image: "/images/gallery-3.jpg",
      color: "bg-accent-green",
      textColor: "text-white",
      features: [
        "2 vélos avec moniteurs de vitesse",
        "Tableau des scores en temps réel",
        "Animateur énergique pour la compétition"
      ]
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
      image: "/images/gallery-1.jpg",
      color: "bg-creative-purple",
      textColor: "text-white",
      features: [
        "1 vélo enfant + 1 vélo adulte",
        "Défis parents-enfants amusants",
        "Moments de complicité garantis"
      ]
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
      image: "/images/gallery-5.jpg",
      color: "bg-primary-red",
      textColor: "text-white",
      features: [
        "3 vélos mélangeurs (2 grands + 1 petit)",
        "Installation spectaculaire complète",
        "Équipe d'animateurs dédiée"
      ]
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
      image: "/images/Signature package2.jpg",
      color: "bg-dark-charcoal",
      textColor: "text-white",
      features: [
        "Personnalisation complète à votre image",
        "Service concierge dédié",
        "Solution sur mesure premium"
      ]
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

        <main className="pt-20">
          {/* Page Hero */}
          <MotionSection className="page-hero bg-gradient-to-br from-primary-red to-secondary-yellow text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <TextReveal>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('pageHero.title')}</h1>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                  {t('pageHero.description')}
                </p>
              </ScrollReveal>
            </div>
          </MotionSection>

          {/* Intro Section */}
          <MotionSection className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2">
                  <ImageMaskReveal className="rounded-xl overflow-hidden">
                    <Image 
                      src="/images/Packages-596-Edit.jpg" 
                      alt="Nos vélos à smoothies en action" 
                      width={600} 
                      height={400}
                      className="w-full h-auto"
                    />
                  </ImageMaskReveal>
                </div>
                
                <div className="md:col-span-3 text-center md:text-left">
                  <ScrollReveal>
                    <p className="text-2xl text-gray-700 leading-relaxed italic mb-8">
                      {t('intro.description1')}
                    </p>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.2}>
                    <p className="text-lg text-gray-600">
                      {t('intro.description2')}
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </MotionSection>

          {/* Packages Grid - New Design */}
          <MotionSection className="py-20 bg-light-gray">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <TextReveal>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">{t('packagesGrid.title')}</h2>
                </TextReveal>
                
                <RedLineSeparator className="w-16 mx-auto mb-8" />
                
                <ScrollReveal delay={0.3}>
                  <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('packagesGrid.subtitle')}
                  </p>
                </ScrollReveal>
              </div>
              
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {packages.map((pkg, index) => (
                  <MotionDiv
                    key={pkg.id}
                    variant="fadeUp"
                    custom={index}
                    className="item-packages h-full"
                  >
                    <AnimatedImage 
                      hoverEffect="lift" 
                      className={`${pkg.color} rounded-xl overflow-hidden shadow-lg h-full flex flex-col`}
                    >
                      <div className="relative overflow-hidden h-48 group">
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <span className="text-white text-lg font-bold transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            {t('packagesGrid.seeDetails')}
                          </span>
                        </div>
                      </div>
                      
                      <div className={`p-6 flex-grow flex flex-col ${pkg.textColor}`}>
                        <div className="text-center mb-4">
                          <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                          <p className="text-lg font-semibold opacity-90 mb-4">{pkg.tagline}</p>
                          <RedLineSeparator className="w-12 mx-auto mb-4" />
                        </div>
                        
                        <ul className="mb-6 flex-grow">
                          {(pkg.features || []).map((feature, idx) => (
                            <li key={idx} className="mb-3 flex items-start">
                              <span className="inline-block mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-auto text-center">
                          <div className="font-bold text-xl mb-4">
                            {pkg.startingPrice === "Sur devis" ? pkg.startingPrice : `${pkg.startingPrice}$`}
                          </div>
                          
                          <AnimatedImage hoverEffect="scale">
                            <Link href={`/forfaits/${pkg.id}`} className="block w-full">
                              <Button className={`w-full ${pkg.textColor === 'text-white' ? 'bg-white text-black hover:bg-gray-100' : 'bg-dark-charcoal text-white hover:bg-dark-charcoal/90'} py-3 text-lg font-semibold`}>
                                {t('packagesGrid.learnMore')}
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('help.title')}</h2>
                  </MotionDiv>
                  
                  <RedLineSeparator className="w-16 mb-6" />
                  
                  <MotionDiv variant="fadeUp">
                    <p className="text-xl mb-8">
                      {t('help.description')}
                    </p>
                  </MotionDiv>
                  
                  <MotionDiv variant="fadeUp" className="flex flex-col sm:flex-row gap-4">
                    <AnimatedImage hoverEffect="lift">
                      <Link href="/contact">
                        <Button className="bg-white text-primary-red px-8 py-3 text-lg font-semibold hover:bg-gray-100">
                          {t('help.requestQuote')}
                        </Button>
                      </Link>
                    </AnimatedImage>
                    
                    <AnimatedImage hoverEffect="lift">
                      <Link href="tel:+1-XXX-XXX-XXXX">
                        <Button 
                          variant="outline" 
                          className="border-white text-white hover:bg-white hover:text-primary-red px-8 py-3 text-lg font-semibold">
                          {t('help.callUs')}
                        </Button>
                      </Link>
                    </AnimatedImage>
                  </MotionDiv>
                </StaggerContainer>
                
                <ScrollReveal>
                  <div className="testimonial-card bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                    <div className="quote-icon text-4xl mb-4 text-white/80">"</div>
                    <p className="text-xl italic mb-6">{t('help.testimonial.text')}</p>
                    <div className="testimonial-author flex items-center">
                      <div className="author-avatar w-12 h-12 bg-white/30 rounded-full mr-4"></div>
                      <div className="author-info">
                        <h4 className="font-bold">{t('help.testimonial.author')}</h4>
                        <p className="text-sm">{t('help.testimonial.company')}</p>
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
    </PageTransition>
  )
}