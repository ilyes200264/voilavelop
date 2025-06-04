"use client";

import { IconMapper } from "@/components/ui/icon-mapper"
import { useI18n } from "@/lib/i18n"

export function WhyChooseSection() {
  const { t } = useI18n()
  const reasons = [
    {
      iconName: "bike",
      title: "Écologique et sans énergie",
      description: "Aucune électricité nécessaire! Les smoothies sont mélangés par la puissance de pédalage des participants — une activité zéro émission, 100% alimentée par l'humain qui rend la durabilité excitante."
    },
    {
      iconName: "leaf",
      title: "Approche pratique de la durabilité",
      description: "Les participants deviennent créateurs, pas seulement consommateurs. C'est une façon unique de comprendre l'impact de nos actions, tout en embrassant l'effort physique et la conscience environnementale."
    },
    {
      iconName: "heart",
      title: "Sain, savoureux et joyeux",
      description: "Nos smoothies sont faits sur place avec des ingrédients frais et colorés et une grande dose de plaisir — combinant nutrition et mouvement pour tous les âges."
    },
    {
      iconName: "usersRound",
      title: "Parfait pour tous types d'événements",
      description: "Des écoles et festivals aux événements corporatifs ou communautaires — notre atelier s'adapte à votre foule. C'est inclusif, interactif et inoubliable."
    },
    {
      iconName: "recycle",
      title: "Nous pédalons pour nos valeurs",
      description: "Nous utilisons des matériaux réutilisables ou compostables, réduisons les déchets et promouvons la consommation consciente — le tout dans une atmosphère vivante et accueillante."
    }
  ]

  return (
    <section className="why-choose-section py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-header text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
            {t('whyChoose.title')}
          </h2>
          <div className="red-line-separator w-16 h-1 bg-primary-red mx-auto mb-8"></div>
          <p className="section-subtitle text-xl text-primary-red font-semibold mb-4">
            {t('whyChoose.subtitle')}
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Chez Voilà Vélo, nous croyons que l'apprentissage, le mouvement et le plaisir peuvent aller de pair. 
            Notre atelier Smoothie Vélo est plus qu'une simple activité — c'est une expérience qui inspire 
            des habitudes saines, un smoothie alimenté par pédalage à la fois.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="reasons-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="reason-card text-center p-6 bg-light-gray rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="reason-icon text-4xl mb-6">
                <IconMapper iconName={reason.iconName} className="h-14 w-14 mx-auto text-primary-red" />
              </div>
              <h3 className="reason-title text-xl font-bold text-dark-charcoal mb-4">{reason.title}</h3>
              <p className="reason-description text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="section-footer text-center">
          <p className="tagline text-2xl font-bold text-dark-charcoal mb-4">
            Voilà Vélo Fruité: <span className="text-primary-red">Mélangé par Vous, Alimenté par le Plaisir!</span>
          </p>
          <div className="emoji-line text-3xl">
            🌍💪🍹
          </div>
        </div>
      </div>
    </section>
  )
}