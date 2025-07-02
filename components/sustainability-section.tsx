"use client"

import { IconMapper } from "@/components/ui/icon-mapper";
import { useI18n } from "@/lib/i18n";

export function SustainabilitySection() {
  const { t } = useI18n();
  const sustainabilityFeatures = [
    {
      iconName: "noStraws",
      title: t('home.sustainability.items.noStraws.title'),
      description: t('home.sustainability.items.noStraws.description')
    },
    {
      iconName: "recycle",
      title: t('home.sustainability.items.zeroWaste.title'),
      description: t('home.sustainability.items.zeroWaste.description')
    },
    {
      iconName: "apple",
      title: t('home.sustainability.items.foodWaste.title'),
      description: t('home.sustainability.items.foodWaste.description')
    }
  ]

  return (
    <section className="sustainability-section relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="parallax-bg absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/images/velo-smoothie-3.jpg')`,
        }}
      />

      <div className="sustainability-overlay absolute inset-0 bg-accent-green/80" />

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="section-header text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-white">
              {t('home.sustainability.title')}
            </h2>
          </div>

          {/* Sustainability Features Grid */}
          <div className="sustainability-grid grid grid-cols-1 md:grid-cols-3 gap-12 justify-center md:justify-between items-center mx-auto">
            {sustainabilityFeatures.map((feature, index) => (
              <div
                key={index}
                className="sustainability-feature text-center bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-80 min-h-80 flex flex-col justify-center"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="feature-icon text-4xl mb-4">
                  <IconMapper iconName={feature.iconName} className="h-10 w-10 mx-auto text-accent-green" />
                </div>
                <h3 className="feature-title text-lg font-bold text-dark-charcoal mb-4 whitespace-pre-line">
                  {feature.title}
                </h3>
                <p className="feature-description text-sm text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
