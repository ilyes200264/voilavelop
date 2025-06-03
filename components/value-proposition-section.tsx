import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ValuePropositionSection() {
  return (
    <section className="value-proposition bg-primary-red text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="value-prop-content grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="value-prop-image">
            <div className="image-container relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Personnes pédalant joyeusement sur les vélos smoothie Voilà Vélo"
                width={800}
                height={600}
                className="featured-image rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="value-prop-text space-y-6">
            <h2 className="section-title text-4xl md:text-5xl font-bold leading-tight">
              Créez vos smoothies à énergie humaine!
            </h2>

            <h5 className="section-subtitle text-xl md:text-2xl text-secondary-yellow font-medium">
              "Une expérience saine et amusante pour tous les âges"
            </h5>

            <div className="section-content space-y-4">
              <p className="intro-paragraph text-lg leading-relaxed">
                Voilà Vélo Fruité est une entreprise d'événements pop-up qui promeut la santé et le bien-être en
                utilisant nos vélos mélangeurs fabriqués au Québec.
              </p>

              <p className="detail-paragraph text-base leading-relaxed opacity-90">
                Faites de votre prochain événement un succès amusant et sain! Nous avons de l'expérience dans
                l'organisation d'événements pop-up uniques pour répondre à vos besoins. Choisissez l'un de nos forfaits
                populaires ou contactez-nous pour une soumission avant qu'on soit tous pédalés!
              </p>
            </div>

            <div className="section-cta pt-4">
              <Button variant="outline" size="lg" className="bg-white text-primary-red border-white hover:bg-gray-100">
                Demander maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
