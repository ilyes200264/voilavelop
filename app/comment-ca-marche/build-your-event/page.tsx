"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, ChevronRight, ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function BuildYourEventPage() {
  const { t } = useI18n()
  const [currentStep, setCurrentStep] = useState(1)
  const [openFaq, setOpenFaq] = useState<number | null>(0) // Open first FAQ by default
  
  const steps = t<Array<{ number: number; name: string }>>("steps", [])
  const eventTypes = t<Array<{ title: string; description: string; icon: string }>>("step1.eventTypes", [])
  const faqItems = t<any[]>('faq.items', [])

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
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-accent-green to-trust-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{animationDuration: '0.8s'}}>
              {t("title")}
            </h1>
            <div className="red-line-separator w-16 h-1 bg-white mx-auto mb-8 animate-scale-in" style={{animationDuration: '1s', animationDelay: '0.3s', animationFillMode: 'both'}}></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up" style={{animationDuration: '0.8s', animationDelay: '0.5s', animationFillMode: 'both'}}>
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Step Progress */}
            <div className="step-progress mb-12">
              <div className="flex items-center justify-between">
                {(steps || []).map((step) => (
                  <div key={step.number} className="step-item flex-1 relative">
                    <div
                      className={`step-circle w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                        step.number <= currentStep ? "bg-accent-green text-white" : "bg-gray-200 text-gray-500"
                      } shadow-md transition-all duration-300`}
                    >
                      {step.number < currentStep ? (
                        <CheckCircle className="h-7 w-7" />
                      ) : (
                        <span className="text-lg font-semibold">{step.number}</span>
                      )}
                    </div>
                    <div
                      className={`step-name text-center text-sm md:text-base ${
                        step.number <= currentStep ? "text-accent-green font-semibold" : "text-gray-500"
                      }`}
                    >
                      {step.name}
                    </div>
                    {step.number < steps.length && (
                      <div
                        className={`absolute top-6 left-1/2 w-full h-1 ${
                          step.number < currentStep ? "bg-accent-green" : "bg-gray-200"
                        }`}
                        style={{ transform: "translateY(-50%)" }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Step Content Sections */}
        <section className={`py-16 ${currentStep % 2 === 0 ? 'bg-light-gray' : 'bg-white'}`}>
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="step-content bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
              {currentStep === 1 && (
                <div className="step-1 animate-fade-in-up" style={{animationDuration: '0.5s'}}>
                  <h2 className="text-2xl md:text-3xl font-bold text-accent-green mb-6">{t("step1.title")}</h2>
                  <div className="red-line-separator w-16 h-1 bg-accent-green mb-8"></div>
                  <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                    {t("step1.subtitle")}
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {(eventTypes || []).map((type, index) => (
                      <div
                        key={index}
                        className="event-type-card border border-gray-200 rounded-lg p-6 hover:border-accent-green hover:shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                        style={{animationDuration: '0.6s', animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'both'}}
                      >
                        <div className="text-4xl mb-4 text-accent-green">{type.icon}</div>
                        <h3 className="text-xl font-bold text-dark-charcoal mb-3">{type.title}</h3>
                        <p className="text-gray-600">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="step-2 animate-fade-in-up" style={{animationDuration: '0.5s'}}>
                  <h2 className="text-2xl md:text-3xl font-bold text-accent-green mb-6">{t("step2.title")}</h2>
                  <div className="red-line-separator w-16 h-1 bg-accent-green mb-8"></div>
                  <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                    {t("step2.subtitle")}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="form-group animate-fade-in-up" style={{animationDuration: '0.5s', animationDelay: '0.1s'}}>
                      <label className="block text-dark-charcoal font-medium mb-2">{t("step2.form.eventDate")}</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                      />
                    </div>
                    <div className="form-group animate-fade-in-up" style={{animationDuration: '0.5s', animationDelay: '0.2s'}}>
                      <label className="block text-dark-charcoal font-medium mb-2">{t("step2.form.startTime")}</label>
                      <input
                        type="time"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                      />
                    </div>
                    <div className="form-group animate-fade-in-up" style={{animationDuration: '0.5s', animationDelay: '0.3s'}}>
                      <label className="block text-dark-charcoal font-medium mb-2">{t("step2.form.duration")}</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent">
                        {t<string[]>("step2.form.durationOptions", []).map((option, index) => (
                          <option key={index} value={index + 1}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group animate-fade-in-up" style={{animationDuration: '0.5s', animationDelay: '0.4s'}}>
                      <label className="block text-dark-charcoal font-medium mb-2">{t("step2.form.participants")}</label>
                      <input
                        type="number"
                        placeholder={t("step2.form.participantsPlaceholder")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                      />
                    </div>
                    <div className="form-group md:col-span-2 animate-fade-in-up" style={{animationDuration: '0.5s', animationDelay: '0.5s'}}>
                      <label className="block text-dark-charcoal font-medium mb-2">{t("step2.form.location")}</label>
                      <input
                        type="text"
                        placeholder={t("step2.form.locationPlaceholder")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                      />
                    </div>
                    <div className="form-group md:col-span-2 animate-fade-in-up" style={{animationDuration: '0.5s', animationDelay: '0.6s'}}>
                      <label className="block text-dark-charcoal font-medium mb-2">{t("step2.form.description")}</label>
                      <textarea
                        rows={4}
                        placeholder={t("step2.form.descriptionPlaceholder")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="step-3 animate-fade-in-up" style={{animationDuration: '0.5s'}}>
                  <h2 className="text-2xl md:text-3xl font-bold text-accent-green mb-6">{t("step3.title")}</h2>
                  <div className="red-line-separator w-16 h-1 bg-accent-green mb-8"></div>
                  <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                    {t("step3.subtitle")}
                  </p>

                  <div className="space-y-8 mb-8">
                    <div className="option-group p-6 border border-gray-200 rounded-lg bg-light-gray/50 animate-fade-in-up" style={{animationDuration: '0.5s', animationDelay: '0.1s'}}>
                      <h3 className="text-xl font-bold text-accent-green mb-6">{t("step3.bikes.title")}</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {t<string[]>("step3.bikes.options", []).map((option, index) => (
                          <label key={index} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-md cursor-pointer hover:bg-white hover:shadow-md transition-all duration-300 bg-white">
                            <input type="radio" name="bikes" className="text-accent-green focus:ring-accent-green h-5 w-5" />
                            <span className="text-dark-charcoal font-medium">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="option-group p-6 border border-gray-200 rounded-lg bg-light-gray/50 animate-fade-in-up" style={{animationDuration: '0.5s', animationDelay: '0.2s'}}>
                      <h3 className="text-xl font-bold text-accent-green mb-6">{t("step3.smoothies.title")}</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {t<string[]>("step3.smoothies.options", []).map((option, index) => (
                          <label key={index} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-md cursor-pointer hover:bg-white hover:shadow-md transition-all duration-300 bg-white">
                            <input type="radio" name="smoothies" className="text-accent-green focus:ring-accent-green h-5 w-5" />
                            <span className="text-dark-charcoal font-medium">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="option-group p-6 border border-gray-200 rounded-lg bg-light-gray/50 animate-fade-in-up" style={{animationDuration: '0.5s', animationDelay: '0.3s'}}>
                      <h3 className="text-xl font-bold text-accent-green mb-6">{t("step3.extras.title")}</h3>
                      <div className="space-y-4">
                        {t<Array<{title: string; description: string}>>("step3.extras.options", []).map((option, index) => (
                          <label key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-md cursor-pointer hover:bg-white hover:shadow-md transition-all duration-300 bg-white">
                            <input type="checkbox" className="text-accent-green focus:ring-accent-green h-5 w-5" />
                            <div>
                              <span className="block text-dark-charcoal font-medium text-lg">{option.title}</span>
                              <span className="block text-gray-600 mt-1">{option.description}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="step-4 animate-fade-in-up" style={{animationDuration: '0.5s'}}>
                  <h2 className="text-2xl md:text-3xl font-bold text-accent-green mb-6">{t("step4.title")}</h2>
                  <div className="red-line-separator w-16 h-1 bg-accent-green mb-8"></div>
                  <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                    {t("step4.subtitle")}
                  </p>

                  <div className="summary p-6 bg-light-gray rounded-lg mb-8 animate-fade-in-up" style={{animationDuration: '0.5s', animationDelay: '0.1s'}}>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="summary-group">
                        <h3 className="text-xl font-bold text-accent-green mb-4">{t("step4.eventDetails.title")}</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-gray-600 w-32">{t("step4.eventDetails.type")}</span>
                            <span className="text-dark-charcoal font-medium">Événement corporatif</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-600 w-32">{t("step4.eventDetails.date")}</span>
                            <span className="text-dark-charcoal font-medium">JJ/MM/AAAA</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-600 w-32">{t("step4.eventDetails.time")}</span>
                            <span className="text-dark-charcoal font-medium">HH:MM</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-600 w-32">{t("step4.eventDetails.duration")}</span>
                            <span className="text-dark-charcoal font-medium">2 heures</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-600 w-32">{t("step4.eventDetails.location")}</span>
                            <span className="text-dark-charcoal font-medium">Adresse complète</span>
                          </li>
                        </ul>
                      </div>
                      <div className="summary-group">
                        <h3 className="text-xl font-bold text-accent-green mb-4">{t("step4.selectedOptions.title")}</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-gray-600 w-32">{t("step4.selectedOptions.bikes")}</span>
                            <span className="text-dark-charcoal font-medium">2 vélos adultes</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-600 w-32">{t("step4.selectedOptions.smoothies")}</span>
                            <span className="text-dark-charcoal font-medium">100 smoothies</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-600 w-32">{t("step4.selectedOptions.extras")}</span>
                            <ul className="text-dark-charcoal font-medium">
                              <li>• Personnalisation avec votre marque</li>
                              <li>• Animation et musique</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="contact-info p-6 border border-gray-200 rounded-lg bg-white mb-8 animate-fade-in-up" style={{animationDuration: '0.5s', animationDelay: '0.2s'}}>
                    <h3 className="text-xl font-bold text-accent-green mb-6">{t("step4.contactInfo.title")}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label className="block text-dark-charcoal font-medium mb-2">{t("step4.contactInfo.name")}</label>
                        <input
                          type="text"
                          placeholder={t("step4.contactInfo.namePlaceholder")}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                        />
                      </div>
                      <div className="form-group">
                        <label className="block text-dark-charcoal font-medium mb-2">{t("step4.contactInfo.email")}</label>
                        <input
                          type="email"
                          placeholder={t("step4.contactInfo.emailPlaceholder")}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                        />
                      </div>
                      <div className="form-group">
                        <label className="block text-dark-charcoal font-medium mb-2">{t("step4.contactInfo.phone")}</label>
                        <input
                          type="tel"
                          placeholder={t("step4.contactInfo.phonePlaceholder")}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                        />
                      </div>
                      <div className="form-group">
                        <label className="block text-dark-charcoal font-medium mb-2">{t("step4.contactInfo.company")}</label>
                        <input
                          type="text"
                          placeholder={t("step4.contactInfo.companyPlaceholder")}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="step-navigation flex justify-between mb-16">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`${currentStep === 1 ? "invisible" : ""} border-accent-green text-accent-green hover:bg-accent-green/5 px-6 py-3`}
              >
                {t("navigation.back")}
              </Button>

              {currentStep < steps.length ? (
                <Button onClick={handleNext} className="bg-accent-green text-white px-8 py-3 shadow-md hover:shadow-lg transition-all">
                  {t("navigation.continue")} <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              ) : (
                <Link href="/merci">
                  <Button className="bg-accent-green text-white px-8 py-3 shadow-md hover:shadow-lg transition-all">
                    {t("navigation.submit")} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
                Questions fréquemment posées
              </h2>
              <div className="red-line-separator w-16 h-1 bg-accent-green mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Trouvez des réponses à toutes vos questions concernant la création d'événements personnalisés
              </p>
            </div>

            <div className="faq-list max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
              {(faqItems || []).slice(0, 5).map((item, index) => (
                <div 
                  key={index} 
                  className="faq-item border-b border-gray-300 last:border-b-0 hover:bg-white/50 transition-colors rounded-lg animate-fade-in-up" 
                  style={{animationDuration: '0.5s', animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both'}}
                >
                  <button
                    className="faq-question w-full text-left py-6 px-4 flex justify-between items-center hover:text-accent-green transition-colors"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                  >
                    <h3 className="text-lg font-bold pr-4">{item.question}</h3>
                    <span className="faq-toggle text-accent-green flex-shrink-0 bg-white p-2 rounded-full shadow-md">
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

            <div className="mt-16 text-center">
              <Link href="/comment-ca-marche/faq">
                <Button variant="outline" className="border-accent-green text-accent-green hover:bg-accent-green/5 px-8 py-3">
                  Voir toutes les questions fréquentes <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-accent-green text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Besoin d'aide pour créer votre événement parfait?
              </h2>
              <div className="red-line-separator w-16 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Notre équipe est là pour vous aider! Contactez-nous directement et nous vous guiderons à chaque étape du processus.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-accent-green px-8 py-3 font-bold hover:bg-gray-100 shadow-md">
                    Nous contacter <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="tel:+1-XXX-XXX-XXXX">
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-accent-green px-8 py-3 font-bold"
                  >
                    Appelez-nous
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