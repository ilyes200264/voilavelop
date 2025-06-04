"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check, Play, Star } from "lucide-react"
import { packagesData } from "../packages-data"
import { useI18n } from "@/lib/i18n"
import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal,
  RedLineSeparator
} from "@/components/motion/motion-components"
import { use } from "react"

interface PackagePageProps {
  params: { slug: string }
}

export default function EnhancedPackagePage({ params }: PackagePageProps) {
  const { t } = useI18n();
  const { slug } = params
  const currentPackage = packagesData[slug as keyof typeof packagesData]

  if (!currentPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-charcoal mb-4">{t('packageDetail.notFound.message', "Forfait non trouvé")}</h1>
          <Link href="/forfaits">
            <Button>{t('packageDetail.notFound.backButton', "Retour aux forfaits")}</Button>
          </Link>
        </div>
      </div>
    )
  }

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-secondary-yellow fill-current' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <MotionSection className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <TextReveal>
                <h1 className="text-5xl md:text-7xl font-normal text-dark-charcoal mb-6 font-great-vibes leading-tight tracking-wide">
                  {currentPackage.title}
                </h1>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-4">
                  {currentPackage.tagline}
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.5}>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {currentPackage.heroDescription}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </MotionSection>

        {/* Main Section - What's Included */}
        <MotionSection 
          className="py-20"
          style={{ backgroundColor: currentPackage.mainSection.backgroundColor }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Image */}
              <div className="lg:col-span-3">
                <AnimatedImage hoverEffect="scale">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={currentPackage.mainSection.image}
                      alt={`${currentPackage.title} en action`}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </AnimatedImage>
              </div>

              {/* Content */}
              <StaggerContainer className="lg:col-span-2 text-white">
                <MotionDiv variant="fadeUp">
                  <h2 className="text-4xl md:text-5xl font-normal text-black mb-6 font-great-vibes">
                    {currentPackage.mainSection.title}
                  </h2>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-lg leading-relaxed mb-8 text-black">
                    {currentPackage.mainSection.description}
                  </p>
                </MotionDiv>

                <MotionDiv variant="fadeUp">
                  <h5 className="text-xl font-semibold mb-4">{t('packageDetail.whatsIncluded', "Qu'est-ce qui est inclus?")}</h5>
                  
                  <ul className="space-y-3 mb-8">
                    {(currentPackage.mainSection?.includes || []).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-white mr-3 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </MotionDiv>

                <MotionDiv variant="fadeUp">
                  <AnimatedImage hoverEffect="lift">
                    <Link href="/contact">
                      <Button className="bg-white text-primary-red hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                        {t('packageDetail.requestQuote', "Demander un devis")}
                      </Button>
                    </Link>
                  </AnimatedImage>
                </MotionDiv>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Target Section - Who is it ideal for */}
        <MotionSection 
          className="py-20"
          style={{ backgroundColor: currentPackage.targetSection.backgroundColor }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Content */}
              <StaggerContainer className="lg:col-span-2 text-white order-2 lg:order-1">
                <MotionDiv variant="fadeUp">
                  <h2 className="text-4xl md:text-5xl font-normal text-black mb-6 font-great-vibes">
                    {currentPackage.targetSection.title}
                  </h2>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-lg leading-relaxed mb-8 text-black">
                    {currentPackage.targetSection.description}
                  </p>
                </MotionDiv>

                <MotionDiv variant="fadeUp">
                  <h5 className="text-xl font-semibold mb-4">{t('packageDetail.perfectFor', "Pour qui est-ce idéal?")}</h5>
                  
                  <ul className="space-y-3 mb-8">
                    {(currentPackage.targetSection?.perfectFor || []).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-white mr-3 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </MotionDiv>

                <MotionDiv variant="fadeUp">
                  <AnimatedImage hoverEffect="lift">
                    <Link href="/contact">
                      <Button className="bg-white text-primary-red hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                        {t('packageDetail.bookNow', "Réserver maintenant")}
                      </Button>
                    </Link>
                  </AnimatedImage>
                </MotionDiv>
              </StaggerContainer>

              {/* Image */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <AnimatedImage hoverEffect="scale">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={currentPackage.targetSection.image}
                      alt={`${currentPackage.title} target audience`}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </AnimatedImage>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Demo Section - Video */}
        <MotionSection 
          className="py-20 text-center"
          style={{ backgroundColor: currentPackage.demoSection.backgroundColor }}
        >
          <div className="container mx-auto px-4">
            <TextReveal>
              <h2 className="text-4xl md:text-5xl font-normal text-black mb-8 font-great-vibes">
                {currentPackage.demoSection.title}
              </h2>
            </TextReveal>
            
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-video">
                    <iframe
                      src={currentPackage.demoSection.videoUrl}
                      title={`${currentPackage.title} demo video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </MotionSection>

        {/* Reviews Section */}
        <MotionSection 
          className="py-20 text-center"
          style={{ backgroundColor: currentPackage.reviewsSection.backgroundColor }}
        >
          <div className="container mx-auto px-4">
            <TextReveal>
              <h2 className="text-4xl md:text-5xl font-normal text-black mb-4 font-great-vibes">
                {currentPackage.reviewsSection.title}
              </h2>
            </TextReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="text-xl text-white mb-12">
                {currentPackage.reviewsSection.subtitle}
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {(currentPackage.reviewsSection?.testimonials || []).map((testimonial, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                >
                  <AnimatedImage hoverEffect="lift" className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                    <StarRating rating={testimonial.rating} />
                    
                    <blockquote className="text-lg text-gray-700 italic mb-6">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-dark-charcoal">
                          {testimonial.author}
                        </div>
                      </div>
                    </div>
                  </AnimatedImage>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Package Options */}
        <MotionSection className="py-20 bg-light-gray">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-12">
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
                  {t('packageDetail.options.title', "Options disponibles")}
                </h2>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('packageDetail.options.subtitle', "Choisissez l'option qui convient le mieux à votre événement et à votre budget")}
                </p>
              </ScrollReveal>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {(currentPackage.options || []).map((option, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                >
                  <AnimatedImage 
                    hoverEffect="lift" 
                    className={`bg-white rounded-2xl p-8 shadow-lg relative ${
                      option.featured ? 'ring-2 ring-primary-red' : ''
                    }`}
                  >
                    {option.featured && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-red text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {t('packageDetail.options.mostPopular', "Plus populaire")}
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-dark-charcoal mb-2">
                        {option.title}
                      </h3>
                      <div className="text-3xl font-bold text-primary-red">
                        {option.price === "Sur devis" ? option.price : `${option.price}$`}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-dark-charcoal mb-3">{t('packageDetail.options.included', "Inclus")}:</h4>
                      <ul className="space-y-2">
                        {(option.includes || []).map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-dark-charcoal mb-2">{t('packageDetail.options.idealFor', "Idéal pour")}:</h4>
                      <p className="text-gray-600 text-sm">{option.idealFor}</p>
                    </div>

                    <AnimatedImage hoverEffect="scale">
                      <Link href="/contact">
                        <Button
                          className={`w-full ${
                            option.featured
                              ? 'bg-primary-red text-white'
                              : 'bg-gray-100 text-dark-charcoal hover:bg-primary-red hover:text-white'
                          }`}
                        >
                          {t('packageDetail.options.chooseOption', "Choisir cette option")}
                        </Button>
                      </Link>
                    </AnimatedImage>
                  </AnimatedImage>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Customization Section */}
        <MotionSection className="py-20 bg-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <TextReveal>
              <h2 className="text-4xl md:text-5xl font-normal text-secondary-yellow mb-8 font-great-vibes">
                {currentPackage.customizationSection.title}
              </h2>
            </TextReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-gray-700 mb-6">
                {currentPackage.customizationSection.description}
              </p>
              
              <p className="text-gray-600 mb-8">
                {currentPackage.customizationSection.details}
              </p>
            </ScrollReveal>

            <AnimatedImage hoverEffect="lift">
              <Link href={currentPackage.customizationSection.downloadLink} target="_blank">
                <Button className="bg-primary-red text-white px-8 py-3 text-lg font-semibold hover:bg-primary-red/90">
                  {t('packageDetail.downloadGuide', "Télécharger le guide")}
                </Button>
              </Link>
            </AnimatedImage>
          </div>
        </MotionSection>

        {/* CTA Section */}
        <MotionSection className="py-16 bg-primary-red text-white text-center">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <StaggerContainer className="text-left">
                <MotionDiv variant="fadeUp">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t('packageDetail.readyToBook.title', "Prêt à réserver")} {currentPackage.title}?
                  </h2>
                </MotionDiv>
                
                <RedLineSeparator className="w-16 mb-6" />
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-8 opacity-90">
                    {t('packageDetail.readyToBook.description', "Contactez-nous pour une soumission personnalisée et réservez votre date dès aujourd'hui!")}
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp" className="flex flex-col sm:flex-row gap-4">
                  <AnimatedImage hoverEffect="lift">
                    <Link href="/contact">
                      <Button className="bg-white text-primary-red px-8 py-3 hover:bg-gray-100">
                        {t('packageDetail.readyToBook.requestQuote', "Demander une soumission")}
                      </Button>
                    </Link>
                  </AnimatedImage>
                  
                  <AnimatedImage hoverEffect="lift">
                    <Link href="tel:+1-XXX-XXX-XXXX">
                      <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-primary-red px-8 py-3"
                      >
                        {t('packageDetail.readyToBook.callNow', "Appelez maintenant")}
                      </Button>
                    </Link>
                  </AnimatedImage>
                </MotionDiv>
              </StaggerContainer>
              
              <ScrollReveal>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                  <div className="text-4xl mb-4 text-white/80">"</div>
                  <p className="text-xl italic mb-6">
                    {t('packageDetail.readyToBook.testimonial.text', "Notre expérience avec {packageTitle} a été absolument incroyable! Nos invités ont adoré l'interactivité et les smoothies étaient délicieux.").replace('{packageTitle}', currentPackage.title)}
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/30 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-bold">{t('packageDetail.readyToBook.testimonial.author', "Isabelle Tremblay")}</h4>
                      <p className="text-sm">{t('packageDetail.readyToBook.testimonial.location', "Montréal, QC")}</p>
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