import type { Metadata } from 'next'
import './globals.css'
import { openSans, poppins } from '@/lib/fonts'
import { ThemeProvider } from '@/components/theme-provider'
import { I18nProvider } from '@/lib/i18n'
import translations from '@/lib/translations'

export const metadata: Metadata = {
  title: 'Voilà Vélo',
  description: 'Smoothie vélos pour vos événements',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${openSans.variable} ${poppins.variable}`}>
      <body className={openSans.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <I18nProvider initialLanguage="fr" translations={translations}>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
