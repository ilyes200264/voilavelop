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
              <Link 
                key={pkg.id}
                href="/forfaits/" 
                className="block"
              >
                <div className="bg-white text-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
                  <div className="text-xl font-bold text-primary-red mb-1">{pkg.title}</div>
                  {pkg.tagline && (
                    <div className="text-base text-gray-700 italic mb-2">{pkg.tagline}</div>
                  )}
                  {pkg.heroDescription && (
                    <div className="text-sm text-gray-800 mb-4">{pkg.heroDescription}</div>
                  )}
                  {pkg.includes && (
                    <ul className="mb-4 pl-4 list-disc text-sm text-gray-700 space-y-1">
                      {(pkg.includes || []).slice(0, 4).map((item: string, itemIndex: number) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <div className="w-full bg-primary-red text-white text-center py-3 rounded-lg font-semibold">
                    Voir les détails
                  </div>
                </div>
              </Link>
            ) : (
              <MotionDiv
                key={pkg.id}
                variant="fadeUp"
                custom={index}
                className="h-full"
              >
                <Link href="/forfaits/" className="block h-full">
                  <div className={`package-card bg-white rounded-2xl p-6 shadow-lg h-full flex flex-col ${pkg.borderColor || 'border-t-primary-red'} border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group`}>
                    {/* Package Header */}
                    <div className="package-header text-center mb-6">
                      <div className="package-icon mb-4">
                        <div className={`w-20 h-20 ${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'bg-') : 'bg-primary-red'}/20 rounded-full flex items-center justify-center mx-auto shadow-md transform transition-transform duration-300 group-hover:scale-110`}>
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

                    {/* What's Included */}
                    <div className="package-includes mb-6 p-4 bg-gray-50 rounded-lg">
                      <h5 className={`includes-title font-semibold ${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'text-') : 'text-primary-red'} mb-3 flex items-center`}>
                        <span className={`inline-block w-1.5 h-1.5 ${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'bg-') : 'bg-primary-red'} rounded-full mr-2`}></span>
                        {t('home.packages.includes', 'Package includes:')}
                      </h5>
                      <ul className="includes-list space-y-2">
                        {(pkg.includes || []).slice(0, 4).map((item: string, itemIndex: number) => (
                          <li key={itemIndex} className="flex items-start text-sm">
                            <Check className={`h-4 w-4 ${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'text-') : 'text-primary-red'} mr-2 mt-0.5 flex-shrink-0`} />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Footer */}
                    <div className="package-cta mt-auto">
                      <div className={`w-full text-center py-3 px-4 rounded-lg border-2 ${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'border-') : 'border-primary-red'} ${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'text-') : 'text-primary-red'} font-semibold group-hover:bg-opacity-10 ${pkg.borderColor ? pkg.borderColor.replace('border-t-', 'group-hover:bg-') : 'group-hover:bg-primary-red'} transition-all duration-300 flex items-center justify-center`}>
                        {t('home.packages.seeDetails', 'See details')}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
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
            <Link href="/forfaits/">
              <Button className="bg-white text-accent-green hover:bg-gray-100 px-8 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                {t('home.packages.viewAll', 'View all packages')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </MotionDiv>
        </StaggerContainer>
      </div>
    </MotionSection>
  )
}