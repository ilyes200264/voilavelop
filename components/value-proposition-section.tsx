"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { 
  MotionSection, 
  StaggerContainer, 
  MotionDiv, 
  ImageMaskReveal,
  AnimatedImage
} from "@/components/motion/motion-components"
import { useI18n } from "@/lib/i18n"

export function ValuePropositionSection() {
  const { t } = useI18n()
  return (
    <MotionSection className="value-proposition bg-primary-red text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="value-prop-content grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <ImageMaskReveal className="value-prop-image rounded-lg">
            <div className="image-container relative">
              <Image
                src="/images/velo-smoothie-3.jpg"
                alt="Personnes pédalant joyeusement sur les vélos smoothie Voilà Vélo"
                width={800}
                height={600}
                className="featured-image rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </ImageMaskReveal>

          {/* Right Column: Content */}
          <StaggerContainer className="value-prop-text space-y-6">
            <MotionDiv variant="fadeUp">
              <h2 className="section-title text-4xl md:text-5xl font-bold leading-tight">
                {t('home.valueProposition.title')}
              </h2>
            </MotionDiv>

            <MotionDiv variant="fadeUp">
              <h5 className="section-subtitle text-xl md:text-2xl text-secondary-yellow font-medium">
                {t('home.valueProposition.subtitle')}
              </h5>
            </MotionDiv>

            <MotionDiv variant="fadeUp" className="section-content space-y-4">
              <p className="intro-paragraph text-lg leading-relaxed">
                {t('home.valueProposition.description1')}
              </p>

              <p className="detail-paragraph text-base leading-relaxed opacity-90">
                {t('home.valueProposition.description2')}
              </p>
            </MotionDiv>

            <MotionDiv variant="fadeUp">
              <div className="section-cta pt-4">
                <AnimatedImage hoverEffect="lift">
                  <Button variant="outline" size="lg" className="bg-white text-primary-red border-white hover:bg-gray-100">
                    {t('home.valueProposition.ctaButton')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </AnimatedImage>
              </div>
            </MotionDiv>
          </StaggerContainer>
        </div>
      </div>
    </MotionSection>
  )
}
