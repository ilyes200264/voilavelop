"use client";

import { IconMapper } from "@/components/ui/icon-mapper"
import { useI18n } from "@/lib/i18n"

export function WhyChooseSection() {
  const { t } = useI18n()
  const reasons = [
    {
      iconName: "bike",
      title: t('home.whyChoose.reasons.ecoFriendly.title'),
      description: t('home.whyChoose.reasons.ecoFriendly.description')
    },
    {
      iconName: "leaf",
      title: t('home.whyChoose.reasons.sustainability.title'),
      description: t('home.whyChoose.reasons.sustainability.description')
    },
    {
      iconName: "heart",
      title: t('home.whyChoose.reasons.healthy.title'),
      description: t('home.whyChoose.reasons.healthy.description')
    },
    {
      iconName: "usersRound",
      title: t('home.whyChoose.reasons.events.title'),
      description: t('home.whyChoose.reasons.events.description')
    },
    {
      iconName: "recycle",
      title: t('home.whyChoose.reasons.values.title'),
      description: t('home.whyChoose.reasons.values.description')
    }
  ]

  return (
    <section className="why-choose-section py-16 md:py-24 bg-secondary-yellow/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-header text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
            {t('home.whyChoose.title')}
          </h2>
          <div className="red-line-separator w-16 h-1 bg-secondary-yellow mx-auto mb-8"></div>
          <p className="section-subtitle text-xl text-dark-charcoal font-semibold mb-4">
            {t('home.whyChoose.subtitle')}
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('home.whyChoose.description')}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="reasons-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="reason-card text-center p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 border-secondary-yellow/20"
            >
              <div className="reason-icon text-4xl mb-6">
                <IconMapper iconName={reason.iconName} className="h-14 w-14 mx-auto text-secondary-yellow" />
              </div>
              <h3 className="reason-title text-xl font-bold text-dark-charcoal mb-4">{reason.title}</h3>
              <p className="reason-description text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="section-footer text-center">
          <p className="tagline text-2xl font-bold text-dark-charcoal mb-4">
            {t('home.whyChoose.tagline.part1')} <span className="text-secondary-yellow font-bold">{t('home.whyChoose.tagline.part2')}</span>
          </p>
          <div className="emoji-line text-3xl">
            🌍💪🍹
          </div>
        </div>
      </div>
    </section>
  )
}