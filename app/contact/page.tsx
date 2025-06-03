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

export default function ContactPage() {
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

      <main className="pt-20">
        {/* Contact Hero */}
        <section className="contact-hero py-16 bg-gradient-to-br from-primary-red to-secondary-yellow text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Prêt à ajouter du plaisir pédalé à votre événement? Parlons-en!
            </p>
          </div>
        </section>

        {/* Contact Main */}
        <section className="contact-main py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="contact-info lg:col-span-2">
                <h2 className="text-2xl font-bold text-dark-charcoal mb-8">Informations de contact</h2>

                <div className="contact-methods space-y-6">
                  <div className="contact-method flex items-start space-x-4">
                    <div className="method-icon bg-primary-red text-white p-3 rounded-full">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="method-details">
                      <h3 className="font-semibold text-dark-charcoal mb-1">Adresse</h3>
                      <p className="text-gray-600 mb-2">
                        [Adresse d'entreprise]
                        <br />
                        Montréal, QC [Code postal]
                      </p>
                      <a href="#" target="_blank" className="text-primary-red hover:underline text-sm" rel="noreferrer">
                        Voir sur la carte →
                      </a>
                    </div>
                  </div>

                  <div className="contact-method flex items-start space-x-4">
                    <div className="method-icon bg-secondary-yellow text-dark-charcoal p-3 rounded-full">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="method-details">
                      <h3 className="font-semibold text-dark-charcoal mb-1">Téléphone</h3>
                      <p className="text-gray-600 mb-1">
                        <a href="tel:+1-XXX-XXX-XXXX" className="hover:text-primary-red">
                          XXX-XXX-XXXX
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">Lun-Ven: 9h00-17h00</p>
                    </div>
                  </div>

                  <div className="contact-method flex items-start space-x-4">
                    <div className="method-icon bg-accent-green text-white p-3 rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="method-details">
                      <h3 className="font-semibold text-dark-charcoal mb-1">Email</h3>
                      <p className="text-gray-600 mb-1">
                        <a href="mailto:info@voilavelo.ca" className="hover:text-primary-red">
                          info@voilavelo.ca
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">Réponse dans les 24h</p>
                    </div>
                  </div>
                </div>

                <div className="service-areas-summary mt-8 p-6 bg-light-gray rounded-xl">
                  <h3 className="font-semibold text-dark-charcoal mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary-red" />
                    Zones de service
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Montréal et région métropolitaine</li>
                    <li>• Laval</li>
                    <li>• Ville de Québec et environs</li>
                    <li>• Ottawa-Gatineau</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-section lg:col-span-3">
                <h2 className="text-2xl font-bold text-dark-charcoal mb-8">Demander une soumission</h2>

                <form className="quote-form space-y-8" onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="form-section">
                    <h3 className="text-lg font-semibold text-dark-charcoal mb-4">Informations personnelles</h3>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="form-field">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          Prénom *
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="w-full"
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom *
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="form-field">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="w-full"
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Entreprise/Organisation
                      </label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Event Information */}
                  <div className="form-section">
                    <h3 className="text-lg font-semibold text-dark-charcoal mb-4">Détails de l'événement</h3>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="form-field">
                        <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                          Type d'événement *
                        </label>
                        <Select onValueChange={(value) => handleInputChange("eventType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez le type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="corporate">Événement corporatif</SelectItem>
                            <SelectItem value="school">École/Éducation</SelectItem>
                            <SelectItem value="festival">Festival/Communautaire</SelectItem>
                            <SelectItem value="wedding">Mariage</SelectItem>
                            <SelectItem value="birthday">Anniversaire</SelectItem>
                            <SelectItem value="other">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                          Date d'événement
                        </label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => handleInputChange("eventDate", e.target.value)}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="form-field">
                        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre d'invités *
                        </label>
                        <Select onValueChange={(value) => handleInputChange("guests", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-25">1-25 personnes</SelectItem>
                            <SelectItem value="26-50">26-50 personnes</SelectItem>
                            <SelectItem value="51-100">51-100 personnes</SelectItem>
                            <SelectItem value="101-200">101-200 personnes</SelectItem>
                            <SelectItem value="200+">200+ personnes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                          Lieu *
                        </label>
                        <Select onValueChange={(value) => handleInputChange("location", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez la ville" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="montreal">Montréal</SelectItem>
                            <SelectItem value="laval">Laval</SelectItem>
                            <SelectItem value="quebec">Québec</SelectItem>
                            <SelectItem value="ottawa">Ottawa</SelectItem>
                            <SelectItem value="other">Autre (précisez)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="form-field">
                        <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                          Forfait préféré
                        </label>
                        <Select onValueChange={(value) => handleInputChange("package", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un forfait" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="la-petite-koki">La petite Koki</SelectItem>
                            <SelectItem value="pop-solo">Pop Solo</SelectItem>
                            <SelectItem value="double-fun">Double Fun</SelectItem>
                            <SelectItem value="ready-set-blend">Ready Set Blend</SelectItem>
                            <SelectItem value="defi-parent-enfant">Défi Parent-Enfant</SelectItem>
                            <SelectItem value="la-smoothie-parade">La Smoothie Parade</SelectItem>
                            <SelectItem value="signature">Forfait Signature</SelectItem>
                            <SelectItem value="custom">Forfait personnalisé</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Budget approximatif
                        </label>
                        <Select onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-500">Moins de 500$</SelectItem>
                            <SelectItem value="500-1000">500$ - 1000$</SelectItem>
                            <SelectItem value="1000-2000">1000$ - 2000$</SelectItem>
                            <SelectItem value="2000-5000">2000$ - 5000$</SelectItem>
                            <SelectItem value="5000+">5000$+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="form-section">
                    <h3 className="text-lg font-semibold text-dark-charcoal mb-4">Informations supplémentaires</h3>

                    <div className="form-field mb-4">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Détails de votre événement, besoins spéciaux, questions
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Décrivez votre vision pour l'événement, toute exigence spéciale, ou questions que vous pourriez avoir..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div className="form-field">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.newsletter}
                          onChange={(e) => handleInputChange("newsletter", e.target.checked)}
                          className="w-4 h-4 text-primary-red border-gray-300 rounded focus:ring-primary-red"
                        />
                        <span className="text-sm text-gray-700">
                          J'aimerais recevoir des conseils d'événements et des offres spéciales par email
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="form-submit">
                    <Button type="submit" className="bg-primary-red text-white px-8 py-3 text-lg">
                      Envoyer la demande →
                    </Button>

                    <p className="text-sm text-gray-600 mt-4">
                      Nous vous répondrons dans les 24 heures avec une soumission personnalisée pour votre événement.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
