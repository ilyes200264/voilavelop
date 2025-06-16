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
  // Use the hook without a namespace to get the default context
  const { t } = useI18n()
  
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
  
  // Get the categories from translations with explicit namespace
  const translatedCategories = t<Array<{
    id: string,
    title: string,
    tagline: string,
    description: string,
    benefits: string[],
    readMore: string
  }>>("events:eventCategories.categories", []);
  
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
                backgroundImage: `url('/images/events-hero.jpg')`,
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
                  {t('events:title')}
                </h1>
                
                {/* Clean Subtitle */}
                <p className="text-xl md:text-2xl font-light mb-12 opacity-90">
                  {t('events:subtitle')}
                </p>

                {/* Minimal Button */}
                <Button 
                  size="lg" 
                  className="bg-primary-red hover:bg-primary-red/90 text-white border-none rounded-none px-8 py-4 text-lg font-medium inline-flex items-center transition-colors"
                >
                  {t('events:viewPackages')}
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

        {/* Event Categories Section - Value Proposition Style */}
        <MotionSection className="py-20 bg-light-gray">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
                {t("events:eventCategories.title")}
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {t("events:eventCategories.subtitle")}
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
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
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
                    <div className={`p-8 lg:p-12 ${category.textColor} ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
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

                      <AnimatedImage hoverEffect="lift">
                        <Link href={category.link}>
                          <Button 
                            className={`${
                              category.textColor === 'text-white' 
                                ? 'bg-white text-dark-charcoal hover:bg-gray-100' 
                                : 'bg-dark-charcoal text-white hover:bg-gray-800'
                            } px-8 py-4 text-lg font-semibold rounded-none`}
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

        {/* Process Section - Styled with the benefits/values section approach */}
        <MotionSection className="py-20 bg-primary-red text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("events:howItWorks.title")}
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8 bg-white" />
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                {t("events:howItWorks.subtitle")}
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {t<Array<{
                step: string;
                title: string;
                description: string;
              }>>("events:howItWorks.steps", []).map((step, index) => (
                <MotionDiv
                  key={step.step}
                  variant="fadeUp"
                  custom={index}
                  className="text-center relative"
                >
                  <AnimatedImage 
                    hoverEffect="bounce" 
                    className="bg-white w-20 h-20 rounded-full flex items-center justify-center text-primary-red text-2xl font-bold mx-auto mb-8 shadow-lg"
                  >
                    <span className="text-3xl">{step.step}</span>
                  </AnimatedImage>
                  
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="leading-relaxed opacity-90">{step.description}</p>
                </MotionDiv>
              ))}
            </div>
            
            {/* Call-to-action button */}
            <ScrollReveal delay={0.5}>
              <div className="mt-16 text-center">
                <AnimatedImage hoverEffect="lift">
                  <Link href="/comment-ca-marche">
                    <Button className="bg-white text-primary-red hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-none">
                      {t("events:howItWorks.learnMoreButton")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </AnimatedImage>
              </div>
            </ScrollReveal>
          </div>
        </MotionSection>

        {/* Final CTA Section - Sustainability style */}
        <MotionSection className="py-20 bg-trust-blue text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t("events:cta.title")}
                </h2>
                <RedLineSeparator className="w-16 mx-auto mb-8 bg-white" />
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  {t("events:cta.text")}
                </p>
              </ScrollReveal>
              
              <StaggerContainer className="flex flex-col sm:flex-row justify-center gap-4">
                <AnimatedImage hoverEffect="lift">
                  <Link href="/contact">
                    <Button className="bg-white text-trust-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-none">
                      {t("events:cta.requestQuote")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </AnimatedImage>
                
                <AnimatedImage hoverEffect="lift">
                  <Link href="/comment-ca-marche/build-your-event">
                    <Button 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-trust-blue px-8 py-4 text-lg font-semibold rounded-none"
                    >
                      {t("events:cta.callUs")}
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