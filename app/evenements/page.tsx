import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function EventsPage() {
  const eventCategories = [
    {
      id: "corporate",
      title: "Corporate",
      description: "Stimulez le bien-être des employés et dynamisez votre lieu de travail!",
      image: "/images/corporate-events.jpg",
      details: "Vous cherchez une façon amusante, saine et mémorable d'engager votre équipe directement à votre bureau? Notre installation de vélos à smoothie apporte du plaisir sain directement dans le hall ou l'espace commun de votre lieu de travail, créant une pause unique que vos employés adoreront.",
      link: "/evenements/corporate",
    },
    {
      id: "ouvertures-et-activations",
      title: "Ouvertures & Activations",
      description: "Rendez votre prochain événement inoubliable - mélangez votre marque à l'action!",
      image: "/images/event-2.jpg",
      details: "Vous voulez créer un buzz et attirer une foule? Notre vélo à smoothie est plus qu'une simple activité amusante - c'est un aimant pour votre marque. Des gobelets personnalisés aux roues de vélo, tables et signalétique, chaque élément peut être adapté avec votre logo pour laisser une impression durable.",
      link: "/evenements/ouvertures-et-activations",
    },
    {
      id: "ecoles-organismes-et-anniversaires",
      title: "Écoles, Organismes & Anniversaires",
      description: "Rassemblez les gens autour de smoothies, de sourires et beaucoup de plaisir!",
      image: "/images/event-3.jpg",
      details: "Vous cherchez une façon créative de collecter des fonds, de vous connecter avec votre communauté ou de célébrer un jour spécial? Nos expériences de vélos à smoothie sont parfaites pour les événements scolaires, les activations d'organismes à but non lucratif, et même les fêtes d'anniversaire!",
      link: "/evenements/ecoles-organismes-et-anniversaires",
    },
    {
      id: "conferences-et-expositions",
      title: "Conférences & Expositions",
      description: "Attirez l'attention, suscitez des conversations et dynamisez votre stand!",
      image: "/images/event-1.jpg",
      details: "Vous cherchez un moyen de vous démarquer lors de votre prochain événement? Notre vélo à smoothie est une attraction qui fait pédaler, sourire et engager les gens avec votre marque d'une manière amusante et mémorable.",
      link: "/evenements/conferences-et-expositions",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="events-hero relative pt-32 pb-20 bg-gradient-to-br from-primary-red/10 to-secondary-yellow/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-dark-charcoal mb-6">Événements</h1>
              <p className="text-xl text-gray-700 mb-8">
                Nous apportons l'énergie et le plaisir à tous types d'événements. Choisissez la catégorie qui correspond le mieux à vos besoins.
              </p>
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {eventCategories.map((category) => (
                <div key={category.id} className="event-category-card bg-light-gray rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <div className="grid md:grid-cols-2">
                    <div className="category-image h-60 md:h-auto">
                      <img 
                        src={category.image} 
                        alt={category.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="category-content p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-dark-charcoal mb-3">{category.title}</h3>
                        <p className="text-gray-700 mb-4">{category.description}</p>
                      </div>
                      <div className="mt-auto">
                        <Link href={category.link}>
                          <Button className="w-full bg-primary-red hover:bg-primary-red/90 text-white">
                            En savoir plus
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-red text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à créer un événement mémorable?</h2>
            <p className="text-xl mb-8">
              Contactez-nous aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-white text-primary-red hover:bg-gray-100 px-8 py-3 text-lg">
                  Contactez-nous
                </Button>
              </Link>
              <Link href="/comment-ca-marche/build-your-event">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                  Créer votre événement
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}