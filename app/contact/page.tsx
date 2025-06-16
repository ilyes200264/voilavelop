"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function ContactPage() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    eventDate: "",
    guests: "",
    location: "",
    package: "",
    budget: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Redirect to thank you page
    window.location.href = "/merci"
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-28 pb-16 bg-accent-green/10">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Page Header */}
          <div className="text-center mb-12 p-8 bg-accent-green text-white rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("title", "Contactez-nous")}</h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              {t("subtitle", "Prêt à ajouter du plaisir pédalé à votre événement? Parlons-en!")}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className="contact-info lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold text-dark-charcoal mb-6">{t("contactInfo.title", "Informations de contact")}</h2>

                <div className="contact-methods space-y-6">
                  <div className="contact-method flex items-start space-x-4">
                    <div className="method-icon bg-accent-green text-white p-3 rounded-full">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="method-details">
                      <h3 className="font-semibold text-dark-charcoal mb-1">{t("contactInfo.address.title", "Adresse")}</h3>
                      <p className="text-gray-600 mb-2">
                        {t("contactInfo.address.line1", "[Adresse d'entreprise]")}
                        <br />
                        {t("contactInfo.address.line2", "Montréal, QC [Code postal]")}
                      </p>
                      <a href="#" target="_blank" className="text-accent-green hover:underline text-sm" rel="noreferrer">
                        {t("contactInfo.address.viewMap", "Voir sur la carte →")}
                      </a>
                    </div>
                  </div>

                  <div className="contact-method flex items-start space-x-4">
                    <div className="method-icon bg-accent-green text-white p-3 rounded-full">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="method-details">
                      <h3 className="font-semibold text-dark-charcoal mb-1">{t("contactInfo.phone.title", "Téléphone")}</h3>
                      <p className="text-gray-600 mb-1">
                        <a href="tel:+1-XXX-XXX-XXXX" className="hover:text-accent-green">
                          {t("contactInfo.phone.number", "XXX-XXX-XXXX")}
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">{t("contactInfo.phone.hours", "Lun-Ven: 9h00-17h00")}</p>
                    </div>
                  </div>

                  <div className="contact-method flex items-start space-x-4">
                    <div className="method-icon bg-accent-green text-white p-3 rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="method-details">
                      <h3 className="font-semibold text-dark-charcoal mb-1">{t("contactInfo.email.title", "Email")}</h3>
                      <p className="text-gray-600 mb-1">
                        <a href="mailto:info@voilavelo.ca" className="hover:text-accent-green">
                          {t("contactInfo.email.address", "info@voilavelo.ca")}
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">{t("contactInfo.email.responseTime", "Réponse dans les 24h")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-areas-summary bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="font-semibold text-dark-charcoal mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-accent-green" />
                  {t("contactInfo.serviceAreas.title", "Zones de service")}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {t<string[]>("contactInfo.serviceAreas.areas", []).map((area, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-accent-green">•</span>
                      <span className="text-dark-charcoal">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section lg:col-span-3 bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-dark-charcoal mb-6">{t("contactForm.title", "Demander une soumission")}</h2>

              <form className="quote-form space-y-8" onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="form-section">
                  <h3 className="text-lg font-semibold text-dark-charcoal mb-4">{t("contactForm.personalInfo.title", "Informations personnelles")}</h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="form-field">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contactForm.personalInfo.firstName", "Prénom")} *
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="w-full focus:ring-accent-green focus:border-accent-green"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contactForm.personalInfo.lastName", "Nom")} *
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="w-full focus:ring-accent-green focus:border-accent-green"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="form-field">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contactForm.personalInfo.email", "Email")} *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full focus:ring-accent-green focus:border-accent-green"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contactForm.personalInfo.phone", "Téléphone")}
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full focus:ring-accent-green focus:border-accent-green"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contactForm.personalInfo.company", "Entreprise/Organisation")}
                    </label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full focus:ring-accent-green focus:border-accent-green"
                    />
                  </div>
                </div>

                {/* Event Information */}
                <div className="form-section border-t pt-6">
                  <h3 className="text-lg font-semibold text-dark-charcoal mb-4">{t("contactForm.eventInfo.title", "Détails de l'événement")}</h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="form-field">
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contactForm.eventInfo.eventType.label", "Type d'événement")} *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("eventType", value)}>
                        <SelectTrigger className="focus:ring-accent-green focus:border-accent-green">
                          <SelectValue placeholder={t("contactForm.eventInfo.eventType.placeholder", "Sélectionnez le type")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">{t("contactForm.eventInfo.eventType.options.corporate", "Événement corporatif")}</SelectItem>
                          <SelectItem value="school">{t("contactForm.eventInfo.eventType.options.school", "École/Éducation")}</SelectItem>
                          <SelectItem value="festival">{t("contactForm.eventInfo.eventType.options.festival", "Festival/Communautaire")}</SelectItem>
                          <SelectItem value="wedding">{t("contactForm.eventInfo.eventType.options.wedding", "Mariage")}</SelectItem>
                          <SelectItem value="birthday">{t("contactForm.eventInfo.eventType.options.birthday", "Anniversaire")}</SelectItem>
                          <SelectItem value="other">{t("contactForm.eventInfo.eventType.options.other", "Autre")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contactForm.eventInfo.eventDate", "Date d'événement")} <span className="text-xs text-gray-500">({t("contactForm.eventInfo.dateFormat", "jj/mm/aaaa")})</span>
                      </label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange("eventDate", e.target.value)}
                        className="w-full focus:ring-accent-green focus:border-accent-green"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="form-field">
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contactForm.eventInfo.guests.label", "Nombre d'invités")} *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("guests", value)}>
                        <SelectTrigger className="focus:ring-accent-green focus:border-accent-green">
                          <SelectValue placeholder={t("contactForm.eventInfo.guests.placeholder", "Sélectionnez")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-25">{t("contactForm.eventInfo.guests.options.1-25", "1-25 personnes")}</SelectItem>
                          <SelectItem value="26-50">{t("contactForm.eventInfo.guests.options.26-50", "26-50 personnes")}</SelectItem>
                          <SelectItem value="51-100">{t("contactForm.eventInfo.guests.options.51-100", "51-100 personnes")}</SelectItem>
                          <SelectItem value="101-200">{t("contactForm.eventInfo.guests.options.101-200", "101-200 personnes")}</SelectItem>
                          <SelectItem value="200+">{t("contactForm.eventInfo.guests.options.200+", "200+ personnes")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contactForm.eventInfo.location.label", "Lieu")} *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("location", value)}>
                        <SelectTrigger className="focus:ring-accent-green focus:border-accent-green">
                          <SelectValue placeholder={t("contactForm.eventInfo.location.placeholder", "Sélectionnez la ville")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="montreal">{t("contactForm.eventInfo.location.options.montreal", "Montréal")}</SelectItem>
                          <SelectItem value="laval">{t("contactForm.eventInfo.location.options.laval", "Laval")}</SelectItem>
                          <SelectItem value="quebec">{t("contactForm.eventInfo.location.options.quebec", "Québec")}</SelectItem>
                          <SelectItem value="ottawa">{t("contactForm.eventInfo.location.options.ottawa", "Ottawa")}</SelectItem>
                          <SelectItem value="other">{t("contactForm.eventInfo.location.options.other", "Autre (précisez)")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="form-field">
                      <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contactForm.eventInfo.package.label", "Forfait préféré")}
                      </label>
                      <Select onValueChange={(value) => handleInputChange("package", value)}>
                        <SelectTrigger className="focus:ring-accent-green focus:border-accent-green">
                          <SelectValue placeholder={t("contactForm.eventInfo.package.placeholder", "Sélectionnez un forfait")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="la-petite-koki">{t("contactForm.eventInfo.package.options.la-petite-koki", "La petite Koki")}</SelectItem>
                          <SelectItem value="pop-solo">{t("contactForm.eventInfo.package.options.pop-solo", "Pop Solo")}</SelectItem>
                          <SelectItem value="double-fun">{t("contactForm.eventInfo.package.options.double-fun", "Double Fun")}</SelectItem>
                          <SelectItem value="ready-set-blend">{t("contactForm.eventInfo.package.options.ready-set-blend", "Ready Set Blend")}</SelectItem>
                          <SelectItem value="defi-parent-enfant">{t("contactForm.eventInfo.package.options.defi-parent-enfant", "Défi Parent-Enfant")}</SelectItem>
                          <SelectItem value="la-smoothie-parade">{t("contactForm.eventInfo.package.options.la-smoothie-parade", "La Smoothie Parade")}</SelectItem>
                          <SelectItem value="signature">{t("contactForm.eventInfo.package.options.signature", "Forfait Signature")}</SelectItem>
                          <SelectItem value="custom">{t("contactForm.eventInfo.package.options.custom", "Forfait personnalisé")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contactForm.eventInfo.budget.label", "Budget approximatif")}
                      </label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="focus:ring-accent-green focus:border-accent-green">
                          <SelectValue placeholder={t("contactForm.eventInfo.budget.placeholder", "Sélectionnez")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500">{t("contactForm.eventInfo.budget.options.under-500", "Moins de 500$")}</SelectItem>
                          <SelectItem value="500-1000">{t("contactForm.eventInfo.budget.options.500-1000", "500$ - 1000$")}</SelectItem>
                          <SelectItem value="1000-2000">{t("contactForm.eventInfo.budget.options.1000-2000", "1000$ - 2000$")}</SelectItem>
                          <SelectItem value="2000-5000">{t("contactForm.eventInfo.budget.options.2000-5000", "2000$ - 5000$")}</SelectItem>
                          <SelectItem value="5000+">{t("contactForm.eventInfo.budget.options.5000+", "5000$+")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="form-section border-t pt-6">
                  <h3 className="text-lg font-semibold text-dark-charcoal mb-4">{t("contactForm.additionalInfo.title", "Informations supplémentaires")}</h3>

                  <div className="form-field mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contactForm.additionalInfo.message.label", "Détails de votre événement, besoins spéciaux, questions")}
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder={t("contactForm.additionalInfo.message.placeholder", "Décrivez votre vision pour l'événement, toute exigence spéciale, ou questions que vous pourriez avoir...")}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full focus:ring-accent-green focus:border-accent-green"
                    />
                  </div>

                  <div className="form-field">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={(e) => handleInputChange("newsletter", e.target.checked)}
                        className="w-4 h-4 text-accent-green border-gray-300 rounded focus:ring-accent-green"
                      />
                      <span className="text-sm text-gray-700">
                        {t("contactForm.additionalInfo.newsletter", "J'aimerais recevoir des conseils d'événements et des offres spéciales par email")}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <div className="form-submit text-center">
                  <Button type="submit" className="bg-accent-green text-white px-8 py-3">
                    {t("contactForm.submit.button", "Envoyer la demande →")}
                  </Button>

                  <p className="text-sm text-gray-600 mt-4">
                    {t("contactForm.submit.confirmation", "Nous vous répondrons dans les 24 heures avec une soumission personnalisée pour votre événement.")}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
