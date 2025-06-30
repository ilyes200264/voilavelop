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
  }>>("benefits.items", []).map((benefit, index) => ({
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
  
  // Get stats from translations
  const stats = t<Array<{ number: string; label: string }>>("stats", []);

  // Conference specific benefits
  const conferenceAdvantages = t<Array<string>>("advantages.items", []);

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
                  Événements
                </Link>
                <span className="mx-2">/</span>
                <span>Conférences & Expositions</span>
              </div>
              
              <TextReveal>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Attirez l'attention, suscitez des conversations et dynamisez votre stand!
                </h1>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mb-8 bg-white" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl">
                  Vous cherchez un moyen de vous démarquer lors de votre prochain salon? Notre vélo à smoothie 
                  est une attraction qui fait pédaler, sourire et engager les gens avec votre marque d'une 
                  manière amusante et mémorable.
                </p>
              </ScrollReveal>
              
              <StaggerContainer className="flex flex-col sm:flex-row gap-4">
                <AnimatedImage hoverEffect="lift">
                  <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                    Planifier mon stand
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </AnimatedImage>
                
                <AnimatedImage hoverEffect="lift">
                  <Link href="/forfaits/ready-set-blend">
                    <Button 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg font-semibold rounded-xl"
                    >
                      Voir forfait compétition
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
                      Votre avantage concurrentiel
                    </h2>
                  </div>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-6 leading-relaxed text-white/90">
                    Parfait pour les installations intérieures ou extérieures, nous offrons des stations 
                    entièrement personnalisées pour correspondre à votre message et style. Vous voulez intensifier? 
                    Ajoutez une petite compétition amicale avec notre tableau de bord et speedomètres.
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <h4 className="text-lg font-semibold mb-4 text-white">Avantages spécialisés :</h4>
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
                        Étude de cas salon
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
                Pourquoi les exposants nous choisissent-ils?
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Faites de votre stand celui dont tout le monde se souvient. C'est un briseur de glace 
                formidable et un excellent moyen d'attirer une foule.
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
                    Ajoutez la compétition!
                  </h2>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-6 leading-relaxed opacity-90">
                    Transformez votre stand en centre d'attraction avec nos moniteurs de vitesse et 
                    tableaux de scores en temps réel. Parfait pour briser la glace et créer de 
                    l'engagement naturel avec vos prospects.
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <div className="space-y-4">
                    {[
                      "Compétition amicale qui attire les foules",
                      "Données d'engagement en temps réel",
                      "Opportunités de conversation naturelles",
                      "Contenu partageable pour réseaux sociaux"
                    ].map((feature, index) => (
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
                    <div className="text-6xl font-bold mb-4">2 min</div>
                    <div className="text-xl mb-6">Temps d'engagement moyen</div>
                    <div className="text-lg opacity-90">
                      vs 30 secondes pour un stand traditionnel
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
                Prêt à dominer votre prochain salon?
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8 bg-white" />
              <p className="text-xl mb-8">
                Contactez-nous dès aujourd'hui pour planifier une stratégie d'exposition qui génère 
                des résultats mesurables et des souvenirs durables.
              </p>
            </ScrollReveal>
            
            <StaggerContainer className="flex flex-col sm:flex-row justify-center gap-4">
              <AnimatedImage hoverEffect="lift">
                <Link href="/contact">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                    {t("finalCta.strategyButton", "Stratégie d'exposition")}
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