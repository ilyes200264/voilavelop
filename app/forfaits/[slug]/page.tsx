import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"

interface PackagePageProps {
  params: Promise<{ slug: string }>
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params

  // Mock package data - in real app, this would come from a CMS or database
  const packageData = {
    "la-petite-koki": {
      title: "La petite Koki",
      tagline: "Le favori de tous les temps des enfants!",
      description:
        "Parfait pour les anniversaires, les graduations de garderie ou les festivals familiaux, ce forfait apporte plaisir, rire et smoothies savoureux à toute célébration! Nos vélos adaptés aux enfants sont sécuritaires et amusants, créant des souvenirs inoubliables pour les petits pédaleurs.",
      ageRange: "5-10 ans",
      duration: "1-2 heures",
      capacity: "25-50 smoothies",
      heroImage: "/placeholder.svg?height=600&width=800",
      options: [
        {
          title: "Option Petite Fête",
          price: "299",
          duration: "1 heure",
          smoothies: "25",
          includes: [
            "1 vélo mélangeur adapté aux enfants",
            "25 smoothies délicieux",
            "1 heure d'animation énergique",
            "Musique et ambiance festive",
            "Ingrédients frais et colorés",
          ],
          idealFor: "Parfait pour les petites fêtes d'anniversaire (10-15 enfants) ou les événements intimes.",
        },
        {
          title: "Option Grande Célébration",
          price: "449",
          duration: "2 heures",
          smoothies: "50",
          includes: [
            "1 vélo mélangeur adapté aux enfants",
            "50 smoothies délicieux",
            "2 heures de divertissement",
            "Animation interactive avec jeux",
            "Décorations colorées incluses",
            "Personnalisation possible",
          ],
          idealFor: "Idéal pour les grandes fêtes (20-30 enfants), graduations de garderie ou festivals familiaux.",
          featured: true,
        },
      ],
      includes: [
        {
          icon: "🚴‍♀️",
          title: "Vélo mélangeur sécuritaire",
          description: "Vélo spécialement adapté pour les enfants de 5-10 ans avec toutes les mesures de sécurité",
        },
        {
          icon: "🥤",
          title: "Smoothies frais",
          description: "Ingrédients frais et colorés, parfaits pour les goûts des enfants",
        },
        {
          icon: "🎭",
          title: "Animation énergique",
          description: "Animateur professionnel qui engage les enfants et crée une atmosphère festive",
        },
        {
          icon: "🎵",
          title: "Musique et ambiance",
          description: "Playlist adaptée aux enfants et équipement sonore professionnel",
        },
      ],
      perfectFor: [
        {
          title: "Fêtes d'anniversaire",
          description: "Créez une fête d'anniversaire unique que les enfants n'oublieront jamais",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Graduations de garderie",
          description: "Célébrez cette étape importante avec une activité amusante et saine",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Festivals familiaux",
          description: "Ajoutez une attraction populaire qui plaira aux enfants et aux parents",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  }

  const currentPackage = packageData[slug as keyof typeof packageData]

  if (!currentPackage) {
    return <div>Package not found</div>
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-4 bg-gray-50">
          <div className="container mx-auto px-4">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-primary-red">
                    Accueil
                  </Link>
                </li>
                <li>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </li>
                <li>
                  <Link href="/forfaits" className="text-gray-600 hover:text-primary-red">
                    Forfaits
                  </Link>
                </li>
                <li>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </li>
                <li className="text-primary-red font-medium">{currentPackage.title}</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Package Hero */}
        <section className="package-hero py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="package-hero-text">
                <h1 className="text-4xl md:text-5xl font-bold text-dark-charcoal mb-4">{currentPackage.title}</h1>
                <h2 className="text-xl md:text-2xl text-primary-red font-semibold mb-6">{currentPackage.tagline}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{currentPackage.description}</p>

                <div className="package-badges flex flex-wrap gap-3 mb-8">
                  <span className="badge bg-primary-red text-white px-4 py-2 rounded-full font-medium">
                    {currentPackage.ageRange}
                  </span>
                  <span className="badge bg-secondary-yellow text-dark-charcoal px-4 py-2 rounded-full font-medium">
                    {currentPackage.duration}
                  </span>
                  <span className="badge bg-accent-green text-white px-4 py-2 rounded-full font-medium">
                    {currentPackage.capacity}
                  </span>
                </div>
              </div>

              <div className="package-hero-image relative">
                <Image
                  src={currentPackage.heroImage || "/placeholder.svg"}
                  alt={`${currentPackage.title} en action`}
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="price-overlay absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <span className="price-label text-sm text-gray-600 block">À partir de</span>
                  <span className="price-amount text-2xl font-bold text-dark-charcoal">
                    {currentPackage.options[0].price}$
                  </span>
                  <Link href="#booking">
                    <Button className="mt-2 w-full bg-primary-red text-white">Réserver maintenant</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Package Options */}
        <section className="package-options py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-dark-charcoal mb-12">Options disponibles</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {currentPackage.options.map((option, index) => (
                <div
                  key={index}
                  className={`option-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                    option.featured ? "ring-2 ring-primary-red" : ""
                  }`}
                >
                  {option.featured && (
                    <div className="featured-badge absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-red text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Plus populaire
                    </div>
                  )}

                  <div className="option-header text-center mb-6">
                    <h3 className="text-xl font-bold text-dark-charcoal mb-2">{option.title}</h3>
                    <div className="text-3xl font-bold text-primary-red">{option.price}$</div>
                  </div>

                  <div className="option-details mb-6">
                    <h4 className="font-semibold text-dark-charcoal mb-3">Inclus:</h4>
                    <ul className="space-y-2">
                      {option.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="option-ideal-for mb-6">
                    <h4 className="font-semibold text-dark-charcoal mb-2">Idéal pour:</h4>
                    <p className="text-gray-600 text-sm">{option.idealFor}</p>
                  </div>

                  <Link href="#booking">
                    <Button
                      className={`w-full ${
                        option.featured
                          ? "bg-primary-red text-white"
                          : "bg-gray-100 text-dark-charcoal hover:bg-primary-red hover:text-white"
                      }`}
                    >
                      Choisir cette option
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="whats-included py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-dark-charcoal mb-12">Ce qui est inclus</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentPackage.includes.map((item, index) => (
                <div key={index} className="include-item text-center">
                  <div className="include-icon text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold text-dark-charcoal mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perfect For */}
        <section className="perfect-for py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-dark-charcoal mb-12">Parfait pour</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {currentPackage.perfectFor.map((useCase, index) => (
                <div
                  key={index}
                  className="use-case bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="use-case-image">
                    <Image
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-dark-charcoal mb-3">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="booking" className="py-16 bg-primary-red text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à réserver {currentPackage.title}?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous pour une soumission personnalisée et réservez votre date dès aujourd'hui!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-primary-red px-8 py-3 hover:bg-gray-100">
                  Demander une soumission
                </Button>
              </Link>
              <Link href="tel:+1-XXX-XXX-XXXX">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-red px-8 py-3"
                >
                  Appelez maintenant
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
