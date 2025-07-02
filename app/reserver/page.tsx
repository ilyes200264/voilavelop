"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { H1, H2, P, PoppinsText } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, MapPin, Phone, Mail, Clock } from "lucide-react"
import { format } from "date-fns"
import { fr, enUS } from "date-fns/locale"
import { useI18n } from "@/lib/i18n"
import { usePackageTranslations } from "@/lib/packages-i18n"
import { packagesData } from "../forfaits/packages-data"

export default function BookingPage() {
  const { t, language } = useI18n();
  const { getAllPackages } = usePackageTranslations();
  
  // Use correct namespace for translations
  const translate = (key: string) => t(`reservation:${key}`);
  
  // Choose locale based on current language
  const dateLocale = language === 'fr' ? fr : enUS;
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    eventDate: "",
    guests: "",
    package: "",
    message: "",
    newsletter: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Redirect to thank you page
    window.location.href = "/merci";
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-28 pb-16 bg-accent-green/10">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Page Header */}
          <div className="text-center mb-12 p-8 bg-accent-green text-white rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" dangerouslySetInnerHTML={{ __html: translate('hero.title') }}></h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              {translate('hero.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Information */}
            <div className="contact-info lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold text-dark-charcoal mb-6">{translate('sidebar.needHelp.title')}</h2>

                <div className="contact-methods space-y-6">
                  <div className="contact-method flex items-start space-x-4">
                    <div className="method-icon bg-accent-green text-white p-3 rounded-full">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="method-details">
                      <h3 className="font-semibold text-dark-charcoal mb-1">{translate('sidebar.contact.address.label')}</h3>
                      <p className="text-gray-600 mb-2">
                        {translate('sidebar.contact.address.line1')}
                        <br />
                        {translate('sidebar.contact.address.line2')}
                      </p>
                    </div>
                  </div>

                  <div className="contact-method flex items-start space-x-4">
                    <div className="method-icon bg-accent-green text-white p-3 rounded-full">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="method-details">
                      <h3 className="font-semibold text-dark-charcoal mb-1">{translate('sidebar.contact.phone.label')}</h3>
                      <p className="text-gray-600 mb-1">
                        <a href="tel:+1-XXX-XXX-XXXX" className="hover:text-accent-green">
                          {translate('sidebar.contact.phone.value')}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-method flex items-start space-x-4">
                    <div className="method-icon bg-accent-green text-white p-3 rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="method-details">
                      <h3 className="font-semibold text-dark-charcoal mb-1">{translate('sidebar.contact.email.label')}</h3>
                      <p className="text-gray-600 mb-1">
                        <a href="mailto:voilavelo25@gmail.com" className="hover:text-accent-green">
                          voilavelo25@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-method flex items-start space-x-4">
                    <div className="method-icon bg-accent-green text-white p-3 rounded-full">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="method-details">
                      <h3 className="font-semibold text-dark-charcoal mb-1">{translate('sidebar.contact.hours.label')}</h3>
                      <p className="text-gray-600 mb-1">
                        {translate('sidebar.contact.hours.value')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-bold text-dark-charcoal mb-4">{translate('sidebar.packageHelp.title')}</h3>
                <p className="text-gray-600 mb-6">{translate('sidebar.packageHelp.description')}</p>
                <Button variant="outline" className="w-full border-accent-green text-accent-green hover:bg-accent-green hover:text-white" asChild>
                  <a href="/forfaits">{translate('sidebar.packageHelp.button')}</a>
                </Button>
              </div>
            </div>

            {/* Booking Form */}
            <div className="contact-form-section lg:col-span-3 bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-dark-charcoal mb-6">{translate('form.title')}</h2>

              <form className="quote-form space-y-8" onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="form-section">
                  <h3 className="text-lg font-semibold text-dark-charcoal mb-4">{translate('form.personalInfo.title')}</h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="form-field">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('form.firstName.label')} *
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder={translate('form.firstName.placeholder')}
                        className="w-full focus:ring-accent-green focus:border-accent-green"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('form.lastName.label')} *
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder={translate('form.lastName.placeholder')}
                        className="w-full focus:ring-accent-green focus:border-accent-green"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="form-field">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('form.email.label')} *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder={translate('form.email.placeholder')}
                        className="w-full focus:ring-accent-green focus:border-accent-green"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('form.phone.label')}
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder={translate('form.phone.placeholder')}
                        className="w-full focus:ring-accent-green focus:border-accent-green"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {translate('form.company.label')}
                    </label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder={translate('form.company.placeholder')}
                      className="w-full focus:ring-accent-green focus:border-accent-green"
                    />
                  </div>
                </div>

                {/* Event Information */}
                <div className="form-section border-t pt-6">
                  <h3 className="text-lg font-semibold text-dark-charcoal mb-4">{translate('form.eventInfo.title')}</h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="form-field">
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('form.eventType.label')} *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("eventType", value)}>
                        <SelectTrigger id="eventType" className="focus:ring-accent-green focus:border-accent-green">
                          <SelectValue placeholder={translate('form.eventType.placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">{translate('form.eventType.options.corporate')}</SelectItem>
                          <SelectItem value="private">{translate('form.eventType.options.private')}</SelectItem>
                          <SelectItem value="school">{translate('form.eventType.options.school')}</SelectItem>
                          <SelectItem value="festival">{translate('form.eventType.options.festival')}</SelectItem>
                          <SelectItem value="conference">{translate('form.eventType.options.conference')}</SelectItem>
                          <SelectItem value="other">{translate('form.eventType.options.other')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('form.eventDate.label')}
                      </label>
                      <div className="relative">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full h-10 justify-start text-left font-normal focus:ring-accent-green focus:border-accent-green">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>{formData.eventDate || translate('form.eventDate.placeholder')}</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar 
                              locale={dateLocale} 
                              mode="single"
                              selected={formData.eventDate ? new Date(formData.eventDate) : undefined}
                              onSelect={(date) => handleInputChange("eventDate", date ? format(date, 'yyyy-MM-dd') : '')}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="form-field">
                      <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('form.package.label')} *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("package", value)}>
                        <SelectTrigger id="package" className="focus:ring-accent-green focus:border-accent-green">
                          <SelectValue placeholder={translate('form.package.placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          {getAllPackages().map((package_) => (
                            <SelectItem key={package_.id} value={package_.id}>{package_.title}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                        {translate('form.guests.label')} *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("guests", value)}>
                        <SelectTrigger id="guests" className="focus:ring-accent-green focus:border-accent-green">
                          <SelectValue placeholder={translate('form.guests.placeholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="less-than-50">{translate('form.guests.options.lessThan50')}</SelectItem>
                          <SelectItem value="50-100">{translate('form.guests.options.50-100')}</SelectItem>
                          <SelectItem value="100-200">{translate('form.guests.options.100-200')}</SelectItem>
                          <SelectItem value="200-500">{translate('form.guests.options.200-500')}</SelectItem>
                          <SelectItem value="more-than-500">{translate('form.guests.options.moreThan500')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="form-section border-t pt-6">
                  <h3 className="text-lg font-semibold text-dark-charcoal mb-4">{translate('form.additionalInfo.title')}</h3>

                  <div className="form-field mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {translate('form.message.label')}
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder={translate('form.message.placeholder')}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full min-h-[100px] focus:ring-accent-green focus:border-accent-green"
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
                        {translate('form.newsletter')}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <div className="form-submit text-center">
                  <Button type="submit" className="bg-accent-green text-white px-8 py-3 hover:bg-accent-green/90">
                    {translate('form.submitButton')}
                  </Button>

                  <p className="text-sm text-gray-600 mt-4">
                    {translate('form.confirmation')}
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