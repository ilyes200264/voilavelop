# Complete Voilà Vélo Website Design & Content Specification

## Executive Design Brief

Create a comprehensive bilingual website for **Voilà Vélo Fruité**, a premium pedal-powered smoothie bike business serving Quebec (Montreal, Laval, Quebec City, Ottawa). The design must blend European sophistication with North American approachability, emphasizing sustainability, health, and fun while building trust through professional presentation.

**Design Philosophy**: "Sustainable Energy Meets Quebec Joie de Vivre"

## Visual Design System

### 1. Color Palette & Psychology

#### Primary Colors
```css
:root {
  /* Primary Brand Colors */
  --primary-red: #ec634c;        /* Energy, appetite, action */
  --secondary-yellow: #f0b860;   /* Optimism, warmth, Quebec sunshine */
  --accent-green: #85ba5d;       /* Nature, sustainability, health */
  --trust-blue: #73bfc3;         /* Reliability, freshness, clarity */
  --creative-purple: #c8a5f8;    /* Innovation, fun, premium */
  
  /* Supporting Colors */
  --dark-charcoal: #4d4d4d;      /* Professional text, authority */
  --light-gray: #f7f8f7;         /* Clean backgrounds, breathing space */
  --warm-white: #ffffff;         /* Purity, cleanliness, premium */
  --overlay-dark: rgba(77,77,77,0.8);    /* Video overlays */
  --overlay-light: rgba(247,248,247,0.9); /* Content overlays */
}
```

