"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function FaqPage() {
  const { t } = useI18n()
  const [openCategory, setOpenCategory] = useState<string | null>("general")
  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = t<any[]>('categories')

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

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {t('subtitle')}
            </p>

            {/* Search Bar */}
            <div className="search-bar relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={t('search.placeholder')}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="search-results mb-12">
              <h2 className="text-xl font-semibold text-dark-charcoal mb-4">
                {t('search.results')} ({filteredFaqs.length})
              </h2>
              {filteredFaqs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <div key={index} className="faq-item bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-start">
                        <div className="flex-1">
                          <span className="text-sm text-primary-red font-medium mb-1 block">{faq.category}</span>
                          <h3 className="text-lg font-semibold text-dark-charcoal mb-3">{faq.question}</h3>
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-light-gray p-6 rounded-lg text-center">
                  <p className="text-gray-600">{t('search.noResults')} "{searchQuery}"</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {t('search.tryDifferent')}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* FAQ Categories and Questions */}
          {!searchQuery && (
            <div className="faq-categories space-y-6">
              {faqCategories.map((category) => (
                <div key={category.id} className="faq-category">
                  <button
                    className={`category-header w-full flex items-center justify-between p-4 rounded-lg text-left ${
                      openCategory === category.id
                        ? "bg-primary-red text-white"
                        : "bg-light-gray text-dark-charcoal hover:bg-gray-200"
                    }`}
                    onClick={() => toggleCategory(category.id)}
                    aria-expanded={openCategory === category.id}
                  >
                    <h2 className="text-xl font-semibold">{category.name}</h2>
                    <span>
                      {openCategory === category.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  {openCategory === category.id && (
                    <div className="category-content mt-4 space-y-4">
                      {category.faqs.map((faq, index) => (
                        <div key={index} className="faq-item bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                          <h3 className="text-lg font-semibold text-dark-charcoal mb-3">{faq.question}</h3>
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Still Have Questions */}
          <div className="still-have-questions bg-light-gray rounded-xl p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-dark-charcoal mb-4">{t('stillHaveQuestions.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('stillHaveQuestions.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-primary-red text-white px-6 py-3">{t('stillHaveQuestions.contactButton')}</Button>
              </Link>
              <Link href="tel:+1-XXX-XXX-XXXX">
                <Button variant="outline" className="px-6 py-3">
                  {t('stillHaveQuestions.callButton')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}