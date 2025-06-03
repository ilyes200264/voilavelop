"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const serviceCities = [
    {
      name: "Montréal",
      description: "Île de Montréal et banlieues proches",
      icon: "🏙️",
    },
    {
      name: "Québec",
      description: "Ville de Québec et région métropolitaine",
      icon: "🏰",
    },
    {
      name: "Laval",
      description: "Toute la ville de Laval",
      icon: "🌳",
    },
    {
      name: "Ottawa",
      description: "Ottawa-Gatineau (côtés Ontario et Québec)",
      icon: "🍁",
    },
  ]

  const processSteps = [
    {
      number: 1,
      title: "Contactez-nous",
      description: "Remplissez notre formulaire ou appelez-nous pour discuter de vos besoins",
      icon: "📞",
    },
    {
      number: 2,
      title: "Planification personnalisée",
      description: "Nous créons un forfait adapté à votre événement et votre budget",
      icon: "📋",
    },
    {
      number: 3,
      title: "Confirmation et préparation",
      description: "Nous finalisons les détails et préparons tout pour votre événement",
      icon: "✅",
    },
    {
      number: 4,
      title: "Jour de l'événement",
      description: "Nous arrivons, installons et animons pour une expérience mémorable",
      icon: "🎉",
    },
  ]

  const faqItems = [
    {
      question: "Combien de temps faut-il pour faire un smoothie?",
      answer:
        "Il ne faut que 30 secondes pour pédaler un smoothie, mais vous pouvez rester et continuer à rouler si vous le souhaitez! C'est très amusant et très facile pour tous les âges!",
    },
    {
      question: "Quels ingrédients utilisez-vous?",
      answer:
        "Nous utilisons uniquement des fruits frais, des légumes biologiques et des ingrédients naturels. Nous pouvons accommoder les allergies alimentaires et les préférences diététiques avec un préavis.",
    },
    {
      question: "Combien de personnes peuvent utiliser un vélo en même temps?",
      answer:
        "Chaque vélo peut accommoder une personne à la fois. Cependant, nous encourageons les participants à faire la queue et à encourager les autres, créant une atmosphère festive et communautaire.",
    },
    {
      question: "Avez-vous besoin d'électricité?",
      answer:
        "Non! C'est la beauté de nos vélos - ils fonctionnent entièrement à l'énergie humaine. Nous apportons notre propre équipement sonore alimenté par batterie si nécessaire.",
    },
    {
      question: "Que se passe-t-il s'il pleut?",
      answer:
        "Nous pouvons opérer à l'intérieur si vous avez un espace approprié, ou nous pouvons reporter l'événement. Nous travaillons avec vous pour trouver la meilleure solution.",
    },
    {
      question: "Combien de temps à l'avance dois-je réserver?",
      answer:
        "Nous recommandons de réserver au moins 2-3 semaines à l'avance, surtout pendant la haute saison (mai-septembre). Pour les grands événements, 4-6 semaines sont préférables.",
    },
    {
      question: "Offrez-vous des services bilingues?",
      answer:
        "Absolument! Tous nos animateurs sont bilingues et peuvent conduire l'événement en français, en anglais, ou dans les deux langues selon vos besoins.",
    },
    {
      question: "Y a-t-il des restrictions d'âge?",
      answer:
        "Nos vélos pour enfants sont parfaits pour les 5-10 ans, et nos vélos pour adultes conviennent aux 10 ans et plus. Nous avons des options pour tous les âges et toutes les capacités.",
    },
    {
      question: "Que se passe-t-il avec les ingrédients non utilisés?",
      answer:
        "Dans le cadre de notre engagement envers la durabilité, nous donnons tous les ingrédients restants à des organismes de bienfaisance locaux comme Moisson Montréal.",
    },
    {
      question: "Pouvez-vous personnaliser les smoothies pour notre marque?",
      answer:
        "Oui! Nous pouvons créer des recettes personnalisées, utiliser vos couleurs de marque, et même ajouter votre logo sur les vélos pour les événements corporatifs.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* How It Works Hero */}
        <section className="how-it-works-hero py-16 bg-gradient-to-br from-primary-red to-secondary-yellow text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Comment ça marche</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              De la réservation à la célébration - voici comment nous rendons votre événement inoubliable
            </p>
          </div>
        </section>

        {/* Service Areas */}
        <section className="service-areas py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4">Zones de service</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nous desservons des événements de toute taille à travers le Québec
              </p>
            </div>

            <div className="service-cities grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCities.map((city, index) => (
                <div
                  key={index}
                  className="city-card text-center p-6 bg-light-gray rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{city.icon}</div>
                  <h3 className="text-xl font-semibold text-dark-charcoal mb-2">{city.name}</h3>
                  <p className="text-gray-600">{city.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="booking-process py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4">Processus de réservation</h2>
            </div>

            <div className="process-steps grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="step text-center">
                  <div className="step-icon text-4xl mb-4">{step.icon}</div>
                  <div className="step-number bg-primary-red text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-dark-charcoal mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contact">
                <Button className="bg-primary-red text-white px-8 py-3 text-lg">Commencer maintenant</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-4">Questions fréquemment posées</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trouvez les réponses aux questions les plus courantes sur nos services
              </p>
            </div>

            <div className="faq-list max-w-4xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-item border-b border-gray-200 last:border-b-0">
                  <button
                    className="faq-question w-full text-left py-6 flex justify-between items-center hover:text-primary-red transition-colors"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                  >
                    <h3 className="text-lg font-semibold pr-4">{item.question}</h3>
                    <span className="faq-toggle text-primary-red flex-shrink-0">
                      {openFaq === index ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="faq-answer pb-6">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12 p-8 bg-light-gray rounded-2xl">
              <h3 className="text-xl font-semibold text-dark-charcoal mb-4">
                Vous ne trouvez pas la réponse à votre question?
              </h3>
              <p className="text-gray-600 mb-6">
                Notre équipe est là pour vous aider! Contactez-nous directement pour toute question spécifique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-primary-red text-white px-6 py-3">Nous contacter</Button>
                </Link>
                <Link href="tel:+1-XXX-XXX-XXXX">
                  <Button variant="outline" className="px-6 py-3">
                    Appelez-nous: XXX-XXX-XXXX
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
