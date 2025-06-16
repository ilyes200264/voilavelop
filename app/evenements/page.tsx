"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Users, Building, GraduationCap, Presentation } from "lucide-react"
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
import { useI18n } from "@/lib/i18n"

export default function EventsPage() {
  const { t } = useI18n("events")
  
  // Icon map for categories
  const categoryIcons = {
    "corporate": <Building className="h-12 w-12" />,
    "ouvertures-et-activations": <Presentation className="h-12 w-12" />,
    "ecoles-organismes-et-anniversaires": <GraduationCap className="h-12 w-12" />,
    "conferences-et-expositions": <Users className="h-12 w-12" />
  };
  
  // Color map for categories
  const categoryColors = {
    "corporate": {
      bg: "bg-primary-red",
      text: "text-white",
      image: "/images/corporate-events.jpg"
    },
    "ouvertures-et-activations": {
      bg: "bg-secondary-yellow",
      text: "text-dark-charcoal",
      image: "/images/event-2.jpg"
    },
    "ecoles-organismes-et-anniversaires": {
      bg: "bg-trust-blue",
      text: "text-white",
      image: "/images/event-3.jpg"
    },
    "conferences-et-expositions": {
      bg: "bg-accent-green",
      text: "text-white",
      image: "/images/event-1.jpg"
    }
  };
  
  // Get the categories from translations
  const translatedCategories = t<Array<{
    id: string,
    title: string,
    tagline: string,
    description: string,
    benefits: string[],
    readMore: string
  }>>("eventCategories.categories", []);
  
  // Map the icons and styles based on category ID
  const eventCategories = translatedCategories.map(category => {
    const defaultColor = {
      bg: "bg-primary-red",
      text: "text-white",
      image: "/images/event-1.jpg"
    };
    
    const colorConfig = categoryColors[category.id] || defaultColor;
    const icon = categoryIcons[category.id] || <Building className="h-12 w-12" />;
    const link = `/evenements/${category.id}`;
    
    return {
      ...category,
      icon,
      color: colorConfig.bg,
      textColor: colorConfig.text,
      image: colorConfig.image,
      link
    };
  });

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section with darker overlay to improve text visibility */}
          <div className="relative">
            <MotionSection className="events-hero relative pt-32 pb-20 bg-primary-red text-white">
              {/* Overlay scoped only to this section */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-red via-secondary-yellow to-accent-green opacity-90"></div>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-white text-center">
                  <TextReveal>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
                      {t("title")}
                    </h1>
                  </TextReveal>
                  
                  <RedLineSeparator className="w-16 mx-auto mb-8 bg-white" />
                  
                  <ScrollReveal delay={0.3}>
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                      {t("subtitle")}
                    </p>
                  </ScrollReveal>
                  
                  <StaggerContainer className="flex flex-col sm:flex-row justify-center gap-4">
                    <AnimatedImage hoverEffect="lift">
                      <Link href="/forfaits">
                        <Button className="bg-white text-primary-red hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                          {t("viewPackages")}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </AnimatedImage>
                    
                    <AnimatedImage hoverEffect="lift">
                      <Link href="/contact">
                        <Button 
                          variant="outline" 
                          className="border-2 border-white text-white hover:bg-white hover:text-primary-red px-8 py-4 text-lg font-semibold rounded-xl"
                        >
                          {t("cta.requestQuote")}
                        </Button>
                      </Link>
                    </AnimatedImage>
                  </StaggerContainer>
                </div>
              </div>
            </MotionSection>
          </div>

          {/* Event Categories */}
          <MotionSection className="py-20 bg-light-gray">
            <div className="container mx-auto px-4">
              <ScrollReveal className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
                  {t("eventCategories.title", "Types d'événements")}
                </h2>
                <RedLineSeparator className="w-16 mx-auto mb-8" />
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  {t("eventCategories.subtitle", "Chaque événement est unique. Choisissez la catégorie qui correspond le mieux à vos besoins et découvrez comment nous pouvons créer une expérience inoubliable.")}
                </p>
              </ScrollReveal>

              <StaggerContainer className="space-y-16">
                {eventCategories.map((category, index) => (
                  <MotionDiv
                    key={category.id}
                    variant="fadeUp"
                    custom={index}
                    className={`${category.color} rounded-2xl overflow-hidden shadow-xl`}
                  >
                    <div className="grid lg:grid-cols-5 gap-0">
                      {/* Image Section */}
                      <div className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <ImageMaskReveal className="h-64 lg:h-full">
                          <Image 
                            src={category.image} 
                            alt={category.title} 
                            width={800}
                            height={600}
                            className="w-full h-full object-cover"
                          />
                        </ImageMaskReveal>
                      </div>

                      {/* Content Section */}
                      <div className={`lg:col-span-2 p-8 lg:p-12 ${category.textColor} ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="flex items-center mb-6">
                          <AnimatedImage hoverEffect="rotate" className="mr-4 text-white">
                            {category.icon}
                          </AnimatedImage>
                          <h3 className="text-2xl md:text-3xl font-bold">{category.title}</h3>
                        </div>
                        
                        <p className="text-xl font-semibold mb-4 opacity-90">
                          {category.tagline}
                        </p>
                        
                        <p className="text-lg mb-6 leading-relaxed opacity-80">
                          {category.description}
                        </p>

                        <div className="mb-8">
                          <h4 className="text-lg font-semibold mb-4">Avantages clés:</h4>
                          <ul className="space-y-2">
                            {(category.benefits || []).map((benefit, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <AnimatedImage hoverEffect="scale">
                          <Link href={category.link}>
                            <Button 
                              className={`${
                                category.textColor === 'text-white' 
                                  ? 'bg-white text-dark-charcoal hover:bg-gray-100' 
                                  : 'bg-dark-charcoal text-white hover:bg-gray-800'
                              } px-8 py-3 text-lg font-semibold rounded-xl`}
                            >
                              {category.readMore}
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </Link>
                        </AnimatedImage>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </StaggerContainer>
            </div>
          </MotionSection>

          {/* Process Section - Enhanced with better animations */}
          <MotionSection className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <ScrollReveal className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
                  {t("howItWorks.title", "Comment ça marche")}
                </h2>
                <RedLineSeparator className="w-16 mx-auto mb-8" />
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  {t("howItWorks.subtitle", "Un processus simple en 3 étapes pour organiser votre événement Voilà Vélo")}
                </p>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
                {/* Connecting line between steps */}
                <div className="hidden md:block absolute top-16 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-1 bg-gray-200 z-0"></div>
                
                {t<Array<{
                  step: string;
                  title: string;
                  description: string;
                }>>("howItWorks.steps", []).map((step, index) => {
                  const colors = ["bg-primary-red", "bg-secondary-yellow", "bg-accent-green"];
                  
                  return (
                    <MotionDiv
                      key={step.step}
                      variant="fadeUp"
                      custom={index}
                      className="text-center relative z-10"
                    >
                      <AnimatedImage 
                        hoverEffect="bounce" 
                        className={`${colors[index]} w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-8 shadow-lg`}
                      >
                        <span className="text-3xl">{step.step}</span>
                      </AnimatedImage>
                      
                      <h3 className="text-xl font-bold text-dark-charcoal mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      
                      {index < 2 && (
                        <div className="hidden md:block absolute top-10 left-full transform -translate-x-1/2 z-20">
                          <div className="bg-gray-200 rounded-full p-2">
                            <ArrowRight className="h-6 w-6 text-dark-charcoal" />
                          </div>
                        </div>
                      )}
                    </MotionDiv>
                  );
                })}
              </div>
              
              {/* Additional explanation section */}
              <ScrollReveal delay={0.5}>
                <div className="mt-16 text-center">
                  <Link href="/comment-ca-marche">
                    <Button variant="outline" className="border-primary-red text-primary-red hover:bg-primary-red/5">
                      {t("howItWorks.learnMoreButton", "En savoir plus sur notre processus")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </MotionSection>

          {/* Final CTA Section */}
          <MotionSection className="py-20 bg-trust-blue text-white text-center">
            <div className="container mx-auto px-4 max-w-4xl">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t("cta.title")}
                </h2>
                <RedLineSeparator className="w-16 mx-auto mb-8 bg-white" />
                <p className="text-xl mb-8">
                  {t("cta.text")}
                </p>
              </ScrollReveal>
              
              <StaggerContainer className="flex flex-col sm:flex-row justify-center gap-4">
                <AnimatedImage hoverEffect="lift">
                  <Link href="/contact">
                    <Button className="bg-white text-trust-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                      {t("cta.requestQuote")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </AnimatedImage>
                
                <AnimatedImage hoverEffect="lift">
                  <Link href="/comment-ca-marche/build-your-event">
                    <Button 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-trust-blue px-8 py-4 text-lg font-semibold rounded-xl"
                    >
                      {t("cta.callUs")}
                    </Button>
                  </Link>
                </AnimatedImage>
              </StaggerContainer>
            </div>
          </MotionSection>
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}