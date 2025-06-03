"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

export default function FaqPage() {
  const [openCategory, setOpenCategory] = useState<string | null>("general")
  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = [
    {
      id: "general",
      name: "Questions générales",
      faqs: [
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
      ],
    },
    {
      id: "equipment",
      name: "Équipement et logistique",
      faqs: [
        {
          question: "Combien de personnes peuvent utiliser un vélo en même temps?",
          answer:
            "Chaque vélo peut accommoder une personne à la fois. Cependant, nous encourageons les participants à faire la queue et à encourager les autres, créant une atmosphère festive et communautaire.",
        },
        {
          question: "Quels vélos sont disponibles?",
          answer:
            "Nous proposons des vélos pour adultes (convenant aux personnes à partir de 10 ans) et des vélos de taille enfant (adaptés aux enfants de 5 à 10 ans). Veuillez préciser vos besoins lors de votre réservation.",
        },
        {
          question: "Voilà Vélo fonctionne-t-il mieux à l'intérieur ou à l'extérieur?",
          answer:
            "Voilà Vélo est parfait pour les événements en intérieur comme en extérieur. Nous nous adaptons à votre espace et à vos besoins.",
        },
        {
          question: "De combien d'espace avez-vous besoin pour l'installation?",
          answer:
            "Pour un vélo, nous avons besoin d'environ 2m x 2m d'espace. Pour plusieurs vélos, l'espace nécessaire augmente en conséquence. Nous vous conseillons également de prévoir de l'espace supplémentaire pour les participants qui attendent leur tour.",
        },
        {
          question: "Combien de temps dure l'installation?",
          answer:
            "Notre équipe arrive généralement 1 heure avant le début de l'événement pour l'installation. Le démontage prend environ 30-45 minutes après la fin de l'événement.",
        },
      ],
    },
    {
      id: "customization",
      name: "Personnalisation et options",
      faqs: [
        {
          question: "Pouvez-vous personnaliser les smoothies pour notre marque?",
          answer:
            "Oui! Nous pouvons créer des recettes personnalisées, utiliser vos couleurs de marque, et même ajouter votre logo sur les vélos pour les événements corporatifs.",
        },
        {
          question: "Les clients peuvent-ils préparer leurs propres boissons?",
          answer:
            "Oui! Nous encourageons tous nos clients à préparer leurs propres boissons - nous pensons que c'est plus amusant et plus engageant de cette façon. Presque tout le monde peut utiliser les vélos mélangeurs - les enfants dès l'âge de quatre ans, les adolescents, les adultes et même les personnes âgées dynamiques peuvent confortablement utiliser nos formidables vélos mélangeurs. Notre personnel est également composé de cyclistes enthousiastes si vous souhaitez que nous vous donnions un coup de main (ou de jambe) à tout moment.",
        },
        {
          question: "Pouvez-vous mélanger des cocktails alcoolisés lors de mariages ou de fêtes privées?",
          answer:
            "Oui, absolument! Nous pouvons mélanger de délicieux cocktails alcoolisés pour les mariages et les événements privés. Nous nous occupons également d'obtenir le permis d'alcool nécessaire auprès du Québec pour garantir que tout est légal et sécuritaire.",
        },
        {
          question: "Que se passe-t-il si je veux quelque chose en plus de ce que vous proposez habituellement?",
          answer:
            "Nous adorons entendre des idées intéressantes! Appelez-nous ou envoyez-nous un e-mail pour discuter des détails et nous ferons de notre mieux pour répondre à votre demande.",
        },
        {
          question: "Pouvez-vous fournir des services bilingues?",
          answer:
            "Absolument! Tous nos animateurs sont bilingues et peuvent conduire l'événement en français, en anglais, ou dans les deux langues selon vos besoins.",
        },
      ],
    },
    {
      id: "pricing",
      name: "Tarifs et réservation",
      faqs: [
        {
          question: "Comment puis-je obtenir un devis?",
          answer:
            "Vous pouvez remplir notre formulaire de contact en ligne, nous appeler directement, ou utiliser notre outil 'Créer votre événement' pour recevoir un devis personnalisé basé sur vos besoins spécifiques.",
        },
        {
          question: "Y a-t-il des frais supplémentaires pour le déplacement?",
          answer:
            "Le déplacement est inclus gratuitement dans un rayon de 25 km de notre base à Montréal. Au-delà, des frais de déplacement peuvent s'appliquer selon la distance. Nous vous fournirons toujours un devis transparent incluant tous les coûts.",
        },
        {
          question: "Proposez-vous des réductions pour les organismes à but non lucratif ou les écoles?",
          answer:
            "Oui, nous offrons des forfaits spéciaux pour les écoles, les organismes à but non lucratif et les événements caritatifs. Contactez-nous pour discuter de vos besoins et de votre budget.",
        },
        {
          question: "Quelle est votre politique d'annulation?",
          answer:
            "Nous comprenons que les plans peuvent changer. Les annulations effectuées plus de 14 jours avant l'événement sont entièrement remboursables. Pour les annulations entre 7 et 14 jours, un acompte de 50% est conservé. Pour les annulations à moins de 7 jours, le paiement complet est dû. En cas de conditions météorologiques défavorables, nous travaillerons avec vous pour reprogrammer sans frais supplémentaires.",
        },
        {
          question: "Comment puis-je effectuer le paiement?",
          answer:
            "Nous acceptons les paiements par virement électronique, carte de crédit, ou chèque d'entreprise. Un acompte de 50% est généralement requis pour confirmer la réservation, le solde étant dû le jour de l'événement ou à l'avance selon les termes du contrat.",
        },
      ],
    },
    {
      id: "sustainability",
      name: "Durabilité et valeurs",
      faqs: [
        {
          question: "Comment Voilà Vélo contribue-t-il à la durabilité?",
          answer:
            "Notre concept est intrinsèquement durable car il fonctionne sans électricité, uniquement à l'énergie humaine. Nous utilisons des ingrédients locaux et biologiques dans la mesure du possible, et tous nos contenants et ustensiles sont compostables ou réutilisables.",
        },
        {
          question: "Que se passe-t-il avec les ingrédients non utilisés?",
          answer:
            "Dans le cadre de notre engagement envers la durabilité, nous donnons tous les ingrédients restants à des organismes de bienfaisance locaux comme Moisson Montréal.",
        },
        {
          question: "Travaillez-vous avec des fournisseurs locaux?",
          answer:
            "Oui, nous nous approvisionnons en fruits et légumes auprès de producteurs locaux dans la mesure du possible, en fonction de la saison. Nous croyons fermement au soutien de l'économie locale et à la réduction de notre empreinte carbone.",
        },
      ],
    },
  ]

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? faqCategories.flatMap((category) =>
        category.faqs
          .filter(
            (faq) =>
              faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((faq) => ({ ...faq, category: category.name }))
      )
    : []

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              Questions fréquemment posées
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Trouvez des réponses à toutes vos questions concernant nos services de vélos à smoothie
            </p>

            {/* Search Bar */}
            <div className="search-bar relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher une question..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="search-results mb-12">
              <h2 className="text-xl font-semibold text-dark-charcoal mb-4">
                Résultats de recherche ({filteredFaqs.length})
              </h2>
              {filteredFaqs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <div key={index} className="faq-item bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-start">
                        <div className="flex-1">
                          <span className="text-sm text-primary-red font-medium mb-1 block">{faq.category}</span>
                          <h3 className="text-lg font-semibold text-dark-charcoal mb-3">{faq.question}</h3>
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-light-gray p-6 rounded-lg text-center">
                  <p className="text-gray-600">Aucun résultat trouvé pour "{searchQuery}"</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Essayez avec des termes différents ou parcourez les catégories ci-dessous
                  </p>
                </div>
              )}
            </div>
          )}

          {/* FAQ Categories and Questions */}
          {!searchQuery && (
            <div className="faq-categories space-y-6">
              {faqCategories.map((category) => (
                <div key={category.id} className="faq-category">
                  <button
                    className={`category-header w-full flex items-center justify-between p-4 rounded-lg text-left ${
                      openCategory === category.id
                        ? "bg-primary-red text-white"
                        : "bg-light-gray text-dark-charcoal hover:bg-gray-200"
                    }`}
                    onClick={() => toggleCategory(category.id)}
                    aria-expanded={openCategory === category.id}
                  >
                    <h2 className="text-xl font-semibold">{category.name}</h2>
                    <span>
                      {openCategory === category.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  {openCategory === category.id && (
                    <div className="category-content mt-4 space-y-4">
                      {category.faqs.map((faq, index) => (
                        <div key={index} className="faq-item bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                          <h3 className="text-lg font-semibold text-dark-charcoal mb-3">{faq.question}</h3>
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Still Have Questions */}
          <div className="still-have-questions bg-light-gray rounded-xl p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-dark-charcoal mb-4">Vous avez encore des questions?</h2>
            <p className="text-gray-600 mb-6">
              Notre équipe est là pour vous aider! Contactez-nous directement pour toute question spécifique.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
      </main>

      <Footer />
    </div>
  )
}