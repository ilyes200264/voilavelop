import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("text-h1 font-bold leading-tight", className)}>
      {children}
    </h1>
  )
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("text-h2 font-semibold leading-tight", className)}>
      {children}
    </h2>
  )
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("text-h3 font-semibold leading-tight", className)}>
      {children}
    </h3>
  )
}

export function H4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn("text-h4 font-medium leading-tight", className)}>
      {children}
    </h4>
  )
}

export function P({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-body leading-normal", className)}>
      {children}
    </p>
  )
}

export function Small({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-small leading-normal", className)}>
      {children}
    </p>
  )
}

export function PoppinsText({ children, className }: TypographyProps) {
  return (
    <span className={cn("font-poppins", className)}>
      {children}
    </span>
  )
}