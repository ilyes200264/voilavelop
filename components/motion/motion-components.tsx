"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { ReactNode } from "react"

// Enhanced animation variants with professional easing
export const animationVariants = {
  // Fade animations
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic-bezier for smooth feel
      }
    })
  },

  fadeDown: {
    hidden: { opacity: 0, y: -60 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  },

  fadeLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  fadeRight: {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },

  // Container animations
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  },

  fastStagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  },

  // Special effects
  drawLine: {
    hidden: { width: 0 },
    visible: {
      width: "4rem",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5
      }
    }
  },

  slideUpCover: {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }
}

// Enhanced hover effects
export const hoverEffects = {
  lift: {
    whileHover: { 
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3 }
    },
    whileTap: { scale: 0.95 }
  },

  scale: {
    whileHover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    whileTap: { scale: 0.95 }
  },

  glow: {
    whileHover: {
      boxShadow: "0 10px 30px rgba(236, 99, 76, 0.3)",
      transition: { duration: 0.3 }
    }
  },

  rotate: {
    whileHover: {
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.5 }
    }
  },

  bounce: {
    whileHover: {
      y: [0, -10, 0],
      transition: { duration: 0.6, times: [0, 0.5, 1] }
    }
  }
}

// Component interfaces
interface MotionComponentProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  variant?: keyof typeof animationVariants
  custom?: number
  className?: string
}

interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode
  variant?: keyof typeof animationVariants
  className?: string
}

interface MotionImageProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  hoverEffect?: keyof typeof hoverEffects
  className?: string
}

// Enhanced Motion Components
export const MotionDiv: React.FC<MotionComponentProps> = ({ 
  children, 
  variant = "fadeUp", 
  custom = 0, 
  className = "",
  ...props 
}) => (
  <motion.div
    className={className}
    variants={animationVariants[variant]}
    initial="hidden"
    animate="visible"
    custom={custom}
    {...props}
  >
    {children}
  </motion.div>
)

export const MotionSection: React.FC<MotionSectionProps> = ({ 
  children, 
  variant = "fadeUp", 
  className = "",
  ...props 
}) => (
  <motion.section
    className={className}
    variants={animationVariants[variant]}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    {...props}
  >
    {children}
  </motion.section>
)

export const MotionHeading = motion.h1
export const MotionH2 = motion.h2
export const MotionH3 = motion.h3
export const MotionP = motion.p

export const AnimatedImage: React.FC<MotionImageProps> = ({ 
  children, 
  hoverEffect = "scale", 
  className = "",
  ...props 
}) => (
  <motion.div
    className={className}
    variants={animationVariants.scaleIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    {...hoverEffects[hoverEffect]}
    {...props}
  >
    {children}
  </motion.div>
)

export const StaggerContainer: React.FC<{
  children: ReactNode
  className?: string
  fast?: boolean
}> = ({ children, className = "", fast = false }) => (
  <motion.div
    className={className}
    variants={fast ? animationVariants.fastStagger : animationVariants.staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
)

export const AnimatedButton: React.FC<{
  children: ReactNode
  className?: string
  onClick?: () => void
}> = ({ children, className = "", onClick }) => (
  <motion.button
    className={className}
    variants={animationVariants.fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {children}
  </motion.button>
)

export const RedLineSeparator: React.FC<{
  className?: string
}> = ({ className = "" }) => (
  <motion.div
    className={`h-1 bg-primary-red mx-auto ${className}`}
    variants={animationVariants.drawLine}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  />
)

// Page transition wrapper
export const PageTransition: React.FC<{
  children: ReactNode
}> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {children}
  </motion.div>
)

// Scroll-triggered animations
export const ScrollReveal: React.FC<{
  children: ReactNode
  className?: string
  delay?: number
}> = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
)

// Text reveal animation (for hero headlines)
export const TextReveal: React.FC<{
  children: ReactNode
  className?: string
  delay?: number
}> = ({ children, className = "", delay = 0 }) => (
  <motion.div className="overflow-hidden">
    <motion.div
      className={className}
      initial={{ y: "100%" }}
      animate={{ 
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
    >
      {children}
    </motion.div>
  </motion.div>
)

// Image mask reveal effect
export const ImageMaskReveal: React.FC<{
  children: ReactNode
  className?: string
}> = ({ children, className = "" }) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ scale: 1.2, opacity: 0 }}
      whileInView={{ 
        scale: 1, 
        opacity: 1,
        transition: {
          duration: 1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  </div>
)