"use client"

import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv,
  TextReveal
} from "@/components/motion/motion-components"
import { useI18n } from "@/lib/i18n"
import { Award, Leaf, Heart, Users, Sparkles } from "lucide-react"

export function WhyChooseWorkshopSection() {
  const { t } = useI18n()

  // FIXED: Ensure 5 items are properly aligned
  const reasons = [
    {
      icon: <Award className="h-10 w-10" />,
      title: t('home.whyChoose.items.unique.title', 'Unique Experience'),
      description: t('home.whyChoose.items.unique.description', 'An original activity that creates lasting memories')
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: t('home.whyChoose.items.sustainable.title', '100% Sustainable'),
      description: t('home.whyChoose.items.sustainable.description', 'Eco-friendly practices from start to finish')
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: t('home.whyChoose.items.healthy.title', 'Healthy & Delicious'),
      description: t('home.whyChoose.items.healthy.description', 'Fresh, nutritious ingredients in every smoothie')
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: t('home.whyChoose.items.engaging.title', 'Interactive Fun'),
      description: t('home.whyChoose.items.engaging.description', 'Get everyone involved and energized')
    },
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: t('home.whyChoose.items.professional.title', 'Professional Service'),
      description: t('home.whyChoose.items.professional.description', 'Experienced team ensures smooth operation')
    }
  ]

  return (
    <MotionSection className="why-choose-section py-20 bg-secondary-yellow/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              {t('home.whyChoose.title', 'Why Choose Our Voilà Vélo Workshop?')}
            </h2>
          </TextReveal>
          
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-yellow to-amber-400 mx-auto rounded-full"></div>
        </ScrollReveal>

        {/* FIXED: Proper grid layout for 5 items */}
        <StaggerContainer className="reasons-container">
          {/* Desktop: 3 items on top, 2 centered on bottom */}
          <div className="hidden lg:block">
            {/* Top row - 3 items */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {reasons.slice(0, 3).map((reason, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                  className="reason-card"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                    <div className="icon-wrapper mb-6 text-secondary-yellow bg-yellow-50 p-4 rounded-full shadow-sm">
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-bold text-dark-charcoal mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {reason.description}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
            
            {/* Bottom row - 2 items centered */}
            <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
              {reasons.slice(3, 5).map((reason, index) => (
                <MotionDiv
                  key={index + 3}
                  variant="fadeUp"
                  custom={index + 3}
                  className="reason-card"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                    <div className="icon-wrapper mb-6 text-secondary-yellow bg-yellow-50 p-4 rounded-full shadow-sm">
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-bold text-dark-charcoal mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {reason.description}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* Tablet: 2x2 grid with last item centered */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-6 mb-6">
              {reasons.slice(0, 4).map((reason, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                  className="reason-card"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                    <div className="icon-wrapper mb-4 text-secondary-yellow bg-yellow-50 p-3 rounded-full shadow-sm">
                      {reason.icon}
                    </div>
                    <h3 className="text-lg font-bold text-dark-charcoal mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {reason.description}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
            {/* Last item centered */}
            <div className="max-w-sm mx-auto">
              <MotionDiv
                variant="fadeUp"
                custom={4}
                className="reason-card"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="icon-wrapper mb-4 text-secondary-yellow bg-yellow-50 p-3 rounded-full shadow-sm">
                    {reasons[4].icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark-charcoal mb-2">
                    {reasons[4].title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {reasons[4].description}
                  </p>
                </div>
              </MotionDiv>
            </div>
          </div>

          {/* Mobile: Single column */}
          <div className="md:hidden">
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                  className="reason-card"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                    <div className="icon-wrapper mb-4 text-secondary-yellow bg-yellow-50 p-3 rounded-full shadow-sm">
                      {reason.icon}
                    </div>
                    <h3 className="text-lg font-bold text-dark-charcoal mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {reason.description}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </StaggerContainer>
      </div>
    </MotionSection>
  )
}

/*
CHANGES MADE:
1. Changed background to light yellow (bg-secondary-yellow/10) for unique section identity
2. Added circular decorative elements in background for visual interest
3. Added relative/z-index positioning for proper layering
4. Changed icon colors to secondary-yellow to match section theme
5. Added shadow to icons for better depth
6. Updated gradient line from yellow to amber for better contrast
7. Fixed alignment issue with 5 cards
8. Desktop: 3 items on top row, 2 centered on bottom row
9. Tablet: 2x2 grid with 5th item centered below
10. Mobile: Single column for all 5 items
11. All cards have equal height using h-full and flex layout
12. Added hover effects and shadows for interactivity
*/