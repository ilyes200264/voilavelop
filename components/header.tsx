"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/lib/i18n"

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1
    }
  }
}

const logoVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
}

const navItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const { t, language, setLanguage } = useI18n()

  const getNavItems = () => [
    { name: t('common.navigation.home'), href: "/", hasSubmenu: false },
    { 
      name: t('common.navigation.about'), 
      href: "/a-propos/", 
      hasSubmenu: true,
      submenuId: "about",
      submenu: [
        { name: t('common.about_submenu.whoWeAre'), href: "/a-propos/#qui-nous-sommes" },
        { name: t('common.about_submenu.ourMission'), href: "/a-propos/#notre-mission" },
        { name: t('common.about_submenu.ourValues'), href: "/a-propos/#nos-valeurs" }
      ]
    },
    { 
      name: t('common.navigation.packages'), 
      href: "/forfaits/", 
      hasSubmenu: true,
      submenuId: "packages",
      submenu: [
        { name: t('common.packages_submenu.laPetiteKoki'), href: "/forfaits/la-petite-koki" },
        { name: t('common.packages_submenu.popSolo'), href: "/forfaits/pop-solo" },
        { name: t('common.packages_submenu.doubleFun'), href: "/forfaits/double-fun" },
        { name: t('common.packages_submenu.readySetBlend'), href: "/forfaits/ready-set-blend" },
        { name: t('common.packages_submenu.parentChildChallenge'), href: "/forfaits/defi-parent-enfant" },
        { name: t('common.packages_submenu.smoothieParade'), href: "/forfaits/la-smoothie-parade" },
        { name: t('common.packages_submenu.signature'), href: "/forfaits/signature" }
      ]
    },
    { 
      name: t('common.navigation.events'), 
      href: "/evenements/", 
      hasSubmenu: true,
      submenuId: "events",
      submenu: [
        { name: t('common.events_submenu.corporate'), href: "/evenements/corporate" },
        { name: t('common.events_submenu.openingsActivations'), href: "/evenements/ouvertures-et-activations" },
        { name: t('common.events_submenu.schoolsOrganizationsAnniversaries'), href: "/evenements/ecoles-organismes-et-anniversaires" },
        { name: t('common.events_submenu.conferencesExhibitions'), href: "/evenements/conferences-et-expositions" }
      ]
    },
    { 
      name: t('common.navigation.howItWorks'), 
      href: "/comment-ca-marche/", 
      hasSubmenu: true,
      submenuId: "how",
      submenu: [
        { name: t('common.howItWorks_submenu.createYourEvent'), href: "/comment-ca-marche/build-your-event" },
        { name: t('common.howItWorks_submenu.faq'), href: "/comment-ca-marche/faq" }
      ]
    },
    { name: t('common.navigation.contact'), href: "/contact/", hasSubmenu: false }
  ]
  
  const navItems = getNavItems()

  return (
    <motion.header 
      // CHANGED: Added subtle gradient matching logo colors (orange/yellow tones)
      className="site-header fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-orange-50/50 to-yellow-50/30 shadow-sm backdrop-blur-sm"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="header-content flex items-center justify-between py-4">
          {/* Logo Section */}
          <motion.div 
            className="logo-section"
            variants={logoVariants}
          >
            <Link href="/">
              <div className="flex items-center space-x-2">
                <img
                  src="/voila_smoothie_bike_logo.png"
                  alt="Voilà Vélo Fruité Logo"
                  className="w-20 h-20 rounded-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="main-navigation hidden lg:block">
            <ul className="nav-menu flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  className={item.hasSubmenu ? "nav-item relative group" : "nav-item"}
                  variants={navItemVariants}
                  custom={index}
                  onMouseEnter={() => item.hasSubmenu && setOpenSubmenu(item.submenuId || null)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <Link 
                    href={item.href}
                    className="nav-link flex items-center space-x-1 text-dark-charcoal hover:text-primary-red transition-colors duration-300 font-medium"
                  >
                    <span>{item.name}</span>
                    {item.hasSubmenu && (
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </Link>
                  
                  {/* Submenu */}
                  {item.hasSubmenu && item.submenu && (
                    <AnimatePresence>
                      {openSubmenu === item.submenuId && (
                        <motion.div
                          className="submenu absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ul className="py-2">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  className="block px-4 py-3 text-sm text-dark-charcoal hover:bg-secondary-yellow/20 hover:text-primary-red transition-all duration-300"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="header-actions flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="language-toggle hidden lg:flex items-center space-x-1 text-sm font-medium text-dark-charcoal hover:text-primary-red transition-colors"
            >
              <span className={language === 'fr' ? 'font-bold' : ''}>FR</span>
              <span>/</span>
              <span className={language === 'en' ? 'font-bold' : ''}>EN</span>
            </button>

            {/* Book Now Button - CHANGED: Links directly to reservation form */}
            <Link href="/reserver">
              <Button className="book-now-btn hidden lg:block bg-primary-red hover:bg-red-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                {t('common.navigation.book')}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle lg:hidden text-dark-charcoal hover:text-primary-red transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu lg:hidden bg-white border-t"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto px-4 py-6">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-lg font-medium text-dark-charcoal hover:text-primary-red transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 space-y-4">
                <Link href="/reserver" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-primary-red hover:bg-red-600 text-white">
                    {t('common.navigation.book')}
                  </Button>
                </Link>
                
                <button
                  onClick={() => {
                    setLanguage(language === 'fr' ? 'en' : 'fr')
                    setIsMenuOpen(false)
                  }}
                  className="w-full text-center py-2 text-sm font-medium text-dark-charcoal hover:text-primary-red transition-colors"
                >
                  {language === 'fr' ? 'English' : 'Français'}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

/*
CHANGES MADE:
1. Added subtle gradient background: bg-gradient-to-r from-white via-orange-50/50 to-yellow-50/30
2. Added backdrop-blur-sm for modern glass effect
3. Added hover scale effect on logo
4. Ensured "Book Now" button links directly to /reserver (reservation form)
5. Improved hover states and transitions
6. Added proper color scheme matching brand colors
*/