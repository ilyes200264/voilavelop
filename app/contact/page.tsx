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

      <main className="pt-20">
        {/* Contact Hero */}
        <section className="contact-hero py-16 bg-gradient-to-br from-primary-red to-secondary-yellow text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("title")}</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* Contact Main */}
        <section className="contact-main py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="contact-info lg:col-span-2">
                <h2 className="text-2xl font-bold text-dark-charcoal mb-8">{t("contactInfo.title")}</h2>

                <div className="contact-methods space-y-6">
                  <div className="contact-method flex items-start space-x-4">
                    <div className="method-icon bg-primary-red text-white p-3 rounded-full">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="method-details">
                      <h3 className="font-semibold text-dark-charcoal mb-1">{t("contactInfo.address.title")}</h3>
                      <p className="text-gray-600 mb-2">
                        {t("contactInfo.address.line1")}
                        <br />
                        {t("contactInfo.address.line2")}
                      </p>
                      <a href="#" target="_blank" className="text-primary-red hover:underline text-sm" rel="noreferrer">
                        {t("contactInfo.address.viewMap")}
                      </a>
                    </div>
                  </div>

                  <div className="contact-method flex items-start space-x-4">
                    <div className="method-icon bg-secondary-yellow text-dark-charcoal p-3 rounded-full">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="method-details">
                      <h3 className="font-semibold text-dark-charcoal mb-1">{t("contactInfo.phone.title")}</h3>
                      <p className="text-gray-600 mb-1">
                        <a href="tel:+1-XXX-XXX-XXXX" className="hover:text-primary-red">
                          {t("contactInfo.phone.number")}
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">{t("contactInfo.phone.hours")}</p>
                    </div>
                  </div>

                  <div className="contact-method flex items-start space-x-4">
                    <div className="method-icon bg-accent-green text-white p-3 rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="method-details">
                      <h3 className="font-semibold text-dark-charcoal mb-1">{t("contactInfo.email.title")}</h3>
                      <p className="text-gray-600 mb-1">
                        <a href="mailto:info@voilavelo.ca" className="hover:text-primary-red">
                          {t("contactInfo.email.address")}
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">{t("contactInfo.email.responseTime")}</p>
                    </div>
                  </div>
                </div>

                <div className="service-areas-summary mt-8 p-6 bg-light-gray rounded-xl">
                  <h3 className="font-semibold text-dark-charcoal mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary-red" />
                    {t("contactInfo.serviceAreas.title")}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {t<string[]>("contactInfo.serviceAreas.areas").map((area, index) => (
                      <li key={index}>• {area}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-section lg:col-span-3">
                <h2 className="text-2xl font-bold text-dark-charcoal mb-8">{t("contactForm.title")}</h2>

                <form className="quote-form space-y-8" onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="form-section">
                    <h3 className="text-lg font-semibold text-dark-charcoal mb-4">{t("contactForm.personalInfo.title")}</h3>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="form-field">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contactForm.personalInfo.firstName")} *
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
                          {t("contactForm.personalInfo.lastName")} *
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
                          {t("contactForm.personalInfo.email")} *
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
                          {t("contactForm.personalInfo.phone")}
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
                        {t("contactForm.personalInfo.company")}
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
                    <h3 className="text-lg font-semibold text-dark-charcoal mb-4">{t("contactForm.eventInfo.title")}</h3>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="form-field">
                        <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contactForm.eventInfo.eventType.label")} *
                        </label>
                        <Select onValueChange={(value) => handleInputChange("eventType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t("contactForm.eventInfo.eventType.placeholder")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="corporate">{t("contactForm.eventInfo.eventType.options.corporate")}</SelectItem>
                            <SelectItem value="school">{t("contactForm.eventInfo.eventType.options.school")}</SelectItem>
                            <SelectItem value="festival">{t("contactForm.eventInfo.eventType.options.festival")}</SelectItem>
                            <SelectItem value="wedding">{t("contactForm.eventInfo.eventType.options.wedding")}</SelectItem>
                            <SelectItem value="birthday">{t("contactForm.eventInfo.eventType.options.birthday")}</SelectItem>
                            <SelectItem value="other">{t("contactForm.eventInfo.eventType.options.other")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contactForm.eventInfo.eventDate")}
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
                          {t("contactForm.eventInfo.guests.label")} *
                        </label>
                        <Select onValueChange={(value) => handleInputChange("guests", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t("contactForm.eventInfo.guests.placeholder")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-25">{t("contactForm.eventInfo.guests.options.1-25")}</SelectItem>
                            <SelectItem value="26-50">{t("contactForm.eventInfo.guests.options.26-50")}</SelectItem>
                            <SelectItem value="51-100">{t("contactForm.eventInfo.guests.options.51-100")}</SelectItem>
                            <SelectItem value="101-200">{t("contactForm.eventInfo.guests.options.101-200")}</SelectItem>
                            <SelectItem value="200+">{t("contactForm.eventInfo.guests.options.200+")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contactForm.eventInfo.location.label")} *
                        </label>
                        <Select onValueChange={(value) => handleInputChange("location", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t("contactForm.eventInfo.location.placeholder")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="montreal">{t("contactForm.eventInfo.location.options.montreal")}</SelectItem>
                            <SelectItem value="laval">{t("contactForm.eventInfo.location.options.laval")}</SelectItem>
                            <SelectItem value="quebec">{t("contactForm.eventInfo.location.options.quebec")}</SelectItem>
                            <SelectItem value="ottawa">{t("contactForm.eventInfo.location.options.ottawa")}</SelectItem>
                            <SelectItem value="other">{t("contactForm.eventInfo.location.options.other")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="form-field">
                        <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contactForm.eventInfo.package.label")}
                        </label>
                        <Select onValueChange={(value) => handleInputChange("package", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t("contactForm.eventInfo.package.placeholder")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="la-petite-koki">{t("contactForm.eventInfo.package.options.la-petite-koki")}</SelectItem>
                            <SelectItem value="pop-solo">{t("contactForm.eventInfo.package.options.pop-solo")}</SelectItem>
                            <SelectItem value="double-fun">{t("contactForm.eventInfo.package.options.double-fun")}</SelectItem>
                            <SelectItem value="ready-set-blend">{t("contactForm.eventInfo.package.options.ready-set-blend")}</SelectItem>
                            <SelectItem value="defi-parent-enfant">{t("contactForm.eventInfo.package.options.defi-parent-enfant")}</SelectItem>
                            <SelectItem value="la-smoothie-parade">{t("contactForm.eventInfo.package.options.la-smoothie-parade")}</SelectItem>
                            <SelectItem value="signature">{t("contactForm.eventInfo.package.options.signature")}</SelectItem>
                            <SelectItem value="custom">{t("contactForm.eventInfo.package.options.custom")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contactForm.eventInfo.budget.label")}
                        </label>
                        <Select onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t("contactForm.eventInfo.budget.placeholder")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-500">{t("contactForm.eventInfo.budget.options.under-500")}</SelectItem>
                            <SelectItem value="500-1000">{t("contactForm.eventInfo.budget.options.500-1000")}</SelectItem>
                            <SelectItem value="1000-2000">{t("contactForm.eventInfo.budget.options.1000-2000")}</SelectItem>
                            <SelectItem value="2000-5000">{t("contactForm.eventInfo.budget.options.2000-5000")}</SelectItem>
                            <SelectItem value="5000+">{t("contactForm.eventInfo.budget.options.5000+")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="form-section">
                    <h3 className="text-lg font-semibold text-dark-charcoal mb-4">{t("contactForm.additionalInfo.title")}</h3>

                    <div className="form-field mb-4">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contactForm.additionalInfo.message.label")}
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder={t("contactForm.additionalInfo.message.placeholder")}
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
                          {t("contactForm.additionalInfo.newsletter")}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="form-submit">
                    <Button type="submit" className="bg-primary-red text-white px-8 py-3 text-lg">
                      {t("contactForm.submit.button")}
                    </Button>

                    <p className="text-sm text-gray-600 mt-4">
                      {t("contactForm.submit.confirmation")}
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
