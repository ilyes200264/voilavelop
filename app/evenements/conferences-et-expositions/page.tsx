"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, Users, Award, Smile, ArrowRight, Presentation, Eye, TrendingUp, Coffee, Star, Monitor, Zap } from "lucide-react"
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

export default function ConferencesExposPage() {
  const { t } = useI18n();
  
  // Translation-driven content for Conferences & Expos page
  const hero = t<{ title: string; description: string; planStand: string; viewPackage: string }>("conferencesEtExpositions:hero", {} as any);
  const stats = t<Array<{ number: string; label: string }>>("conferencesEtExpositions:stats", []);
  const advantagesData = t<{ title: string; description: string; specializedAdvantages: string; items: string[]; caseStudyButton: string }>("conferencesEtExpositions:advantages", {} as any);
  const benefitsData = t<{ title: string; subtitle: string }>("conferencesEtExpositions:benefits", {} as any);
  const competition = t<{ title: string; description: string; features: string[]; engagementStat: { value: string; title: string; subtitle: string } }>("conferencesEtExpositions:competition", {} as any);
  const finalCta = t<{ title: string; description: string; strategyButton: string; planStandButton: string }>("conferencesEtExpositions:finalCta", {} as any);
  
  // Icons for benefits
  const benefitIcons = [
    <Eye key="eye" className="h-12 w-12 text-white" />,
    <Users key="users" className="h-12 w-12 text-white" />,
    <TrendingUp key="trending" className="h-12 w-12 text-white" />,
    <Zap key="zap" className="h-12 w-12 text-white" />
  ];
  
  // Get benefits from translations and add icons
  const benefits = t<Array<{
    title: string;
    description: string;
  }>>("conferencesEtExpositions:benefits.items", []).map((benefit, index) => ({
    ...benefit,
    icon: benefitIcons[index % benefitIcons.length],
    color: "bg-yellow-500" // Use consistent color theme
  }));
  
  // Get packages from translations
  const packages = t<Array<{
    title: string;
    duration: string;
    people: string;
    price: string;
    features: string[];
    popular?: boolean;
  }>>("packages.items", []);
  
  // Get testimonials from translations
  const testimonials = t<Array<{
    quote: string;
    author: string;
    position: string;
    company: string;
    rating: number;
  }>>("testimonials.items", []);
  
  // Conference specific benefits
  const conferenceAdvantages = t<Array<string>>("conferencesEtExpositions:advantages.items", []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        
        {/* Hero Section */}
        <MotionSection className="conferences-hero relative pt-32 pb-20 bg-orange-500 text-white">
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <div className="flex items-center text-sm mb-4 opacity-90">
                <Link href="/evenements" className="hover:underline">
                  {t("conferencesEtExpositions:breadcrumb.events")}
                </Link>
                <span className="mx-2">/</span>
                <span>{t("conferencesEtExpositions:breadcrumb.conferences")}</span>
              </div>
              
              <TextReveal>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {hero.title}
                </h1>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mb-8 bg-white" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl">
                  {hero.description}
                </p>
              </ScrollReveal>
              
              <StaggerContainer className="flex flex-col sm:flex-row gap-4">
                <AnimatedImage hoverEffect="lift">
                  <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                    {hero.planStand}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </AnimatedImage>
                
                <AnimatedImage hoverEffect="lift">
                  <Link href="/forfaits/ready-set-blend">
                    <Button 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg font-semibold rounded-xl"
                    >
                      {hero.viewPackage}
                    </Button>
                  </Link>
                </AnimatedImage>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Stats Section */}
        <MotionSection className="py-16 bg-amber-100">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {(stats || []).map((stat, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-orange-700 text-sm md:text-base">
                    {stat.label}
                  </div>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Conference Benefits Section */}
        <MotionSection className="py-20 bg-yellow-500 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <AnimatedImage hoverEffect="scale" className="lg:col-span-3">
                <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
                  <img 
                    src="/images/co-event.jpg" 
                    alt="Votre avantage concurrentiel" 
                    className="w-full h-auto"
                  />
                </div>
              </AnimatedImage>
              
              <StaggerContainer className="lg:col-span-2">
                <MotionDiv variant="fadeUp">
                  <div className="flex items-center mb-6">
                    <Presentation className="h-12 w-12 mr-4 text-white" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {advantagesData.title}
                    </h2>
                  </div>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-6 leading-relaxed text-white/90">
                    {advantagesData.description}
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <h4 className="text-lg font-semibold mb-4 text-white">{advantagesData.specializedAdvantages}</h4>
                  <div className="space-y-3">
                    {(conferenceAdvantages || []).map((advantage, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-white mr-3 mt-1 flex-shrink-0" />
                        <span className="text-white/90">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <div className="mt-8">
                    <AnimatedImage hoverEffect="lift">
                      <Button className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-3 text-lg font-semibold rounded-xl">
                        {advantagesData.caseStudyButton}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </AnimatedImage>
                  </div>
                </MotionDiv>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Benefits Section */}
        <MotionSection className="py-20 bg-orange-600 text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {benefitsData.title}
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                {benefitsData.subtitle}
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

        {/* Competition Feature Section */}
        <MotionSection className="py-20 bg-amber-500 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <StaggerContainer>
                <MotionDiv variant="fadeUp">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {competition.title}
                  </h2>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-6 leading-relaxed opacity-90">
                    {competition.description}
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <div className="space-y-4">
                    {(competition.features || []).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Monitor className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </MotionDiv>
              </StaggerContainer>
              
              <AnimatedImage hoverEffect="scale">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-4">
                      {competition.engagementStat.value}
                    </div>
                    <div className="text-xl mb-6">
                      {competition.engagementStat.title}
                    </div>
                    <div className="text-lg opacity-90">
                      {competition.engagementStat.subtitle}
                    </div>
                  </div>
                </div>
              </AnimatedImage>
            </div>
          </div>
        </MotionSection>

        {/* Final CTA Section */}
        <MotionSection className="py-20 bg-orange-600 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {finalCta.title}
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8 bg-white" />
              <p className="text-xl mb-8">
                {finalCta.description}
              </p>
            </ScrollReveal>
            
            <StaggerContainer className="flex flex-col sm:flex-row justify-center gap-4">
              <AnimatedImage hoverEffect="lift">
                <Link href="/contact">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                    {finalCta.strategyButton}
                    <Coffee className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </AnimatedImage>
            </StaggerContainer>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </div>
  )
}