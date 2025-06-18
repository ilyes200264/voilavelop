"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ArrowRight, Building, Rocket, GraduationCap, 
         PartyPopper, Tent, Heart, CheckCircle, ChevronRight } from "lucide-react"
import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal,
  RedLineSeparator,
  ImageMaskReveal
} from "@/components/motion/motion-components"
import { useI18n } from "@/lib/i18n"

export default function BuildYourEventPage() {
  const { t } = useI18n("build-your-event")
  const [currentStep, setCurrentStep] = useState(1)
  const [openFaq, setOpenFaq] = useState<number | null>(0) // Open first FAQ by default

  // Use proper namespace format
  const steps = t<Array<{ number: number; name: string }>>("steps", [])
  const eventTypes = t<Array<{ title: string; description: string; icon: string }>>("step1.eventTypes", [])
  // Get FAQ items directly from questions array
  const faqItems = t<any[]>('faq:questions', []).slice(0, 5)

  // Event category images and descriptions
  const eventImages = [
    { id: "corporate", image: "/images/velo-smoothie-1.jpg" },
    { id: "brand-activation", image: "/images/6.jpg" },
    { id: "school", image: "/images/Packages-596-Edit.jpg" },
    { id: "private", image: "/images/velo-smoothie-1.jpg" },
    { id: "festival", image: "/images/1000099651.png" },
    { id: "nonprofit", image: "/images/Signature package2.jpg" }
  ]

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Helper function to get icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "🏢": return <Building className="h-12 w-12" />
      case "🚀": return <Rocket className="h-12 w-12" />
      case "🎓": return <GraduationCap className="h-12 w-12" />
      case "🎉": return <PartyPopper className="h-12 w-12" />
      case "🎪": return <Tent className="h-12 w-12" />
      case "💝": return <Heart className="h-12 w-12" />
      default: return <Building className="h-12 w-12" />
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section styled like home page hero */}
        <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="hero-video-container absolute inset-0">
            <div
              className="hero-video absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/outdoor.jpg')`,
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
                  {t('title')}
                </h1>
                
                {/* Clean Subtitle */}
                <p className="text-xl md:text-2xl font-light mb-12 opacity-90">
                  {t('subtitle')}
                </p>

                {/* Minimal Button */}
                <Button 
                  size="lg" 
                  className="bg-primary-red hover:bg-primary-red/90 text-white border-none rounded-none px-8 py-4 text-lg font-medium inline-flex items-center transition-colors"
                  onClick={() => document.getElementById('event-types')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('navigation.continue')}
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

        {/* Event Types Section styled like value proposition */}
        <MotionSection id="event-types" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
                {t("step1.title")}
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {t("step1.subtitle")}
              </p>
            </ScrollReveal>

            <StaggerContainer className="space-y-16">
              {(eventTypes || []).map((type, index) => {
                const eventImage = eventImages[index] || eventImages[0];
                return (
                  <MotionDiv
                    key={index}
                    variant="fadeUp"
                    custom={index}
                    className={`${index % 2 === 0 ? 'bg-primary-red' : 'bg-trust-blue'} rounded-2xl overflow-hidden shadow-xl`}
                  >
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <ImageMaskReveal className="h-64 lg:h-full">
                          <Image 
                            src={eventImage.image}
                            alt={type.title} 
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                          />
                        </ImageMaskReveal>
                      </div>

                      {/* Content Section */}
                      <div className={`p-8 lg:p-12 text-white ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="flex items-center mb-6">
                          <AnimatedImage hoverEffect="rotate" className="mr-4 text-white">
                            {getIconComponent(type.icon)}
                          </AnimatedImage>
                          <h3 className="text-2xl md:text-3xl font-bold">{type.title}</h3>
                        </div>
                        
                        <p className="text-lg mb-6 leading-relaxed opacity-90">
                          {type.description}
                        </p>

                        <div className="mb-8">
                          <h4 className="text-lg font-semibold mb-4">Avantages clés:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              Expérience unique et mémorable
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              Adaptable à vos besoins spécifiques
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              Engagement actif des participants
                            </li>
                          </ul>
                        </div>

                        <AnimatedImage hoverEffect="lift">
                          <Link href="/contact">
                            <Button 
                              className="bg-white text-dark-charcoal hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-none"
                            >
                              Demander un devis
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </Link>
                        </AnimatedImage>
                      </div>
                    </div>
                  </MotionDiv>
                );
              })}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Steps Section - Using the same style as benefits section */}
        <MotionSection className="py-20 bg-accent-green text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comment créer votre événement
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8 bg-white" />
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                Un processus simple en 4 étapes pour organiser votre événement Voilà Vélo
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
              {steps.map((step, index) => (
                <MotionDiv
                  key={step.number}
                  variant="fadeUp"
                  custom={index}
                  className="text-center relative"
                >
                  <AnimatedImage 
                    hoverEffect="bounce" 
                    className="bg-white w-20 h-20 rounded-full flex items-center justify-center text-accent-green text-2xl font-bold mx-auto mb-8 shadow-lg"
                  >
                    <span className="text-3xl">{step.number}</span>
                  </AnimatedImage>
                  
                  <h3 className="text-xl font-bold mb-4">{step.name}</h3>
                  <p className="leading-relaxed opacity-90">
                    {index === 0 && "Choisissez le type d'événement qui correspond à vos besoins"}
                    {index === 1 && "Précisez la date, l'heure, le lieu et le nombre de participants"}
                    {index === 2 && "Sélectionnez le nombre de vélos, smoothies et options supplémentaires"}
                    {index === 3 && "Vérifiez tous les détails et soumettez votre demande"}
                  </p>
                </MotionDiv>
              ))}
            </div>
            
            {/* Call-to-action button */}
            <ScrollReveal delay={0.5}>
              <div className="mt-16 text-center">
                <AnimatedImage hoverEffect="lift">
                  <Link href="/reserver">
                    <Button className="bg-white text-accent-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-none">
                      Réserver maintenant
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </AnimatedImage>
              </div>
            </ScrollReveal>
          </div>
        </MotionSection>

        {/* FAQ Section */}
        <MotionSection className="py-20 bg-light-gray">
          <div className="container mx-auto px-4 max-w-5xl">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
                {t("faq:title")}
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {t("faq:subtitle")}
              </p>
            </ScrollReveal>

            <div className="faq-list max-w-4xl mx-auto bg-white p-8 rounded-none shadow-lg">
              {(faqItems || []).map((item, index) => (
                <div 
                  key={index} 
                  className="faq-item border-b border-gray-300 last:border-b-0 hover:bg-white/50 transition-colors rounded-lg" 
                >
                  <button
                    className="faq-question w-full text-left py-6 px-4 flex justify-between items-center hover:text-primary-red transition-colors"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                  >
                    <h3 className="text-lg font-bold pr-4">{item.question}</h3>
                    <span className="faq-toggle text-primary-red flex-shrink-0 bg-white p-2 rounded-full shadow-md">
                      {openFaq === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="faq-answer pb-6 px-4">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <AnimatedImage hoverEffect="lift">
                <Link href="/comment-ca-marche/faq">
                  <Button variant="outline" className="border-primary-red text-primary-red hover:bg-primary-red/5 px-8 py-3 rounded-none">
                    Voir toutes les questions fréquentes <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </AnimatedImage>
            </div>
          </div>
        </MotionSection>

        {/* Final CTA Section - Styled like events page */}
        <MotionSection className="py-20 bg-primary-red text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Prêt à créer un événement mémorable?
                </h2>
                <RedLineSeparator className="w-16 mx-auto mb-8 bg-white" />
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Contactez-nous aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé pour votre prochain événement Voilà Vélo.
                </p>
              </ScrollReveal>
              
              <StaggerContainer className="flex flex-col sm:flex-row justify-center gap-4">
                <AnimatedImage hoverEffect="lift">
                  <Link href="/contact">
                    <Button className="bg-white text-primary-red hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-none">
                      Demander un devis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </AnimatedImage>
                
                <AnimatedImage hoverEffect="lift">
                  <Link href="tel:+1XXXXXXXXXX">
                    <Button 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-primary-red px-8 py-4 text-lg font-semibold rounded-none"
                    >
                      Appelez-nous
                    </Button>
                  </Link>
                </AnimatedImage>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </div>
  )
}