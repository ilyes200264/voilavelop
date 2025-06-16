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

  // Use cities from translation file or define them here for proper internationalization
  const cities = t('company.cities', ['Montréal', 'Québec', 'Laval', 'Ottawa'])

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
                  alt={t('company.title')}
                  width={1200}
                  height={940}
                  className="rounded-lg shadow-lg w-full"
                />
              </ImageMaskReveal>
              
              <StaggerContainer className="text-white pl-0 lg:pl-12">
                <MotionDiv variant="fadeUp">
                  <h2 className="text-4xl font-bold text-black mb-4">
                    {t('company.title')}
                  </h2>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <h5 className="text-2xl text-secondary-yellow mb-6">
                    {t('company.subtitle')}
                  </h5>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-4 text-black">
                    {t('company.description1')}
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-4 text-black">
                    {t('company.description2')}
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-4 text-black">
                    {t('company.description3')}
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="text-black">
                    {t('company.description4')}
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
                    {t('founders.title')}
                  </h2>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <h5 className="text-2xl text-primary-red mb-6">
                    {t('founders.subtitle')}
                  </h5>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-6 text-black">
                    {t('founders.description')}
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <AnimatedImage hoverEffect="lift">
                    <Button className="bg-white text-primary-red hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                      {t('founders.button')}
                    </Button>
                  </AnimatedImage>
                </MotionDiv>
              </StaggerContainer>
              
              <ImageMaskReveal className="order-1 lg:order-2 rounded-lg">
                <Image
                  src="/images/team-1.jpg"
                  alt={t('founders.subtitle') + ' - ' + t('founders.title')}
                  width={700}
                  height={644}
                  className="rounded-lg shadow-lg w-full"
                />
              </ImageMaskReveal>
            </div>
          </div>
        </MotionSection>

        {/* Mission Section */}
        <section className="py-16 bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100 text-center mx-2 rounded-2xl shadow mb-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary-red">{t('mission.title')}</h2>
            <p className="text-xl md:text-2xl mb-4 text-gray-700 font-medium">
              {t('mission.description')}
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 mx-2 rounded-2xl shadow mb-8">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-primary-red text-center">{t('values.title')}</h2>
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

        {/* How We Do It Section */}
        <MotionSection className="py-24 bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-yellow mb-8">
                {t('howWeDo.title')}
              </h2>
            </ScrollReveal>

            <StaggerContainer className="max-w-4xl mx-auto text-center space-y-6">
              {t<string[]>('howWeDo.points', []).map((point, index) => (
                <MotionDiv key={index} variant="fadeUp">
                  <p className={`${index === 0 || index === 3 ? 'text-2xl font-medium text-dark-charcoal' : 'text-lg text-gray-700'} leading-relaxed`}>
                    {point}
                  </p>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Partners Section */}
        <MotionSection id="nos-partenaires" className="py-24 bg-gradient-to-br from-pink-100 via-yellow-100 to-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-yellow mb-8">
                {t('partners.title')}
              </h2>
            </ScrollReveal>

            <StaggerContainer className="max-w-2xl mx-auto text-center">
              <AnimatedImage hoverEffect="scale" className="mb-12">
                <Image
                  src="/placeholder.svg?height=131&width=250"
                  alt={t('partners.title')}
                  width={250}
                  height={131}
                  className="mx-auto mb-6"
                />
              </AnimatedImage>
              
              <MotionDiv variant="fadeUp">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {t('partners.description')}
                </p>
              </MotionDiv>
              
              <MotionDiv variant="fadeUp">
                <AnimatedImage hoverEffect="lift">
                  <Button className="bg-primary-red text-white hover:bg-primary-red/90 px-8 py-3 text-lg font-semibold">
                    {t('partners.button')}
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
                    alt={t('company.title')}
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