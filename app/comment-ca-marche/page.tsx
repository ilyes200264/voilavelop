"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, ChevronUp, MapPin, Building, TreePine, Flag, Phone, ClipboardEdit, CheckSquare, PartyPopper } from "lucide-react"

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const serviceCities = [
    {
      name: "Montréal",
      description: "Île de Montréal et banlieues proches",
      icon: <MapPin className="h-12 w-12 text-primary-red" />,
    },
    {
      name: "Québec",
      description: "Ville de Québec et région métropolitaine",
      icon: <Building className="h-12 w-12 text-primary-red" />,
    },
    {
      name: "Laval",
      description: "Toute la ville de Laval",
      icon: <TreePine className="h-12 w-12 text-primary-red" />,
    },
    {
      name: "Ottawa",
      description: "Ottawa-Gatineau (côtés Ontario et Québec)",
      icon: <Flag className="h-12 w-12 text-primary-red" />,
    },
  ]

  const processSteps = [
    {
      number: 1,
      title: "Contactez-nous",
      description: "Remplissez notre formulaire ou appelez-nous pour discuter de vos besoins",
      icon: <Phone className="h-12 w-12 text-primary-red" />,
    },
    {
      number: 2,
      title: "Planification personnalisée",
      description: "Nous créons un forfait adapté à votre événement et votre budget",
      icon: <ClipboardEdit className="h-12 w-12 text-primary-red" />,
    },
    {
      number: 3,
      title: "Confirmation et préparation",
      description: "Nous finalisons les détails et préparons tout pour votre événement",
      icon: <CheckSquare className="h-12 w-12 text-primary-red" />,
    },
    {
      number: 4,
      title: "Jour de l'événement",
      description: "Nous arrivons, installons et animons pour une expérience mémorable",
      icon: <PartyPopper className="h-12 w-12 text-primary-red" />,
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
        <section className="how-it-works-hero py-20 bg-gradient-to-br from-primary-red to-secondary-yellow text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{animationDuration: '0.8s'}}>Comment ça marche</h1>
            <div className="red-line-separator w-16 h-1 bg-white mx-auto mb-8 animate-scale-in" style={{animationDuration: '1s', animationDelay: '0.3s', animationFillMode: 'both'}}></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up" style={{animationDuration: '0.8s', animationDelay: '0.5s', animationFillMode: 'both'}}>
              De la réservation à la célébration - voici comment nous rendons votre événement inoubliable
            </p>
          </div>
        </section>

        {/* Service Areas */}
        <section className="service-areas py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">Zones de service</h2>
              <div className="red-line-separator w-16 h-1 bg-primary-red mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Nous desservons des événements de toute taille à travers le Québec
              </p>
            </div>

            <div className="service-cities grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCities.map((city, index) => (
                <div
                  key={index}
                  className="city-card text-center p-8 bg-light-gray rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{animationDuration: '0.6s', animationDelay: `${0.3 + index * 0.15}s`, animationFillMode: 'both'}}
                >
                  <div className="text-5xl mb-6">{city.icon}</div>
                  <h3 className="text-xl font-bold text-dark-charcoal mb-3">{city.name}</h3>
                  <p className="text-gray-600">{city.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="booking-process py-20 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">Processus de réservation</h2>
              <div className="red-line-separator w-16 h-1 bg-primary-red mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Simple, rapide et sans stress - voici comment réserver votre expérience Voilà Vélo
              </p>
            </div>

            <div className="process-steps grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="step text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative animate-fade-in-up" style={{animationDuration: '0.7s', animationDelay: `${0.4 + index * 0.2}s`, animationFillMode: 'both'}}>
                  <div className="step-number absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-white">
                    {step.number}
                  </div>
                  <div className="step-icon text-5xl mt-4 mb-6 text-primary-red">{step.icon}</div>
                  <h3 className="text-xl font-bold text-dark-charcoal mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-20">
              <Link href="/contact">
                <Button className="bg-primary-red text-white px-10 py-4 text-lg font-bold hover:bg-primary-red/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">Commencer maintenant</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">Questions fréquemment posées</h2>
              <div className="red-line-separator w-16 h-1 bg-primary-red mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Trouvez les réponses aux questions les plus courantes sur nos services
              </p>
            </div>

            <div className="faq-list max-w-4xl mx-auto bg-light-gray p-8 rounded-2xl shadow-lg">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-item border-b border-gray-300 last:border-b-0 hover:bg-white/50 transition-colors rounded-lg animate-fade-in-up" style={{animationDuration: '0.5s', animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both'}}>
                  <button
                    className="faq-question w-full text-left py-6 px-4 flex justify-between items-center hover:text-primary-red transition-colors"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                  >
                    <h3 className="text-lg font-bold pr-4">{item.question}</h3>
                    <span className="faq-toggle text-primary-red flex-shrink-0 bg-white p-2 rounded-full shadow-md">
                      {openFaq === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="faq-answer pb-6 px-4 animate-fade-in-up">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-20 grid md:grid-cols-2 gap-8 items-center bg-primary-red text-white p-10 rounded-2xl shadow-xl animate-fade-in-up" style={{animationDuration: '0.8s', animationDelay: '0.3s', animationFillMode: 'both'}}>
              <div className="cta-content">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Vous ne trouvez pas la réponse à votre question?
                </h3>
                <div className="contactRedLine w-16 h-1 bg-white mb-6"></div>
                <p className="text-xl mb-6 opacity-90">
                  Notre équipe est là pour vous aider! Contactez-nous directement pour toute question spécifique.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="bg-white text-primary-red px-8 py-3 font-bold hover:bg-gray-100">Nous contacter</Button>
                  </Link>
                  <Link href="tel:+1-XXX-XXX-XXXX">
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-primary-red px-8 py-3 font-bold"
                    >
                      Appelez-nous
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative">
                <div className="absolute -top-10 -right-10 text-6xl opacity-20">❝</div>
                <div className="testimonial-content bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <p className="text-lg italic mb-4">"Le processus de réservation était simple et l'équipe a été incroyablement réactive. Nos invités ont adoré l'expérience et nous réserverons certainement à nouveau!"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/30 rounded-full mr-3"></div>
                    <div>
                      <p className="font-bold">Jean Tremblay</p>
                      <p className="text-sm">Directeur marketing, ABC Québec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
