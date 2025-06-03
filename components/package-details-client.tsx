"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IconMapper } from "@/components/ui/icon-mapper"
import { 
  MotionH2 as MotionHeading, 
  MotionDiv, 
  MotionP as MotionParagraph,
  AnimatedImage,
  RedLineSeparator,
  StaggerContainer
} from "@/components/motion/motion-components"

interface PackageDetailsClientProps {
  packageData: any;
}

export function PackageDetailsClient({ packageData }: PackageDetailsClientProps) {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Package Title Section - Centered with red line separator */}
      <div className="text-center mb-16">
        <MotionDiv variant="fadeUp">
          <MotionHeading className="text-5xl md:text-6xl font-bold text-dark-charcoal mb-6">
            {packageData.title}
          </MotionHeading>
        </MotionDiv>
        
        <RedLineSeparator className="w-16 mx-auto mb-8" />
        
        <MotionDiv variant="fadeUp" custom={1}>
          <MotionParagraph className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4 italic">
            {packageData.tagline}
          </MotionParagraph>
        </MotionDiv>
        
        <MotionDiv variant="fadeUp" custom={2}>
          <MotionParagraph className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {packageData.description}
          </MotionParagraph>
        </MotionDiv>
      </div>
      
      {/* Package Info Grid - Image and Details */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedImage hoverEffect="scale" className="package-hero-image relative order-1 lg:order-1">
          <Image
            src={packageData.heroImage || "/placeholder.svg"}
            alt={`${packageData.title} en action`}
            width={800}
            height={600}
            className="rounded-2xl shadow-2xl"
          />
          <div className="price-overlay absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <span className="price-label text-sm text-gray-600 block">À partir de</span>
            <span className="price-amount text-2xl font-bold text-dark-charcoal">
              {packageData.options[0].price}$
            </span>
            <AnimatedImage hoverEffect="lift">
              <Link href="#booking">
                <Button className="mt-2 w-full bg-primary-red text-white hover:bg-primary-red/90 transition-colors">Réserver maintenant</Button>
              </Link>
            </AnimatedImage>
          </div>
        </AnimatedImage>
        
        <StaggerContainer className="package-details order-2 lg:order-2">
          <MotionDiv variant="fadeUp" className="package-badges flex flex-wrap gap-3 mb-8">
            <span className="badge bg-primary-red text-white px-4 py-2 rounded-full font-medium">
              {packageData.ageRange}
            </span>
            <span className="badge bg-secondary-yellow text-dark-charcoal px-4 py-2 rounded-full font-medium">
              {packageData.duration}
            </span>
            <span className="badge bg-accent-green text-white px-4 py-2 rounded-full font-medium">
              {packageData.capacity}
            </span>
          </MotionDiv>
          
          <MotionDiv variant="fadeUp" className="package-summary bg-light-gray p-6 rounded-xl mb-6">
            <h3 className="text-xl font-bold text-dark-charcoal mb-4">Ce forfait comprend:</h3>
            <ul className="space-y-3">
              {packageData.includes.slice(0, 2).map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary-red mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item.title}</span>
                </li>
              ))}
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary-red mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Et plus encore...</span>
              </li>
            </ul>
          </MotionDiv>
          
          <MotionDiv variant="fadeUp">
            <AnimatedImage hoverEffect="lift">
              <Link href="#options">
                <Button className="w-full bg-primary-red text-white py-3 text-lg">
                  Voir les options disponibles
                </Button>
              </Link>
            </AnimatedImage>
          </MotionDiv>
        </StaggerContainer>
      </div>
    </>
  )
}

export function IncludesSection({ includes }) {
  return (
    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      {includes.map((item, index) => (
        <MotionDiv 
          key={index}
          variant="fadeUp"
          custom={index}
        >
          <AnimatedImage 
            hoverEffect="lift" 
            className="include-item text-center bg-light-gray p-6 rounded-xl shadow-lg"
          >
            <div className="include-icon text-4xl mb-4">
              <AnimatedImage hoverEffect="rotate">
                <IconMapper iconName={item.iconName} className="h-14 w-14 mx-auto text-primary-red" />
              </AnimatedImage>
            </div>
            <h4 className="text-xl font-bold text-dark-charcoal mb-3">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
          </AnimatedImage>
        </MotionDiv>
      ))}
    </StaggerContainer>
  )
}