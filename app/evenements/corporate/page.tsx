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

export default function CorporateEventsPage() {
  const benefits = [
    {
      icon: <Users className="h-12 w-12 text-white" />,
      title: "Renforcement d'équipe",
      description: "Favorisez la collaboration et l'esprit d'équipe à travers une activité amusante et interactive qui rassemble naturellement vos employés.",
      color: "bg-primary-red"
    },
    {
      icon: <Heart className="h-12 w-12 text-white" />,
      title: "Promotion du bien-être",
      description: "Encouragez un mode de vie sain et actif auprès de vos employés tout en offrant une pause énergisante dans leur journée de travail.",
      color: "bg-secondary-yellow"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-white" />,
      title: "Productivité améliorée",
      description: "Des recherches montrent qu'un employé en bonne santé est 5,81 fois plus productif et génère un ROI positif pour l'entreprise.",
      color: "bg-accent-green"
    },
    {
      icon: <Smile className="h-12 w-12 text-white" />,
      title: "Expérience mémorable",
      description: "Créez des souvenirs positifs associés à votre marque et à votre culture d'entreprise qui renforceront l'engagement des employés.",
      color: "bg-trust-blue"
    },
  ]

  const packages = [
    {
      title: "Pop Solo Corporate",
      duration: "1.5-2.5 heures",
      people: "20-40 personnes",
      price: "À partir de 649$",
      features: [
        "1 vélo mélangeur pour adultes",
        "50-75 smoothies énergisants",
        "Animation professionnelle",
        "Installation en entreprise",
        "Nettoyage inclus"
      ],
      popular: false
    },
    {
      title: "Ready Set Blend Team",
      duration: "2-3 heures",
      people: "30-60 personnes", 
      price: "À partir de 799$",
      features: [
        "2 vélos avec moniteurs de vitesse",
        "100-150 smoothies de compétition",
        "Classement en temps réel",
        "Animateur énergique",
        "Prix pour les gagnants",
        "Personnalisation d'entreprise"
      ],
      popular: true
    },
    {
      title: "Double Fun Corporate",
      duration: "3-4 heures",
      people: "50-100 personnes",
      price: "À partir de 999$",
      features: [
        "2 vélos mélangeurs premium",
        "200-300 smoothies frais",
        "Installation complète",
        "Équipe d'animation",
        "Branding personnalisé",
        "Service traiteur smoothies"
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      quote: "Nos employés ont adoré l'expérience des vélos à smoothie lors de notre journée bien-être. C'était à la fois amusant, sain et parfaitement aligné avec nos valeurs d'entreprise.",
      author: "Marie Dubois",
      position: "Directrice RH, Entreprise XYZ",
      company: "Tech Montréal",
      rating: 5,
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "L'équipe de Voilà Vélo a apporté une énergie incroyable à notre événement corporatif. C'était exactement ce qu'il nous fallait pour dynamiser notre journée et renforcer la cohésion d'équipe!",
      author: "Jean Tremblay",
      position: "Responsable événementiel, ABC Inc.",
      company: "Consulting Québec",
      rating: 5,
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "Le retour sur investissement a été immédiat. Nos employés parlent encore de cette activité 6 mois plus tard. Nous planifions déjà notre prochain événement avec Voilà Vélo!",
      author: "Sophie Lavoie",
      position: "VP Ressources Humaines",
      company: "Innovation Labs",
      rating: 5,
      image: "/images/testimonial-3.jpg"
    }
  ]

  const stats = [
    { number: "5.81x", label: "ROI sur le bien-être employés" },
    { number: "95%", label: "Taux de satisfaction" },
    { number: "200+", label: "Entreprises satisfaites" },
    { number: "30 sec", label: "Pour faire un smoothie" }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <MotionSection className="corporate-hero relative pt-32 pb-20 bg-gradient-to-br from-primary-red/90 to-secondary-yellow/90">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/corporate-team-hero.jpg")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-red/80 to-secondary-yellow/80"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <div className="flex items-center text-sm mb-4 opacity-90">
                <Link href="/evenements" className="hover:underline">
                  Événements
                </Link>
                <span className="mx-2">/</span>
                <span>Corporate</span>
              </div>
              
              <TextReveal>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Stimulez le bien-être des employés et dynamisez votre lieu de travail!
                </h1>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mb-8 bg-white" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl">
                  Vous cherchez une façon amusante, saine et mémorable d'engager votre équipe? 
                  Notre installation de vélos à smoothie apporte du plaisir sain directement dans 
                  votre bureau, créant une pause unique que vos employés adoreront.
                </p>
              </ScrollReveal>
              
              <StaggerContainer className="flex flex-col sm:flex-row gap-4">
                <AnimatedImage hoverEffect="lift">
                  <Button className="bg-white text-primary-red hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                    Demander un devis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </AnimatedImage>
                
                <AnimatedImage hoverEffect="lift">
                  <Link href="/forfaits/ready-set-blend">
                    <Button 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-primary-red px-8 py-4 text-lg font-semibold rounded-xl"
                    >
                      Voir forfait Team-Building
                    </Button>
                  </Link>
                </AnimatedImage>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Stats Section */}
        <MotionSection className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-red mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">
                    {stat.label}
                  </div>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Benefits Section */}
        <MotionSection className="py-20 bg-light-gray">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
                Pourquoi choisir Voilà Vélo pour votre événement d'entreprise?
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Un employé en bonne santé est non seulement plus heureux, mais aussi plus productif — 
                et quoi de mieux pour promouvoir le bien-être qu'un smoothie qu'ils préparent eux-mêmes?
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

        {/* Main Content Section with alternating layout */}
        <MotionSection className="py-20 bg-primary-red text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <AnimatedImage hoverEffect="scale" className="lg:col-span-3">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/corporate-smoothie-bikes.jpg" 
                    alt="Événement corporate avec vélos à smoothie" 
                    className="w-full h-auto"
                  />
                </div>
              </AnimatedImage>
              
              <StaggerContainer className="lg:col-span-2">
                <MotionDiv variant="fadeUp">
                  <div className="flex items-center mb-6">
                    <Building className="h-12 w-12 mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold">
                      L'expérience corporate parfaite
                    </h2>
                  </div>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-6 leading-relaxed opacity-90">
                    Que votre équipe revienne au bureau ou ait simplement besoin d'un coup de boost, 
                    notre station de smoothies à pédales est un excellent moyen de promouvoir l'activité physique, 
                    nourrir le corps et susciter des conversations.
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <div className="space-y-4">
                    {[
                      "Installation directement dans vos locaux",
                      "Aucune électricité nécessaire - 100% énergie humaine",
                      "Activité inclusive pour tous les âges et capacités",
                      "Personnalisation possible avec votre branding",
                      "Nettoyage et désinstallation inclus"
                    ].map((feature, index) => (
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
                        Planifier mon événement
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </AnimatedImage>
                  </div>
                </MotionDiv>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Packages Section */}
        <MotionSection className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
                Forfaits Corporate
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Choisissez le forfait qui correspond le mieux à la taille de votre équipe et à vos objectifs
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                >
                  <AnimatedImage 
                    hoverEffect="lift" 
                    className={`h-full bg-white rounded-2xl shadow-lg border-2 ${
                      pkg.popular ? 'border-primary-red ring-2 ring-primary-red/20' : 'border-gray-200'
                    } relative`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-red text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Plus populaire
                      </div>
                    )}
                    
                    <div className="p-8 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-dark-charcoal mb-2">{pkg.title}</h3>
                        <div className="text-3xl font-bold text-primary-red mb-2">{pkg.price}</div>
                        <div className="text-gray-600">
                          {pkg.duration} • {pkg.people}
                        </div>
                      </div>

                      <div className="flex-grow">
                        <ul className="space-y-3">
                          {pkg.features.map((feature, idx) => (
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
                              ? 'bg-primary-red text-white hover:bg-primary-red/90' 
                              : 'bg-gray-100 text-dark-charcoal hover:bg-primary-red hover:text-white'
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
        <MotionSection className="py-20 bg-secondary-yellow">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
                Ce que nos clients corporate disent
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
            </ScrollReveal>

            <StaggerContainer className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                >
                  <AnimatedImage hoverEffect="lift" className="h-full">
                    <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-secondary-yellow fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg text-gray-700 italic mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                          <span className="text-primary-red font-bold text-lg">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-dark-charcoal">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.position}</p>
                          <p className="text-sm text-primary-red font-medium">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedImage>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* ROI Section */}
        <MotionSection className="py-20 bg-accent-green text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <StaggerContainer>
                <MotionDiv variant="fadeUp">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Un investissement qui rapporte
                  </h2>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-6 leading-relaxed opacity-90">
                    Les recherches australiennes sur le bien-être en entreprise montrent un retour sur investissement 
                    de 5,81$ pour chaque dollar investi dans le bien-être des employés.
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <div className="space-y-4">
                    {[
                      "Réduction de l'absentéisme",
                      "Amélioration de la rétention du personnel", 
                      "Augmentation de la productivité",
                      "Renforcement de la culture d'entreprise",
                      "Amélioration de l'image employeur"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span className="text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </MotionDiv>
              </StaggerContainer>
              
              <AnimatedImage hoverEffect="scale">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-4">5.81x</div>
                    <div className="text-xl mb-6">Retour sur investissement</div>
                    <div className="text-lg opacity-90">
                      Pour chaque dollar investi dans le bien-être des employés
                    </div>
                  </div>
                </div>
              </AnimatedImage>
            </div>
          </div>
        </MotionSection>

        {/* Final CTA Section */}
        <MotionSection className="py-20 bg-trust-blue text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à dynamiser votre prochain événement d'entreprise?
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8 bg-white" />
              <p className="text-xl mb-8">
                Contactez-nous aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé. 
                Nos experts vous aideront à créer l'événement corporate parfait.
              </p>
            </ScrollReveal>
            
            <StaggerContainer className="flex flex-col sm:flex-row justify-center gap-4">
              <AnimatedImage hoverEffect="lift">
                <Link href="/contact">
                  <Button className="bg-white text-trust-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                    Contactez-nous
                    <Coffee className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </AnimatedImage>
              
              <AnimatedImage hoverEffect="lift">
                <Link href="/comment-ca-marche/build-your-event">
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-trust-blue px-8 py-4 text-lg font-semibold rounded-xl"
                  >
                    Créer votre événement
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