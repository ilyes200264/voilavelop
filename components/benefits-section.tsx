export function BenefitsSection() {
  const benefits = [
    { icon: "💪", text: "Bien-être au travail" },
    { icon: "🤝", text: "Consolidation d'équipe et engagement du personnel" },
    { icon: "🏢", text: "Événements corporatifs (engagement de marque et promotion)" },
    { icon: "🛍️", text: "Activités de centres commerciaux / Programmes de vacances scolaires" },
    { icon: "🎓", text: "Fêtes d'école / Collectes de fonds caritatives" },
    { icon: "🎓", text: "Journées portes ouvertes universitaires" },
    { icon: "💒", text: "Mariages, fêtes d'anniversaire et dîners de gala" },
  ]

  return (
    <section className="benefits-section relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="parallax-bg absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1200&width=1920')`,
        }}
      />

      {/* Content Overlay */}
      <div className="benefits-overlay absolute inset-0 bg-black/60" />

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="benefits-content-box max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="benefits-title text-3xl md:text-4xl font-bold text-center text-dark-charcoal mb-4">
              Reconnectez-vous de façon amusante et saine.
            </h2>

            <h5 className="benefits-subtitle text-xl font-semibold text-center text-primary-red mb-8">Parfait pour:</h5>

            <ul className="benefits-list grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item flex items-start space-x-3 p-3">
                  <span className="benefit-icon text-2xl flex-shrink-0">{benefit.icon}</span>
                  <span className="benefit-text text-dark-charcoal leading-relaxed">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <div className="benefits-footer text-center space-y-6">
              <p className="benefits-question text-lg text-dark-charcoal">
                Vous avez autre chose en tête?
                <br />
                <span className="font-semibold">Contactez-nous pour votre idée d'événement!</span>
              </p>

              <button className="btn-primary bg-primary-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
