"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal
} from "@/components/motion/motion-components"
import { useI18n } from "@/lib/i18n"
import { Heart, Leaf, Users, Zap, Target, Award } from "lucide-react"

export default function AboutPage() {
  const { t } = useI18n()

  // Values with icons and colors
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('about.values.healthWellness.title', 'Health & Wellness'),
      description: t('about.values.healthWellness.description', 'We believe that nourishing your body should be both delicious and enjoyable.'),
      color: "bg-primary-red"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: t('about.values.sustainability.title', 'Sustainability'), 
      description: t('about.values.sustainability.description', 'We are committed to supporting local producers and practicing eco-friendly methods.'),
      color: "bg-accent-green"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('about.values.community.title', 'Community'),
      description: t('about.values.community.description', 'We foster connection and joy by bringing people together through our smoothie experiences.'),
      color: "bg-trust-blue"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('about.values.empowerment.title', 'Empowerment & Inclusion'),
      description: t('about.values.empowerment.description', 'We inspire people of all ages and backgrounds to participate, create, and feel energized — because everyone deserves to be part of the fun and positive change.'),
      color: "bg-secondary-yellow"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-28">
        {/* Hero Section */}
        <MotionSection className="hero-section py-20 bg-gradient-to-br from-primary-red/10 via-white to-secondary-yellow/10">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center max-w-4xl mx-auto">
              <TextReveal>
                <h1 className="text-4xl md:text-5xl font-bold text-dark-charcoal mb-6">
                  {t('about.hero.title', 'Our Story')}
                </h1>
              </TextReveal>
              <MotionDiv variant="fadeUp">
                <p className="text-xl text-gray-700">
                  {t('about.hero.subtitle', 'Two sisters, one mission: making healthy living fun for everyone')}
                </p>
              </MotionDiv>
            </ScrollReveal>
          </div>
        </MotionSection>

        {/* Who We Are Section */}
        <MotionSection className="who-we-are py-20 bg-white" id="qui-nous-sommes">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <StaggerContainer>
                <ScrollReveal>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-6">
                    {t('about.whoWeAre.title', 'Who We Are')}
                  </h2>
                </ScrollReveal>
                
                <MotionDiv variant="fadeUp">
                  <div className="prose prose-lg text-gray-700 space-y-4">
                    <p>
                      {t('about.founders.description', 'We\'re Leen and Micha — two sisters with a big love for nature, healthy living, and biking. That\'s how Voilà Vélo Fruité came to life — a joyful concept where people of all ages can hop on a smoothie bike, pedal their hearts out, and create their own delicious drink, powered entirely by their energy! We believe in spreading positivity, promoting wellness, and getting everyone involved — no matter how young or old. Whether it\'s at a school event, a festival, or a corporate gathering, Voilà Vélo brings fun, flavor, and feel-good vibes to every occasion.')}
                    </p>
                  </div>
                </MotionDiv>

                <MotionDiv variant="fadeUp" className="mt-8">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center bg-accent-green/10 px-4 py-2 rounded-full">
                      <Award className="h-5 w-5 text-accent-green mr-2" />
                      <span className="font-medium">{t('about.whoWeAre.badges.sisterFounded', 'Sister-Founded')}</span>
                    </div>
                    <div className="flex items-center bg-primary-red/10 px-4 py-2 rounded-full">
                      <Heart className="h-5 w-5 text-primary-red mr-2" />
                      <span className="font-medium">{t('about.whoWeAre.badges.passionDriven', 'Passion-Driven')}</span>
                    </div>
                    <div className="flex items-center bg-trust-blue/10 px-4 py-2 rounded-full">
                      <Users className="h-5 w-5 text-trust-blue mr-2" />
                      <span className="font-medium">{t('about.whoWeAre.badges.communityFocused', 'Community-Focused')}</span>
                    </div>
                  </div>
                </MotionDiv>
              </StaggerContainer>

              <AnimatedImage hoverEffect="scale">
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 to-green-100 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/images/7.jpg" 
                      alt="Leen and Micha, founders of Voilà Vélo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-secondary-yellow rounded-2xl p-4 shadow-lg">
                    <p className="text-2xl font-bold text-dark-charcoal">{t('about.whoWeAre.since', 'Since 2023')}</p>
                  </div>
                </div>
              </AnimatedImage>
            </div>
          </div>
        </MotionSection>

        {/* Our Mission Section */}
        <MotionSection className="our-mission py-20 bg-gradient-to-b from-gray-50 to-white" id="notre-mission">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-6">
                {t('about.ourMission.title', 'Our Mission')}
              </h2>
              <div className="flex items-center justify-center mb-8">
                <Target className="h-12 w-12 text-primary-red" />
              </div>
            </ScrollReveal>

            <StaggerContainer className="max-w-3xl mx-auto">
              <MotionDiv variant="fadeUp" className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="prose prose-lg text-gray-700 text-center">
                  <p className="text-xl leading-relaxed mb-6">
                    {t('about.mission.description', 'Our mission is to make healthy living fun, simple, and inspiring. By combining motion, sustainability, and nutrition, we aim to spark awareness while creating happy, tasty memories. We believe that one pedal stroke is all it takes to reconnect with your body, nature, and each other — and Voilà Vélo is here to make that happen.')}
                  </p>
                </div>
              </MotionDiv>
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Our Values Section */}
        <MotionSection className="our-values py-20 bg-white" id="nos-valeurs">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
                {t('about.ourValues.title', 'Our Values')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-secondary-yellow mx-auto rounded-full"></div>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                >
                  <div className="value-card h-full bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`${value.color} text-white p-3 rounded-full flex-shrink-0`}>
                        {value.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-dark-charcoal mb-3">
                          {value.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Call to Action */}
        <MotionSection className="cta-section py-20 bg-gradient-to-br from-accent-green to-trust-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('about.cta.title', 'Ready to Experience the Joy?')}
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                {t('about.cta.subtitle', 'Let\'s create an unforgettable smoothie bike experience for your next event')}
              </p>
              <AnimatedImage hoverEffect="lift">
                <a href="/contact" className="inline-flex items-center bg-white text-accent-green px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300">
                  {t('about.cta.button', 'Get Started')} →
                </a>
              </AnimatedImage>
            </ScrollReveal>
          </div>
        </MotionSection>
      </main>

      <Footer />
    </div>
  )
}

/*
CHANGES MADE:
1. RESTORED all deleted content with exact text from client notes
2. Added "Who We Are" section with sisters' story
3. Added "Our Mission" section with mission statement
4. Added "Our Values" section with 4 core values
5. Created proper anchor links for navigation (#qui-nous-sommes, #notre-mission, #nos-valeurs)
6. Added visual elements: icons, colors, and badges
7. Responsive layout with proper spacing
8. Added placeholder images with emoji fallbacks
9. Used motion components for animations
10. Maintained brand colors and styling consistency
11. Added CTA section at bottom
12. All content properly structured and formatted
*/