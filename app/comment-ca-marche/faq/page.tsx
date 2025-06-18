"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function FaqPage() {
  const { t } = useI18n("faq")
  const [openCategory, setOpenCategory] = useState<string | null>("general")
  const [searchQuery, setSearchQuery] = useState("")

  // Convert questions from the JSON structure to categorized format
  const categoriesObj = t<Record<string, string>>('categories', {})
  const questions = t<any[]>('questions', [])
  
  // Group questions by category
  const faqCategories = Object.keys(categoriesObj).map(categoryId => {
    return {
      id: categoryId,
      name: categoriesObj[categoryId],
      faqs: questions.filter(q => q.category === categoryId)
    }
  })

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

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#9C27B0] text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{animationDuration: '0.8s'}}>
              {t('title', "Questions fréquemment posées")}
            </h1>
            <div className="red-line-separator w-16 h-1 bg-white mx-auto mb-8 animate-scale-in" style={{animationDuration: '1s', animationDelay: '0.3s', animationFillMode: 'both'}}></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{animationDuration: '0.8s', animationDelay: '0.5s', animationFillMode: 'both'}}>
              {t('subtitle', "Trouvez des réponses à toutes vos questions concernant nos services de vélos à smoothie")}
            </p>

            {/* Search Bar */}
            <div className="search-bar relative max-w-xl mx-auto animate-fade-in-up" style={{animationDuration: '0.8s', animationDelay: '0.7s', animationFillMode: 'both'}}>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#9C27B0]" />
              </div>
              <input
                type="text"
                placeholder={t('search.placeholder', "Rechercher une question...")}
                className="w-full pl-12 pr-4 py-4 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white shadow-lg"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Search Results */}
            {searchQuery && (
              <div className="search-results mb-12 animate-fade-in-up" style={{animationDuration: '0.5s'}}>
                <h2 className="text-2xl font-bold text-[#9C27B0] mb-6 flex items-center">
                  {t('search.results', "Résultats de recherche")} 
                  <span className="ml-3 bg-[#9C27B0] text-white text-sm px-3 py-1 rounded-full">
                    {filteredFaqs.length}
                  </span>
                </h2>
                {filteredFaqs.length > 0 ? (
                  <div className="space-y-4">
                    {filteredFaqs.map((faq, index) => (
                      <div 
                        key={index} 
                        className="faq-item bg-white p-6 rounded-lg shadow-md border-l-4 border-l-[#9C27B0] hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                        style={{animationDuration: '0.5s', animationDelay: `${0.1 + index * 0.05}s`, animationFillMode: 'both'}}
                      >
                        <div className="flex items-start">
                          <div className="flex-1">
                            <span className="text-sm text-[#9C27B0] font-medium mb-1 block">{faq.category}</span>
                            <h3 className="text-lg font-semibold text-[#9C27B0] mb-3">{faq.question}</h3>
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 p-8 rounded-lg text-center border border-gray-200 shadow-sm">
                    <p className="text-gray-600 text-lg">{t('search.noResults', "Aucun résultat trouvé pour")} <span className="font-semibold">"{searchQuery}"</span></p>
                    <p className="text-gray-500 mt-2">
                      {t('search.tryDifferent', "Essayez avec des termes différents ou parcourez les catégories ci-dessous")}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* FAQ Categories and Questions */}
            {!searchQuery && (
              <div className="faq-categories space-y-8">
                {faqCategories.map((category, categoryIndex) => (
                  <div 
                    key={category.id} 
                    className="faq-category animate-fade-in-up" 
                    style={{animationDuration: '0.7s', animationDelay: `${0.2 + categoryIndex * 0.1}s`, animationFillMode: 'both'}}
                  >
                    <button
                      className={`category-header w-full flex items-center justify-between p-5 rounded-lg text-left shadow-md transition-all duration-300 ${
                        openCategory === category.id
                          ? "bg-[#9C27B0] text-white"
                          : "bg-gray-50 text-dark-charcoal hover:bg-gray-100"
                      }`}
                      onClick={() => toggleCategory(category.id)}
                      aria-expanded={openCategory === category.id}
                    >
                      <h2 className="text-xl font-bold">{category.name}</h2>
                      <span className={`${openCategory === category.id ? "bg-white text-[#9C27B0]" : "bg-[#9C27B0]/10 text-[#9C27B0]"} p-2 rounded-full`}>
                        {openCategory === category.id ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </span>
                    </button>

                    {openCategory === category.id && (
                      <div className="category-content mt-6 space-y-4">
                        {category.faqs.map((faq, index) => (
                          <div 
                            key={index} 
                            className="faq-item bg-white p-6 rounded-lg shadow-md border-l-4 border-l-[#9C27B0] hover:shadow-lg transition-all duration-300 animate-fade-in-up" 
                            style={{animationDuration: '0.5s', animationDelay: `${0.1 + index * 0.05}s`, animationFillMode: 'both'}}
                          >
                            <h3 className="text-lg font-semibold text-[#9C27B0] mb-3">{faq.question}</h3>
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-[#9C27B0] text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="cta-content">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('stillHaveQuestions.title', "Vous avez encore des questions?")}</h2>
                <div className="red-line-separator w-16 h-1 bg-white mb-6"></div>
                <p className="text-xl mb-6">
                  {t('stillHaveQuestions.description', "Notre équipe est là pour vous aider! Contactez-nous directement pour toute question spécifique.")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="bg-white text-[#9C27B0] px-8 py-3 font-bold hover:bg-white/90">
                      {t('stillHaveQuestions.contactButton', "Nous contacter")}
                    </Button>
                  </Link>
                  <Link href="tel:+1-XXX-XXX-XXXX">
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-[#9C27B0] px-8 py-3 font-bold"
                    >
                      {t('stillHaveQuestions.callButton', "Appelez-nous")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative">
                <div className="absolute -top-10 -right-10 text-6xl opacity-50">❝</div>
                <div className="testimonial-content bg-[#BA68C8] p-6 rounded-xl">
                  <p className="text-lg italic mb-4">
                    "Les réponses fournies par l'équipe de Voilà Vélo ont été très claires et utiles. Ils ont pris le temps de répondre à toutes mes questions concernant leur service de vélos à smoothie pour mon événement."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white rounded-full mr-3"></div>
                    <div>
                      <p className="font-bold">Marie Dubois</p>
                      <p className="text-sm">Coordonnatrice d'événements</p>
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