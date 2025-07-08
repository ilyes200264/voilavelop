"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Bike, Baby, User, Users } from "lucide-react"
import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal
} from "@/components/motion/motion-components"
import { useI18n } from "@/lib/i18n"
import { packagesData } from "@/app/forfaits/packages-data"
import { kebabToCamel } from "@/lib/i18n-utils"
import React, { useEffect, useState } from "react"

export function PackagesSection() {
  const { t } = useI18n()
  // DEBUG: detect mobile
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768)
    }
  }, [])
  
  // Get first 3 packages to display
  const packageIds = ['la-petite-koki', 'pop-solo', 'double-fun']
  
  const packages = packageIds.map(id => {
    const pkg = (packagesData as any)[id]
    const camelId = kebabToCamel(id)
    
    return {
      id,
      // CHANGED: Ensure we're using proper translation keys
      title: t(`packages:packages.${camelId}.title`, pkg.title),
      tagline: t(`packages:packages.${camelId}.tagline`, pkg.tagline || ''),
      heroDescription: t(`packages:packages.${camelId}.heroDescription`, pkg.heroDescription || ''),
      includes: t<string[]>(`packages:packages.${camelId}.mainSection.includes`, pkg.mainSection?.includes || []),
      borderColor: pkg.borderColor
    }
  })

  const iconMap: Record<string, React.ReactNode> = {
    'la-petite-koki': <Baby className="h-9 w-9 text-black" />,
    'pop-solo': <User className="h-9 w-9 text-black" />,
    'double-fun': <Users className="h-9 w-9 text-black" />
  }

  return (
    <MotionSection className="packages-section py-20 bg-accent-green relative overflow-hidden">
      {/* DEBUG: Ajout d'un contour rouge à la section */}
      <div className="border-4 border-dashed border-red-500 mb-4">DEBUG: PackagesSection visible</div>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="section-header text-center mb-12">
          <TextReveal>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-white">
              {t('home.packages.title', 'Our Packages')}
            </h2>
          </TextReveal>
          
          <div className="separator w-32 h-1 mx-auto my-6 bg-gradient-to-r from-white to-secondary-yellow rounded-full"></div>
          
          <ScrollReveal delay={0.3}>
            <p className="section-subtitle text-lg text-white/90 mt-4 max-w-3xl mx-auto">
              {t('home.packages.subtitle', 'Choose the perfect smoothie bike experience for your event')}
            </p>
          </ScrollReveal>
        </ScrollReveal>

        {/* Featured Packages Grid - Show first 3 packages */}
        <StaggerContainer className="packages-grid grid lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            isMobile ? (
              <div
                className="h-full border-4 border-red-500 bg-white text-black rounded-2xl p-6 shadow-lg flex flex-col"
                style={{ position: 'relative', minHeight: 100, marginBottom: 16 }}
              >
                <div style={{fontWeight:'bold',fontSize:14}}>DEBUG: Package visible</div>
                {/* Header */}
                <div className="package-header text-center mb-6">
                  <div className="package-icon mb-4">
                    <div className="w-20 h-20 bg-primary-red/20 rounded-full flex items-center justify-center mx-auto shadow-md">
                      {/* Icon simple */}
                      <span style={{fontSize:32}}>🚲</span>
                    </div>
                  </div>
                  <h4 className="package-title text-xl font-bold text-primary-red mb-2">
                    {pkg.title}
                  </h4>
                </div>
                {/* Description */}
                <div className="package-description mb-6 flex-grow">
                  {pkg.tagline && (
                    <p className="package-tagline font-semibold mb-3 text-gray-700 italic text-center">
                      "{pkg.tagline}"
                    </p>
                  )}
                  <p className="package-intro text-sm text-gray-700 leading-relaxed text-center">
                    {pkg.heroDescription}
                  </p>
                </div>
                {/* What's Included */}
                <div className="package-includes mb-6 p-4 bg-gray-50 rounded-lg">
                  <h5 className="includes-title font-semibold text-primary-red mb-3 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-primary-red rounded-full mr-2"></span>
                    Inclus :
                  </h5>
                  <ul className="includes-list space-y-2">
                    {(pkg.includes || []).slice(0, 4).map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-start text-sm group">
                        <span className="mr-2">✔️</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* CTA simple */}
                <div className="package-cta">
                  <a href="/forfaits/" className="block w-full bg-primary-red text-white text-center py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                    Voir les détails
                  </a>
                </div>
              </div>
            ) : (
              <MotionDiv
                key={pkg.id}
                variant="fadeUp"
                custom={index}
                className="h-full"
              >
                <AnimatedImage hoverEffect="lift" className="h-full">
                  <div className={`package-card bg-white rounded-2xl p-6 shadow-lg h-full flex flex-col ${pkg.borderColor || 'border-t-primary-red'} border-t-4 hover:shadow-xl transition-all duration-500`}>
                    {/* Package Header */}
                    <div className="package-header text-center mb-6">
                      <div className="package-icon mb-4">
                        <div className={`w-20 h-20 ${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'bg-') : 'bg-primary-red'}/20 rounded-full flex items-center justify-center mx-auto shadow-md transform transition-transform duration-500 hover:rotate-12`}>
                          {iconMap[pkg.id] || <Bike className="h-9 w-9 text-black" />}
                        </div>
                      </div>
                      <h4 className={`package-title text-xl font-bold ${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'text-') : 'text-primary-red'} mb-2`}>
                        {pkg.title}
                      </h4>
                    </div>

                    {/* Package Description */}
                    <div className="package-description mb-6 flex-grow">
                      {pkg.tagline && (
                        <p className="package-tagline font-semibold mb-3 text-gray-700 italic text-center">
                          "{pkg.tagline}"
                        </p>
                      )}
                      <p className="package-intro text-sm text-gray-700 leading-relaxed text-center">
                        {pkg.heroDescription}
                      </p>
                    </div>

                    {/* What's Included - NO PRICES */}
                    <div className="package-includes mb-6 p-4 bg-gray-50 rounded-lg">
                      <h5 className={`includes-title font-semibold ${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'text-') : 'text-primary-red'} mb-3 flex items-center`}>
                        <span className={`inline-block w-1.5 h-1.5 ${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'bg-') : 'bg-primary-red'} rounded-full mr-2`}></span>
                        {t('home.packages.includes', 'Package includes:')}
                      </h5>
                      <ul className="includes-list space-y-2">
                        {(pkg.includes || []).slice(0, 4).map((item: string, itemIndex: number) => (
                          <li key={itemIndex} className="flex items-start text-sm group">
                            <Check className={`h-4 w-4 ${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'text-') : 'text-primary-red'} mr-2 mt-0.5 flex-shrink-0 transform transition-transform duration-300 group-hover:scale-125`} />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* REMOVED: All pricing options */}

                    {/* CTA Button - CHANGED: Links to main packages page */}
                    <div className="package-cta">
                      <Link href="/forfaits/" className="block">
                        <Button 
                          className={`w-full bg-white hover:${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'bg-') : 'bg-primary-red'} hover:text-white border-2 ${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'border-') : 'border-primary-red'} ${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'text-') : 'text-primary-red'} transition-all duration-300`}
                        >
                          {t('home.packages.seeDetails', 'See details')}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </AnimatedImage>
              </MotionDiv>
            )
          ))}
        </StaggerContainer>

        {/* Section Footer */}
        <StaggerContainer className="packages-footer text-center space-y-6">
          <MotionDiv variant="fadeUp">
            <p className="packages-tagline text-lg text-white max-w-3xl mx-auto">
              <em>
                <span className="text-yellow-300 font-semibold">
                  {t('home.packages.footer.highlight', 'Something for everyone')} –
                </span>{' '}
                {t('home.packages.footer.text', 'from intimate gatherings to large-scale events, we have the perfect package for you.')}
              </em>
            </p>
          </MotionDiv>

          {/* View All Packages Button */}
          <MotionDiv variant="fadeUp">
            <AnimatedImage hoverEffect="lift">
              <Link href="/forfaits/">
                <Button className="bg-white text-accent-green hover:bg-gray-100 px-8 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  {t('home.packages.viewAll', 'View all packages')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </AnimatedImage>
          </MotionDiv>
        </StaggerContainer>
      </div>
    </MotionSection>
  )
}

/*
CHANGES MADE:
1. REMOVED all price displays and "Option 1", "Option 2" sections
2. FIXED translation keys to use proper namespace (packages:packages.camelCaseId)
3. Used kebabToCamel utility to convert package IDs to proper translation keys
4. Limited includes list to 4 items for cleaner display
5. "See details" button now links to /forfaits/ (main packages page)
6. Added Check icon instead of text checkmark for better visual
7. Improved responsive layout with flex-grow for equal height cards
8. Added hover effects and transitions throughout
9. Ensured all text uses translation system properly
10. Background decorations for visual interest
*/