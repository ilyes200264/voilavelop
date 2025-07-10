"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, Star, Users, Calendar, Sparkles, Baby, User, Bike } from "lucide-react"
import { packagesData } from "./packages-data"
import { useI18n } from "@/lib/i18n"
import { usePackageTranslations } from "@/lib/packages-i18n"
import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal,
  RedLineSeparator,
  PageTransition
} from "@/components/motion/motion-components"
import { motion } from "framer-motion"
import { Feature, Package } from "@/types/packages"
import { useState, useEffect } from "react"

// Package specific data with correct images and colors
const packageSpecificData = {
  "la-petite-koki": {
    image: "/images/velo-smoothie-3.jpg",
    borderColor: "border-t-primary-red",
    bgColor: "bg-primary-red/5",
    badge: "Favori enfants",
    icon: <Baby className="h-6 w-6" />
  },
  "pop-solo": {
    image: "/images/velo-smoothie-2.jpg", 
    borderColor: "border-t-secondary-yellow",
    bgColor: "bg-secondary-yellow/5",
    badge: "Solo",
    icon: <User className="h-6 w-6" />
  },
  "double-fun": {
    image: "/images/velo-smoothie-1.jpg",
    borderColor: "border-t-trust-blue", 
    bgColor: "bg-trust-blue/5",
    badge: "Duo",
    icon: <Users className="h-6 w-6" />
  },
  "ready-set-blend": {
    image: "/images/ouv-event.jpg",
    borderColor: "border-t-accent-green",
    bgColor: "bg-accent-green/5", 
    badge: "Compétition",
    icon: <Sparkles className="h-6 w-6" />
  },
  "defi-parent-enfant": {
    image: "/images/kid-event.jpg",
    borderColor: "border-t-purple-500",
    bgColor: "bg-purple-500/5",
    badge: "Famille",
    icon: <Users className="h-6 w-6" />
  },
  "la-smoothie-parade": {
    image: "/images/Signature package2.jpg",
    borderColor: "border-t-orange-400", 
    bgColor: "bg-orange-400/5",
    badge: "Parade",
    icon: <Star className="h-6 w-6" />
  },
  "signature": {
    image: "/images/even-corp.jpg",
    borderColor: "border-t-gray-800",
    bgColor: "bg-gray-800/5",
    badge: "Premium",
    icon: <Sparkles className="h-6 w-6" />
  }
}

