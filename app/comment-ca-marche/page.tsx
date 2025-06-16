"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, ChevronUp, MapPin, Building, TreePine, Flag, Phone, ClipboardEdit, CheckSquare, PartyPopper, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function HowItWorksPage() {
  const { t } = useI18n()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const cities = t<any[]>('serviceAreas.cities', [])
  const cityIcons = [
    <MapPin className="h-12 w-12 text-accent-green" />,
    <Building className="h-12 w-12 text-accent-green" />,
    <TreePine className="h-12 w-12 text-accent-green" />,
    <Flag className="h-12 w-12 text-accent-green" />
  ]
  
  const serviceCities = (cities || []).map((city, index) => ({
    ...city,
    icon: cityIcons[index]
  }))

  const steps = t<any[]>('bookingProcess.steps', [])
  const stepIcons = [
    <Phone className="h-12 w-12 text-white" />,
    <ClipboardEdit className="h-12 w-12 text-white" />,
    <CheckSquare className="h-12 w-12 text-white" />,
    <PartyPopper className="h-12 w-12 text-white" />
  ]
  
  const processSteps = (steps || []).map((step, index) => ({
    ...step,
    icon: stepIcons[index]
  }))

  const faqItems = t<any[]>('faq.items', [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#E91E63] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{animationDuration: '0.8s'}}>
              {t('hero.title', "Comment ça marche")}
            </h1>
            <div className="red-line-separator w-16 h-1 bg-white mx-auto mb-8 animate-scale-in" style={{animationDuration: '1s', animationDelay: '0.3s', animationFillMode: 'both'}}></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up" style={{animationDuration: '0.8s', animationDelay: '0.5s', animationFillMode: 'both'}}>
              {t('hero.description', "Découvrez comment notre service de vélos à smoothie fonctionne, de la réservation à l'installation et l'animation lors de votre événement.")}
            </p>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 bg-[#673AB7] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('serviceAreas.title', "Zones de service")}
              </h2>
              <div className="red-line-separator w-16 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
                Nous desservons des événements de toute taille à Montréal, Laval, Québec et Ottawa.
                <br />
                Contactez-nous pour vérifier la disponibilité dans votre secteur.
              </p>
            </div>

            <div className="service-cities grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(serviceCities || []).map((city, index) => (
                <div
                  key={index}
                  className="city-card text-center p-8 bg-[#7E57C2] rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{animationDuration: '0.6s', animationDelay: `${0.3 + index * 0.15}s`, animationFillMode: 'both'}}
                >
                  <div className="text-5xl mb-6 text-white">{city.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{city.name}</h3>
                  <p className="text-white">{city.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Package Selection Section */}
        <section className="py-20 bg-[#2196F3] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choisissez votre forfait
              </h2>
              <div className="red-line-separator w-16 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
                Choisissez parmi notre gamme populaire de forfaits ou créez votre propre forfait sur mesure. 
                Tous les forfaits incluent l'option d'un service de livraison personnalisé à votre lieu.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="package-preview bg-[#64B5F6] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-white mb-6">Forfaits populaires</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-3">
                    <span className="text-white">•</span>
                    <span className="text-white">La petite Koki</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-white">•</span>
                    <span className="text-white">Pop Solo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-white">•</span>
                    <span className="text-white">Double Fun</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-white">•</span>
                    <span className="text-white">Ready Set Blend</span>
                  </li>
                </ul>
                <Link href="/forfaits">
                  <Button className="w-full bg-white text-[#2196F3] hover:bg-white/90">
                    Voir tous les forfaits <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="package-preview bg-[#64B5F6] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-white mb-6">Forfait sur mesure</h3>
                <p className="text-white mb-6">
                  Créez un forfait personnalisé adapté à vos besoins spécifiques et à votre budget.
                </p>
                <div className="flex-grow"></div>
                <Link href="/comment-ca-marche/build-your-event">
                  <Button className="w-full bg-white text-[#2196F3] hover:bg-white/90">
                    Créer votre événement <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="package-preview bg-[#64B5F6] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-bold text-white mb-6">Service inclus</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-white">•</span>
                    <span className="text-white">Livraison personnalisée</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-white">•</span>
                    <span className="text-white">Installation complète</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-white">•</span>
                    <span className="text-white">Animation professionnelle</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-white">•</span>
                    <span className="text-white">Nettoyage et désinstallation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link href="/contact">
                <Button className="bg-white text-[#2196F3] px-10 py-4 text-lg font-bold hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Contactez-nous pour une soumission <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Booking Process Section */}
        <section className="py-20 bg-[#4CAF50] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('bookingProcess.title', "Processus de réservation")}
              </h2>
              <div className="red-line-separator w-16 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
                {t('bookingProcess.subtitle', "Simple, rapide et sans stress - voici comment réserver votre expérience Voilà Vélo")}
              </p>
            </div>

            <div className="process-steps grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {(processSteps || []).map((step, index) => (
                <div 
                  key={index} 
                  className="step text-center bg-[#81C784] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative animate-fade-in-up" 
                  style={{animationDuration: '0.7s', animationDelay: `${0.4 + index * 0.2}s`, animationFillMode: 'both'}}
                >
                  <div className="step-number absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white text-[#4CAF50] w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-[#4CAF50]">
                    {step.number}
                  </div>
                  <div className="step-icon text-5xl mt-4 mb-6">{step.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-20">
              <Link href="/contact">
                <Button className="bg-white text-[#4CAF50] px-10 py-4 text-lg font-bold hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                  {t('bookingProcess.ctaButton', "Réserver maintenant")} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#FF9800] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('faq.title', "Questions fréquemment posées")}
              </h2>
              <div className="red-line-separator w-16 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
                {t('faq.subtitle', "Trouvez des réponses à toutes vos questions concernant nos services de vélos à smoothie")}
              </p>
            </div>

            <div className="faq-list max-w-4xl mx-auto bg-[#FFB74D] p-8 rounded-2xl shadow-lg">
              {(faqItems || []).map((item, index) => (
                <div 
                  key={index} 
                  className="faq-item border-b border-white/30 last:border-b-0 transition-colors rounded-lg animate-fade-in-up" 
                  style={{animationDuration: '0.5s', animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both'}}
                >
                  <button
                    className="faq-question w-full text-left py-6 px-4 flex justify-between items-center text-white hover:text-white/80 transition-colors"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                  >
                    <h3 className="text-lg font-bold pr-4">{item.question}</h3>
                    <span className="faq-toggle text-[#FF9800] flex-shrink-0 bg-white p-2 rounded-full shadow-md">
                      {openFaq === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="faq-answer pb-6 px-4 animate-fade-in-up">
                      <p className="text-white leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/comment-ca-marche/faq">
                <Button className="bg-white text-[#FF9800] hover:bg-white/90">
                  Voir toutes les questions fréquentes <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-[#9C27B0] text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="cta-content">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t('faq.notFoundQuestion', "Vous n'avez pas trouvé la réponse à votre question?")}
                </h2>
                <div className="red-line-separator w-16 h-1 bg-white mb-6"></div>
                <p className="text-xl mb-6">
                  {t('faq.notFoundDescription', "Contactez-nous directement et notre équipe vous répondra dans les plus brefs délais. Nous sommes là pour vous aider à créer l'événement parfait!")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="bg-white text-[#9C27B0] px-8 py-3 font-bold hover:bg-white/90">
                      {t('faq.contactButton', "Nous contacter")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="tel:+1-XXX-XXX-XXXX">
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-[#9C27B0] px-8 py-3 font-bold"
                    >
                      {t('faq.callButton', "Appelez-nous")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative">
                <div className="absolute -top-10 -right-10 text-6xl opacity-50">❝</div>
                <div className="testimonial-content bg-[#BA68C8] p-6 rounded-xl">
                  <p className="text-lg italic mb-4">
                    {t('faq.testimonial.text', "L'équipe de Voilà Vélo Fruité a été très réactive et professionnelle. Ils ont répondu à toutes mes questions et ont créé une expérience parfaitement adaptée à nos besoins spécifiques.")}
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white rounded-full mr-3"></div>
                    <div>
                      <p className="font-bold">{t('faq.testimonial.name', "Sophie Tremblay")}</p>
                      <p className="text-sm">{t('faq.testimonial.title', "Organisatrice d'événements")}</p>
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