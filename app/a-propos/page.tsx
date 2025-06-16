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
import { useI18n } from "@/lib/i18n"

export default function AboutPage() {
  const { t } = useI18n()
  
  // Valeurs exactes du document original
  const exactValues = [
    {
      icon: "🍏",
      title: t("about.values.healthWellness.title", "Santé & Bien-être"),
      description: t("about.values.healthWellness.description", "Nous croyons que nourrir son corps doit être à la fois délicieux et agréable.")
    },
    {
      icon: "🌱",
      title: t("about.values.sustainability.title", "Durabilité"),
      description: t("about.values.sustainability.description", "Nous sommes engagés à soutenir les producteurs locaux et à adopter des pratiques éco-responsables.")
    },
    {
      icon: "🤝",
      title: t("about.values.community.title", "Communauté"),
      description: t("about.values.community.description", "Nous créons du lien et de la joie en rassemblant les gens à travers nos expériences smoothies.")
    },
    {
      icon: "💪",
      title: t("about.values.empowerment.title", "Empowerment & Inclusion"),
      description: t("about.values.empowerment.description", "Nous inspirons les gens de tous âges et horizons à participer, créer et s'énergiser — car tout le monde mérite de faire partie du plaisir et du changement positif.")
    }
  ]

  const cities = ['Montréal', 'Québec', 'Laval', 'Ottawa']

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Company Section - Red Background */}
        <MotionSection className="py-24 bg-gradient-to-br from-primary-red via-pink-200 to-yellow-100">
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
                  <p className="mb-4 text-black">
                    Voilà Vélo Fruité est une entreprise d'événements pop-up qui promeut le cyclisme, la durabilité, la santé et le bonheur en utilisant nos vélos mélangeurs fabriqués au Québec.
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-4 text-black">
                    Nous sommes une équipe d'organisateurs d'événements passionnés qui croient aux pratiques éthiques et durables pour créer un monde plus heureux et plus sain — un événement smoothie à la fois! Nous utilisons des gobelets lavables ou biodégradables, compensons notre carbone, compostons ou recyclons tous les déchets produits et faisons des dons à UNICEF.
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-4 text-black">
                    Voilà Vélo Fruité est parfait pour engager et inspirer votre public grâce à un service traiteur divertissant, une exposition de marque ou la promotion de la durabilité et de la santé lors d'événements.
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="text-black">
                    L'entreprise a été fondée par Leen et Micha en 2020 avec l'aide de leur équipe dévouée. Elles dirigent maintenant des événements à Montréal, Québec, Laval et Ottawa.
                  </p>
                </MotionDiv>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Founder Section - Blue Background */}
        <MotionSection className="py-24 bg-gradient-to-br from-blue-300 via-blue-100 to-pink-100">
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
                  <p className="mb-6 text-black">
                    Nous sommes Leen et Micha — deux sœurs avec un grand amour pour la nature, la vie saine et le vélo. C'est ainsi que Voilà Vélo Fruité a vu le jour — un concept joyeux où les gens de tous âges peuvent monter sur un vélo smoothie, pédaler de tout leur cœur et créer leur propre boisson délicieuse, alimentée entièrement par leur énergie!
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-6 text-black">
                    Nous croyons qu'il faut répandre la positivité, promouvoir le bien-être et impliquer tout le monde — peu importe l'âge. Que ce soit lors d'un événement scolaire, d'un festival ou d'un rassemblement d'entreprise, Voilà Vélo apporte du plaisir, de la saveur et de bonnes vibrations à chaque occasion.
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

        {/* Notre Mission Section */}
        <section className="py-16 bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100 text-center mx-2 rounded-2xl shadow mb-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary-red">Notre Mission</h2>
            <p className="text-xl md:text-2xl mb-4 text-gray-700 font-medium">
              Notre mission est de rendre la vie saine amusante, simple et inspirante. En combinant mouvement, durabilité et nutrition, nous voulons éveiller les consciences tout en créant des souvenirs heureux et savoureux.
            </p>
            <p className="text-lg text-gray-600">
              Nous croyons qu'un coup de pédale suffit pour se reconnecter à son corps, à la nature et aux autres — et Voilà Vélo est là pour que cela arrive.
            </p>
          </div>
        </section>

        {/* Nos Valeurs - Exactement selon le document */}
        <section className="py-16 bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 mx-2 rounded-2xl shadow mb-8">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-primary-red text-center">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {exactValues.map((value, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                  className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 border-pink-200 hover:border-yellow-300 transition-all duration-300"
                >
                  <span className="text-5xl mb-4">{value.icon}</span>
                  <h3 className="text-xl font-bold text-primary-red mb-2 text-center">{value.title}</h3>
                  <p className="text-gray-700 text-center leading-relaxed">{value.description}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* "We do this by" Section */}
        <MotionSection className="py-24 bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-yellow mb-8">
                Nous le faisons en:
              </h2>
            </ScrollReveal>

            <StaggerContainer className="max-w-4xl mx-auto text-center space-y-6">
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
                  Adoptant des pratiques durables et éthiques en utilisant uniquement des gobelets lavables ou biodégradables (et en prenant position contre l'utilisation de pailles ou de couvercles), en compostant ou recyclant presque TOUS nos déchets y compris le plastique souple, en utilisant des compensations carbone pour neutraliser nos émissions et en faisant des dons à UNICEF et à des organisations locales;
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

        {/* Partners Section */}
        <MotionSection id="nos-partenaires" className="py-24 bg-gradient-to-br from-pink-100 via-yellow-100 to-white">
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
                  Nos partenaires spécialisent dans les événements alimentés par pédale en utilisant des vélos pour engager, éduquer et divertir les enfants et les adultes.
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

        {/* Service Areas Footer Section */}
        <MotionSection className="py-16 bg-gradient-to-br from-primary-red via-pink-400 to-yellow-200">
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