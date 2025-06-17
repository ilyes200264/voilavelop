"use client"

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

export function WhyChooseWorkshopSection() {
  const { t } = useI18n()
  
  const features = [
    {
      icon: "🚲",
      title: t('home.whyChooseWorkshop.features.ecoFriendly.title', "Écologique et sans énergie"),
      description: t('home.whyChooseWorkshop.features.ecoFriendly.description', "Aucune électricité nécessaire! Les smoothies sont mélangés par la puissance de pédalage des participants — une activité zéro émission, 100% alimentée par l'humain qui rend la durabilité excitante.")
    },
    {
      icon: "🌱",
      title: t('home.whyChooseWorkshop.features.sustainability.title', "Une approche pratique de la durabilité"),
      description: t('home.whyChooseWorkshop.features.sustainability.description', "Les participants deviennent créateurs, pas seulement consommateurs. C'est une façon unique de comprendre l'impact de nos actions, tout en embrassant l'effort physique et la conscience environnementale.")
    },
    {
      icon: "🍓",
      title: t('home.whyChooseWorkshop.features.healthy.title', "Sain, savoureux et joyeux"),
      description: t('home.whyChooseWorkshop.features.healthy.description', "Nos smoothies sont faits sur place avec des ingrédients frais et colorés et une grande dose de plaisir — combinant nutrition et mouvement pour tous les âges.")
    },
    {
      icon: "🎉",
      title: t('home.whyChooseWorkshop.features.events.title', "Parfait pour tous types d'événements"),
      description: t('home.whyChooseWorkshop.features.events.description', "Des écoles et festivals aux événements corporatifs ou communautaires — notre atelier s'adapte à votre foule. C'est inclusif, interactif et inoubliable.")
    },
    {
      icon: "💚",
      title: t('home.whyChooseWorkshop.features.values.title', "Nous pédalons pour nos valeurs"),
      description: t('home.whyChooseWorkshop.features.values.description', "Nous utilisons des matériaux réutilisables ou compostables, réduisons les déchets et promouvons la consommation consciente — le tout dans une atmosphère vivante et accueillante.")
    }
  ]

  return (
    <MotionSection className="why-choose-workshop-section py-20 bg-trust-blue text-white relative overflow-hidden">
      {/* Decorative background elements */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('home.whyChooseWorkshop.title', "Pourquoi choisir notre atelier Voilà Vélo?")}
            </h2>
          </TextReveal>
          
          <RedLineSeparator className="w-24 mx-auto mb-8 bg-trust-blue" />
          
          <ScrollReveal delay={0.3}>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              {t('home.whyChooseWorkshop.subtitle', "Parce que c'est amusant, durable et inoubliable!")}
            </h3>
          </ScrollReveal>
          
          <ScrollReveal delay={0.5}>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {t('home.whyChooseWorkshop.description', "Chez Voilà Vélo, nous croyons que l'apprentissage, le mouvement et le plaisir peuvent aller de pair. Notre atelier Smoothie Vélo est plus qu'une simple activité — c'est une expérience qui inspire des habitudes saines, un smoothie alimenté par pédalage à la fois.")}
            </p>
          </ScrollReveal>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <MotionDiv
              key={index}
              variant="fadeUp"
              custom={index}
              className="feature-card"
            >
              <AnimatedImage 
                hoverEffect="lift" 
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-white hover:border-white hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="text-center">
                  <AnimatedImage hoverEffect="bounce" className="text-6xl mb-6 block text-trust-blue">
                    <span>{feature.icon}</span>
                  </AnimatedImage>
                  
                  <h4 className="text-xl font-bold text-dark-charcoal mb-4 leading-tight">
                    {feature.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedImage>
            </MotionDiv>
          ))}
        </StaggerContainer>

        {/* Bottom Tagline */}
        <ScrollReveal className="text-center">
          <div className="bg-gradient-to-r from-trust-blue to-accent-green rounded-2xl p-8 text-white shadow-xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {t('home.whyChooseWorkshop.tagline.part1', "Voilà Vélo Fruité:")}
              </h3>
              <p className="text-xl md:text-2xl font-medium">
                {t('home.whyChooseWorkshop.tagline.part2', "Mélangé par Vous, Alimenté par le Plaisir!")} 
                <span className="ml-4 text-2xl">🌍💪🍹</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </MotionSection>
  )
}