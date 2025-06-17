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
  const benefits = [
    {
      title: "Activité éducative et amusante",
      description: "Combinez apprentissage et plaisir en enseignant la nutrition, l'activité physique et la durabilité de manière interactive.",
      icon: benefitIcons[0],
      color: benefitColors[0]
    },
    {
      title: "Collecte de fonds efficace",
      description: "Créez un événement mémorable qui attire les participants et génère des revenus significatifs pour votre cause.",
      icon: benefitIcons[1],
      color: benefitColors[1]
    },
    {
      title: "Engagement communautaire",
      description: "Rassemblez familles, étudiants et communauté autour d'une activité positive qui renforce les liens sociaux.",
      icon: benefitIcons[2],
      color: benefitColors[2]
    },
    {
      title: "Souvenirs inoubliables",
      description: "Créez des moments précieux et des photos mémorables que les participants chériront longtemps.",
      icon: benefitIcons[3],
      color: benefitColors[3]
    }
  ];
  
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
  const stats = [
    { number: "500+", label: "Événements scolaires réussis" },
    { number: "98%", label: "Satisfaction des enseignants" },
    { number: "40%", label: "Réduction tarifaire pour écoles" },
    { number: "15k+", label: "Enfants sensibilisés" }
  ];

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
        <div className="w-full">
          <img 
            src="/images/gallery-1.jpg" 
            alt="Écoles, Organismes & Anniversaires avec vélos à smoothie" 
            className="w-full h-80 object-cover"
          />
        </div>
        
        {/* Hero Section */}
        <MotionSection className="schools-hero relative pt-16 pb-20 bg-orange-500 text-white">
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <div className="flex items-center text-sm mb-4 opacity-90">
                <Link href="/evenements" className="hover:underline">
                  Événements
                </Link>
                <span className="mx-2">/</span>
                <span>Écoles, Organismes & Anniversaires</span>
              </div>
              
              <TextReveal>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Rassemblez les gens autour de smoothies, de sourires et beaucoup de plaisir!
                </h1>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mb-8 bg-white" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl">
                  Vous cherchez une façon créative de collecter des fonds, de vous connecter avec votre communauté 
                  ou de célébrer un jour spécial? Nos expériences de vélos à smoothie sont parfaites pour les 
                  événements scolaires et les fêtes d'anniversaire!
                </p>
              </ScrollReveal>
              
              <StaggerContainer className="flex flex-col sm:flex-row gap-4">
                <AnimatedImage hoverEffect="lift">
                  <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                    Demander un devis éducatif
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </AnimatedImage>
                
                <AnimatedImage hoverEffect="lift">
                  <Link href="/forfaits/la-petite-koki">
                    <Button 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg font-semibold rounded-xl"
                    >
                      Voir forfait enfants
                    </Button>
                  </Link>
                </AnimatedImage>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Stats Section */}
        <MotionSection className="py-16 bg-trust-blue text-white">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {(stats || []).map((stat, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/90 text-sm md:text-base">
                    {stat.label}
                  </div>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Educational Benefits Section */}
        <MotionSection className="py-20 bg-secondary-yellow text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <StaggerContainer className="lg:col-span-2">
                <MotionDiv variant="fadeUp">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="h-12 w-12 mr-4 text-white" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      Apprendre en s'amusant
                    </h2>
                  </div>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-6 leading-relaxed text-white/90">
                    Nos ateliers transforment l'apprentissage en aventure! Les enfants découvrent la nutrition, 
                    l'environnement et l'activité physique à travers une expérience interactive inoubliable.
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <h4 className="text-lg font-semibold mb-4 text-white">Bénéfices éducatifs :</h4>
                  <div className="space-y-3">
                    {(educationalBenefits || []).map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-white mr-3 mt-1 flex-shrink-0" />
                        <span className="text-white/90">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <div className="mt-8">
                    <AnimatedImage hoverEffect="lift">
                      <Button className="bg-accent-green text-white hover:bg-accent-green/90 px-8 py-3 text-lg font-semibold rounded-xl">
                        Programme éducatif
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </AnimatedImage>
                  </div>
                </MotionDiv>
              </StaggerContainer>

              <AnimatedImage hoverEffect="scale" className="lg:col-span-3">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/gallery-1.jpg" 
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
                Pourquoi nos événements marchent-ils si bien?
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Nous offrons des forfaits à prix réduit pour les écoles et organismes à but non lucratif, 
                rendant cette expérience accessible à tous.
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

        {/* Special Pricing Section */}
        <MotionSection className="py-20 bg-accent-green text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <AnimatedImage hoverEffect="scale">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-4">40%</div>
                    <div className="text-xl mb-6">de réduction pour les écoles</div>
                    <div className="text-lg opacity-90">
                      Tarifs préférentiels pour l'éducation
                    </div>
                  </div>
                </div>
              </AnimatedImage>
              
              <StaggerContainer>
                <MotionDiv variant="fadeUp">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Accessibilité pour tous
                  </h2>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-6 leading-relaxed opacity-90">
                    Nous croyons que chaque enfant mérite d'accéder à des expériences éducatives enrichissantes. 
                    C'est pourquoi nous offrons des tarifs spéciaux pour les institutions éducatives et les organismes à but non lucratif.
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <div className="space-y-4">
                    {[
                      "Forfaits adaptés aux budgets scolaires",
                      "Planification éducative personnalisée",
                      "Support pédagogique inclus",
                      "Flexibilité pour événements spéciaux"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
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

        {/* Packages Section */}
        <MotionSection className="py-20 bg-accent-green text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nos forfaits spécialisés
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Des solutions pensées pour l'éducation, les organismes et les célébrations familiales
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {(packages || []).map((pkg, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                >
                  <AnimatedImage 
                    hoverEffect="lift" 
                    className={`h-full bg-white rounded-2xl shadow-lg border-2 ${
                      pkg.popular ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-gray-200'
                    } relative`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent-green text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Plus populaire
                      </div>
                    )}
                    
                    <div className="p-8 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-dark-charcoal mb-2">{pkg.title}</h3>
                        <div className="text-3xl font-bold text-accent-green mb-2">{pkg.price}</div>
                        <div className="text-gray-600">
                          {pkg.duration} • {pkg.people}
                        </div>
                      </div>

                      <div className="flex-grow">
                        <ul className="space-y-3">
                          {(pkg.features || []).map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="h-5 w-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8">
                        <Button 
                          className={`w-full py-3 text-lg font-semibold rounded-xl ${
                            pkg.popular 
                              ? 'bg-accent-green text-white hover:bg-accent-green/90' 
                              : 'bg-gray-100 text-dark-charcoal hover:bg-accent-green hover:text-white'
                          }`}
                        >
                          Choisir ce forfait
                        </Button>
                      </div>
                    </div>
                  </AnimatedImage>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* Testimonials Section */}
        <MotionSection className="py-20 bg-creative-purple text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Témoignages de nos partenaires
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
            </ScrollReveal>

            <StaggerContainer className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {(testimonials || []).map((testimonial, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                >
                  <AnimatedImage hoverEffect="lift" className="h-full">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-accent-green fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg text-gray-700 italic mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                          <span className="text-accent-green font-bold text-lg">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-dark-charcoal">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.position}</p>
                          <p className="text-sm text-accent-green font-medium">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedImage>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Final CTA Section */}
        <MotionSection className="py-20 bg-trust-blue text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Créons ensemble un événement mémorable!
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8 bg-white" />
              <p className="text-xl mb-8">
                Que ce soit pour éduquer, célébrer ou collecter des fonds, nous adaptons notre service 
                à vos besoins spécifiques et votre budget.
              </p>
            </ScrollReveal>
            
            <StaggerContainer className="flex flex-col sm:flex-row justify-center gap-4">
              <AnimatedImage hoverEffect="lift">
                <Link href="/contact">
                  <Button className="bg-white text-trust-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                    Demander un devis éducatif
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
                    Discuter de mon projet
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