"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function TestimonialsSection() {
  const { t } = useI18n();
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      text: t('home.testimonials.items.testimonial1.text'),
      author: t('home.testimonials.items.testimonial1.author'),
      title: t('home.testimonials.items.testimonial1.title'),
      date: t('home.testimonials.items.testimonial1.date'),
      rating: 5,
    },
    {
      id: 2,
      text: t('home.testimonials.items.testimonial2.text'),
      author: t('home.testimonials.items.testimonial2.author'),
      title: t('home.testimonials.items.testimonial2.title'),
      date: t('home.testimonials.items.testimonial2.date'),
      rating: 5,
    },
    {
      id: 3,
      text: t('home.testimonials.items.testimonial3.text'),
      author: t('home.testimonials.items.testimonial3.author'),
      title: t('home.testimonials.items.testimonial3.title'),
      date: t('home.testimonials.items.testimonial3.date'),
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonialData = testimonials[currentTestimonial]

  return (
    <section className="testimonials-section py-16 md:py-24 bg-creative-purple/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-creative-purple">{t('home.testimonials.title')}</h2>
          <div className="w-24 h-1 bg-creative-purple mx-auto my-4"></div>
          <p className="text-lg text-dark-charcoal font-medium">{t('home.testimonials.subtitle')}</p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-creative-purple/10 -z-10"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-creative-purple/10 -z-10"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-creative-purple/10 -z-10"></div>

        <div className="testimonials-carousel max-w-4xl mx-auto">
          <div className="testimonial-card bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg border-t-4 border-t-creative-purple transform -rotate-1 hover:rotate-0 transition-all duration-300">
            <div className="testimonial-content space-y-6">
              {/* Stars Rating */}
              <div className="stars-rating flex justify-center space-x-1">
                {[...Array(currentTestimonialData.rating)].map((_, i) => (
                  <span key={i} className="star text-secondary-yellow text-2xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <div className="quote-marks text-creative-purple text-5xl font-serif leading-none mb-4">"</div>
              <blockquote className="testimonial-text text-lg md:text-xl text-dark-charcoal leading-relaxed">
                {currentTestimonialData.text}
              </blockquote>
              <div className="quote-marks text-creative-purple text-5xl font-serif leading-none rotate-180 mt-4">"</div>

              {/* Author Information */}
              <div className="testimonial-author flex flex-col items-center space-y-2">
                <div className="author-image">
                  <div className="w-20 h-20 bg-creative-purple rounded-full flex items-center justify-center ring-4 ring-creative-purple/20">
                    <span className="text-white font-bold text-2xl">{currentTestimonialData.author.charAt(0)}</span>
                  </div>
                </div>
                <div className="author-details text-center">
                  <h5 className="author-name font-semibold text-dark-charcoal text-lg">
                    {currentTestimonialData.author}
                  </h5>
                  <p className="author-title text-gray-600">{currentTestimonialData.title}</p>
                  <p className="testimonial-date text-sm text-gray-500">{currentTestimonialData.date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="carousel-controls flex items-center justify-center space-x-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="carousel-btn prev p-3 rounded-full bg-creative-purple text-white hover:bg-purple-700 transition-colors shadow-md"
              aria-label={t('home.testimonials.previous')}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="carousel-dots flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`dot w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-creative-purple" : "bg-gray-300"
                  }`}
                  aria-label={`${t('home.testimonials.goTo')} ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="carousel-btn next p-3 rounded-full bg-creative-purple text-white hover:bg-purple-700 transition-colors shadow-md"
              aria-label={t('home.testimonials.next')}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
