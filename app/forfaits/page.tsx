import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ForfaitsPage() {
  const packages = [
    {
      id: "la-petite-koki",
      title: "La petite Koki",
      tagline: "Le favori de tous les temps des enfants!",
      description: "Parfait pour les anniversaires, les graduations de garderie ou les festivals familiaux.",
      ageRange: "5-10 ans",
      duration: "1-2 heures",
      capacity: "25-50 smoothies",
      startingPrice: "299",
      image: "/placeholder.svg?height=300&width=400",
      color: "border-t-primary-red",
    },
    {
      id: "pop-solo",
      title: "Pop Solo",
      tagline: "Un succès garanti avec les ados, adultes et familles!",
      description: "Parfait pour les événements scolaires, les fêtes de bureau ou tout rassemblement festif.",
      ageRange: "10+ ans",
      duration: "1.5-2.5 heures",
      capacity: "50-75 smoothies",
      startingPrice: "449",
      image: "/placeholder.svg?height=300&width=400",
      color: "border-t-secondary-yellow",
    },
    {
      id: "double-fun",
      title: "Double Fun",
      tagline: "Deux fois plus de vélos = deux fois plus d'énergie!",
      description: "Parfait pour les festivals communautaires, les activations de marque, les collectes de fonds.",
      ageRange: "Tous âges",
      duration: "2-4 heures",
      capacity: "100-300 smoothies",
      startingPrice: "699",
      image: "/placeholder.svg?height=300&width=400",
      color: "border-t-trust-blue",
    },
    {
      id: "ready-set-blend",
      title: "Ready Set Blend",
      tagline: "Compétition amicale et team building!",
      description: "Parfait pour les événements corporatifs et les activités de consolidation d'équipe.",
      ageRange: "16+ ans",
      duration: "2-3 heures",
      capacity: "75-150 smoothies",
      startingPrice: "599",
      image: "/placeholder.svg?height=300&width=400",
      color: "border-t-accent-green",
    },
    {
      id: "defi-parent-enfant",
      title: "Défi Parent-Enfant",
      tagline: "Créez des liens familiaux en pédalant ensemble!",
      description: "Une expérience intergénérationnelle parfaite pour les événements familiaux.",
      ageRange: "Familles",
      duration: "1.5-2 heures",
      capacity: "40-80 smoothies",
      startingPrice: "399",
      image: "/placeholder.svg?height=300&width=400",
      color: "border-t-creative-purple",
    },
    {
      id: "la-smoothie-parade",
      title: "La Smoothie Parade",
      tagline: "L'expérience ultime pour les grands événements!",
      description: "Parfait pour les festivals, les foires et les grands rassemblements communautaires.",
      ageRange: "Tous âges",
      duration: "4-8 heures",
      capacity: "300-500 smoothies",
      startingPrice: "999",
      image: "/placeholder.svg?height=300&width=400",
      color: "border-t-primary-red",
    },
    {
      id: "signature",
      title: "Forfait Signature",
      tagline: "Entièrement personnalisé pour votre marque!",
      description: "Solution premium avec personnalisation complète pour les activations de marque haut de gamme.",
      ageRange: "Sur mesure",
      duration: "Flexible",
      capacity: "Sur mesure",
      startingPrice: "Sur devis",
      image: "/placeholder.svg?height=300&width=400",
      color: "border-t-dark-charcoal",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Page Hero */}
        <section className="page-hero bg-gradient-to-br from-primary-red to-secondary-yellow text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Forfaits</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Choisissez le forfait parfait pour votre événement. De l'intime au spectaculaire, nous avons l'expérience
              qu'il vous faut.
            </p>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`package-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${pkg.color} border-t-4`}
                >
                  <div className="package-image">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="package-header mb-4">
                      <h3 className="text-xl font-bold text-dark-charcoal mb-2">{pkg.title}</h3>
                      <p className="text-primary-red font-semibold mb-3">{pkg.tagline}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{pkg.description}</p>
                    </div>

                    <div className="package-badges flex flex-wrap gap-2 mb-4">
                      <span className="badge bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {pkg.ageRange}
                      </span>
                      <span className="badge bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {pkg.duration}
                      </span>
                      <span className="badge bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {pkg.capacity}
                      </span>
                    </div>

                    <div className="package-footer flex items-center justify-between">
                      <div className="price">
                        <span className="text-sm text-gray-600">À partir de</span>
                        <div className="text-2xl font-bold text-dark-charcoal">
                          {pkg.startingPrice === "Sur devis" ? pkg.startingPrice : `${pkg.startingPrice}$`}
                        </div>
                      </div>

                      <Link href={`/forfaits/${pkg.id}`}>
                        <Button variant="outline" className="hover:bg-primary-red hover:text-white">
                          En savoir plus
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-dark-charcoal mb-4">Besoin d'aide pour choisir?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre équipe peut vous aider à sélectionner le forfait parfait pour votre événement ou créer une solution
              entièrement personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-primary-red text-white px-8 py-3">Demander une soumission</Button>
              </Link>
              <Link href="tel:+1-XXX-XXX-XXXX">
                <Button variant="outline" className="px-8 py-3">
                  Appelez-nous: XXX-XXX-XXXX
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