export default function EnhancedForfaitsPage() {
  const { t } = useI18n()
  const { getAllPackages } = usePackageTranslations()
  
  // MOBILE DETECTION AND ANIMATION CONTROL
  const [isMobile, setIsMobile] = useState(false)
  const [animationsReady, setAnimationsReady] = useState(false)
  
  useEffect(() => {
    // Detect mobile more reliably
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 
                    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
      setAnimationsReady(true)
    }

    // Add a small delay to prevent hydration issues
    const timer = setTimeout(checkMobile, 100)
    
    window.addEventListener('resize', checkMobile)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])
  
  const packages: Package[] = getAllPackages().filter(pkg => !!pkg) as unknown as Package[]

  // MOBILE-SAFE MOTION WRAPPERS
  const SafeMotionSection = ({ children, className, ...props }: any) => {
    if (isMobile) {
      return <section className={className}>{children}</section>
    }
    return <MotionSection className={className} {...props}>{children}</MotionSection>
  }

  const SafeMotionDiv = ({ children, className, custom, ...props }: any) => {
    if (isMobile) {
      return <div className={className}>{children}</div>
    }
    return <MotionDiv className={className} custom={custom} {...props}>{children}</MotionDiv>
  }

  const SafeStaggerContainer = ({ children, className }: any) => {
    if (isMobile) {
      return <div className={className}>{children}</div>
    }
    return <StaggerContainer className={className}>{children}</StaggerContainer>
  }

  const SafeAnimatedImage = ({ children, className, ...props }: any) => {
    if (isMobile) {
      return <div className={className}>{children}</div>
    }
    return <AnimatedImage className={className} {...props}>{children}</AnimatedImage>
  }

  const SafeScrollReveal = ({ children, className, ...props }: any) => {
    if (isMobile) {
      return <div className={className}>{children}</div>
    }
    return <ScrollReveal className={className} {...props}>{children}</ScrollReveal>
  }

  const SafeTextReveal = ({ children, className }: any) => {
    if (isMobile) {
      return <div className={className}>{children}</div>
    }
    return <TextReveal className={className}>{children}</TextReveal>
  }

  // Don't render until we know if it's mobile (prevents hydration mismatch)
  if (!animationsReady) {
    return <div>Loading...</div>
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          {/* Enhanced Hero Section with conditional animations */}
          <SafeMotionSection 
            className="hero-section relative py-40 bg-primary-red overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Simple background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <SafeStaggerContainer className="space-y-8 mt-16">
                  <SafeMotionDiv variant="fadeUp">
                    <SafeTextReveal>
                      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                        {t('packages.hero.title', 'Nos Forfaits Smoothie Bike')}
                      </h1>
                    </SafeTextReveal>
                  </SafeMotionDiv>
                  <SafeMotionDiv variant="fadeUp" custom={1}>
                    {!isMobile ? (
                      <motion.div
                        className="w-32 h-2 bg-white mx-auto mb-8 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                      />
                    ) : (
                      <div className="w-32 h-2 bg-white mx-auto mb-8 rounded-full" />
                    )}
                  </SafeMotionDiv>
                  <SafeMotionDiv variant="fadeUp" custom={2}>
                    <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
                      {t('packages.hero.subtitle', 'Des expériences sur mesure pour tous vos événements. Choisissez le forfait parfait ou créons ensemble une solution entièrement personnalisée.')}
                    </p>
                  </SafeMotionDiv>
                  <SafeMotionDiv variant="fadeUp" custom={3}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <SafeAnimatedImage hoverEffect="lift">
                        <Link href="#packages">
                          <Button className="bg-white text-primary-red hover:bg-secondary-yellow hover:text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white">
                            {t('packages.hero.viewPackages', 'Voir les forfaits')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                      </SafeAnimatedImage>
                      
                      <SafeAnimatedImage hoverEffect="lift">
                        <Link href="/contact">
                          <Button 
                            variant="outline" 
                            className="border-2 border-white text-black hover:bg-white hover:text-primary-red px-8 py-3 text-lg font-semibold transition-all duration-300"
                          >
                            {t('packages.hero.requestQuote', 'Demander un devis')}
                          </Button>
                        </Link>
                      </SafeAnimatedImage>
                    </div>
                  </SafeMotionDiv>
                </SafeStaggerContainer>
              </div>
            </div>
          </SafeMotionSection>

          {/* Introduction Section with conditional animations */}
          <SafeMotionSection className="py-20 bg-light-gray">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <SafeScrollReveal>
                  <SafeTextReveal>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                      {t('packages.intro.title', 'Une Expérience Unique Pour Chaque Occasion')}
                    </h2>
                  </SafeTextReveal>
                </SafeScrollReveal>
                
                {!isMobile ? (
                  <motion.div
                    className="w-20 h-1 bg-primary-red mx-auto mb-8 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                ) : (
                  <div className="w-20 h-1 bg-primary-red mx-auto mb-8 rounded-full" />
                )}
                
                <div className="space-y-6">
                  <SafeScrollReveal delay={0.2}>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {t('packages.intro.description1', 'Nos vélos smoothie transforment n\'importe quel événement en une expérience interactive mémorable. Pédalez, mixez, et savourez des smoothies frais tout en s\'amusant!')}
                    </p>
                  </SafeScrollReveal>
                  
                  <SafeScrollReveal delay={0.4}>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {t('packages.intro.description2', 'Tous nos forfaits comprennent la livraison, l\'installation et la désinstallation, ainsi qu\'un animateur professionnel pour guider vos invités à travers l\'expérience.')}
                    </p>
                  </SafeScrollReveal>
                </div>
              </div>
            </div>
          </SafeMotionSection>

          {/* MOBILE-OPTIMIZED Packages Grid Section */}
          <SafeMotionSection id="packages" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <SafeTextReveal>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {t('packages.packagesGrid.title', 'Découvrez Nos Forfaits')}
                  </h2>
                </SafeTextReveal>
                
                {!isMobile ? (
                  <motion.div
                    className="w-24 h-1 bg-secondary-yellow mx-auto mb-8 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                ) : (
                  <div className="w-24 h-1 bg-secondary-yellow mx-auto mb-8 rounded-full" />
                )}
                
                <SafeScrollReveal delay={0.3}>
                  <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('packages.packagesGrid.subtitle', 'Une expérience unique et mémorable pour tous types d\'événements')}
                  </p>
                </SafeScrollReveal>
              </div>
              
              {/* MOBILE-FIRST Grid with Simplified Animations */}
              <div className="w-full">
                <SafeStaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
                  {packages.map((pkg: Package, index: number) => {
                    const specificData = packageSpecificData[pkg.id as keyof typeof packageSpecificData] || packageSpecificData["la-petite-koki"]
                    
                    return (
                      <SafeMotionDiv
                        key={pkg.id}
                        variant="fadeUp"
                        custom={index}
                        className="w-full"
                      >
                        {/* MOBILE-SAFE Card */}
                        <Link href={`/forfaits/${pkg.id}`} className="block group">
                          {isMobile ? (
                            // SIMPLE VERSION FOR MOBILE - NO ANIMATIONS
                            <div className={`package-card ${specificData.bgColor} ${specificData.borderColor} border-t-4 bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col cursor-pointer transition-shadow duration-300 hover:shadow-xl`}>
                              {/* Package Image */}
                              <div className="relative h-48 sm:h-52 lg:h-48 overflow-hidden">
                                <img 
                                  src={specificData.image}
                                  alt={pkg.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/images/smoothie-bike-default.jpg';
                                  }}
                                />
                                
                                {/* Static Badge for Mobile */}
                                <div className="absolute top-4 left-4">
                                  <div className={`px-3 py-1 rounded-full text-sm font-semibold text-white flex items-center gap-2 ${
                                    specificData.borderColor.replace('border-t-', 'bg-')
                                  } shadow-lg`}>
                                    {specificData.icon}
                                    {specificData.badge}
                                  </div>
                                </div>

                                {/* Static Rating */}
                              
                              </div>

                              {/* Package Content - Mobile Optimized */}
                              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                                <div className="flex-grow">
                                  {/* Title */}
                                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-red transition-colors">
                                    {pkg.title}
                                  </h3>
                                  
                                  {/* Description */}
                                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base leading-relaxed">
                                    {pkg.description}
                                  </p>

                                  {/* Key Features - Mobile Optimized */}
                                  <div className="space-y-2 mb-4">
                                    {(pkg.mainSection?.includes || pkg.includes || []).slice(0, 3).map((item: string, idx: number) => (
                                      <div key={idx} className="flex items-start text-sm">
                                        <Check className={`h-4 w-4 mr-2 mt-0.5 flex-shrink-0 ${
                                          specificData.borderColor.replace('border-t-', 'text-')
                                        }`} />
                                        <span className="text-gray-700 leading-tight">{item}</span>
                                      </div>
                                    ))}
                                    {(pkg.mainSection?.includes || pkg.includes || []).length > 3 && (
                                      <div className="text-sm text-gray-500 ml-6">
                                        +{(pkg.mainSection?.includes || pkg.includes || []).length - 3} plus d'inclusions
                                      </div>
                                    )}
                                  </div>

                                  {/* Ideal For - Compact for Mobile */}
                                  <div className="mb-4">
                                    <div className="flex items-center mb-2">
                                      <Users className={`h-4 w-4 mr-2 ${
                                        specificData.borderColor.replace('border-t-', 'text-')
                                      }`} />
                                      <span className="text-sm font-semibold text-gray-700">Idéal pour:</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                      {(pkg.targetAudience?.items || []).slice(0, 2).map((item: string, idx: number) => (
                                        <span key={idx} className={`text-xs px-2 py-1 rounded-full ${
                                          specificData.bgColor
                                        } ${specificData.borderColor.replace('border-t-', 'text-')}`}>
                                          {item}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                {/* Simple Action Button */}
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                  <Button 
                                    className={`w-full text-sm font-semibold py-3 transition-all duration-300 ${
                                      specificData.borderColor.replace('border-t-', 'hover:bg-')
                                    } hover:text-white border-2 ${
                                      specificData.borderColor.replace('border-t-', 'border-')
                                    } ${
                                      specificData.borderColor.replace('border-t-', 'text-')
                                    } bg-white shadow-sm hover:shadow-lg`}
                                    variant="outline"
                                  >
                                    {t('packages.seeDetails', 'Voir détails')}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ) : (
                            // FULL ANIMATED VERSION FOR DESKTOP
                            <motion.div
                              className={`package-card ${specificData.bgColor} ${specificData.borderColor} border-t-4 bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col cursor-pointer`}
                              whileHover={{ 
                                y: -8,
                                scale: 1.02,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                              }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                              {/* Package Image */}
                              <div className="relative h-48 sm:h-52 lg:h-48 overflow-hidden">
                                <motion.img 
                                  src={specificData.image}
                                  alt={pkg.title}
                                  className="w-full h-full object-cover"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.6 }}
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/images/smoothie-bike-default.jpg';
                                  }}
                                />
                                
                                {/* Colorful Badge */}
                                <motion.div 
                                  className="absolute top-4 left-4"
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <div className={`px-3 py-1 rounded-full text-sm font-semibold text-white flex items-center gap-2 ${
                                    specificData.borderColor.replace('border-t-', 'bg-')
                                  } shadow-lg`}>
                                    {specificData.icon}
                                    {specificData.badge}
                                  </div>
                                </motion.div>

                                {/* Enhanced Rating */}
                               

                                {/* Hover Overlay */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                                  initial={{ opacity: 0 }}
                                  whileHover={{ opacity: 1 }}
                                >
                                  <span className="text-white font-semibold text-lg">
                                    {t('packages.seeDetails', 'Voir détails')}
                                  </span>
                                </motion.div>
                              </div>

                              {/* Package Content - Desktop with full features */}
                              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                                <div className="flex-grow">
                                  {/* Title */}
                                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-red transition-colors">
                                    {pkg.title}
                                  </h3>
                                  
                                  {/* Description */}
                                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base leading-relaxed">
                                    {pkg.description}
                                  </p>

                                  {/* Key Features - Desktop Optimized */}
                                  <div className="space-y-2 mb-4">
                                    {(pkg.mainSection?.includes || pkg.includes || []).slice(0, 3).map((item: string, idx: number) => (
                                      <div key={idx} className="flex items-start text-sm">
                                        <Check className={`h-4 w-4 mr-2 mt-0.5 flex-shrink-0 ${
                                          specificData.borderColor.replace('border-t-', 'text-')
                                        }`} />
                                        <span className="text-gray-700 leading-tight">{item}</span>
                                      </div>
                                    ))}
                                    {(pkg.mainSection?.includes || pkg.includes || []).length > 3 && (
                                      <div className="text-sm text-gray-500 ml-6">
                                        +{(pkg.mainSection?.includes || pkg.includes || []).length - 3} plus d'inclusions
                                      </div>
                                    )}
                                  </div>

                                  {/* Ideal For - Compact for Desktop */}
                                  <div className="mb-4">
                                    <div className="flex items-center mb-2">
                                      <Users className={`h-4 w-4 mr-2 ${
                                        specificData.borderColor.replace('border-t-', 'text-')
                                      }`} />
                                      <span className="text-sm font-semibold text-gray-700">Idéal pour:</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                      {(pkg.targetAudience?.items || []).slice(0, 2).map((item: string, idx: number) => (
                                        <span key={idx} className={`text-xs px-2 py-1 rounded-full ${
                                          specificData.bgColor
                                        } ${specificData.borderColor.replace('border-t-', 'text-')}`}>
                                          {item}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                {/* Enhanced Action Button */}
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                  <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <Button 
                                      className={`w-full text-sm font-semibold py-3 transition-all duration-300 ${
                                        specificData.borderColor.replace('border-t-', 'hover:bg-')
                                      } hover:text-white border-2 ${
                                        specificData.borderColor.replace('border-t-', 'border-')
                                      } ${
                                        specificData.borderColor.replace('border-t-', 'text-')
                                      } bg-white shadow-sm hover:shadow-lg`}
                                      variant="outline"
                                    >
                                      {t('packages.seeDetails', 'Voir détails')}
                                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                  </motion.div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </Link>
                      </SafeMotionDiv>
                    )
                  })}
                </SafeStaggerContainer>
              </div>

              {/* Enhanced Features Grid with conditional animations */}
              <div className="mt-20">
                <SafeTextReveal>
                  <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
                    {t('packages.features.title', 'Inclus dans Tous Nos Forfaits')}
                  </h3>
                </SafeTextReveal>
                
                <SafeStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: <Calendar className="h-8 w-8" />,
                      title: t('packages.features.delivery', 'Livraison & Installation'),
                      description: t('packages.features.deliveryDesc', 'Service complet clé en main'),
                      color: 'bg-trust-blue'
                    },
                    {
                      icon: <Users className="h-8 w-8" />,
                      title: t('packages.features.animator', 'Animateur Professionnel'),
                      description: t('packages.features.animatorDesc', 'Guide expérimenté inclus'),
                      color: 'bg-accent-green'
                    },
                    {
                      icon: <Sparkles className="h-8 w-8" />,
                      title: t('packages.features.ingredients', 'Ingrédients Frais'),
                      description: t('packages.features.ingredientsDesc', 'Fruits et légumes de qualité'),
                      color: 'bg-secondary-yellow'
                    },
                    {
                      icon: <Check className="h-8 w-8" />,
                      title: t('packages.features.equipment', 'Tout l\'Équipement'),
                      description: t('packages.features.equipmentDesc', 'Gobelets, ustensiles, tout fourni'),
                      color: 'bg-primary-red'
                    }
                  ].map((feature, index) => (
                    <SafeMotionDiv key={index} variant="fadeUp" custom={index}>
                      <SafeAnimatedImage hoverEffect="lift">
                        {isMobile ? (
                          // Simple version for mobile
                          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${feature.color} flex items-center justify-center text-white`}>
                              {feature.icon}
                            </div>
                            <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                          </div>
                        ) : (
                          // Animated version for desktop
                          <motion.div 
                            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                            whileHover={{ y: -5 }}
                          >
                            <motion.div 
                              className={`w-16 h-16 mx-auto mb-4 rounded-full ${feature.color} flex items-center justify-center text-white`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              {feature.icon}
                            </motion.div>
                            <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                          </motion.div>
                        )}
                      </SafeAnimatedImage>
                    </SafeMotionDiv>
                  ))}
                </SafeStaggerContainer>
              </div>
            </div>
          </SafeMotionSection>

          {/* Enhanced Call to Action Section with conditional animations */}
          <SafeMotionSection className="py-20 bg-primary-red text-white relative overflow-hidden">
            {/* Simple background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-yellow/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <SafeStaggerContainer className="text-center lg:text-left">
                  <SafeMotionDiv variant="fadeUp">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      {t('packages.help.title', 'Besoin d\'Aide Pour Choisir?')}
                    </h2>
                  </SafeMotionDiv>
                  
                  {!isMobile ? (
                    <motion.div
                      className="w-20 h-1 bg-white mx-auto lg:mx-0 mb-6 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    />
                  ) : (
                    <div className="w-20 h-1 bg-white mx-auto lg:mx-0 mb-6 rounded-full" />
                  )}
                  
                  <SafeMotionDiv variant="fadeUp">
                    <p className="text-xl mb-8 opacity-90">
                      {t('packages.help.description', 'Notre équipe peut vous aider à sélectionner le forfait parfait pour votre événement ou créer une solution entièrement personnalisée.')}
                    </p>
                  </SafeMotionDiv>
                  
                  <SafeMotionDiv variant="fadeUp" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <SafeAnimatedImage hoverEffect="lift">
                      <Link href="/contact">
                        <Button className="bg-white text-primary-red px-8 py-3 text-lg font-semibold hover:bg-secondary-yellow hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                          {t('packages.help.requestQuote', 'Demander un Devis')}
                        </Button>
                      </Link>
                    </SafeAnimatedImage>
                    
                    <SafeAnimatedImage hoverEffect="lift">
                      <Link href="tel:+1-XXX-XXX-XXXX">
                        <Button 
                          variant="outline" 
                          className="border-2 border-white text-white hover:bg-white hover:text-primary-red px-8 py-3 text-lg font-semibold transition-all duration-300"
                        >
                          {t('packages.help.callUs', 'Appelez-nous')}
                        </Button>
                      </Link>
                    </SafeAnimatedImage>
                  </SafeMotionDiv>
                </SafeStaggerContainer>
                
                <SafeScrollReveal>
                  <SafeAnimatedImage hoverEffect="scale">
                    {isMobile ? (
                      // Simple testimonial for mobile
                      <div className="testimonial-card bg-white/15 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
                        <div className="quote-icon text-4xl mb-4 text-secondary-yellow">"</div>
                        <p className="text-xl italic mb-6 opacity-90">
                          {t('packages.help.testimonial.text', 'Nous avons réservé Voilà Vélo Fruité pour notre journée corporative et ce fut un succès retentissant! L\'équipe était professionnelle et nos employés ont adoré l\'expérience.')}
                        </p>
                        <div className="testimonial-author flex items-center">
                          <div className="author-avatar w-12 h-12 bg-secondary-yellow rounded-full mr-4 flex items-center justify-center">
                            <Users className="h-6 w-6 text-primary-red" />
                          </div>
                          <div className="author-info">
                            <h4 className="font-bold">
                              {t('packages.help.testimonial.author', 'Marie Lemieux')}
                            </h4>
                            <p className="text-sm opacity-80">
                              {t('packages.help.testimonial.company', 'Directrice RH, Entreprise XYZ')}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Animated testimonial for desktop
                      <motion.div 
                        className="testimonial-card bg-white/15 backdrop-blur-sm p-8 rounded-xl shadow-2xl"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="quote-icon text-4xl mb-4 text-secondary-yellow">"</div>
                        <p className="text-xl italic mb-6 opacity-90">
                          {t('packages.help.testimonial.text', 'Nous avons réservé Voilà Vélo Fruité pour notre journée corporative et ce fut un succès retentissant! L\'équipe était professionnelle et nos employés ont adoré l\'expérience.')}
                        </p>
                        <div className="testimonial-author flex items-center">
                          <div className="author-avatar w-12 h-12 bg-secondary-yellow rounded-full mr-4 flex items-center justify-center">
                            <Users className="h-6 w-6 text-primary-red" />
                          </div>
                          <div className="author-info">
                            <h4 className="font-bold">
                              {t('packages.help.testimonial.author', 'Marie Lemieux')}
                            </h4>
                            <p className="text-sm opacity-80">
                              {t('packages.help.testimonial.company', 'Directrice RH, Entreprise XYZ')}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </SafeAnimatedImage>
                </SafeScrollReveal>
              </div>
            </div>
          </SafeMotionSection>
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}