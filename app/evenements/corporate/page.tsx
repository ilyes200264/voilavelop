"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, Users, Award, Smile, ArrowRight, Building, Heart, TrendingUp, Coffee, Star } from "lucide-react"
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

export default function CorporateEventsPage() {
  // Make sure to use the namespace with a colon when referencing specific translations
  const { t } = useI18n();
  
  // Icons for benefits
  const benefitIcons = [
    <Users key="users" className="h-12 w-12 text-white" />,
    <Heart key="heart" className="h-12 w-12 text-white" />,
    <TrendingUp key="trending" className="h-12 w-12 text-white" />,
    <Smile key="smile" className="h-12 w-12 text-white" />
  ];
  
  // Colors for benefits
  const benefitColors = ["bg-primary-red", "bg-secondary-yellow", "bg-accent-green", "bg-trust-blue"];
  
  // Get benefits from translations and add icons and colors
  const benefits = t<Array<{
    title: string;
    description: string;
  }>>("corporate-events:benefits.items", []).map((benefit, index) => ({
    ...benefit,
    icon: benefitIcons[index],
    color: benefitColors[index]
  }));
  
  // Get packages from translations
  const packages = t<Array<{
    title: string;
    duration: string;
    people: string;
    price: string;
    features: string[];
    popular?: boolean;
  }>>("corporate-events:packages.items", []);
  
  // Get testimonials from translations
  const testimonials = t<Array<{
    quote: string;
    author: string;
    position: string;
    company: string;
    rating: number;
  }>>("corporate-events:testimonials.items", []).map((testimonial, index) => ({
    ...testimonial,
    image: `/images/testimonial-${index + 1}.jpg`
  }));
  
  // Get stats from translations
  const stats = t<Array<{ number: string; label: string }>>("corporate-events:stats", []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Image at the top */}
        <MotionSection className="relative pt-20 bg-gradient-to-r from-orange-100 to-yellow-100 text-dark-charcoal">
          {/* Image at the top */}
          <div className="w-full">
            <img 
              src="/images/3.jpg" 
              alt="Corporate events with smoothie bikes" 
              className="w-full h-80 object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center text-sm mb-4 opacity-90">
                <Link href="/evenements" className="hover:underline">
                  {t("corporate-events:breadcrumb.events")}
                </Link>
                <span className="mx-2">/</span>
                <span>{t("corporate-events:breadcrumb.corporate")}</span>
              </div>
              
              <TextReveal>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-primary-red">
                  {t("corporate-events:hero.title")}
                </h1>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mb-8" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl">
                  Boost employee well-being and energize your workplace with a fun, healthy, and memorable experience. Whether you're looking to engage your team right at the office, foyer, or common area, our smoothie bike setup brings healthy fun directly to your workspace, creating a unique break your employees will love.
                </p>
                <p className="text-xl mb-8 leading-relaxed max-w-3xl">
                  Whether your team is returning to the office or just needs a midday boost, our pedal-powered smoothie station encourages physical activity, nourishes the body, and sparks meaningful conversations. A healthier employee is not only happier but also more productive — and what better way to promote wellness than with a delicious smoothie they blend themselves?
                </p>
              </ScrollReveal>
              
              <StaggerContainer className="flex flex-col sm:flex-row gap-4">
                <AnimatedImage hoverEffect="lift">
                  <Link href="/contact">
                    <Button className="bg-primary-red text-white hover:bg-primary-red/90 px-8 py-4 text-lg font-semibold">
                      {t("corporate-events:hero.requestQuote")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </AnimatedImage>
                
                <AnimatedImage hoverEffect="lift">
                  <Link href="/forfaits/ready-set-blend">
                    <Button 
                      variant="outline" 
                      className="border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-white px-8 py-4 text-lg font-semibold"
                    >
                      {t("corporate-events:hero.viewTeamBuilding")}
                    </Button>
                  </Link>
                </AnimatedImage>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Stats Section */}
        <MotionSection className="py-16 bg-accent-green text-white">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {(stats || []).map((stat, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/90 text-sm md:text-base">
                    {stat.label}
                  </div>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Benefits Section */}
        <MotionSection className="py-20 bg-secondary-yellow text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("corporate-events:benefits.title")}
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                {t("corporate-events:benefits.subtitle")}
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {(benefits || []).map((benefit, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                >
                  <AnimatedImage 
                    hoverEffect="lift" 
                    className="h-full"
                  >
                    <div className={`${benefit.color} p-8 rounded-2xl h-full text-white shadow-lg`}>
                      <div className="flex items-center mb-6">
                        <div className="mr-4">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">{benefit.title}</h3>
                      </div>
                      <p className="text-lg leading-relaxed opacity-90">
                        {benefit.description}
                      </p>
                    </div>
                  </AnimatedImage>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* Main Content Section with alternating layout */}
        <MotionSection className="py-20 bg-primary-red text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <AnimatedImage hoverEffect="scale" className="lg:col-span-3">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/corporate-smoothie-bikes.jpg" 
                    alt="Événement corporate avec vélos à smoothie" 
                    className="w-full h-auto"
                  />
                </div>
              </AnimatedImage>
              
              <StaggerContainer className="lg:col-span-2">
                <MotionDiv variant="fadeUp">
                  <div className="flex items-center mb-6">
                    <Building className="h-12 w-12 mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {t("corporate-events:corporateExperience.title")}
                    </h2>
                  </div>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-6 leading-relaxed opacity-90">
                    {t("corporate-events:corporateExperience.description")}
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <div className="space-y-4">
                    {t<string[]>("corporate-events:corporateExperience.features", []).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <div className="mt-8">
                    <AnimatedImage hoverEffect="lift">
                      <Button className="bg-white text-primary-red hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl">
                        {t("corporate-events:corporateExperience.planEventButton")}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </AnimatedImage>
                  </div>
                </MotionDiv>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Packages Section */}
        <MotionSection className="py-20 bg-trust-blue text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("corporate-events:packages.title")}
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                {t("corporate-events:packages.subtitle")}
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {(packages || []).map((pkg, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                >
                  <AnimatedImage 
                    hoverEffect="lift" 
                    className={`h-full bg-white rounded-2xl shadow-lg border-2 ${
                      pkg.popular ? 'border-primary-red ring-2 ring-primary-red/20' : 'border-gray-200'
                    } relative`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-red text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {t("corporate-events:packages.mostPopular")}
                      </div>
                    )}
                    
                    <div className="p-8 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-dark-charcoal mb-2">{pkg.title}</h3>
                        <div className="text-3xl font-bold text-primary-red mb-2">{pkg.price}</div>
                        <div className="text-gray-600">
                          {pkg.duration} • {pkg.people}
                        </div>
                      </div>

                      <div className="flex-grow">
                        <ul className="space-y-3">
                          {(pkg.features || []).map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="h-5 w-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8">
                        <Button 
                          className={`w-full py-3 text-lg font-semibold rounded-xl ${
                            pkg.popular 
                              ? 'bg-primary-red text-white hover:bg-primary-red/90' 
                              : 'bg-gray-100 text-dark-charcoal hover:bg-primary-red hover:text-white'
                          }`}
                        >
                          {t("corporate-events:packages.selectPackage")}
                        </Button>
                      </div>
                    </div>
                  </AnimatedImage>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* Testimonials Section */}
        <MotionSection className="py-20 bg-secondary-yellow text-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("corporate-events:testimonials.title")}
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8" />
            </ScrollReveal>

            <StaggerContainer className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {(testimonials || []).map((testimonial, index) => (
                <MotionDiv
                  key={index}
                  variant="fadeUp"
                  custom={index}
                >
                  <AnimatedImage hoverEffect="lift" className="h-full">
                    <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-secondary-yellow fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg text-gray-700 italic mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                          <span className="text-primary-red font-bold text-lg">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-dark-charcoal">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.position}</p>
                          <p className="text-sm text-primary-red font-medium">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedImage>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* ROI Section */}
        <MotionSection className="py-20 bg-accent-green text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <StaggerContainer>
                <MotionDiv variant="fadeUp">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {t("corporate-events:roi.title")}
                  </h2>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <p className="text-xl mb-6 leading-relaxed opacity-90">
                    {t("corporate-events:roi.description")}
                  </p>
                </MotionDiv>
                
                <MotionDiv variant="fadeUp">
                  <div className="space-y-4">
                    {t<string[]>("corporate-events:roi.benefits", []).map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span className="text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </MotionDiv>
              </StaggerContainer>
              
              <AnimatedImage hoverEffect="scale">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-4">{t("corporate-events:roi.roiCard.value")}</div>
                    <div className="text-xl mb-6">{t("corporate-events:roi.roiCard.title")}</div>
                    <div className="text-lg opacity-90">
                      {t("corporate-events:roi.roiCard.subtitle")}
                    </div>
                  </div>
                </div>
              </AnimatedImage>
            </div>
          </div>
        </MotionSection>

        {/* Final CTA Section */}
        <MotionSection className="py-20 bg-trust-blue text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("corporate-events:finalCta.title")}
              </h2>
              <RedLineSeparator className="w-16 mx-auto mb-8 bg-white" />
              <p className="text-xl mb-8">
                {t("corporate-events:finalCta.description")}
              </p>
            </ScrollReveal>
            
            <StaggerContainer className="flex flex-col sm:flex-row justify-center gap-4">
              <AnimatedImage hoverEffect="lift">
                <Link href="/contact">
                  <Button className="bg-white text-trust-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
                    {t("corporate-events:finalCta.contactUs")}
                    <Coffee className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </AnimatedImage>
              
              <AnimatedImage hoverEffect="lift">
                <Link href="/comment-ca-marche/build-your-event">
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-trust-blue px-8 py-4 text-lg font-semibold rounded-xl"
                  >
                    {t("corporate-events:finalCta.createEvent")}
                  </Button>
                </Link>
              </AnimatedImage>
            </StaggerContainer>
          </div>
        </MotionSection>
      </main>
      <Footer />
    </div>
  )
}