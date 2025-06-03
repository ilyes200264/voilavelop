import { IconMapper } from "@/components/ui/icon-mapper";

export function SustainabilitySection() {
  const sustainabilityFeatures = [
    {
      iconName: "noStraws",
      title: "Pailles\nNon merci!",
      description:
        "Nous n'utilisons pas de pailles ou de couvercles lors de nos événements et encourageons nos clients à faire de même",
    },
    {
      iconName: "recycle",
      title: "Zéro\nDéchet!",
      description:
        "Nous ne contribuons pas aux décharges lors de nos événements, recyclant et compostant tous nos déchets",
    },
    {
      iconName: "apple",
      title: "Lutte contre le\ngaspillage alimentaire!",
      description: "Nous donnons tous les ingrédients restants à des organismes de bienfaisance comme Moisson Montréal",
    },
    {
      iconName: "handsClapping",
      title: "Lutte contre\nles inégalités!",
      description:
        "Nous faisons des dons à UNICEF et à des organismes locaux, aidant les enfants et les jeunes chaque jour",
    },
    {
      iconName: "sprout",
      title: "Carbone\nNeutre!",
      description:
        "Tout le carbone produit par nos véhicules et notre papier est compensé par des plantations d'arbres au Québec",
    },
  ]

  return (
    <section className="sustainability-section relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="parallax-bg absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/images/velo-smoothie-3.jpg')`,
        }}
      />

      <div className="sustainability-overlay absolute inset-0 bg-accent-green/80" />

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="section-header text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-white">
              Nous intégrons la durabilité dans tout ce que nous faisons!!
            </h2>
          </div>

          {/* Sustainability Features Grid */}
          <div className="sustainability-grid grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <div
                key={index}
                className="sustainability-feature text-center bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="feature-icon text-4xl mb-4">
                  <IconMapper iconName={feature.iconName} className="h-10 w-10 mx-auto text-accent-green" />
                </div>
                <h3 className="feature-title text-lg font-bold text-dark-charcoal mb-4 whitespace-pre-line">
                  {feature.title}
                </h3>
                <p className="feature-description text-sm text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
