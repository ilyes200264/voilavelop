"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, ChevronUp, MapPin, Building, TreePine, Flag, Phone, ClipboardEdit, CheckSquare, PartyPopper } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function HowItWorksPage() {
  const { t } = useI18n()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const cities = t<any[]>('serviceAreas.cities')
  const cityIcons = [
    <MapPin className="h-12 w-12 text-primary-red" />,
    <Building className="h-12 w-12 text-primary-red" />,
    <TreePine className="h-12 w-12 text-primary-red" />,
    <Flag className="h-12 w-12 text-primary-red" />
  ]
  
  const serviceCities = cities.map((city, index) => ({
    ...city,
    icon: cityIcons[index]
  }))

  const steps = t<any[]>('bookingProcess.steps')
  const stepIcons = [
    <Phone className="h-12 w-12 text-primary-red" />,
    <ClipboardEdit className="h-12 w-12 text-primary-red" />,
    <CheckSquare className="h-12 w-12 text-primary-red" />,
    <PartyPopper className="h-12 w-12 text-primary-red" />
  ]
  
  const processSteps = steps.map((step, index) => ({
    ...step,
    icon: stepIcons[index]
  }))

  const faqItems = t<any[]>('faq.items')

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{animationDuration: '0.8s'}}>{t('hero.title')}</h1>
            <div className="red-line-separator w-16 h-1 bg-white mx-auto mb-8 animate-scale-in" style={{animationDuration: '1s', animationDelay: '0.3s', animationFillMode: 'both'}}></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up" style={{animationDuration: '0.8s', animationDelay: '0.5s', animationFillMode: 'both'}}>
              {t('hero.description')}
            </p>
          </div>
        </section>

        {/* Service Areas */}
        <section className="service-areas py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">{t('serviceAreas.title')}</h2>
              <div className="red-line-separator w-16 h-1 bg-primary-red mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                {t('serviceAreas.subtitle')}
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
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">{t('bookingProcess.title')}</h2>
              <div className="red-line-separator w-16 h-1 bg-primary-red mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                {t('bookingProcess.subtitle')}
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
                <Button className="bg-primary-red text-white px-10 py-4 text-lg font-bold hover:bg-primary-red/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">{t('bookingProcess.ctaButton')}</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">{t('faq.title')}</h2>
              <div className="red-line-separator w-16 h-1 bg-primary-red mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {t('faq.subtitle')}
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
                  {t('faq.notFoundQuestion')}
                </h3>
                <div className="contactRedLine w-16 h-1 bg-white mb-6"></div>
                <p className="text-xl mb-6 opacity-90">
                  {t('faq.notFoundDescription')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="bg-white text-primary-red px-8 py-3 font-bold hover:bg-gray-100">{t('faq.contactButton')}</Button>
                  </Link>
                  <Link href="tel:+1-XXX-XXX-XXXX">
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-primary-red px-8 py-3 font-bold"
                    >
                      {t('faq.callButton')}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative">
                <div className="absolute -top-10 -right-10 text-6xl opacity-20">❝</div>
                <div className="testimonial-content bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <p className="text-lg italic mb-4">{t('faq.testimonial.text')}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/30 rounded-full mr-3"></div>
                    <div>
                      <p className="font-bold">{t('faq.testimonial.name')}</p>
                      <p className="text-sm">{t('faq.testimonial.title')}</p>
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
