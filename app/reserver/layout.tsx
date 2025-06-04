import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Réserver - Voilà Vélo",
  description: "Réservez un forfait vélo smoothie pour votre prochain événement",
}

export default function ReserverLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}