"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      text: "Notre événement communautaire a eu beaucoup plus de succès grâce aux vélos. C'est la 3e année que nous les louons... merci beaucoup!",
      author: "Béatrice",
      title: "Organisatrice d'événement",
      date: "Décembre 2024",
      rating: 5,
    },
    {
      id: 2,
      text: "L'équipe de Voilà Vélo a transformé notre événement corporatif en une expérience inoubliable. Nos employés parlent encore de cette journée!",
      author: "Marc-André",
      title: "Directeur RH",
      date: "Novembre 2024",
      rating: 5,
    },
    {
      id: 3,
      text: "Parfait pour notre festival familial! Les enfants ont adoré pédaler pour créer leurs smoothies. Une activité à la fois amusante et éducative.",
      author: "Sophie",
      title: "Coordonnatrice événements",
      date: "Octobre 2024",
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
    <section className="testimonials-section py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-dark-charcoal">Témoignages</h2>
        </div>

        <div className="testimonials-carousel max-w-4xl mx-auto">
          <div className="testimonial-card bg-light-gray rounded-2xl p-8 md:p-12 text-center">
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
              <blockquote className="testimonial-text text-lg md:text-xl text-dark-charcoal leading-relaxed italic">
                "{currentTestimonialData.text}"
              </blockquote>

              {/* Author Information */}
              <div className="testimonial-author flex flex-col items-center space-y-2">
                <div className="author-image">
                  <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{currentTestimonialData.author.charAt(0)}</span>
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
              className="carousel-btn prev p-3 rounded-full bg-primary-red text-white hover:bg-red-600 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="carousel-dots flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`dot w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary-red" : "bg-gray-300"
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="carousel-btn next p-3 rounded-full bg-primary-red text-white hover:bg-red-600 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
