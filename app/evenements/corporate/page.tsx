import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, Users, Award, Smile } from "lucide-react"

export default function CorporateEventsPage() {
  const benefits = [
    {
      icon: <Users className="h-10 w-10 text-primary-red" />,
      title: "Renforcement d'équipe",
      description: "Favorisez la collaboration et l'esprit d'équipe à travers une activité amusante et interactive.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary-red" />,
      title: "Promotion du bien-être",
      description: "Encouragez un mode de vie sain et actif auprès de vos employés.",
    },
    {
      icon: <Smile className="h-10 w-10 text-primary-red" />,
      title: "Expérience mémorable",
      description: "Créez des souvenirs positifs associés à votre marque et à votre culture d'entreprise.",
    },
  ]

  const testimonials = [
    {
      quote: "Nos employés ont adoré l'expérience des vélos à smoothie lors de notre journée bien-être. C'était à la fois amusant, sain et parfaitement aligné avec nos valeurs d'entreprise.",
      author: "Marie Dubois",
      position: "Directrice RH, Entreprise XYZ",
    },
    {
      quote: "L'équipe de Voilà Vélo a apporté une énergie incroyable à notre événement corporatif. C'était exactement ce qu'il nous fallait pour dynamiser notre journée!",
      author: "Jean Tremblay",
      position: "Responsable événementiel, ABC Inc.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="corporate-hero relative pt-32 pb-20 bg-gradient-to-br from-primary-red/10 to-secondary-yellow/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center text-sm mb-4">
                <Link href="/evenements" className="text-gray-600 hover:text-primary-red">
                  Événements
                </Link>
                <span className="mx-2">/</span>
                <span className="text-primary-red">Corporate</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-dark-charcoal mb-6">
                Stimulez le bien-être des employés et dynamisez votre lieu de travail!
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Vous cherchez une façon amusante, saine et mémorable d'engager votre équipe directement à votre bureau? Notre installation de vélos à smoothie apporte du plaisir sain directement dans le hall ou l'espace commun de votre lieu de travail.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary-red hover:bg-primary-red/90 text-white px-8 py-3 text-lg">
                  Demander un devis
                </Button>
                <Link href="/forfaits/ready-set-blend">
                  <Button variant="outline" className="border-primary-red text-primary-red hover:bg-primary-red/10 px-8 py-3 text-lg">
                    Découvrir notre forfait Team-Building
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/placeholder.svg?height=600&width=800" 
                  alt="Événement corporate avec vélos à smoothie" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-dark-charcoal mb-6">Pourquoi choisir Voilà Vélo pour votre événement d'entreprise?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Que votre équipe revienne au bureau ou ait simplement besoin d'un coup de boost, notre station de smoothies à pédales est un excellent moyen de promouvoir l'activité physique, nourrir le corps et susciter des conversations.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Un employé en bonne santé est non seulement plus heureux, mais aussi plus productif — et quoi de mieux pour promouvoir le bien-être qu'un smoothie qu'ils préparent eux-mêmes?
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-4 mt-1">{benefit.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-dark-charcoal mb-1">{benefit.title}</h3>
                        <p className="text-gray-700">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-dark-charcoal text-center mb-12">Ce que nos clients disent</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                  <p className="text-lg text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <p className="font-semibold text-dark-charcoal">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à dynamiser votre prochain événement d'entreprise?</h2>
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