"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  MotionDiv, 
  MotionSection, 
  AnimatedImage, 
  StaggerContainer, 
  RedLineSeparator,
  ScrollReveal,
  TextReveal,
  ImageMaskReveal
} from "@/components/motion/motion-components"

export default function AboutPage() {
  const values = [
    {
      icon: "👁️",
      title: "Notre Vision",
      description: "Nous croyons aux pratiques éthiques et durables pour un monde plus heureux et plus sain que tous peuvent apprécier."
    },
    {
      icon: "🎯", 
      title: "Notre Mission",
      description: "Être la principale entreprise d'événements pop-up à vélo du Québec afin de pouvoir soutenir et faire des dons aux organisations internationales et locales qui partagent notre vision."
    },
    {
      icon: "⚖️",
      title: "Notre Éthique",
      description: "Nous plaçons la planète et nos gens avant le profit tout en offrant un service exceptionnel. Nous croyons en 'soyez le changement que vous voulez voir'."
    }
  ]

  const cities = ['Montréal', 'Québec', 'Laval', 'Ottawa']

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <TextReveal>
                <h1 className="text-5xl md:text-6xl font-bold text-dark-charcoal mb-6">
                  À Propos de Nous
                </h1>
              </TextReveal>
              
              <RedLineSeparator className="mb-8" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-2xl italic text-gray-700 mb-8 leading-relaxed">
                  "Nous engageons et inspirons les gens d'une manière amusante et saine!"
                </p>
              </ScrollReveal>
              
              <AnimatedImage hoverEffect="scale" className="mb-6">
                <Image
                  src="/images/founders.jpg"
                  alt="Leen et Micha, fondatrices de Voilà Vélo Fruité"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl mx-auto"
                />
              </AnimatedImage>
              
              <ScrollReveal delay={0.5}>
                <p className="text-lg text-gray-600">Leen et Micha</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Company Section - Red Background */}
        <MotionSection className="py-24 bg-primary-red">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ImageMaskReveal className="rounded-lg">
                <Image
                  src="/images/equipe-frooshy.jpg"
                  alt="Équipe Voilà Vélo Fruité"
                  width={1200}
                  height={940}
                  className="rounded-lg shadow-lg w-full"
                />
              </ImageMaskReveal>
              
              <StaggerContainer className="text-white pl-0 lg:pl-12">
                <MotionDiv variant="fadeUp">
                  <h2 className="text-4xl font-bold text-black mb-4">
                    Voilà Vélo Fruité
                  </h2>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <h5 className="text-2xl text-secondary-yellow mb-6">
                    Nous créons des événements innovants et durables
                  </h5>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-4">
                    Voilà Vélo Fruité est une entreprise d'événements pop-up qui promeut le cyclisme, la durabilité, 
                    la santé et le bonheur en utilisant nos vélos mélangeurs fabriqués au Québec.
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-4">
                    Nous sommes une équipe d'organisateurs d'événements passionnés qui croient aux pratiques éthiques 
                    et durables pour créer un monde plus heureux et plus sain — un événement smoothie à la fois! 
                    Nous utilisons des gobelets lavables ou biodégradables, compensons notre carbone, compostons 
                    ou recyclons tous les déchets produits et faisons des dons à UNICEF.
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-4">
                    Voilà Vélo Fruité est parfait pour engager et inspirer votre public grâce à un service traiteur 
                    divertissant, une exposition de marque ou la promotion de la durabilité et de la santé lors d'événements.
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p>
                    L'entreprise a été fondée par Leen et Micha en 2020 avec l'aide de leur équipe dévouée. 
                    Elles dirigent maintenant des événements à Montréal, Québec, Laval et Ottawa.
                  </p>
                </MotionDiv>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Founder Section - Blue Background */}
        <MotionSection className="py-24 bg-trust-blue">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <StaggerContainer className="text-white order-2 lg:order-1 pr-0 lg:pr-12">
                <MotionDiv variant="fadeUp">
                  <h2 className="text-4xl font-bold text-black mb-4">
                    Nos Fondatrices
                  </h2>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <h5 className="text-2xl text-primary-red mb-6">
                    Leen et Micha
                  </h5>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-6">
                    Nous sommes Leen et Micha — deux sœurs avec un grand amour pour la nature, la vie saine et le vélo. 
                    C'est ainsi que Voilà Vélo Fruité a vu le jour — un concept joyeux où les gens de tous âges peuvent 
                    monter sur un vélo smoothie, pédaler de tout leur cœur et créer leur propre boisson délicieuse, 
                    alimentée entièrement par leur énergie! Pour en savoir plus sur la façon dont nous avons commencé 
                    Voilà Vélo Fruité, consultez notre histoire.
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <AnimatedImage hoverEffect="lift">
                    <Button className="bg-white text-primary-red hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                      En savoir plus
                    </Button>
                  </AnimatedImage>
                </MotionDiv>
              </StaggerContainer>
              
              <ImageMaskReveal className="order-1 lg:order-2 rounded-lg">
                <Image
                  src="/images/team-1.jpg"
                  alt="Leen et Micha - Fondatrices de Voilà Vélo Fruité"
                  width={700}
                  height={644}
                  className="rounded-lg shadow-lg w-full"
                />
              </ImageMaskReveal>
            </div>
          </div>
        </MotionSection>

        {/* Mission Section - White Background */}
        <MotionSection id="notre-mission" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-yellow mb-8">
                Notre Mission
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <MotionDiv 
                  key={index} 
                  variant="fadeUp"
                  custom={index}
                  className="text-center"
                >
                  <AnimatedImage hoverEffect="rotate" className="text-6xl mb-6">
                    <div>{value.icon}</div>
                  </AnimatedImage>
                  
                  <h2 className="text-2xl font-bold text-primary-red mb-4">
                    {value.title}
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* "We do this by" Section - Light Gray Background */}
        <MotionSection className="py-24 bg-light-gray">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-yellow mb-8">
                Nous le faisons en:
              </h2>
            </ScrollReveal>

            <StaggerContainer className="max-w-4xl mx-auto text-center space-y-8">
              <MotionDiv variant="fadeUp">
                <p className="text-2xl font-medium text-dark-charcoal leading-relaxed">
                  Fournissant des activations durables professionnelles exceptionnelles;
                </p>
              </MotionDiv>
              
              <MotionDiv variant="fadeUp">
                <p className="text-lg text-gray-700">
                  Rendant la santé et le bien-être faciles et amusants pour tout groupe démographique;
                </p>
              </MotionDiv>
              
              <MotionDiv variant="fadeUp">
                <p className="text-lg text-gray-700">
                  Adoptant des pratiques durables et éthiques en utilisant uniquement des gobelets lavables 
                  ou biodégradables (et en prenant position contre l'utilisation de pailles ou de couvercles), 
                  en compostant ou recyclant presque TOUS nos déchets y compris le plastique souple, 
                  en utilisant des compensations carbone pour neutraliser nos émissions et en faisant des dons 
                  à UNICEF et à des organisations locales;
                </p>
              </MotionDiv>
              
              <MotionDiv variant="fadeUp">
                <p className="text-2xl font-medium text-dark-charcoal leading-relaxed">
                  Partenariat avec des entreprises qui partagent une mission similaire.
                </p>
              </MotionDiv>
              
              <MotionDiv variant="fadeUp">
                <p className="text-lg text-gray-700">
                  Ainsi, nous soutenir, c'est soutenir notre merveilleuse planète.
                </p>
              </MotionDiv>
              
              <MotionDiv variant="fadeUp">
                <p className="text-lg text-gray-700">
                  Nous construisons également chaque vélo mélangeur à la main au Québec.
                </p>
              </MotionDiv>
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Partners Section - White Background */}
        <MotionSection id="nos-partenaires" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-yellow mb-8">
                Nos Partenaires
              </h2>
            </ScrollReveal>

            <StaggerContainer className="max-w-2xl mx-auto text-center">
              <AnimatedImage hoverEffect="scale" className="mb-12">
                <Image
                  src="/placeholder.svg?height=131&width=250"
                  alt="Logo Partenaire"
                  width={250}
                  height={131}
                  className="mx-auto mb-6"
                />
              </AnimatedImage>
              
              <MotionDiv variant="fadeUp">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Nos partenaires spécialisent dans les événements alimentés par pédale en utilisant des vélos 
                  pour engager, éduquer et divertir les enfants et les adultes.
                </p>
              </MotionDiv>
              
              <MotionDiv variant="fadeUp">
                <AnimatedImage hoverEffect="lift">
                  <Button className="bg-primary-red text-white hover:bg-primary-red/90 px-8 py-3 text-lg font-semibold">
                    En savoir plus
                  </Button>
                </AnimatedImage>
              </MotionDiv>
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Service Areas Footer Section - Red Background */}
        <MotionSection className="py-16 bg-primary-red">
          <div className="container mx-auto px-4">
            <StaggerContainer className="text-center">
              <AnimatedImage hoverEffect="scale" className="mb-16">
                <Link href="/">
                  <Image
                    src="/placeholder.svg?height=240&width=275"
                    alt="Logo Voilà Vélo Fruité"
                    width={275}
                    height={240}
                    className="mx-auto"
                  />
                </Link>
              </AnimatedImage>
              
              <StaggerContainer fast className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                {cities.map((city, index) => (
                  <MotionDiv 
                    key={city}
                    variant="fadeUp"
                    custom={index}
                  >
                    <AnimatedImage hoverEffect="bounce">
                      <h3 className="text-3xl font-bold cursor-pointer">{city}</h3>
                    </AnimatedImage>
                  </MotionDiv>
                ))}
              </StaggerContainer>
            </StaggerContainer>
          </div>
        </MotionSection>
      </main>

      <Footer />
    </div>
  )
}