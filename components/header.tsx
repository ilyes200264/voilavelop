"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="header-content flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="logo-section">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <div className="hidden md:block">
                  <h1 className="text-xl font-bold text-dark-charcoal">Voilà Vélo Fruité</h1>
                  <p className="text-sm text-gray-600">Montréal | Québec | Laval | Ottawa</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="main-navigation hidden lg:block">
            <ul className="nav-menu flex items-center space-x-8">
              <li>
                <Link href="/" className="text-dark-charcoal hover:text-primary-red transition-colors">
                  Accueil
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/a-propos/"
                  className="text-dark-charcoal hover:text-primary-red transition-colors flex items-center"
                >
                  À Propos <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/forfaits/"
                  className="text-dark-charcoal hover:text-primary-red transition-colors flex items-center"
                >
                  Forfaits <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/evenements/"
                  className="text-dark-charcoal hover:text-primary-red transition-colors flex items-center"
                >
                  Événements <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href="/comment-ca-marche/"
                  className="text-dark-charcoal hover:text-primary-red transition-colors"
                >
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-dark-charcoal hover:text-primary-red transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Section */}
          <div className="header-cta flex items-center space-x-4">
            <div className="language-switcher hidden md:flex items-center space-x-2">
              <Link href="/" className="text-primary-red font-semibold">
                FR
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/en/" className="text-gray-600 hover:text-primary-red transition-colors">
                EN
              </Link>
            </div>

            <Button className="btn-primary hidden md:inline-flex">Réserver</Button>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="mobile-navigation lg:hidden border-t border-gray-200 py-4">
            <ul className="space-y-4">
              <li>
                <Link href="/" className="block py-2 text-dark-charcoal">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos/" className="block py-2 text-dark-charcoal">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/forfaits/" className="block py-2 text-dark-charcoal">
                  Forfaits
                </Link>
              </li>
              <li>
                <Link href="/evenements/" className="block py-2 text-dark-charcoal">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="/comment-ca-marche/" className="block py-2 text-dark-charcoal">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="block py-2 text-dark-charcoal">
                  Contact
                </Link>
              </li>
              <li className="pt-4 border-t border-gray-200">
                <Button className="btn-primary w-full">Réserver</Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
