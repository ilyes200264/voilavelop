"use client"

import { IconMapper } from "@/components/ui/icon-mapper";
import { useI18n } from "@/lib/i18n";
import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal,
  RedLineSeparator
} from "@/components/motion/motion-components"
import Link from "next/link"

export function BenefitsSection() {
  const { t } = useI18n();
  const benefits = [
    { iconName: "dumbbell", text: t('home.benefits.items.wellness') },
    { iconName: "users", text: t('home.benefits.items.teamBuilding') },
    { iconName: "building", text: t('home.benefits.items.corporate') },
    { iconName: "shoppingBag", text: t('home.benefits.items.malls') },
    { iconName: "graduationCap", text: t('home.benefits.items.schools') },
    { iconName: "partyPopper", text: t('home.benefits.items.weddings') },
  ]

  return (
    <MotionSection className="benefits-section relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="parallax-bg absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/images/Signature package2.jpg')`,
        }}
      />

      {/* Content Overlay */}
      <div className="benefits-overlay absolute inset-0 bg-black/60" />

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="benefits-content-box max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
              <TextReveal>
                <h2 className="benefits-title text-3xl md:text-4xl font-bold text-center text-dark-charcoal mb-4">
                  {t('home.benefits.title')}
                </h2>
              </TextReveal>

              <RedLineSeparator className="w-24 mx-auto mb-4" />

              <ScrollReveal delay={0.3}>
                <h5 className="benefits-subtitle text-xl font-semibold text-center text-primary-red mb-8">{t('home.benefits.perfectFor')}</h5>
              </ScrollReveal>

              <StaggerContainer className="mb-8">
                <ul className="benefits-list grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <MotionDiv key={index} variant="fadeUp" custom={index} className="benefit-item">
                      <div className="flex items-start space-x-3 p-3">
                        <AnimatedImage hoverEffect="rotate" className="benefit-icon text-2xl flex-shrink-0">
                          <IconMapper iconName={benefit.iconName} className="h-6 w-6 text-primary-red" />
                        </AnimatedImage>
                        <span className="benefit-text text-dark-charcoal leading-relaxed">{benefit.text}</span>
                      </div>
                    </MotionDiv>
                  ))}
                </ul>
              </StaggerContainer>

              <StaggerContainer className="benefits-footer text-center space-y-6">
                <MotionDiv variant="fadeUp">
                  <p className="benefits-question text-lg text-dark-charcoal">
                    {t('home.benefits.question')}
                    <br />
                    <span className="font-semibold">{t('home.benefits.contactUs')}</span>
                  </p>
                </MotionDiv>

                <MotionDiv variant="fadeUp">
                  <AnimatedImage hoverEffect="lift">
                    <Link href="/contact">
                      <button className="btn-primary bg-primary-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                        {t('home.benefits.learnMore')}
                      </button>
                    </Link>
                  </AnimatedImage>
                </MotionDiv>
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </MotionSection>
  )
}
