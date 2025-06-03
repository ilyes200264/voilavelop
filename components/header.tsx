"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu)
  }

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
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      href="/a-propos/#qui-nous-sommes"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      Qui nous sommes
                    </Link>
                    <Link
                      href="/a-propos/#notre-mission"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      Notre mission
                    </Link>
                    <Link
                      href="/a-propos/#nos-valeurs"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      Nos valeurs
                    </Link>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <Link
                  href="/forfaits/"
                  className="text-dark-charcoal hover:text-primary-red transition-colors flex items-center"
                >
                  Forfaits <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      href="/forfaits/la-petite-koki"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      La petite Koki
                    </Link>
                    <Link
                      href="/forfaits/pop-solo"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      Pop Solo
                    </Link>
                    <Link
                      href="/forfaits/double-fun"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      Double Fun
                    </Link>
                    <Link
                      href="/forfaits/ready-set-blend"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      Ready Set Blend
                    </Link>
                    <Link
                      href="/forfaits/defi-parent-enfant"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      Défi Parent-Enfant
                    </Link>
                    <Link
                      href="/forfaits/la-smoothie-parade"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      La Smoothie Parade
                    </Link>
                    <Link
                      href="/forfaits/signature"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      Forfait Signature
                    </Link>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <Link
                  href="/evenements/"
                  className="text-dark-charcoal hover:text-primary-red transition-colors flex items-center"
                >
                  Événements <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <div className="absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      href="/evenements/corporate"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      Corporate
                    </Link>
                    <Link
                      href="/evenements/ouvertures-et-activations"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      Ouvertures & Activations
                    </Link>
                    <Link
                      href="/evenements/ecoles-organismes-et-anniversaires"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      Écoles, Organismes & Anniversaires
                    </Link>
                    <Link
                      href="/evenements/conferences-et-expositions"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      Conférences & Expositions
                    </Link>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <Link
                  href="/comment-ca-marche/"
                  className="text-dark-charcoal hover:text-primary-red transition-colors flex items-center"
                >
                  Comment ça marche <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link
                      href="/comment-ca-marche/build-your-event"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      Créez votre événement
                    </Link>
                    <Link
                      href="/comment-ca-marche/faq"
                      className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                      role="menuitem"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
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
                <div className="flex items-center justify-between py-2">
                  <Link href="/a-propos/" className="text-dark-charcoal">
                    À Propos
                  </Link>
                  <button
                    onClick={() => toggleSubmenu('about')}
                    className="p-1 text-dark-charcoal"
                    aria-expanded={activeSubmenu === 'about'}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeSubmenu === 'about' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {activeSubmenu === 'about' && (
                  <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                    <li>
                      <Link href="/a-propos/#qui-nous-sommes" className="block py-1 text-sm text-dark-charcoal">
                        Qui nous sommes
                      </Link>
                    </li>
                    <li>
                      <Link href="/a-propos/#notre-mission" className="block py-1 text-sm text-dark-charcoal">
                        Notre mission
                      </Link>
                    </li>
                    <li>
                      <Link href="/a-propos/#nos-valeurs" className="block py-1 text-sm text-dark-charcoal">
                        Nos valeurs
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <div className="flex items-center justify-between py-2">
                  <Link href="/forfaits/" className="text-dark-charcoal">
                    Forfaits
                  </Link>
                  <button
                    onClick={() => toggleSubmenu('packages')}
                    className="p-1 text-dark-charcoal"
                    aria-expanded={activeSubmenu === 'packages'}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeSubmenu === 'packages' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {activeSubmenu === 'packages' && (
                  <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                    <li>
                      <Link href="/forfaits/la-petite-koki" className="block py-1 text-sm text-dark-charcoal">
                        La petite Koki
                      </Link>
                    </li>
                    <li>
                      <Link href="/forfaits/pop-solo" className="block py-1 text-sm text-dark-charcoal">
                        Pop Solo
                      </Link>
                    </li>
                    <li>
                      <Link href="/forfaits/double-fun" className="block py-1 text-sm text-dark-charcoal">
                        Double Fun
                      </Link>
                    </li>
                    <li>
                      <Link href="/forfaits/ready-set-blend" className="block py-1 text-sm text-dark-charcoal">
                        Ready Set Blend
                      </Link>
                    </li>
                    <li>
                      <Link href="/forfaits/defi-parent-enfant" className="block py-1 text-sm text-dark-charcoal">
                        Défi Parent-Enfant
                      </Link>
                    </li>
                    <li>
                      <Link href="/forfaits/la-smoothie-parade" className="block py-1 text-sm text-dark-charcoal">
                        La Smoothie Parade
                      </Link>
                    </li>
                    <li>
                      <Link href="/forfaits/signature" className="block py-1 text-sm text-dark-charcoal">
                        Forfait Signature
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <div className="flex items-center justify-between py-2">
                  <Link href="/evenements/" className="text-dark-charcoal">
                    Événements
                  </Link>
                  <button
                    onClick={() => toggleSubmenu('events')}
                    className="p-1 text-dark-charcoal"
                    aria-expanded={activeSubmenu === 'events'}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeSubmenu === 'events' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {activeSubmenu === 'events' && (
                  <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                    <li>
                      <Link href="/evenements/corporate" className="block py-1 text-sm text-dark-charcoal">
                        Corporate
                      </Link>
                    </li>
                    <li>
                      <Link href="/evenements/ouvertures-et-activations" className="block py-1 text-sm text-dark-charcoal">
                        Ouvertures & Activations
                      </Link>
                    </li>
                    <li>
                      <Link href="/evenements/ecoles-organismes-et-anniversaires" className="block py-1 text-sm text-dark-charcoal">
                        Écoles, Organismes & Anniversaires
                      </Link>
                    </li>
                    <li>
                      <Link href="/evenements/conferences-et-expositions" className="block py-1 text-sm text-dark-charcoal">
                        Conférences & Expositions
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <div className="flex items-center justify-between py-2">
                  <Link href="/comment-ca-marche/" className="text-dark-charcoal">
                    Comment ça marche
                  </Link>
                  <button
                    onClick={() => toggleSubmenu('how')}
                    className="p-1 text-dark-charcoal"
                    aria-expanded={activeSubmenu === 'how'}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeSubmenu === 'how' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {activeSubmenu === 'how' && (
                  <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                    <li>
                      <Link href="/comment-ca-marche/build-your-event" className="block py-1 text-sm text-dark-charcoal">
                        Créez votre événement
                      </Link>
                    </li>
                    <li>
                      <Link href="/comment-ca-marche/faq" className="block py-1 text-sm text-dark-charcoal">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                )}
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
