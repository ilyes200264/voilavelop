"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, ChevronRight } from "lucide-react"

export default function BuildYourEventPage() {
  const [currentStep, setCurrentStep] = useState(1)
  
  const steps = [
    { number: 1, name: "Type d'événement" },
    { number: 2, name: "Détails" },
    { number: 3, name: "Options" },
    { number: 4, name: "Résumé" },
  ]

  const eventTypes = [
    {
      title: "Événement corporatif",
      description: "Parfait pour les événements d'entreprise, réunions d'équipe et bien-être au travail",
      icon: "🏢",
    },
    {
      title: "Activation de marque",
      description: "Idéal pour les lancements de produits, ouvertures et événements promotionnels",
      icon: "🚀",
    },
    {
      title: "Fête scolaire",
      description: "Pour les écoles, universités et événements éducatifs",
      icon: "🎓",
    },
    {
      title: "Fête privée",
      description: "Parfait pour les anniversaires, mariages et célébrations familiales",
      icon: "🎉",
    },
    {
      title: "Festival ou événement communautaire",
      description: "Pour les grands rassemblements, festivals et événements publics",
      icon: "🎪",
    },
    {
      title: "Organisme à but non lucratif",
      description: "Pour les collectes de fonds et les événements caritatifs",
      icon: "💝",
    },
  ]

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">Créez votre événement</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Suivez les étapes ci-dessous pour créer un événement personnalisé qui correspondra parfaitement à vos besoins
            </p>
          </div>

          {/* Step Progress */}
          <div className="step-progress mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step) => (
                <div key={step.number} className="step-item flex-1 relative">
                  <div
                    className={`step-circle w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                      step.number <= currentStep ? "bg-primary-red text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.number < currentStep ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <span className="text-sm font-semibold">{step.number}</span>
                    )}
                  </div>
                  <div
                    className={`step-name text-center text-sm ${
                      step.number <= currentStep ? "text-primary-red font-medium" : "text-gray-500"
                    }`}
                  >
                    {step.name}
                  </div>
                  {step.number < steps.length && (
                    <div
                      className={`absolute top-5 left-1/2 w-full h-0.5 ${
                        step.number < currentStep ? "bg-primary-red" : "bg-gray-200"
                      }`}
                      style={{ transform: "translateY(-50%)" }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="step-content bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
            {currentStep === 1 && (
              <div className="step-1">
                <h2 className="text-2xl font-bold text-dark-charcoal mb-6">Quel type d'événement organisez-vous?</h2>
                <p className="text-gray-600 mb-8">
                  Sélectionnez le type d'événement qui correspond le mieux à vos besoins. Cela nous aidera à vous
                  recommander les forfaits les plus adaptés.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {eventTypes.map((type, index) => (
                    <div
                      key={index}
                      className="event-type-card border border-gray-200 rounded-lg p-4 hover:border-primary-red hover:shadow-md cursor-pointer transition-all"
                    >
                      <div className="text-3xl mb-3">{type.icon}</div>
                      <h3 className="text-lg font-semibold text-dark-charcoal mb-2">{type.title}</h3>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="step-2">
                <h2 className="text-2xl font-bold text-dark-charcoal mb-6">Détails de votre événement</h2>
                <p className="text-gray-600 mb-8">
                  Fournissez les informations essentielles concernant votre événement.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="form-group">
                    <label className="block text-dark-charcoal font-medium mb-2">Date de l'événement</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    />
                  </div>
                  <div className="form-group">
                    <label className="block text-dark-charcoal font-medium mb-2">Heure de début</label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    />
                  </div>
                  <div className="form-group">
                    <label className="block text-dark-charcoal font-medium mb-2">Durée (heures)</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent">
                      <option value="1">1 heure</option>
                      <option value="2">2 heures</option>
                      <option value="3">3 heures</option>
                      <option value="4">4 heures</option>
                      <option value="custom">Personnalisé</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="block text-dark-charcoal font-medium mb-2">Nombre de participants</label>
                    <input
                      type="number"
                      placeholder="Nombre approximatif"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    />
                  </div>
                  <div className="form-group md:col-span-2">
                    <label className="block text-dark-charcoal font-medium mb-2">Lieu de l'événement</label>
                    <input
                      type="text"
                      placeholder="Adresse complète"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    />
                  </div>
                  <div className="form-group md:col-span-2">
                    <label className="block text-dark-charcoal font-medium mb-2">Description de l'événement</label>
                    <textarea
                      rows={4}
                      placeholder="Décrivez brièvement votre événement et vos attentes"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="step-3">
                <h2 className="text-2xl font-bold text-dark-charcoal mb-6">Options et personnalisation</h2>
                <p className="text-gray-600 mb-8">
                  Personnalisez votre expérience en sélectionnant les options qui vous intéressent.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="option-group p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-dark-charcoal mb-4">Nombre de vélos</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="bikes" className="text-primary-red focus:ring-primary-red h-4 w-4" />
                        <span className="text-dark-charcoal">1 vélo adulte</span>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="bikes" className="text-primary-red focus:ring-primary-red h-4 w-4" />
                        <span className="text-dark-charcoal">2 vélos adultes</span>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="bikes" className="text-primary-red focus:ring-primary-red h-4 w-4" />
                        <span className="text-dark-charcoal">1 enfant + 1 adulte</span>
                      </label>
                    </div>
                  </div>

                  <div className="option-group p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-dark-charcoal mb-4">Quantité de smoothies</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="smoothies" className="text-primary-red focus:ring-primary-red h-4 w-4" />
                        <span className="text-dark-charcoal">50 smoothies</span>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="smoothies" className="text-primary-red focus:ring-primary-red h-4 w-4" />
                        <span className="text-dark-charcoal">100 smoothies</span>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="smoothies" className="text-primary-red focus:ring-primary-red h-4 w-4" />
                        <span className="text-dark-charcoal">200+ smoothies</span>
                      </label>
                    </div>
                  </div>

                  <div className="option-group p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-dark-charcoal mb-4">Options supplémentaires</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                        <input type="checkbox" className="text-primary-red focus:ring-primary-red h-4 w-4" />
                        <div>
                          <span className="block text-dark-charcoal font-medium">Personnalisation avec votre marque</span>
                          <span className="block text-sm text-gray-500">Inclut gobelets et signalétique personnalisés</span>
                        </div>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                        <input type="checkbox" className="text-primary-red focus:ring-primary-red h-4 w-4" />
                        <div>
                          <span className="block text-dark-charcoal font-medium">Animation et musique</span>
                          <span className="block text-sm text-gray-500">Animateur professionnel et système de son</span>
                        </div>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                        <input type="checkbox" className="text-primary-red focus:ring-primary-red h-4 w-4" />
                        <div>
                          <span className="block text-dark-charcoal font-medium">Moniteurs de vitesse et classement</span>
                          <span className="block text-sm text-gray-500">Pour des défis et compétitions amusantes</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="step-4">
                <h2 className="text-2xl font-bold text-dark-charcoal mb-6">Résumé de votre événement</h2>
                <p className="text-gray-600 mb-8">
                  Vérifiez les détails de votre événement et soumettez votre demande pour obtenir un devis personnalisé.
                </p>

                <div className="summary p-6 bg-light-gray rounded-lg mb-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="summary-group">
                      <h3 className="text-lg font-semibold text-dark-charcoal mb-3">Détails de l'événement</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-gray-600 w-32">Type:</span>
                          <span className="text-dark-charcoal font-medium">Événement corporatif</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-600 w-32">Date:</span>
                          <span className="text-dark-charcoal font-medium">JJ/MM/AAAA</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-600 w-32">Heure:</span>
                          <span className="text-dark-charcoal font-medium">HH:MM</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-600 w-32">Durée:</span>
                          <span className="text-dark-charcoal font-medium">2 heures</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-600 w-32">Lieu:</span>
                          <span className="text-dark-charcoal font-medium">Adresse complète</span>
                        </li>
                      </ul>
                    </div>
                    <div className="summary-group">
                      <h3 className="text-lg font-semibold text-dark-charcoal mb-3">Options choisies</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-gray-600 w-32">Vélos:</span>
                          <span className="text-dark-charcoal font-medium">2 vélos adultes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-600 w-32">Smoothies:</span>
                          <span className="text-dark-charcoal font-medium">100 smoothies</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-600 w-32">Extras:</span>
                          <ul className="text-dark-charcoal font-medium">
                            <li>Personnalisation avec votre marque</li>
                            <li>Animation et musique</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="contact-info space-y-6 mb-8">
                  <h3 className="text-lg font-semibold text-dark-charcoal">Vos coordonnées</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="block text-dark-charcoal font-medium mb-2">Nom</label>
                      <input
                        type="text"
                        placeholder="Votre nom complet"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-dark-charcoal font-medium mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="Votre adresse email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-dark-charcoal font-medium mb-2">Téléphone</label>
                      <input
                        type="tel"
                        placeholder="Votre numéro de téléphone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-dark-charcoal font-medium mb-2">Entreprise/Organisation</label>
                      <input
                        type="text"
                        placeholder="Nom de votre entreprise (si applicable)"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="step-navigation flex justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className={currentStep === 1 ? "invisible" : ""}
            >
              Retour
            </Button>

            {currentStep < steps.length ? (
              <Button onClick={handleNext} className="bg-primary-red text-white">
                Continuer <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Link href="/merci">
                <Button className="bg-primary-red text-white">
                  Soumettre la demande
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}