"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, ChevronRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function BuildYourEventPage() {
  const { t } = useI18n()
  const [currentStep, setCurrentStep] = useState(1)
  
  const steps = t<Array<{ number: number; name: string }>>("steps", [])
  const eventTypes = t<Array<{ title: string; description: string; icon: string }>>("step1.eventTypes", [])

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
            <h1 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">{t("title")}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          {/* Step Progress */}
          <div className="step-progress mb-12">
            <div className="flex items-center justify-between">
              {(steps || []).map((step) => (
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
                <h2 className="text-2xl font-bold text-dark-charcoal mb-6">{t("step1.title")}</h2>
                <p className="text-gray-600 mb-8">
                  {t("step1.subtitle")}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {(eventTypes || []).map((type, index) => (
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
                <h2 className="text-2xl font-bold text-dark-charcoal mb-6">{t("step2.title")}</h2>
                <p className="text-gray-600 mb-8">
                  {t("step2.subtitle")}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="form-group">
                    <label className="block text-dark-charcoal font-medium mb-2">{t("step2.form.eventDate")}</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    />
                  </div>
                  <div className="form-group">
                    <label className="block text-dark-charcoal font-medium mb-2">{t("step2.form.startTime")}</label>
                    <input
                      type="time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    />
                  </div>
                  <div className="form-group">
                    <label className="block text-dark-charcoal font-medium mb-2">{t("step2.form.duration")}</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent">
                      {t<string[]>("step2.form.durationOptions", []).map((option, index) => (
                        <option key={index} value={index + 1}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="block text-dark-charcoal font-medium mb-2">{t("step2.form.participants")}</label>
                    <input
                      type="number"
                      placeholder={t("step2.form.participantsPlaceholder")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    />
                  </div>
                  <div className="form-group md:col-span-2">
                    <label className="block text-dark-charcoal font-medium mb-2">{t("step2.form.location")}</label>
                    <input
                      type="text"
                      placeholder={t("step2.form.locationPlaceholder")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    />
                  </div>
                  <div className="form-group md:col-span-2">
                    <label className="block text-dark-charcoal font-medium mb-2">{t("step2.form.description")}</label>
                    <textarea
                      rows={4}
                      placeholder={t("step2.form.descriptionPlaceholder")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="step-3">
                <h2 className="text-2xl font-bold text-dark-charcoal mb-6">{t("step3.title")}</h2>
                <p className="text-gray-600 mb-8">
                  {t("step3.subtitle")}
                </p>

                <div className="space-y-6 mb-8">
                  <div className="option-group p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-dark-charcoal mb-4">{t("step3.bikes.title")}</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {t<string[]>("step3.bikes.options", []).map((option, index) => (
                        <label key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                          <input type="radio" name="bikes" className="text-primary-red focus:ring-primary-red h-4 w-4" />
                          <span className="text-dark-charcoal">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="option-group p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-dark-charcoal mb-4">{t("step3.smoothies.title")}</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {t<string[]>("step3.smoothies.options", []).map((option, index) => (
                        <label key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                          <input type="radio" name="smoothies" className="text-primary-red focus:ring-primary-red h-4 w-4" />
                          <span className="text-dark-charcoal">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="option-group p-4 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-dark-charcoal mb-4">{t("step3.extras.title")}</h3>
                    <div className="space-y-3">
                      {t<Array<{title: string; description: string}>>("step3.extras.options", []).map((option, index) => (
                        <label key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50">
                          <input type="checkbox" className="text-primary-red focus:ring-primary-red h-4 w-4" />
                          <div>
                            <span className="block text-dark-charcoal font-medium">{option.title}</span>
                            <span className="block text-sm text-gray-500">{option.description}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="step-4">
                <h2 className="text-2xl font-bold text-dark-charcoal mb-6">{t("step4.title")}</h2>
                <p className="text-gray-600 mb-8">
                  {t("step4.subtitle")}
                </p>

                <div className="summary p-6 bg-light-gray rounded-lg mb-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="summary-group">
                      <h3 className="text-lg font-semibold text-dark-charcoal mb-3">{t("step4.eventDetails.title")}</h3>
                      <ul className="space-y-2">
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
                      <h3 className="text-lg font-semibold text-dark-charcoal mb-3">{t("step4.selectedOptions.title")}</h3>
                      <ul className="space-y-2">
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
                            <li>Personnalisation avec votre marque</li>
                            <li>Animation et musique</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="contact-info space-y-6 mb-8">
                  <h3 className="text-lg font-semibold text-dark-charcoal">{t("step4.contactInfo.title")}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="block text-dark-charcoal font-medium mb-2">{t("step4.contactInfo.name")}</label>
                      <input
                        type="text"
                        placeholder={t("step4.contactInfo.namePlaceholder")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-dark-charcoal font-medium mb-2">{t("step4.contactInfo.email")}</label>
                      <input
                        type="email"
                        placeholder={t("step4.contactInfo.emailPlaceholder")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-dark-charcoal font-medium mb-2">{t("step4.contactInfo.phone")}</label>
                      <input
                        type="tel"
                        placeholder={t("step4.contactInfo.phonePlaceholder")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-dark-charcoal font-medium mb-2">{t("step4.contactInfo.company")}</label>
                      <input
                        type="text"
                        placeholder={t("step4.contactInfo.companyPlaceholder")}
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
              {t("navigation.back")}
            </Button>

            {currentStep < steps.length ? (
              <Button onClick={handleNext} className="bg-primary-red text-white">
                {t("navigation.continue")} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Link href="/merci">
                <Button className="bg-primary-red text-white">
                  {t("navigation.submit")}
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