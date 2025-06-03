import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: "💪",
      title: "Santé & Bien-être",
      description:
        "Nous croyons que la santé physique et mentale est la base d'une vie épanouie. Nos événements encouragent l'activité physique tout en créant des moments de joie et de connexion sociale.",
    },
    {
      icon: "🌱",
      title: "Durabilité",
      description:
        "Engagées envers l'environnement québécois, nous pratiquons le zéro déchet, utilisons des ingrédients locaux et compensons notre empreinte carbone par des plantations d'arbres au Québec.",
    },
    {
      icon: "🤝",
      title: "Communauté",
      description:
        "Nous croyons au pouvoir de rassembler les gens. Nos événements créent des liens authentiques entre les participants et renforcent le tissu social de nos communautés québécoises.",
    },
    {
      icon: "🌈",
      title: "Autonomisation & Inclusion",
      description:
        "Nous créons des expériences accessibles à tous, peu importe l'âge, les capacités physiques ou le background. Chaque personne mérite de vivre la joie de pédaler pour son smoothie.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* About Hero */}
        <section className="about-hero py-16 bg-gradient-to-br from-primary-red to-secondary-yellow text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="about-hero-content">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Voilà Vélo Fruité</h1>
                <p className="text-xl leading-relaxed opacity-90">
                  L'histoire de deux sœurs qui ont transformé leur passion pour la santé et la durabilité en expériences
                  inoubliables à travers le Québec.
                </p>
              </div>

              <div className="founders-image">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Leen et Micha, fondatrices de Voilà Vélo Fruité"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="who-we-are py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-dark-charcoal mb-12">Qui nous sommes</h2>

            <div className="founders-story grid lg:grid-cols-3 gap-12 items-start">
              <div className="story-text lg:col-span-2 space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Voilà Vélo Fruité est née de la vision de deux sœurs québécoises, Leen et Micha, qui partageaient une
                  passion commune pour la santé, l'environnement et la création d'expériences mémorables. Inspirées par
                  les valeurs québécoises de convivialité et de respect de la nature, elles ont découvert les vélos
                  smoothie lors d'un voyage en Europe et ont immédiatement vu le potentiel de cette innovation pour le
                  marché québécois.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Après avoir étudié le concept original de Bike n' Blend, elles ont adapté l'idée aux besoins
                  spécifiques du Québec : événements bilingues, ingrédients locaux, résistance aux conditions
                  climatiques variées et respect des valeurs environnementales chères aux Québécois. Leur mission était
                  claire : créer des moments de joie tout en promouvant un mode de vie sain et durable.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Aujourd'hui, Voilà Vélo Fruité dessert fièrement Montréal, Québec, Laval et Ottawa, apportant
                  sourires, énergie et smoothies délicieux à des milliers d'événements chaque année. Leur engagement
                  envers la communauté québécoise se reflète dans chaque pédalée, chaque smoothie et chaque sourire
                  qu'elles créent.
                </p>
              </div>

              <div className="founders-photos space-y-8">
                <div className="founder-card text-center">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Leen"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 shadow-lg"
                  />
                  <h4 className="text-xl font-semibold text-dark-charcoal mb-2">Leen</h4>
                  <p className="text-gray-600">
                    Co-fondatrice & Directrice des Opérations. Passionnée de nutrition et d'événementiel, Leen s'assure
                    que chaque expérience soit parfaite.
                  </p>
                </div>

                <div className="founder-card text-center">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Micha"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 shadow-lg"
                  />
                  <h4 className="text-xl font-semibold text-dark-charcoal mb-2">Micha</h4>
                  <p className="text-gray-600">
                    Co-fondatrice & Directrice du Développement Durable. Experte en environnement, Micha guide nos
                    initiatives écologiques et communautaires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="our-mission py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="mission-text">
                <h2 className="text-3xl font-bold text-dark-charcoal mb-6">Notre mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Transformer chaque événement en une célébration de la santé, de la durabilité et de la joie de vivre
                  québécoise. Nous croyons que les meilleurs souvenirs se créent quand les gens se rassemblent pour
                  partager des expériences authentiques qui nourrissent le corps, l'esprit et la communauté.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Notre engagement envers le Québec va au-delà du divertissement : nous contribuons activement à la
                  santé publique, à la protection de l'environnement et au renforcement des liens communautaires. Chaque
                  pédalée est un geste vers un avenir plus sain et plus durable pour nos enfants et nos communautés.
                </p>
              </div>

              <div className="mission-image">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Notre mission en action"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="our-values py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-dark-charcoal mb-12">Nos valeurs</h2>

            <div className="values-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="value-card text-center p-6 bg-light-gray rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="value-icon text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-dark-charcoal mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners py-16 bg-primary-red text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Nos partenaires de confiance</h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
              Nous sommes fiers de collaborer avec des organisations qui partagent nos valeurs de santé, durabilité et
              excellence au service de la communauté québécoise.
            </p>

            <div className="partners-grid grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {/* Partner logos would go here */}
              <div className="partner-logo bg-white/10 rounded-lg p-4 h-20 flex items-center justify-center">
                <span className="text-sm opacity-75">Moisson Montréal</span>
              </div>
              <div className="partner-logo bg-white/10 rounded-lg p-4 h-20 flex items-center justify-center">
                <span className="text-sm opacity-75">UNICEF Québec</span>
              </div>
              <div className="partner-logo bg-white/10 rounded-lg p-4 h-20 flex items-center justify-center">
                <span className="text-sm opacity-75">Arbres Canada</span>
              </div>
              <div className="partner-logo bg-white/10 rounded-lg p-4 h-20 flex items-center justify-center">
                <span className="text-sm opacity-75">Ville de Montréal</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
