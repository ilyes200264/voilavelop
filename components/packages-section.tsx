"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal,
  RedLineSeparator
} from "@/components/motion/motion-components"

export function PackagesSection() {
  const packages = [
    {
      id: "la-petite-koki",
      title: "La petite Koki",
      tagline: "Le favori de tous les temps des enfants!",
      description:
        "Parfait pour les anniversaires, les graduations de garderie ou les festivals familiaux, ce forfait apporte plaisir, rire et smoothies savoureux à toute célébration!",
      includes: [
        "1 vélo mélangeur adapté aux enfants (5-10 ans)",
        "25-50 smoothies délicieux",
        "1-2 heures de divertissement énergique",
        "Smoothies frais et colorés préparés sur place",
        "Animation vivante avec musique et ambiance festive",
        "Personnalisation possible avec votre marque",
      ],
      options: [
        { label: "Option 1:", details: "25 smoothies + 1 heure" },
        { label: "Option 2:", details: "50 smoothies + 2 heures" },
      ],
      colorClass: "orange-package",
      borderColor: "border-t-primary-red",
    },
    {
      id: "pop-solo",
      title: "Pop Solo",
      tagline: "Un succès garanti avec les ados, adultes et familles!",
      description:
        "Parfait pour les événements scolaires, les fêtes de bureau ou tout rassemblement festif axé sur la santé et le plaisir!",
      includes: [
        "1 vélo mélangeur adapté aux adultes",
        "50-75 smoothies frais préparés sur place",
        "1.5-2.5 heures de plaisir énergique",
        "Atmosphère festive avec musique et bonnes vibrations",
        "Personnalisation possible avec votre marque",
      ],
      options: [
        { label: "Option 1:", details: "50 smoothies + 1.5 heures" },
        { label: "Option 2:", details: "75 smoothies + 2.5 heures" },
      ],
      colorClass: "yellow-package",
      borderColor: "border-t-secondary-yellow",
    },
    {
      id: "double-fun",
      title: "Double Fun",
      tagline: "Deux fois plus de vélos = deux fois plus d'énergie!",
      description:
        "Parfait pour les festivals communautaires, les activations de marque, les collectes de fonds, les fêtes corporatives, les portes ouvertes et plus encore!",
      includes: [
        "2 vélos mélangeurs pour adultes",
        "100-300 smoothies préparés sur place",
        "2-4 heures de divertissement",
        "Musique et ambiance de foule bourdonnante",
        "Personnalisation avec votre marque, ballons et décorations",
      ],
      options: [
        { label: "Option 1:", details: "100 smoothies + 2 heures" },
        { label: "Option 2:", details: "200 smoothies + 3 heures" },
        { label: "Option 3:", details: "300 smoothies + 4 heures" },
      ],
      colorClass: "blue-package",
      borderColor: "border-t-trust-blue",
    },
    {
      id: "ready-set-blend",
      title: "Ready, Set, Blend",
      tagline: "Team-building avec une touche de santé et d'énergie!",
      description: 
        "Parfait pour les soirées d'entreprise, les événements festifs, les conférences, les défis de bien-être et les collectes de fonds amusantes!",
      includes: [
        "2 vélos mélangeurs pour adultes",
        "Moniteurs de vitesse + tableau des scores en temps réel",
        "Animateur énergique pour encourager la foule",
        "Smoothies préparés avec votre propre énergie",
        "Une compétition amicale avec des récompenses délicieuses",
      ],
      options: [
        { label: "Option 1:", details: "100 smoothies + 2 heures de compétition" },
        { label: "Option 2:", details: "200 smoothies + 3 heures de divertissement" },
      ],
      colorClass: "green-package",
      borderColor: "border-t-accent-green",
    },
    {
      id: "defi-parent-enfant",
      title: "Défi Parent-Enfant",
      tagline: "Un défi familial qu'ils n'oublieront pas!",
      description:
        "Parfait pour les écoles, les festivals, les fêtes familiales ou les événements de quartier.",
      includes: [
        "1 vélo pour enfant + 1 vélo pour adulte",
        "Moniteurs de vitesse + tableau des scores en direct",
        "Animateur dynamique & ambiance festive",
        "Médaille pour l'équipe gagnante",
        "Moments de complicité, rires et smoothies délicieux en un seul événement!",
      ],
      options: [
        { label: "Option 1:", details: "50 smoothies + 2 heures de compétition" },
        { label: "Option 2:", details: "100 smoothies + 3 heures d'énergie et de plaisir" },
      ],
      colorClass: "purple-package",
      borderColor: "border-t-purple-500",
    },
    {
      id: "la-smoothie-parade",
      title: "La Smoothie Parade",
      tagline: "Parfait pour les grands groupes et pour encore plus de plaisir!",
      description:
        "Ce forfait festif comprend 2 grands vélos mélangeurs et 1 petit (pour les enfants de 6 ans et plus), parfait pour les événements qui appellent à l'excitation, aux couleurs et à la communauté.",
      includes: [
        "3 vélos mélangeurs (2 grands + 1 petit)",
        "200 smoothies aux fruits frais",
        "Panneaux de menu",
        "Table d'installation",
        "Idéal pour les activations d'entreprise, festivals, événements scolaires et plus",
      ],
      options: [
        { label: "Option unique:", details: "200 smoothies + 3 heures d'animation" },
      ],
      colorClass: "orange-package",
      borderColor: "border-t-orange-400",
    },
    {
      id: "signature",
      title: "Forfait Signature",
      tagline: "Ajoutez votre saveur au plaisir!",
      description:
        "Rendez votre événement unique avec notre forfait de marque événementielle Signature. Que ce soit un événement d'entreprise, une activation de marque ou une célébration personnelle, nous offrons des options de personnalisation pour mettre en valeur votre identité - à la manière des smoothies!",
      includes: [
        "Gobelets personnalisés à votre marque",
        "Housses de roues imprimées double face",
        "Panneaux sandwich à cadre A",
        "Décorations de table à votre style",
        "Parfait pour tout type d'événement, du corporatif aux fêtes privées",
      ],
      options: [
        { label: "Option signature:", details: "Personnalisation complète de l'expérience" },
      ],
      colorClass: "yellow-package",
      borderColor: "border-t-secondary-yellow",
    },
  ]

  return (
    <MotionSection className="packages-section bg-light-gray py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="section-header text-center mb-12">
          <TextReveal>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-dark-charcoal">Nos forfaits favoris</h2>
          </TextReveal>
          
          <RedLineSeparator className="w-24 mx-auto my-4" />
          
          <ScrollReveal delay={0.3}>
            <p className="section-subtitle text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Des options adaptées à tous types d'événements, personnalisables selon vos besoins
            </p>
          </ScrollReveal>
        </ScrollReveal>

        {/* Featured Packages Grid - Show first 3 packages */}
        <StaggerContainer className="packages-grid grid lg:grid-cols-3 gap-8 mb-12">
          {packages.slice(0, 3).map((pkg, index) => (
            <MotionDiv
              key={pkg.id}
              variant="fadeUp"
              custom={index}
              className={`package-card bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ${pkg.borderColor} border-t-4`}
            >
              <AnimatedImage hoverEffect="lift" className="h-full">
                <div className="package-header text-center mb-6">
                  <div className="package-icon mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl">🚴</span>
                    </div>
                  </div>
                  <h4 className="package-title text-xl font-bold text-dark-charcoal mb-2">{pkg.title}</h4>
                </div>

                <div className="package-description mb-6">
                  <p className="package-tagline text-primary-red font-semibold mb-3">{pkg.tagline}</p>
                  <p className="package-intro text-sm text-gray-600 leading-relaxed">{pkg.description}</p>
                </div>

                <div className="package-includes mb-6">
                  <h5 className="includes-title font-semibold text-dark-charcoal mb-3">Le forfait inclut:</h5>
                  <ul className="includes-list space-y-2">
                    {pkg.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm">
                        <span className="text-accent-green mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="package-options mb-6">
                  {pkg.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="option flex justify-between items-center py-2 text-sm">
                      <span className="option-label font-medium text-dark-charcoal">{option.label}</span>
                      <span className="option-details text-gray-600">{option.details}</span>
                    </div>
                  ))}
                </div>

                <div className="package-cta text-center">
                  <AnimatedImage hoverEffect="scale">
                    <Button variant="outline" className="w-full">
                      En savoir plus
                    </Button>
                  </AnimatedImage>
                </div>
              </AnimatedImage>
            </MotionDiv>
          ))}
        </StaggerContainer>

        {/* Section Footer */}
        <StaggerContainer className="packages-footer text-center space-y-6">
          <MotionDiv variant="fadeUp">
            <p className="packages-tagline text-lg text-dark-charcoal max-w-3xl mx-auto">
              <em>
                <span className="text-primary-red font-semibold">Le choix vous appartient –</span> choisissez parmi notre
                gamme complète de forfaits ou contactez-nous pour créer le vôtre.
              </em>
            </p>
          </MotionDiv>

          <MotionDiv variant="fadeUp">
            <AnimatedImage hoverEffect="lift" className="packages-cta">
              <Link href="/forfaits/">
                <Button className="btn-primary bg-primary-red text-white px-8 py-3">Voir tous nos forfaits</Button>
              </Link>
            </AnimatedImage>
          </MotionDiv>
        </StaggerContainer>
      </div>
    </MotionSection>
  )
}
