"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal,
  RedLineSeparator
} from "@/components/motion/motion-components"
import { useI18n } from "@/lib/i18n"
import { packagesData } from "@/app/forfaits/packages-data"
import { usePackageTranslations } from "@/lib/packages-i18n"

export function PackagesSection() {
  const { t } = useI18n()
  const { translatePackage } = usePackageTranslations()
  // Get translated packages
  const packageIds = ["la-petite-koki", "pop-solo", "double-fun"];
  // Use language from i18n to force re-rendering when language changes
  const { language } = useI18n();
  
  const packages = [
    {
      ...translatePackage("la-petite-koki"),
      colorClass: "orange-package",
      borderColor: "border-t-primary-red",
    },
    {
      ...translatePackage("pop-solo"),
      colorClass: "yellow-package",
      borderColor: "border-t-secondary-yellow",
    },
    {
      ...translatePackage("double-fun"),
      colorClass: "blue-package",
      borderColor: "border-t-trust-blue",
    },
    {
      ...translatePackage("ready-set-blend"),
      colorClass: "green-package",
      borderColor: "border-t-accent-green",
    },
    {
      ...translatePackage("defi-parent-enfant"),
      colorClass: "purple-package",
      borderColor: "border-t-purple-500",
    },
    {
      ...translatePackage("la-smoothie-parade"),
      colorClass: "orange-package",
      borderColor: "border-t-orange-400",
    },
    {
      ...translatePackage("signature"),
      colorClass: "yellow-package",
      borderColor: "border-t-secondary-yellow",
    },
  ]

  return (
    <MotionSection className="packages-section bg-gradient-to-br from-accent-green/5 to-trust-blue/10 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-accent-green/10 -z-10"></div>
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-trust-blue/10 -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-primary-red/5 -z-10"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="section-header text-center mb-12">
          <TextReveal>
            <h2 className="section-title text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-green to-trust-blue bg-clip-text text-transparent">{t('home.packages.title')}</h2>
          </TextReveal>
          
          <div className="separator w-32 h-1 mx-auto my-6 bg-gradient-to-r from-accent-green to-trust-blue rounded-full"></div>
          
          <ScrollReveal delay={0.3}>
            <p className="section-subtitle text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              {t('home.packages.subtitle')}
            </p>
          </ScrollReveal>
        </ScrollReveal>

        {/* Featured Packages Grid - Show first 3 packages */}
        <StaggerContainer className="packages-grid grid lg:grid-cols-3 gap-8 mb-12">
          {packages.slice(0, 3).map((pkg, index) => (
            <MotionDiv
              key={pkg.id}
              variant="fadeUp"
              custom={index}
              className={`package-card rounded-2xl p-6 shadow-lg transition-all duration-500 ${pkg.borderColor} border-t-4 hover:shadow-xl hover:translate-y-[-8px] backdrop-blur-sm`}
            >
              <AnimatedImage hoverEffect="lift" className="h-full">
                <div className="package-header text-center mb-6">
                  <div className="package-icon mb-4">
                    <div className={`w-20 h-20 ${pkg.borderColor.replace('border-t-', 'bg-')} bg-opacity-20 rounded-full flex items-center justify-center mx-auto shadow-md transform transition-transform duration-500 hover:rotate-12`}>
                      <span className="text-3xl">🚴</span>
                    </div>
                  </div>
                  <h4 className={`package-title text-xl font-bold ${pkg.borderColor.replace('border-t-', 'text-')} mb-2`}>{pkg.title}</h4>
                </div>

                <div className="package-description mb-6">
                  <p className="package-tagline font-semibold mb-3 text-gray-600 italic">
                    "{pkg.tagline || t(`packages.${pkg.id}.tagline`, '')}"
                  </p>
                  <p className="package-intro text-sm text-gray-600 leading-relaxed">
                    {pkg.heroDescription || t(`packages.${pkg.id}.heroDescription`, '')}
                  </p>
                </div>

                <div className="package-includes mb-6 p-3 bg-gray-50 rounded-lg">
                  <h5 className={`includes-title font-semibold ${pkg.borderColor.replace('border-t-', 'text-')} mb-3 flex items-center`}>
                    <span className={`inline-block w-1.5 h-1.5 ${pkg.borderColor.replace('border-t-', 'bg-')} rounded-full mr-2`}></span>
                    {t('packages.includes', 'Package includes:')}
                  </h5>
                  <ul className="includes-list space-y-2">
                    {pkg.mainSection?.includes?.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-start text-sm group">
                        <span className={`${pkg.borderColor.replace('border-t-', 'text-')} mr-2 mt-1 transform transition-transform duration-300 group-hover:scale-125`}>✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="package-options mb-6">
                  {pkg.options?.map((option: any, optionIndex: number) => (
                    <div key={optionIndex} className={`option flex justify-between items-center py-2 px-3 text-sm my-2 border-l-2 ${pkg.borderColor.replace('border-t-', 'border-l-')} rounded-r-lg transition-all duration-300 hover:bg-gray-50`}>
                      <span className="option-label font-medium text-dark-charcoal">
                        {option.title || `Option ${optionIndex + 1}`}
                      </span>
                      <span className={`option-details font-bold ${pkg.borderColor.replace('border-t-', 'text-')}`}>
                        {option.price} {language === 'en' ? '€' : '€'}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="package-cta text-center">
                  <AnimatedImage hoverEffect="scale">
                    <Button 
                      className={`w-full bg-white hover:${pkg.borderColor.replace('border-t-', 'bg-')} hover:text-white border ${pkg.borderColor.replace('border-t-', 'border-')} ${pkg.borderColor.replace('border-t-', 'text-')} transition-all duration-300`}
                    >
                      {t(`packages.details`, 'See details')} →
                    </Button>
                  </AnimatedImage>
                </div>
              </AnimatedImage>
            </MotionDiv>
          ))}
        </StaggerContainer>

        {/* Section Footer */}
        <StaggerContainer className="packages-footer text-center space-y-6">
          <MotionDiv variant="fadeUp">
            <p className="packages-tagline text-lg text-dark-charcoal max-w-3xl mx-auto">
              <em>
                <span className="text-primary-red font-semibold">{t('home.packages.footer.highlight')} –</span> {t('home.packages.footer.text')}
              </em>
            </p>
          </MotionDiv>

          <MotionDiv variant="fadeUp">
            <AnimatedImage hoverEffect="lift" className="packages-cta">
              <Link href="/forfaits/">
                <Button className="btn-primary bg-gradient-to-r from-accent-green to-trust-blue text-white px-8 py-3 hover:shadow-lg transform hover:scale-105 transition-all duration-300">{t('home.packages.viewAll')}</Button>
              </Link>
            </AnimatedImage>
          </MotionDiv>
        </StaggerContainer>
      </div>
    </MotionSection>
  )
}
