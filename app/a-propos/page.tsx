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
  
  // Add fallback empty array to prevent "map is not a function" error
  const values = t<any[]>('mission.values', [])

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
                  {t('hero.title')}
                </h1>
              </TextReveal>
              
              <RedLineSeparator className="mb-8" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-2xl italic text-gray-700 mb-8 leading-relaxed">
                  {t('hero.quote')}
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
                <p className="text-lg text-gray-600">{t('hero.founders')}</p>
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
                    {t('company.title')}
                  </h2>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <h5 className="text-2xl text-secondary-yellow mb-6">
                    {t('company.subtitle')}
                  </h5>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-4">
                    {t('company.description1')}
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-4">
                    {t('company.description2')}
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-4">
                    {t('company.description3')}
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p>
                    {t('company.description4')}
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
                    {t('founders.title')}
                  </h2>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <h5 className="text-2xl text-primary-red mb-6">
                    {t('founders.subtitle')}
                  </h5>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-6">
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
                {t('mission.title')}
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value: { icon: string; title: string; description: string }, index: number) => (
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
                {t('howWeDo.title')}
              </h2>
            </ScrollReveal>

            <StaggerContainer className="max-w-4xl mx-auto text-center space-y-8">
              {t<string[]>('howWeDo.points', []).map((point: string, index: number) => (
                <MotionDiv key={index} variant="fadeUp" custom={index}>
                  <p className={index === 0 || index === 3 ? "text-2xl font-medium text-dark-charcoal leading-relaxed" : "text-lg text-gray-700"}>
                    {point}
                  </p>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Partners Section - White Background */}
        <MotionSection id="nos-partenaires" className="py-24 bg-white">
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
                  alt="Logo Partenaire"
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