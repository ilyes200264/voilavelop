"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, Users, Award, Smile, ArrowRight, Megaphone, Heart, TrendingUp, Coffee, Star, Eye, Zap } from "lucide-react"
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

export default function OpeningsActivationsPage() {
  const { t } = useI18n();
  // Icons for benefits
  const benefitIcons = [
    <Eye key="eye" className="h-12 w-12 text-white" />,
    <Megaphone key="megaphone" className="h-12 w-12 text-white" />,
    <Users key="users" className="h-12 w-12 text-white" />,
    <Zap key="zap" className="h-12 w-12 text-white" />
  ];
  
  // Colors for benefits
  const benefitColors = ["bg-secondary-yellow", "bg-primary-red", "bg-trust-blue", "bg-accent-green"];
  
  // Benefits data
  const rawBenefits = t<Array<{ title: string; description: string }>>("openingsActivations:benefits.items", []);
  const benefits = rawBenefits.map((b, i) => ({
    ...b,
    icon: benefitIcons[i],
    color: benefitColors[i]
  }));
  
  // Package options
  const packages = [
    {
      title: "Activation Signature",
      duration: "2-3 heures",
      people: "100-200 personnes",
      price: "À partir de 899$",
      features: [
        "1-2 vélos mélangeurs premium",
        "100-150 smoothies personnalisés",
        "Branding complet avec logo",
        "Gobelets et signalétique sur mesure",
        "Animation professionnelle",
        "Configuration photo-friendly"
      ]
    },
    {
      title: "Activation Prestige",
      duration: "4-6 heures",
      people: "200-500 personnes", 
      price: "À partir de 1299$",
      features: [
        "2-3 vélos mélangeurs deluxe",
        "300-400 smoothies signature",
        "Installation spectaculaire",
        "Équipe d'animation dédiée",
        "Photographie événementielle",
        "Reportage vidéo inclus",
        "Gestion complète des médias sociaux"
      ],
      popular: true
    },
    {
      title: "Activation Exclusive",
      duration: "Journée complète",
      people: "500+ personnes",
      price: "Sur devis",
      features: [
        "Installation multi-bikes personnalisée",
        "Production smoothies illimitée",
        "Conception scénographique unique",
        "Équipe technique complète",
        "Couverture média professionnelle",
        "ROI et analytics détaillés",
        "Service concierge VIP"
      ]
    }
  ];
  
  // Success stories/testimonials
  const testimonials = [
    {
      quote: "L'activation Voilà Vélo a généré 300% plus d'engagement que nos activations traditionnelles. Les gens faisaient la queue pour essayer!",
      author: "Stéphanie Martin",
      position: "Directrice Marketing",
      company: "TechStart Montréal",
      rating: 5
    },
    {
      quote: "Incroyable retour sur investissement! Les photos et vidéos de l'événement continuent de circuler sur les réseaux sociaux 3 mois plus tard.",
      author: "David Chen",
      position: "Responsable Événementiel",
      company: "Innovation Lab",
      rating: 5
    },
    {
      quote: "Exactement ce qu'il nous fallait pour notre lancement de produit. L'équipe Voilà Vélo a su adapter parfaitement l'expérience à notre marque.",
      author: "Catherine Dubois",
      position: "Chef de Marque",
      company: "Wellness Co.",
      rating: 5
    }
  ];
  
  // Stats data
  const stats = t<Array<{ number: string; label: string }>>("openingsActivations:stats", []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        
        {/* Hero Section */}
        <MotionSection className="openings-hero relative pt-32 pb-20 bg-orange-500 text-white">
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <div className="flex items-center text-sm mb-4 opacity-90">
                <Link href="/evenements" className="hover:underline">
                  {t('openingsActivations:breadcrumb.events')}
                </Link>
                <span className="mx-2">/</span>
                <span>{t('openingsActivations:breadcrumb.openingsActivations')}</span>
              </div>
              
              <TextReveal>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {t('openingsActivations:hero.title')}
                </h1>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mb-8 bg-white" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl">
                  {t('openingsActivations:hero.description')}
                </p>
              </ScrollReveal>
              
              <StaggerContainer className="flex flex-col sm:flex-row gap-4">
                <AnimatedImage hoverEffect="lift">
                    <Link href="/contact">
                    <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                      {t('openingsActivations:hero.requestQuote')} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    </Link>
                </AnimatedImage>
                
                <AnimatedImage hoverEffect="lift">
                  <Link href="/forfaits/signature">
                    <Button 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg font-semibold rounded-xl"
                    >
                      {t('openingsActivations:hero.viewSignature')}
                    </Button>
                  </Link>
                </AnimatedImage>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Benefits Section */}
        <MotionSection className="py-20 bg-orange-600 text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pourquoi choisir Voilà Vélo pour vos activations?
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Dès que les pédales commencent à tourner, les têtes se tournent. C'est un déclencheur de conversation, 
                une opportunité photo et un moment de bien-être en un seul.
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

        {/* Main Content Section */}
        <MotionSection className="py-20 bg-amber-500 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <AnimatedImage hoverEffect="scale" className="lg:col-span-3">
                <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
                  <img 
                    src="/images/ouv-event.jpg" 
                    alt="L'expérience qui marque" 
                    className="w-full h-auto"
                  />
                </div>
                
                
              </AnimatedImage>
              
              <StaggerContainer className="lg:col-span-2">
                <MotionDiv variant="fadeUp">
                  <div className="flex items-center mb-6">
                    <Megaphone className="h-12 w-12 mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold">
                      L'expérience qui marque
                    </h2>
                  </div>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-6 leading-relaxed opacity-90">
                    Dans le monde d'aujourd'hui, les expériences construisent les marques. Donnez aux gens quelque chose 
                    d'excitant dont ils peuvent parler — et laissez-les faire le marketing pour vous.
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <div className="space-y-4">
                    {t<string[]>("openingsActivations:experience.features", []).map((feature, index) => (
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
                      <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl">
                        {t("openingsActivations:experience.planActivation")}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </AnimatedImage>
                  </div>
                </MotionDiv>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Final CTA Section */}
        <MotionSection className="py-20 bg-orange-600 text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("openingsActivations:finalCTA.title")}
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8 bg-white" />
              <p className="text-xl mb-8">
                {t("openingsActivations:finalCTA.description")}
              </p>
            </ScrollReveal>
            
            <StaggerContainer className="flex flex-col sm:flex-row justify-center gap-4">
              <AnimatedImage hoverEffect="lift">
                <Link href="/contact">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                    {t("openingsActivations:finalCTA.requestQuote")}
                    <Coffee className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </AnimatedImage>
              
              <AnimatedImage hoverEffect="lift">
                <Link href="/comment-ca-marche/build-your-event">
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-xl"
                  >
                    {t("openingsActivations:finalCTA.createActivation")}
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