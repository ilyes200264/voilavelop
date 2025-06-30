"use client"

import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal
} from "@/components/motion/motion-components"
import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"
import { Bike, Heart, Leaf, Users } from "lucide-react"

export function ValuePropositionSection() {
  const { t } = useI18n()

  const features = [
    {
      icon: <Bike className="h-8 w-8" />,
      title: t('home.valueProposition.points.0', 'Interactive entertainment for all ages'),
      color: 'text-primary-red'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('home.valueProposition.points.1', 'Promotes health and wellness'),
      color: 'text-secondary-yellow'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: t('home.valueProposition.points.2', 'Eco-friendly and sustainable'),
      color: 'text-accent-green'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('home.valueProposition.points.3', 'Bilingual professional service'),
      color: 'text-trust-blue'
    }
  ]

  return (
    <MotionSection className="value-proposition-section py-20 bg-trust-blue/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <StaggerContainer className="content-side">
            <ScrollReveal>
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-6">
                  {t('home.transform.title', 'Transform your event with our smoothie bikes')}
                </h2>
              </TextReveal>
            </ScrollReveal>

            <MotionDiv variant="fadeUp">
              <p className="text-lg text-dark-charcoal mb-8 leading-relaxed">
                {t('home.transform.description', 'Bring energy, health, and unforgettable moments to your next gathering. Our smoothie bikes combine physical activity, nutrition education, and pure fun into one amazing experience.')}
              </p>
            </MotionDiv>

            <StaggerContainer className="features-list space-y-4 mb-8">
              {features.map((feature, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                  className="feature-item flex items-center space-x-4"
                >
                  <div className={`icon-wrapper ${feature.color} bg-white/70 p-3 rounded-full shadow-sm`}>
                    {feature.icon}
                  </div>
                  <span className="text-dark-charcoal font-medium">{feature.title}</span>
                </MotionDiv>
              ))}
            </StaggerContainer>

            <MotionDiv variant="fadeUp">
              <div className="flex flex-wrap gap-4">
                <AnimatedImage hoverEffect="lift">
                  <a href="/forfaits" className="inline-flex items-center px-6 py-3 bg-trust-blue text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                    {t('home.transform.learnMore', 'Learn more')} →
                  </a>
                </AnimatedImage>
                <AnimatedImage hoverEffect="lift">
                  <a href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-trust-blue border-2 border-trust-blue rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-sm hover:shadow-md">
                    {t('common.navigation.contact', 'Contact Us')}
                  </a>
                </AnimatedImage>
              </div>
            </MotionDiv>
          </StaggerContainer>

          {/* Image Side */}
          <AnimatedImage hoverEffect="scale" className="image-side">
            <div className="relative">
              {/* TODO: Add green bicycle with basket image
                  Image path: /images/green-bike-basket.jpg
                  Description: High-quality product shot of green smoothie bike with basket
                  Size: Approximately 600x600px, maintaining aspect ratio
                  Alt text: "Green bicycle with basket for smoothie making" */}
              <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/0.jpg" 
                  alt="Green bicycle with basket for smoothie making" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-yellow/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-green/30 rounded-full blur-2xl"></div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 border-2 border-trust-blue/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-trust-blue rounded-full flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark-charcoal">100%</p>
                    <p className="text-xs text-gray-600">Eco-Friendly</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedImage>
        </div>
      </div>
    </MotionSection>
  )
}

/*
CHANGES MADE:
1. Changed background to light blue (bg-trust-blue/10) to match brand colors and complement other sections
2. Added circular decorative elements in background for visual interest
3. Added relative/z-index positioning for proper layering
4. Updated text colors for better contrast on blue background
5. Changed button colors to trust-blue to match section theme
6. Added shadow effects to buttons for better depth
7. Changed feature icon backgrounds to white with shadow for better contrast
8. Updated product image container to white background for cleaner look
9. Changed eco-friendly badge to trust-blue to match section theme
10. Added border to floating badge for more definition
11. Maintained consistent spacing and responsive layout
*/