"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, Users, Award, Smile, ArrowRight, Building, Heart, TrendingUp, Coffee, Star } from "lucide-react"
import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal,
  RedLineSeparator
} from "@/components/motion/motion-components"
import { useI18n } from "@/lib/i18n"

export default function CorporateEventsPage() {
  // Make sure to use the namespace with a colon when referencing specific translations
  // Fix: The namespace should be "corporate-events" not "corporateEvents:"
  const { t } = useI18n();
  
  // Icons for benefits
  const benefitIcons = [
    <Users key="users" className="h-12 w-12 text-white" />,
    <Heart key="heart" className="h-12 w-12 text-white" />,
    <TrendingUp key="trending" className="h-12 w-12 text-white" />,
    <Smile key="smile" className="h-12 w-12 text-white" />
  ];
  
  // Colors for benefits
  const benefitColors = ["bg-primary-red", "bg-secondary-yellow", "bg-accent-green", "bg-trust-blue"];
  
  // Get benefits from translations and add icons and colors
  const benefits = t<Array<{
    title: string;
    description: string;
  }>>("corporateEvents:benefits.items", []).map((benefit, index) => ({
    ...benefit,
    icon: benefitIcons[index],
    color: benefitColors[index]
  }));
  
  // Get packages from translations
  const packages = t<Array<{
    title: string;
    duration: string;
    people: string;
    price: string;
    features: string[];
    popular?: boolean;
  }>>("corporateEvents:packages.items", []);
  
  // Get testimonials from translations
  const testimonials = t<Array<{
    quote: string;
    author: string;
    position: string;
    company: string;
    rating: number;
  }>>("corporateEvents:testimonials.items", []).map((testimonial, index) => ({
    ...testimonial,
    image: `/images/testimonial-${index + 1}.jpg`
  }));
  
  // Get stats from translations
  const stats = t<Array<{ number: string; label: string }>>("corporateEvents:stats", []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Image at the top */}
        <MotionSection className="relative pt-20 bg-gradient-to-r from-orange-100 to-yellow-100 text-dark-charcoal">
          {/* Image at the top */}
          <div className="w-full">
            <img 
              src="/images/3.jpg" 
              alt="Corporate events with smoothie bikes" 
              className="w-full h-80 object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center text-sm mb-4 opacity-90">
                <Link href="/evenements" className="hover:underline">
                  {t("corporateEvents:breadcrumb.events")}
                </Link>
                <span className="mx-2">/</span>
                <span>{t("corporateEvents:breadcrumb.corporate")}</span>
              </div>
              
              <TextReveal>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-primary-red">
                  {t("corporateEvents:hero.title")}
                </h1>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mb-8" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl">
                  {t("corporateEvents:hero.description")}
                </p>
              </ScrollReveal>
              
              <StaggerContainer className="flex flex-col sm:flex-row gap-4">
                <AnimatedImage hoverEffect="lift">
                  <Link href="/contact">
                    <Button className="bg-primary-red text-white hover:bg-primary-red/90 px-8 py-4 text-lg font-semibold">
                      {t("corporateEvents:hero.requestQuote")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </AnimatedImage>
                
                <AnimatedImage hoverEffect="lift">
                  <Link href="/forfaits/ready-set-blend">
                    <Button 
                      variant="outline" 
                      className="border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-white px-8 py-4 text-lg font-semibold"
                    >
                      {t("corporateEvents:hero.viewTeamBuilding")}
                    </Button>
                  </Link>
                </AnimatedImage>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Benefits Section */}
        <MotionSection className="py-20 bg-secondary-yellow text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("corporateEvents:benefits.title")}
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                {t("corporateEvents:benefits.subtitle")}
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {(benefits || []).map((benefit, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                >
                  <AnimatedImage 
                    hoverEffect="lift" 
                    className="h-full"
                  >
                    <div className={`${benefit.color} p-8 rounded-2xl h-full text-white shadow-lg`}>
                      <div className="flex items-center mb-6">
                        <div className="mr-4">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">{benefit.title}</h3>
                      </div>
                      <p className="text-lg leading-relaxed opacity-90">
                        {benefit.description}
                      </p>
                    </div>
                  </AnimatedImage>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* Main Content Section with alternating layout */}
        <MotionSection className="py-20 bg-primary-red text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <AnimatedImage hoverEffect="scale" className="lg:col-span-3">
                <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
                  <img 
                    src="/images/even-corp.jpg" 
                    alt="L'expérience corporate parfaite" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/corporate-smoothie-bikes.jpg" 
                    alt={t("corporateEvents:images.corporateEvent")}
                    className="w-full h-auto"
                  />
                </div>
              </AnimatedImage>
              
              <StaggerContainer className="lg:col-span-2">
                <MotionDiv variant="fadeUp">
                  <div className="flex items-center mb-6">
                    <Building className="h-12 w-12 mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {t("corporateEvents:corporateExperience.title")}
                    </h2>
                  </div>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-6 leading-relaxed opacity-90">
                    {t("corporateEvents:corporateExperience.description")}
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <div className="space-y-4">
                    {t<string[]>("corporateEvents:corporateExperience.features", []).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <div className="mt-8">
                    <AnimatedImage hoverEffect="lift">
                      <Button className="bg-white text-primary-red hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl">
                        {t("corporateEvents:corporateExperience.planEventButton")}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </AnimatedImage>
                  </div>
                </MotionDiv>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </div>
  )
}