"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IconMapper } from "@/components/ui/icon-mapper"
import { MotionHeading, MotionDiv, MotionParagraph, fadeUpVariant, scaleInVariant, staggerContainerVariant, cardVariant } from "@/components/motion-components"

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
        <MotionHeading 
          className="text-5xl md:text-6xl font-bold text-dark-charcoal mb-6"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {packageData.title}
        </MotionHeading>
        
        <MotionDiv 
          className="red-line-separator w-16 h-1 bg-primary-red mx-auto mb-8"
          variants={scaleInVariant}
          initial="hidden"
          animate="visible"
          custom={1}
        />
        
        <MotionParagraph 
          className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4 italic"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {packageData.tagline}
        </MotionParagraph>
        
        <MotionParagraph 
          className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          {packageData.description}
        </MotionParagraph>
      </div>
      
      {/* Package Info Grid - Image and Details */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <MotionDiv 
          className="package-hero-image relative order-1 lg:order-1"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          custom={4}
        >
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
            <Link href="#booking">
              <Button className="mt-2 w-full bg-primary-red text-white hover:bg-primary-red/90 transition-colors">Réserver maintenant</Button>
            </Link>
          </div>
        </MotionDiv>
        
        <MotionDiv 
          className="package-details order-2 lg:order-2"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <div className="package-badges flex flex-wrap gap-3 mb-8">
            <span className="badge bg-primary-red text-white px-4 py-2 rounded-full font-medium">
              {packageData.ageRange}
            </span>
            <span className="badge bg-secondary-yellow text-dark-charcoal px-4 py-2 rounded-full font-medium">
              {packageData.duration}
            </span>
            <span className="badge bg-accent-green text-white px-4 py-2 rounded-full font-medium">
              {packageData.capacity}
            </span>
          </div>
          
          <div className="package-summary bg-light-gray p-6 rounded-xl mb-6">
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
          </div>
          
          <Link href="#options">
            <Button className="w-full bg-primary-red text-white py-3 text-lg">
              Voir les options disponibles
            </Button>
          </Link>
        </MotionDiv>
      </div>
    </>
  )
}

export function IncludesSection({ includes }) {
  return (
    <MotionDiv
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
      variants={staggerContainerVariant}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      {includes.map((item, index) => (
        <MotionDiv 
          key={index} 
          className="include-item text-center bg-light-gray p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          variants={cardVariant}
          custom={index}
        >
          <div className="include-icon text-4xl mb-4">
            <IconMapper iconName={item.iconName} className="h-14 w-14 mx-auto text-primary-red" />
          </div>
          <h4 className="text-xl font-bold text-dark-charcoal mb-3">{item.title}</h4>
          <p className="text-gray-600">{item.description}</p>
        </MotionDiv>
      ))}
    </MotionDiv>
  )
}