#### Color Usage Guidelines
**Primary Red (#ec634c)**: 
- Hero CTAs, primary buttons, urgent actions
- Header backgrounds, footer backgrounds
- Package accent colors, important highlights
- Maximum 30% of page visual weight

**Secondary Yellow (#f0b860)**:
- Secondary CTAs, headers, warmth elements
- Package backgrounds, testimonial accents
- Navigation highlights, friendly messages
- 20% of page visual weight

**Accent Green (#85ba5d)**:
- Sustainability messaging, eco-friendly badges
- Success states, positive feedback
- Nature-related content, health benefits
- 15% of page visual weight

### 2. Typography System

#### Font Hierarchy
```css
/* Primary Font Stack */
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Typography Scale */
--font-size-h1: clamp(2.5rem, 5vw, 4rem);      /* 40-64px */
--font-size-h2: clamp(2rem, 4vw, 3rem);        /* 32-48px */
--font-size-h3: clamp(1.5rem, 3vw, 2rem);      /* 24-32px */
--font-size-h4: clamp(1.25rem, 2.5vw, 1.5rem); /* 20-24px */
--font-size-body: clamp(1rem, 2vw, 1.125rem);   /* 16-18px */
--font-size-small: clamp(0.875rem, 1.5vw, 1rem); /* 14-16px */

/* Line Heights */
--line-height-tight: 1.2;    /* Headlines */
--line-height-normal: 1.5;   /* Body text */
--line-height-loose: 1.8;    /* Large paragraphs */

/* Font Weights */
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

#### Typography Application
**H1 Headlines**: Bold (700), tight line-height, primary red or white
**H2 Section Headers**: Semibold (600), yellow accent, center-aligned
**H3 Subsections**: Medium (500), dark charcoal, left-aligned
**Body Text**: Normal (400), dark charcoal, 1.5 line-height
**CTAs**: Semibold (600), all caps, letter-spacing 0.05em

### 3. Layout & Grid System

#### Container Specifications
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.container-fluid {
  width: 100%;
  max-width: 100vw;
}

.container-narrow {
  max-width: 800px;
  margin: 0 auto;
}
```

#### Grid System
**Desktop**: 12-column grid, 20px gutters
**Tablet**: 8-column grid, 16px gutters  
**Mobile**: 4-column grid, 12px gutters

#### Spacing Scale
```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */
--spacing-xxl: 4rem;     /* 64px */
--spacing-xxxl: 6rem;    /* 96px */
```

### 4. Interactive Elements

#### Button Design System
```css
/* Primary CTA Button */
.btn-primary {
  background: var(--primary-red);
  color: var(--warm-white);
  border: none;
  border-radius: 10px;
  padding: 16px 32px;
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(236, 99, 76, 0.3);
}

.btn-primary:hover {
  background: #d55741;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(236, 99, 76, 0.4);
}

/* Secondary CTA Button */
.btn-secondary {
  background: var(--warm-white);
  color: var(--primary-red);
  border: 2px solid var(--primary-red);
  /* Same dimensions and hover effects */
}

/* Phone CTA Button */
.btn-phone {
  background: var(--secondary-yellow);
  color: var(--dark-charcoal);
  /* Specific phone button styling */
}
```

#### Form Elements
```css
.form-input {
  border: none;
  border-bottom: 2px solid var(--primary-red);
  background: transparent;
  padding: 12px 0;
  font-size: var(--font-size-body);
  color: var(--dark-charcoal);
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-bottom-color: var(--secondary-yellow);
}

.form-input::placeholder {
  color: var(--dark-charcoal);
  opacity: 0.7;
}
```

## Website Structure & Content

### 1. Header Design Specification

#### Desktop Header (1200px+)
```html
<header class="site-header">
  <div class="container">
    <div class="header-content">
      <!-- Logo Section -->
      <div class="logo-section">
        <img src="voila-velo-logo.svg" alt="Voilà Vélo Fruité" class="main-logo">
        <!-- Logo Dimensions: 200px width, auto height -->
        <!-- Logo Colors: Full color on white, white on colored backgrounds -->
      </div>
      
      <!-- Main Navigation -->
      <nav class="main-navigation">
        <ul class="nav-menu">
          <li><a href="/">Accueil</a></li>
          <li class="has-dropdown">
            <a href="/a-propos/">À Propos</a>
          </li>
          <li class="has-dropdown">
            <a href="/forfaits/">Forfaits ▼</a>
            <ul class="dropdown-menu">
              <li><a href="/forfaits/la-petite-koki/">La petite Koki</a></li>
              <li><a href="/forfaits/pop-solo/">Pop Solo</a></li>
              <li><a href="/forfaits/double-fun/">Double Fun</a></li>
              <li><a href="/forfaits/ready-set-blend/">Ready Set Blend</a></li>
              <li><a href="/forfaits/defi-parent-enfant/">Défi Parent-Enfant</a></li>
              <li><a href="/forfaits/la-smoothie-parade/">La Smoothie Parade</a></li>
              <li><a href="/forfaits/signature/">Forfait Signature</a></li>
            </ul>
          </li>
          <li class="has-dropdown">
            <a href="/evenements/">Événements ▼</a>
            <ul class="dropdown-menu">
              <li><a href="/evenements/corporatif/">Corporatif</a></li>
              <li><a href="/evenements/ouvertures-activations/">Ouvertures & Activations</a></li>
              <li><a href="/evenements/ecoles-osbl-anniversaires/">Écoles, OSBL & Anniversaires</a></li>
              <li><a href="/evenements/conferences-expositions/">Conférences & Expositions</a></li>
            </ul>
          </li>
          <li class="has-dropdown">
            <a href="/comment-ca-marche/">Comment ça marche ▼</a>
            <ul class="dropdown-menu">
              <li><a href="/comment-ca-marche/#planifiez-votre-evenement">Planifiez votre événement</a></li>
              <li><a href="/comment-ca-marche/#faq">FAQ</a></li>
            </ul>
          </li>
          <li><a href="/contact/">Contact</a></li>
          <li><a href="/reserver/">Réserver</a></li>
        </ul>
      </nav>
      
      <!-- CTA Section -->
      <div class="header-cta">
        <a href="tel:+1-XXX-XXX-XXXX" class="btn-phone">
          Appelez maintenant: XXX-XXX-XXXX
        </a>
        <div class="language-switcher">
          <a href="/" class="lang-active">FR</a>
          <span class="lang-separator">|</span>
          <a href="/en/" class="lang-inactive">EN</a>
        </div>
      </div>
    </div>
  </div>
</header>
```

#### Mobile Header (< 1000px)
```html
<header class="site-header mobile-header">
  <div class="mobile-header-content">
    <div class="mobile-logo">
      <img src="voila-velo-logo-mobile.svg" alt="Voilà Vélo" class="mobile-logo-img">
    </div>
    
    <div class="mobile-controls">
      <div class="language-switcher mobile">
        <a href="/" class="lang-active">FR</a>
        <a href="/en/" class="lang-inactive">EN</a>
      </div>
      
      <button class="mobile-menu-toggle" aria-label="Menu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
  </div>
  
  <!-- Mobile Slide-out Menu -->
  <nav class="mobile-navigation">
    <div class="mobile-nav-header">
      <a href="tel:+1-XXX-XXX-XXXX" class="mobile-phone-cta">
        📞 XXX-XXX-XXXX
      </a>
    </div>
    <!-- Full mobile menu structure -->
  </nav>
</header>
```

### 2. Homepage Design Specification

#### Hero Section
**Visual Layout**: Full viewport height, video background with overlay
**Dimensions**: 100vw × 100vh (minimum 600px height)

```html
<section class="hero-section">
  <!-- Background Video -->
  <div class="hero-video-container">
    <video class="hero-video" autoplay muted loop playsinline>
      <source src="voila-velo-hero-video.mp4" type="video/mp4">
      <source src="voila-velo-hero-video.webm" type="video/webm">
    </video>
    <div class="video-overlay"></div>
  </div>
  
  <!-- Hero Content -->
  <div class="hero-content">
    <div class="container">
      <div class="hero-text-center">
        <!-- City Names with Animation -->
        <div class="city-names">
          <h1 class="city-name" data-animation-delay="0">Montréal</h1>
          <h1 class="city-name" data-animation-delay="150">Québec</h1>
          <h1 class="city-name" data-animation-delay="300">Laval</h1>
          <h1 class="city-name" data-animation-delay="450">Ottawa</h1>
        </div>
        
        <!-- Red Accent Line -->
        <div class="hero-accent-line" data-animation-delay="600"></div>
        
        <!-- Main Value Proposition -->
        <p class="hero-tagline" data-animation-delay="750">
          Créez un événement mémorable qui soit amusant, innovant et qui promeut la durabilité avec une différence que votre équipe appréciera.
        </p>
        
        <!-- Primary CTA -->
        <div class="hero-cta" data-animation-delay="900">
          <a href="/contact/" class="btn-primary btn-large">
            Demander une soumission
            <span class="btn-icon">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Hero Section CSS Specifications**:
```css
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg, 
    rgba(236, 99, 76, 0.3) 0%, 
    rgba(240, 184, 96, 0.2) 100%
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: var(--warm-white);
}

.city-names {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.city-name {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-weight-bold);
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
}

.hero-accent-line {
  width: 100px;
  height: 5px;
  background: var(--primary-red);
  margin: 0 auto 2rem;
  opacity: 0;
  transform: scaleX(0);
  animation: scaleIn 0.6s ease forwards;
}

.hero-tagline {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  line-height: var(--line-height-normal);
  max-width: 800px;
  margin: 0 auto 3rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

#### Value Proposition Section
**Background**: Primary red (#ec634c)
**Layout**: Two-column (50/50) on desktop, stacked on mobile

```html
<section class="value-proposition">
  <div class="container">
    <div class="value-prop-content">
      <!-- Left Column: Image -->
      <div class="value-prop-image">
        <div class="image-container">
          <img 
            src="voila-velo-action-shot.jpg" 
            alt="Personnes pédalant joyeusement sur les vélos smoothie Voilà Vélo"
            class="featured-image"
            loading="lazy"
          >
        </div>
      </div>
      
      <!-- Right Column: Content -->
      <div class="value-prop-text">
        <h2 class="section-title">
          Créez vos smoothies à énergie humaine!
        </h2>
        
        <h5 class="section-subtitle">
          "Une expérience saine et amusante pour tous les âges"
        </h5>
        
        <div class="section-content">
          <p class="intro-paragraph">
            Voilà Vélo Fruité est une entreprise d'événements pop-up qui promeut la santé et le bien-être en utilisant nos vélos mélangeurs fabriqués au Québec.
          </p>
          
          <p class="detail-paragraph">
            Faites de votre prochain événement un succès amusant et sain! Nous avons de l'expérience dans l'organisation d'événements pop-up uniques pour répondre à vos besoins. Choisissez l'un de nos forfaits populaires ou contactez-nous pour une soumission avant qu'on soit tous pédalés!
          </p>
        </div>
        
        <div class="section-cta">
          <a href="/contact/" class="btn-secondary btn-large">
            Demander maintenant
            <span class="btn-icon">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### Benefits Section
**Background**: Parallax image with overlay
**Content**: Overlay box with benefits list

```html
<section class="benefits-section parallax-section">
  <!-- Parallax Background Image -->
  <div class="parallax-bg" style="background-image: url('quebec-outdoor-event.jpg')"></div>
  
  <!-- Content Overlay -->
  <div class="benefits-overlay">
    <div class="container">
      <div class="benefits-content-box">
        <h2 class="benefits-title">
          Reconnectez-vous de façon amusante et saine.
        </h2>
        
        <h5 class="benefits-subtitle">Parfait pour:</h5>
        
        <ul class="benefits-list">
          <li class="benefit-item">
            <span class="benefit-icon">💪</span>
            <span class="benefit-text">Bien-être au travail</span>
          </li>
          <li class="benefit-item">
            <span class="benefit-icon">🤝</span>
            <span class="benefit-text">Consolidation d'équipe et engagement du personnel</span>
          </li>
          <li class="benefit-item">
            <span class="benefit-icon">🏢</span>
            <span class="benefit-text">Événements corporatifs (engagement de marque et promotion)</span>
          </li>
          <li class="benefit-item">
            <span class="benefit-icon">🛍️</span>
            <span class="benefit-text">Activités de centres commerciaux / Programmes de vacances scolaires</span>
          </li>
          <li class="benefit-item">
            <span class="benefit-icon">🎓</span>
            <span class="benefit-text">Fêtes d'école / Collectes de fonds caritatives</span>
          </li>
          <li class="benefit-item">
            <span class="benefit-icon">🎓</span>
            <span class="benefit-text">Journées portes ouvertes universitaires</span>
          </li>
          <li class="benefit-item">
            <span class="benefit-icon">💒</span>
            <span class="benefit-text">Mariages, fêtes d'anniversaire et dîners de gala</span>
          </li>
        </ul>
        
        <div class="benefits-footer">
          <p class="benefits-question">
            Vous avez autre chose en tête?<br>
            Contactez-nous pour votre idée d'événement!
          </p>
          
          <a href="/contact/" class="btn-primary">
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### Packages Section
**Background**: Light gray (#f7f8f7)
**Layout**: Three-column grid with color-coded package cards

```html
<section class="packages-section">
  <div class="container">
    <!-- Section Header -->
    <div class="section-header">
      <h2 class="section-title centered">Nos forfaits favoris</h2>
    </div>
    
    <!-- Packages Grid -->
    <div class="packages-grid">
      
      <!-- Package 1: La petite Koki (Orange) -->
      <div class="package-card orange-package">
        <div class="package-header">
          <h4 class="package-title">La petite Koki</h4>
          <div class="package-icon">
            <img src="kids-smoothie-icon.svg" alt="Icône forfait enfants" class="package-icon-img">
          </div>
        </div>
        
        <div class="package-description">
          <p class="package-tagline">Le favori de tous les temps des enfants!</p>
          <p class="package-intro">
            Parfait pour les anniversaires, les graduations de garderie ou les festivals familiaux, ce forfait apporte plaisir, rire et smoothies savoureux à toute célébration!
          </p>
        </div>
        
        <div class="package-includes">
          <h5 class="includes-title">Le forfait inclut:</h5>
          <ul class="includes-list">
            <li>1 vélo mélangeur adapté aux enfants (5-10 ans)</li>
            <li>25-50 smoothies délicieux</li>
            <li>1-2 heures de divertissement énergique</li>
            <li>Smoothies frais et colorés préparés sur place</li>
            <li>Animation vivante avec musique et ambiance festive</li>
            <li>Personnalisation possible avec votre marque</li>
          </ul>
        </div>
        
        <div class="package-options">
          <div class="option">
            <span class="option-label">Option 1:</span>
            <span class="option-details">25 smoothies + 1 heure</span>
          </div>
          <div class="option">
            <span class="option-label">Option 2:</span>
            <span class="option-details">50 smoothies + 2 heures</span>
          </div>
        </div>
        
        <div class="package-cta">
          <a href="/forfaits/la-petite-koki/" class="btn-package">
            En savoir plus
          </a>
        </div>
      </div>
      
      <!-- Package 2: Pop Solo (Yellow) -->
      <div class="package-card yellow-package">
        <div class="package-header">
          <h4 class="package-title">Pop Solo</h4>
          <div class="package-icon">
            <img src="solo-smoothie-icon.svg" alt="Icône forfait solo" class="package-icon-img">
          </div>
        </div>
        
        <div class="package-description">
          <p class="package-tagline">Un succès garanti avec les ados, adultes et familles!</p>
          <p class="package-intro">
            Parfait pour les événements scolaires, les fêtes de bureau ou tout rassemblement festif axé sur la santé et le plaisir!
          </p>
        </div>
        
        <div class="package-includes">
          <h5 class="includes-title">Le forfait inclut:</h5>
          <ul class="includes-list">
            <li>1 vélo mélangeur adapté aux adultes</li>
            <li>50-75 smoothies frais préparés sur place</li>
            <li>1.5-2.5 heures de plaisir énergique</li>
            <li>Atmosphère festive avec musique et bonnes vibrations</li>
            <li>Personnalisation possible avec votre marque</li>
          </ul>
        </div>
        
        <div class="package-options">
          <div class="option">
            <span class="option-label">Option 1:</span>
            <span class="option-details">50 smoothies + 1.5 heures</span>
          </div>
          <div class="option">
            <span class="option-label">Option 2:</span>
            <span class="option-details">75 smoothies + 2.5 heures</span>
          </div>
        </div>
        
        <div class="package-cta">
          <a href="/forfaits/pop-solo/" class="btn-package">
            En savoir plus
          </a>
        </div>
      </div>
      
      <!-- Package 3: Double Fun (Blue) -->
      <div class="package-card blue-package">
        <div class="package-header">
          <h4 class="package-title">Double Fun</h4>
          <div class="package-icon">
            <img src="double-bike-icon.svg" alt="Icône double vélos" class="package-icon-img">
          </div>
        </div>
        
        <div class="package-description">
          <p class="package-tagline">Deux fois plus de vélos = deux fois plus d'énergie!</p>
          <p class="package-intro">
            Parfait pour les festivals communautaires, les activations de marque, les collectes de fonds, les fêtes corporatives, les portes ouvertes et plus encore!
          </p>
        </div>
        
        <div class="package-includes">
          <h5 class="includes-title">Le forfait inclut:</h5>
          <ul class="includes-list">
            <li>2 vélos mélangeurs pour adultes</li>
            <li>100-300 smoothies préparés sur place</li>
            <li>2-4 heures de divertissement</li>
            <li>Musique et ambiance de foule bourdonnante</li>
            <li>Personnalisation avec votre marque, ballons et décorations</li>
          </ul>
        </div>
        
        <div class="package-options">
          <div class="option">
            <span class="option-label">Option 1:</span>
            <span class="option-details">100 smoothies + 2 heures</span>
          </div>
          <div class="option">
            <span class="option-label">Option 2:</span>
            <span class="option-details">200 smoothies + 3 heures</span>
          </div>
          <div class="option">
            <span class="option-label">Option 3:</span>
            <span class="option-details">300 smoothies + 4 heures</span>
          </div>
        </div>
        
        <div class="package-cta">
          <a href="/forfaits/double-fun/" class="btn-package">
            En savoir plus
          </a>
        </div>
      </div>
      
    </div>
    
    <!-- Section Footer -->
    <div class="packages-footer">
      <p class="packages-tagline">
        <em><span class="red-text">Le choix vous appartient –</span> choisissez parmi notre gamme complète de forfaits ou contactez-nous pour créer le vôtre.</em>
      </p>
      
      <div class="packages-cta">
        <a href="/forfaits/" class="btn-primary">
          Voir plus de forfaits
        </a>
      </div>
    </div>
  </div>
</section>
```

**Package Cards CSS Specifications**:
```css
.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.package-card {
  background: var(--warm-white);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.package-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

/* Package Color Variations */
.orange-package {
  border-top: 5px solid var(--primary-red);
}

.orange-package .package-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(135deg, var(--primary-red), #f97316);
  opacity: 0.1;
  z-index: -1;
}

.yellow-package {
  border-top: 5px solid var(--secondary-yellow);
}

.blue-package {
  border-top: 5px solid var(--trust-blue);
}

.package-title {
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--dark-charcoal);
  margin-bottom: 1rem;
}

.package-icon-img {
  width: 60px;
  height: 60px;
  margin: 1rem 0;
}

.package-tagline {
  font-size: 1.1rem;
  font-weight: var(--font-weight-semibold);
  color: var(--primary-red);
  margin-bottom: 1rem;
}

.includes-list {
  text-align: left;
  list-style: none;
  padding: 0;
}

.includes-list li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.includes-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-green);
  font-weight: var(--font-weight-bold);
}

.btn-package {
  background: var(--dark-charcoal);
  color: var(--warm-white);
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-package:hover {
  background: var(--primary-red);
  transform: translateY(-2px);
}
```

#### Testimonials Section
```html
<section class="testimonials-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title centered">Témoignages</h2>
    </div>
    
    <div class="testimonials-carousel">
      <!-- Testimonial 1 -->
      <div class="testimonial-card">
        <div class="testimonial-content">
          <div class="stars-rating">
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </div>
          
          <blockquote class="testimonial-text">
            "Notre événement communautaire a eu beaucoup plus de succès grâce aux vélos. C'est la 3e année que nous les louons... merci beaucoup!"
          </blockquote>
          
          <div class="testimonial-author">
            <div class="author-image">
              <img src="testimonial-1.jpg" alt="Béatrice" class="author-photo">
            </div>
            <div class="author-details">
              <h5 class="author-name">Béatrice</h5>
              <p class="author-title">Organisatrice d'événement</p>
              <p class="testimonial-date">Décembre 2024</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Additional testimonials... -->
    </div>
    
    <!-- Carousel Controls -->
    <div class="carousel-controls">
      <button class="carousel-btn prev" aria-label="Témoignage précédent">‹</button>
      <div class="carousel-dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <button class="carousel-btn next" aria-label="Témoignage suivant">›</button>
    </div>
  </div>
</section>
```

#### Sustainability Section
```html
<section class="sustainability-section parallax-section">
  <!-- Parallax Background -->
  <div class="parallax-bg" style="background-image: url('quebec-nature-background.jpg')"></div>
  
  <div class="sustainability-overlay">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title centered white-text">
          Nous intégrons la durabilité dans tout ce que nous faisons!!
        </h2>
      </div>
      
      <!-- Sustainability Features Grid -->
      <div class="sustainability-grid">
        
        <!-- Feature 1: No Straws -->
        <div class="sustainability-feature" data-animation-delay="0">
          <div class="feature-icon">
            <img src="no-straws-icon.svg" alt="Aucune paille" class="sustainability-icon">
          </div>
          <h3 class="feature-title">Pailles<br>Non merci!</h3>
          <p class="feature-description">
            Nous n'utilisons pas de pailles ou de couvercles lors de nos événements et encourageons nos clients à faire de même
          </p>
        </div>
        
        <!-- Feature 2: Zero Waste -->
        <div class="sustainability-feature" data-animation-delay="150">
          <div class="feature-icon">
            <img src="zero-waste-icon.svg" alt="Zéro déchet" class="sustainability-icon">
          </div>
          <h3 class="feature-title">Zéro<br>Déchet!</h3>
          <p class="feature-description">
            Nous ne contribuons pas aux décharges lors de nos événements, recyclant et compostant tous nos déchets
          </p>
        </div>
        
        <!-- Feature 3: Food Rescue -->
        <div class="sustainability-feature" data-animation-delay="300">
          <div class="feature-icon">
            <img src="food-rescue-icon.svg" alt="Récupération alimentaire" class="sustainability-icon">
          </div>
          <h3 class="feature-title">Lutte contre le<br>gaspillage alimentaire!</h3>
          <p class="feature-description">
            Nous donnons tous les ingrédients restants à des organismes de bienfaisance comme Moisson Montréal
          </p>
        </div>
        
        <!-- Feature 4: Social Impact -->
        <div class="sustainability-feature" data-animation-delay="450">
          <div class="feature-icon">
            <img src="social-impact-icon.svg" alt="Impact social" class="sustainability-icon">
          </div>
          <h3 class="feature-title">Lutte contre<br>les inégalités!</h3>
          <p class="feature-description">
            Nous faisons des dons à UNICEF et à des organismes locaux, aidant les enfants et les jeunes chaque jour
          </p>
        </div>
        
        <!-- Feature 5: Carbon Neutral -->
        <div class="sustainability-feature" data-animation-delay="600">
          <div class="feature-icon">
            <img src="carbon-neutral-icon.svg" alt="Carbone neutre" class="sustainability-icon">
          </div>
          <h3 class="feature-title">Carbone<br>Neutre!</h3>
          <p class="feature-description">
            Tout le carbone produit par nos véhicules et notre papier est compensé par des plantations d'arbres au Québec
          </p>
        </div>
        
      </div>
    </div>
  </div>
</section>
```

### 3. Footer Design Specification

```html
<footer class="site-footer">
  <!-- Pre-footer CTA Section -->
  <div class="footer-cta-section">
    <div class="container">
      <div class="footer-logo-section">
        <img src="voila-velo-footer-logo.svg" alt="Voilà Vélo Fruité" class="footer-logo">
        <div class="footer-cities">
          <h3 class="cities-text">Montréal | Québec | Laval | Ottawa</h3>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Main Footer Content -->
  <div class="footer-main">
    <div class="container">
      <div class="footer-columns">
        
        <!-- Column 1: Contact Information -->
        <div class="footer-column contact-column">
          <h3 class="footer-title">Contact</h3>
          <div class="contact-info">
            <div class="contact-item address">
              <div class="contact-icon">📍</div>
              <div class="contact-details">
                <p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener">
                    [Adresse d'entreprise]<br>
                    Montréal, QC [Code postal]
                  </a>
                </p>
              </div>
            </div>
            
            <div class="contact-item phone">
              <div class="contact-icon">📞</div>
              <div class="contact-details">
                <p><a href="tel:+1-XXX-XXX-XXXX">XXX-XXX-XXXX</a></p>
              </div>
            </div>
            
            <div class="contact-item email">
              <div class="contact-icon">✉️</div>
              <div class="contact-details">
                <p><a href="mailto:info@voilavelo.ca">info@voilavelo.ca</a></p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Column 2: Packages -->
        <div class="footer-column packages-column">
          <h3 class="footer-title">
            <a href="/forfaits/">Forfaits</a>
          </h3>
          <ul class="footer-menu">
            <li><a href="/forfaits/la-petite-koki/">La petite Koki</a></li>
            <li><a href="/forfaits/pop-solo/">Pop Solo</a></li>
            <li><a href="/forfaits/double-fun/">Double Fun</a></li>
            <li><a href="/forfaits/ready-set-blend/">Ready Set Blend</a></li>
            <li><a href="/forfaits/defi-parent-enfant/">Défi Parent-Enfant</a></li>
            <li><a href="/forfaits/la-smoothie-parade/">La Smoothie Parade</a></li>
            <li><a href="/forfaits/signature/">Forfait Signature</a></li>
          </ul>
        </div>
        
        <!-- Column 3: About -->
        <div class="footer-column about-column">
          <h3 class="footer-title">
            <a href="/a-propos/">À Propos</a>
          </h3>
          <ul class="footer-menu">
            <li><a href="/a-propos/#nos-partenaires">Nos Partenaires</a></li>
            <li><a href="/a-propos/#notre-mission">Notre Mission</a></li>
            <li><a href="/blogue/">Notre Blogue</a></li>
          </ul>
        </div>
        
        <!-- Column 4: How It Works -->
        <div class="footer-column how-it-works-column">
          <h3 class="footer-title">
            <a href="/comment-ca-marche/">Comment ça marche</a>
          </h3>
          <ul class="footer-menu">
            <li><a href="/comment-ca-marche/#planifiez-votre-evenement">Planifiez votre événement</a></li>
            <li><a href="/comment-ca-marche/#nos-recettes">Nos Recettes</a></li>
            <li><a href="/comment-ca-marche/#exemples">Exemples</a></li>
            <li><a href="/comment-ca-marche/#faq">FAQ</a></li>
          </ul>
        </div>
        
        <!-- Column 5: Connect -->
        <div class="footer-column connect-column">
          <h3 class="footer-title">Connectez-vous avec nous</h3>
          
          <!-- Newsletter Signup -->
          <div class="newsletter-signup">
            <p class="newsletter-intro">
              Abonnez-vous pour télécharger nos sept meilleurs conseils pour un événement réussi.
            </p>
            
            <form class="newsletter-form" action="#" method="post">
              <div class="form-group">
                <input 
                  type="text" 
                  name="first-name" 
                  placeholder="Nom" 
                  required 
                  class="newsletter-input"
                >
              </div>
              
              <div class="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  required 
                  class="newsletter-input"
                >
              </div>
              
              <button type="submit" class="newsletter-submit">
                S'ABONNER
              </button>
            </form>
          </div>
          
          <!-- Social Media Links -->
          <div class="social-media">
            <h4 class="social-title">Suivez-nous</h4>
            <div class="social-links">
              <a href="#" target="_blank" rel="noopener" class="social-link facebook" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank" rel="noopener" class="social-link instagram" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank" rel="noopener" class="social-link youtube" aria-label="YouTube">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="#" target="_blank" rel="noopener" class="social-link linkedin" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  
  <!-- Footer Bottom -->
  <div class="footer-bottom">
    <div class="container">
      <div class="footer-bottom-content">
        
        <!-- Indigenous Acknowledgment -->
        <div class="indigenous-acknowledgment">
          <div class="acknowledgment-flag">
            <img src="indigenous-flag.png" alt="Drapeau des peuples autochtones" class="flag-image">
          </div>
          <div class="acknowledgment-text">
            <p>
              Nous reconnaissons également les peuples autochtones, les gardiens traditionnels de la terre sur laquelle nous travaillons. Nous rendons hommage aux aînés du passé, du présent et de l'avenir. Voix. Traité. Vérité.
            </p>
          </div>
        </div>
        
        <!-- Copyright -->
        <div class="copyright">
          <p>© Copyright 2025 <a href="/">Voilà Vélo Fruité</a></p>
        </div>
        
      </div>
    </div>
  </div>
</footer>
```

**Footer CSS Specifications**:
```css
.site-footer {
  background: var(--primary-red);
  color: var(--warm-white);
}

.footer-cta-section {
  padding: 4rem 0 2rem;
  text-align: center;
}

.footer-logo {
  max-width: 200px;
  height: auto;
  margin-bottom: 2rem;
}

.cities-text {
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
  color: var(--warm-white);
}

.footer-main {
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: var(--font-weight-semibold);
  color: var(--secondary-yellow);
  margin-bottom: 1rem;
}

.footer-title a {
  color: var(--secondary-yellow);
  text-decoration: none;
}

.footer-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-menu li {
  margin-bottom: 0.75rem;
}

.footer-menu a {
  color: var(--warm-white);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-menu a:hover {
  color: var(--secondary-yellow);
  text-decoration: underline;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.contact-icon {
  font-size: 1.2rem;
  margin-right: 0.75rem;
  margin-top: 0.1rem;
}

.newsletter-form {
  margin-bottom: 2rem;
}

.newsletter-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--warm-white);
  color: var(--warm-white);
  padding: 0.75rem 0;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.newsletter-submit {
  background: var(--warm-white);
  color: var(--primary-red);
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-submit:hover {
  background: var(--secondary-yellow);
  color: var(--dark-charcoal);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: transparent;
  border: 1px solid var(--warm-white);
  border-radius: 50%;
  color: var(--warm-white);
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--warm-white);
  color: var(--primary-red);
  transform: translateY(-2px);
}

.footer-bottom {
  background: var(--dark-charcoal);
  padding: 2rem 0;
}

.footer-bottom-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.indigenous-acknowledgment {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.flag-image {
  width: 60px;
  height: auto;
}

.acknowledgment-text p {
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}

.copyright {
  font-size: 0.9rem;
}

.copyright a {
  color: var(--warm-white);
  text-decoration: none;
}

.copyright a:hover {
  text-decoration: underline;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .footer-columns {
    grid-template-columns: 1fr;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .indigenous-acknowledgment {
    flex-direction: column;
    text-align: center;
  }
}
```

## Responsive Design Specifications

### Breakpoints
```css
/* Mobile First Approach */
:root {
  --mobile-small: 320px;
  --mobile-large: 480px;
  --tablet-small: 768px;
  --tablet-large: 1024px;
  --desktop-small: 1200px;
  --desktop-large: 1440px;
  --desktop-xl: 1920px;
}

/* Media Query Mixins */
@media (max-width: 767px) {
  /* Mobile Styles */
}

@media (min-width: 768px) and (max-width: 1023px) {
  /* Tablet Styles */
}

@media (min-width: 1024px) {
  /* Desktop Styles */
}
```

### Mobile-Specific Adjustments
```css
@media (max-width: 767px) {
  .hero-section {
    height: 70vh;
    min-height: 500px;
  }
  
  .city-names {
    flex-direction: column;
    gap: 1rem;
  }
  
  .city-name {
    font-size: 2rem;
  }
  
  .hero-tagline {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
  
  .value-prop-content {
    flex-direction: column;
  }
  
  .value-prop-image,
  .value-prop-text {
    width: 100%;
  }
  
  .packages-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .sustainability-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
```

## Animation & Interaction Specifications

### Scroll Animations
```javascript
// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe all animation elements
document.querySelectorAll('[data-animation-delay]').forEach(el => {
  observer.observe(el);
});
```

### CSS Animations
```css
[data-animation-delay] {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

[data-animation-delay].animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered animation delays */
[data-animation-delay="0"] { transition-delay: 0ms; }
[data-animation-delay="150"] { transition-delay: 150ms; }
[data-animation-delay="300"] { transition-delay: 300ms; }
[data-animation-delay="450"] { transition-delay: 450ms; }
[data-animation-delay="600"] { transition-delay: 600ms; }
```

## Content Strategy & SEO

### Meta Descriptions (French)
**Homepage**: "Voilà Vélo Fruité: Événements à vélos smoothie écologiques à Montréal, Québec, Laval et Ottawa. Pédalez pour créer vos smoothies! Parfait pour événements corporatifs, écoles et festivals. Devis gratuit."

**Keywords Strategy**:
- Primary: vélos smoothie Montréal, événements écologiques Québec
- Secondary: animation corporative durable, activités team building santé
- Long-tail: location vélo mélangeur événement entreprise Québec

### Content Requirements

#### Homepage Content Blocks
1. **Hero Video**: 15-second loop showing diverse people enjoying smoothie bikes in Quebec settings
2. **Value Proposition**: Professional photography of bikes in action, people smiling
3. **Benefits**: Lifestyle photography showing corporate events, school activities
4. **Packages**: Custom iconography for each package, consistent style
5. **Testimonials**: Real customer photos and video testimonials
6. **Sustainability**: Custom illustrated icons, nature photography
7. **Partners**: Client logo carousel with recognizable Quebec brands

#### Photography Requirements
- **Style**: Bright, energetic, authentic moments
- **Settings**: Quebec locations, diverse age groups
- **Quality**: High resolution (minimum 2000px width), optimized for web
- **Formats**: WebP with JPEG fallbacks
- **Alt Text**: Descriptive French alt text for accessibility

This comprehensive design specification provides every detail needed to create a professional, conversion-optimized website that captures Voilà Vélo's unique positioning in the Quebec market while leveraging proven design patterns from successful competitors.