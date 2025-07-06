"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, Users, Award, Smile, ArrowRight, GraduationCap, Heart, Gift, Coffee, Star, BookOpen, PartyPopper } from "lucide-react"
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

export default function SchoolsNonprofitsBirthdaysPage() {
  const { t } = useI18n();
  
  // Icons for benefits
  const benefitIcons = [
    <BookOpen key="book" className="h-12 w-12 text-white" />,
    <Heart key="heart" className="h-12 w-12 text-white" />,
    <Users key="users" className="h-12 w-12 text-white" />,
    <PartyPopper key="party" className="h-12 w-12 text-white" />
  ];
  
  // Colors for benefits
  const benefitColors = ["bg-accent-green", "bg-primary-red", "bg-trust-blue", "bg-secondary-yellow"];
  
  // Benefits data
  const rawBenefits = t<Array<{ title: string; description: string }>>("ecolesOrganismesEtAnniversaires:benefitsSection.items", []);
  const benefits = rawBenefits.map((b, i) => ({
    ...b,
    icon: benefitIcons[i],
    color: benefitColors[i]
  }));
  
  // Package options
  const packages = [
    {
      title: "Petite École",
      duration: "1-2 heures",
      people: "25-50 enfants",
      price: "À partir de 349$",
      features: [
        "1 vélo adapté aux enfants",
        "25-50 smoothies éducatifs",
        "Animation pédagogique incluse",
        "Activités sur la nutrition",
        "Matériel éducatif fourni",
        "Tarif réduit pour écoles"
      ]
    },
    {
      title: "Grande Célébration",
      duration: "2-4 heures",
      people: "50-150 personnes", 
      price: "À partir de 599$",
      features: [
        "2 vélos (1 enfant + 1 adulte)",
        "100-150 smoothies pour tous",
        "Défis famille intergénérationnels",
        "Animation festive complète",
        "Décoration thématique",
        "Forfait anniversaire/graduation spécial",
        "Photos souvenir incluses"
      ],
      popular: true
    },
    {
      title: "Collecte de Fonds Premium",
      duration: "Demi-journée/journée",
      people: "100-300 personnes",
      price: "À partir de 899$",
      features: [
        "Installation multi-vélos",
        "Production smoothies illimitée",
        "Équipe d'animation dédiée",
        "Stand de sensibilisation inclus",
        "Support marketing et promotion",
        "Pourcentage reversé à votre cause",
        "Rapport d'impact détaillé"
      ]
    }
  ];
  
  // Success stories/testimonials
  const testimonials = [
    {
      quote: "Nos élèves ont adoré apprendre la nutrition tout en s'amusant! L'équipe a su adapter parfaitement l'activité à notre programme éducatif.",
      author: "Marie-Claire Dubois",
      position: "Directrice",
      company: "École Primaire Sainte-Famille",
      rating: 5
    },
    {
      quote: "Notre collecte de fonds a dépassé tous nos objectifs! Les familles sont venues nombreuses et l'ambiance était fantastique.",
      author: "Jean-François Roy",
      position: "Président",
      company: "Comité de Parents",
      rating: 5
    },
    {
      quote: "L'anniversaire de ma fille était magique! Tous les enfants ont participé avec joie et les parents ont adoré l'expérience.",
      author: "Sophie Tremblay",
      position: "Maman organisatrice",
      company: "Fête d'anniversaire privée",
      rating: 5
    }
  ];
  
  // Stats data
  const stats = t<Array<{ number: string; label: string }>>("ecolesOrganismesEtAnniversaires:stats", []);
  
  // Pricing data
  const pricing = t<{
    discount: { value: string; title: string; subtitle: string };
    title: string;
    description: string;
    features: string[];
  }>("ecolesOrganismesEtAnniversaires:pricing", {} as any);

  // Final CTA data
  const finalCta = t<{ title: string; description: string; quoteButton: string; discussButton: string }>("ecolesOrganismesEtAnniversaires:finalCta", {} as any);

  // Educational benefits
  const educationalBenefits = [
    "Apprentissage de la nutrition et des habitudes saines",
    "Sensibilisation à l'environnement et la durabilité",
    "Développement de la motricité et coordination",
    "Travail d'équipe et coopération",
    "Confiance en soi et accomplissement personnel"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Image */}
        {/* Hero Section */}
        <MotionSection className="schools-hero relative pt-16 pb-20 bg-orange-500 text-white mt-24">
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <div className="flex items-center text-sm mb-4 opacity-90">
                <Link href="/evenements" className="hover:underline">
                  {t('ecolesOrganismesEtAnniversaires:breadcrumb.events')}
                </Link>
                <span>{t('ecolesOrganismesEtAnniversaires:breadcrumb.category')}</span>
              </div>
              
              <TextReveal>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {t('ecolesOrganismesEtAnniversaires:hero.title')}
                </h1>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mb-8 bg-white" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl">
                  {t('ecolesOrganismesEtAnniversaires:hero.description')}
                </p>
              </ScrollReveal>
              
              <StaggerContainer className="flex flex-col sm:flex-row gap-4">
                <AnimatedImage hoverEffect="lift">
                  <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                    {t('ecolesOrganismesEtAnniversaires:hero.requestQuote')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </AnimatedImage>
                
                <AnimatedImage hoverEffect="lift">
                  <Link href="/forfaits/la-petite-koki">
                    <Button 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg font-semibold rounded-xl"
                    >
                      {t('ecolesOrganismesEtAnniversaires:hero.viewChildrenPackage')}
                    </Button>
                  </Link>
                </AnimatedImage>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>
        {/* Bloc d'accessibilité sans chiffres */}
        <section className="py-12 bg-accent-green text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="bg-white/20 rounded-xl p-8 flex-1 mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Tarifs préférentiels pour l'éducation</h3>
              <p className="text-lg">Nous offrons des tarifs spéciaux pour les écoles et organismes éducatifs afin de rendre nos ateliers accessibles à tous.</p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Accessibilité pour tous</h3>
              <p className="text-lg">Chaque enfant mérite d'accéder à des expériences éducatives enrichissantes. Nos forfaits sont adaptés aux budgets scolaires et incluent un support pédagogique personnalisé.</p>
            </div>
          </div>
        </section>

        {/* Educational Benefits Section */}
        <MotionSection className="py-20 bg-secondary-yellow text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <StaggerContainer className="lg:col-span-2">
                <MotionDiv variant="fadeUp">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="h-12 w-12 mr-4 text-white" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {t('ecolesOrganismesEtAnniversaires:education.heading')}
                    </h2>
                  </div>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-6 leading-relaxed text-white/90">
                    {t('ecolesOrganismesEtAnniversaires:education.description')}
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <h4 className="text-lg font-semibold mb-4 text-white">
                    {t('ecolesOrganismesEtAnniversaires:education.label')}
                  </h4>
                  <div className="space-y-3">
                    {t<string[]>('ecolesOrganismesEtAnniversaires:education.items', []).map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-white mr-3 mt-1 flex-shrink-0" />
                        <span className="text-white/90">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </MotionDiv>
                
                {/* Supprimé : MotionDiv avec le bouton Programme éducatif */}
              </StaggerContainer>

              <AnimatedImage hoverEffect="scale" className="lg:col-span-3">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/kid-event.jpg" 
                    alt="Enfants apprenant avec les vélos à smoothie" 
                    className="w-full h-auto"
                  />
                </div>
              </AnimatedImage>
            </div>
          </div>
        </MotionSection>

        {/* Benefits Section */}
        <MotionSection className="py-20 bg-primary-red text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('ecolesOrganismesEtAnniversaires:benefitsSection.title')}
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                {t('ecolesOrganismesEtAnniversaires:benefitsSection.subtitle')}
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
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

        {/* Special Pricing Section */}
        <MotionSection className="py-20 bg-accent-green text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <AnimatedImage hoverEffect="scale">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-4">Tarif préférentiel pour les écoles</div>
                    <div className="text-lg opacity-90">
                      Profitez d'une offre spéciale pour les établissements scolaires et organismes éducatifs. Contactez-nous pour un devis personnalisé !
                    </div>
                  </div>
                </div>
              </AnimatedImage>
              
              <StaggerContainer>
                <MotionDiv variant="fadeUp">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {pricing.title}
                  </h2>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-6 leading-relaxed opacity-90">
                    {pricing.description}
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <div className="space-y-4">
                    {pricing.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </MotionDiv>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Final CTA Section */}
        <MotionSection className="py-20 bg-trust-blue text-white text-center">
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
                  <Button className="bg-white text-trust-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                    {finalCta.quoteButton}
                    <Coffee className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </AnimatedImage>
              
              <AnimatedImage hoverEffect="lift">
                <Link href="tel:+1-XXX-XXX-XXXX">
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-trust-blue px-8 py-4 text-lg font-semibold rounded-xl"
                  >
                    {finalCta.discussButton}
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