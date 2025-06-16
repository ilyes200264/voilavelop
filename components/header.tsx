"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/lib/i18n"
import { LanguageSwitcher } from "./language-switcher"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const { t, language } = useI18n()

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu)
  }

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const submenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

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
      className="site-header fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
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
                className="w-20 h-20 rounded-full object-cover"
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
                  className={item.hasSubmenu ? "relative group" : ""}
                  variants={navItemVariants}
                  custom={index}
                >
                  <Link
                    href={item.href}
                    className="text-dark-charcoal hover:text-primary-red transition-colors flex items-center"
                  >
                    {item.name} {item.hasSubmenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                  
                  {item.hasSubmenu && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-dark-charcoal hover:text-primary-red hover:bg-gray-50"
                            role="menuitem"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* CTA Section */}
          <motion.div 
            className="header-cta flex items-center space-x-4"
            variants={navItemVariants}
            custom={6}
          >
            <LanguageSwitcher className="hidden md:flex" />

            <Button className="btn-primary hidden md:inline-flex" asChild>
              <Link href="/reserver">{t('common.navigation.book')}</Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <motion.button 
              className="lg:hidden p-2" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              aria-label="Menu"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation with AnimatePresence for smooth enter/exit */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              className="mobile-navigation lg:hidden border-t border-gray-200 py-4 overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <motion.li key={item.name} variants={navItemVariants}>
                    {!item.hasSubmenu ? (
                      <Link href={item.href} className="block py-2 text-dark-charcoal">
                        {item.name}
                      </Link>
                    ) : (
                      <>
                        <div className="flex items-center justify-between py-2">
                          <Link href={item.href} className="text-dark-charcoal">
                            {item.name}
                          </Link>
                          <motion.button
                            onClick={() => toggleSubmenu(item.submenuId!)}
                            className="p-1 text-dark-charcoal"
                            aria-expanded={activeSubmenu === item.submenuId}
                            whileTap={{ scale: 0.9 }}
                          >
                            <motion.div
                              animate={{ rotate: activeSubmenu === item.submenuId ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </motion.div>
                          </motion.button>
                        </div>
                        
                        <AnimatePresence>
                          {activeSubmenu === item.submenuId && (
                            <motion.ul 
                              className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100 overflow-hidden"
                              variants={submenuVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                            >
                              {item.submenu?.map((subItem) => (
                                <motion.li key={subItem.href} variants={navItemVariants}>
                                  <Link href={subItem.href} className="block py-1 text-sm text-dark-charcoal">
                                    {subItem.name}
                                  </Link>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </motion.li>
                ))}
                <motion.li className="pt-4 border-t border-gray-200" variants={navItemVariants}>
                  <Button className="btn-primary w-full" asChild>
                    <Link href="/reserver">{t('common.navigation.book')}</Link>
                  </Button>
                </motion.li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}