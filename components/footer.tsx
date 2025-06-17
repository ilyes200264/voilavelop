"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { LanguageSwitcher } from "./language-switcher"

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="site-footer bg-primary-red text-white">
      {/* Pre-footer CTA Section */}
      <div className="footer-cta-section py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="footer-logo-section">
            <div className="footer-logo mb-8">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <img
                  src="/voila_smoothie_bike_logo_bg.png"
                  alt={t('logo.alt')}
                  className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{t('companyName')}</h2>
                </div>
              </div>
            </div>
            <div className="footer-cities">
              <h3 className="cities-text text-xl md:text-2xl font-medium">{t('cities')}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main py-12 border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="footer-columns grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Column 1: Contact Information */}
            <div className="footer-column contact-column lg:col-span-2">
              <h3 className="footer-title text-xl font-semibold text-secondary-yellow mb-4">{t('common.footer.contact')}</h3>
              <div className="contact-info space-y-4">
                <div className="contact-item address flex items-start space-x-3">
                  <div className="contact-icon text-lg">📍</div>
                  <div className="contact-details">
                    <p>
                      <Link
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener"
                        className="hover:text-secondary-yellow transition-colors"
                      >
                        {t('common.footer.address.line1')}
                        <br />
                        {t('common.footer.address.line2')}
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="contact-item phone flex items-start space-x-3">
                  <div className="contact-icon text-lg">📞</div>
                  <div className="contact-details">
                    <p>
                      <Link href={`tel:+1-${t('common.footer.phone')}`} className="hover:text-secondary-yellow transition-colors">
                        {t('common.footer.phone')}
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="contact-item email flex items-start space-x-3">
                  <div className="contact-icon text-lg">✉️</div>
                  <div className="contact-details">
                    <p>
                      <Link href={`mailto:${t('common.footer.email')}`} className="hover:text-secondary-yellow transition-colors">
                        {t('common.footer.email')}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Packages */}
            <div className="footer-column packages-column">
              <h3 className="footer-title text-xl font-semibold text-secondary-yellow mb-4">
                <Link href="/forfaits/" className="hover:underline">
                  {t('common.navigation.packages')}
                </Link>
              </h3>
              <ul className="footer-menu space-y-2">
                <li>
                  <Link href="/forfaits/la-petite-koki/" className="hover:text-secondary-yellow transition-colors">
                    {t('common.packages_submenu.laPetiteKoki')}
                  </Link>
                </li>
                <li>
                  <Link href="/forfaits/pop-solo/" className="hover:text-secondary-yellow transition-colors">
                    {t('common.packages_submenu.popSolo')}
                  </Link>
                </li>
                <li>
                  <Link href="/forfaits/double-fun/" className="hover:text-secondary-yellow transition-colors">
                    {t('common.packages_submenu.doubleFun')}
                  </Link>
                </li>
                <li>
                  <Link href="/forfaits/ready-set-blend/" className="hover:text-secondary-yellow transition-colors">
                    {t('common.packages_submenu.readySetBlend')}
                  </Link>
                </li>
                <li>
                  <Link href="/forfaits/defi-parent-enfant/" className="hover:text-secondary-yellow transition-colors">
                    {t('common.packages_submenu.parentChildChallenge')}
                  </Link>
                </li>
                <li>
                  <Link href="/forfaits/la-smoothie-parade/" className="hover:text-secondary-yellow transition-colors">
                    {t('common.packages_submenu.smoothieParade')}
                  </Link>
                </li>
                <li>
                  <Link href="/forfaits/signature/" className="hover:text-secondary-yellow transition-colors">
                    {t('common.packages_submenu.signature')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: About */}
            <div className="footer-column about-column">
              <h3 className="footer-title text-xl font-semibold text-secondary-yellow mb-4">
                <Link href="/a-propos/" className="hover:underline">
                  {t('common.navigation.about')}
                </Link>
              </h3>
              <ul className="footer-menu space-y-2">
                <li>
                  <Link href="/a-propos/#nos-partenaires" className="hover:text-secondary-yellow transition-colors">
                    {t('common.footer.ourPartners')}
                  </Link>
                </li>
                <li>
                  <Link href="/a-propos/#notre-mission" className="hover:text-secondary-yellow transition-colors">
                    {t('common.footer.ourMission')}
                  </Link>
                </li>
                <li>
                  <Link href="/blogue/" className="hover:text-secondary-yellow transition-colors">
                    {t('common.footer.ourBlog')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Connect */}
            <div className="footer-column connect-column">
              <h3 className="footer-title text-xl font-semibold text-secondary-yellow mb-4">
                {t('common.footer.connectWithUs')}
              </h3>

              {/* Newsletter Signup */}
              <div className="newsletter-signup mb-6">
                <p className="newsletter-intro text-sm mb-4">
                  {t('common.footer.newsletterIntro')}
                </p>

                <form className="newsletter-form space-y-3">
                  <Input
                    type="text"
                    placeholder={t('common.footer.name')}
                    className="newsletter-input bg-transparent border-white text-white placeholder:text-white/70"
                  />
                  <Input
                    type="email"
                    placeholder={t('common.footer.email')}
                    className="newsletter-input bg-transparent border-white text-white placeholder:text-white/70"
                  />
                  <Button className="newsletter-submit w-full bg-white text-primary-red hover:bg-secondary-yellow hover:text-dark-charcoal">
                    {t('common.footer.subscribe')}
                  </Button>
                </form>
              </div>

              {/* Social Media Links */}
              <div className="social-media">
                <h4 className="social-title font-semibold mb-3">{t('common.footer.followUs')}</h4>
                <div className="social-links flex space-x-3">
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="social-link w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-primary-red transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="social-link w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-primary-red transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="social-link w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-primary-red transition-all"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener"
                    className="social-link w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-primary-red transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom bg-dark-charcoal py-8">
        <div className="container mx-auto px-4">
          <div className="footer-bottom-content flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Indigenous Acknowledgment */}
            <div className="indigenous-acknowledgment flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 flex-1">
              <div className="acknowledgment-flag">
                <div className="w-12 h-8 bg-gradient-to-r from-red-600 to-yellow-500 rounded"></div>
              </div>
              <div className="acknowledgment-text text-center md:text-left">
                <p className="text-sm text-gray-300">
                  {t('common.footer.indigenousAcknowledgment')}
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="copyright">
              <p className="text-sm text-gray-300">
                {t('common.footer.copyright')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
