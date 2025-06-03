"use client"

import { motion } from "framer-motion"

// Fade up animation variant
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.2,
      ease: "easeOut"
    }
  })
}

// Scale in animation variant
export const scaleInVariant = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.7,
      delay: custom * 0.2,
      ease: "easeOut"
    }
  })
}

// Staggered container variant
export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

// Scale and fade animation variant for cards
export const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: custom * 0.15,
      ease: "easeOut"
    }
  })
}

// Animated components
export const MotionHeading = motion.h1
export const MotionParagraph = motion.p
export const MotionDiv = motion.div
export const MotionSection = motion.section
export const MotionSpan = motion.span
export const MotionButton = motion.button