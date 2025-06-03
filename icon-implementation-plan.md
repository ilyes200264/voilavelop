# Icon Implementation Plan

This document outlines the step-by-step process for replacing all emoji icons with Lucide React icons throughout the website.

## 1. Setup

### Ensure Lucide React is installed
```bash
npm install lucide-react
```

### Create a custom NoStrawsIcon component
Create a new file at `/components/icons/no-straws-icon.tsx`:

```tsx
import React from "react";
import { Ban, Coffee } from "lucide-react";

export function NoStrawsIcon({ className = "h-8 w-8 mx-auto" }) {
  return (
    <div className={`relative ${className}`}>
      <Ban className="absolute inset-0 text-red-500" />
      <Coffee className="absolute inset-0 h-5 w-5 top-1.5 left-1.5 opacity-75" />
    </div>
  );
}
```

## 2. Implementation Approach

### Create a reusable IconMapper component
Create a new file at `/components/ui/icon-mapper.tsx`:

```tsx
import React from "react";
import {
  Bike,
  Building2,
  Dumbbell,
  GraduationCap,
  Glass,
  Heart,
  HandsClapping,
  Leaf,
  Music,
  PartyPopper,
  Recycle,
  ShoppingBag,
  Sparkles,
  Sprout,
  Theater,
  Users,
  UsersRound,
  Apple,
} from "lucide-react";
import { NoStrawsIcon } from "@/components/icons/no-straws-icon";

interface IconMapperProps {
  iconName: string;
  className?: string;
}

export function IconMapper({ iconName, className = "h-6 w-6" }: IconMapperProps) {
  const iconMap: Record<string, React.ReactNode> = {
    // Sustainability
    noStraws: <NoStrawsIcon className={className} />,
    recycle: <Recycle className={className} />,
    apple: <Apple className={className} />,
    handsClapping: <HandsClapping className={className} />,
    sprout: <Sprout className={className} />,
    
    // Benefits
    dumbbell: <Dumbbell className={className} />,
    users: <Users className={className} />,
    building: <Building2 className={className} />,
    shoppingBag: <ShoppingBag className={className} />,
    graduationCap: <GraduationCap className={className} />,
    partyPopper: <PartyPopper className={className} />,
    
    // Package Details
    bike: <Bike className={className} />,
    glass: <Glass className={className} />,
    theater: <Theater className={className} />,
    music: <Music className={className} />,
    
    // About Page Values
    heart: <Heart className={className} />,
    leaf: <Leaf className={className} />,
    usersRound: <UsersRound className={className} />,
    sparkles: <Sparkles className={className} />,
  };

  return <>{iconMap[iconName] || <div className={className}>Icon not found</div>}</>;
}
```

## 3. Component Updates

### Update the Sustainability Section
In `/components/sustainability-section.tsx`:

1. Update imports:
```tsx
import { IconMapper } from "@/components/ui/icon-mapper";
```

2. Update the data structure:
```tsx
const sustainabilityFeatures = [
  {
    iconName: "noStraws",
    title: "Pailles\nNon merci!",
    description: "Nous n'utilisons pas de pailles ou de couvercles lors de nos événements et encourageons nos clients à faire de même",
  },
  {
    iconName: "recycle",
    title: "Zéro\nDéchet!",
    description: "Nous ne contribuons pas aux décharges lors de nos événements, recyclant et compostant tous nos déchets",
  },
  {
    iconName: "apple",
    title: "Lutte contre le\ngaspillage alimentaire!",
    description: "Nous donnons tous les ingrédients restants à des organismes de bienfaisance comme Moisson Montréal",
  },
  {
    iconName: "handsClapping",
    title: "Lutte contre\nles inégalités!",
    description: "Nous faisons des dons à UNICEF et à des organismes locaux, aidant les enfants et les jeunes chaque jour",
  },
  {
    iconName: "sprout",
    title: "Carbone\nNeutre!",
    description: "Tout le carbone produit par nos véhicules et notre papier est compensé par des plantations d'arbres au Québec",
  },
];
```

3. Update the JSX:
```tsx
<div className="feature-icon text-4xl mb-4">
  <IconMapper iconName={feature.iconName} className="h-10 w-10 mx-auto text-accent-green" />
</div>
```

### Update the Benefits Section
In `/components/benefits-section.tsx`:

1. Update imports:
```tsx
import { IconMapper } from "@/components/ui/icon-mapper";
```

2. Update the data structure:
```tsx
const benefits = [
  { iconName: "dumbbell", text: "Bien-être au travail" },
  { iconName: "users", text: "Consolidation d'équipe et engagement du personnel" },
  { iconName: "building", text: "Événements corporatifs (engagement de marque et promotion)" },
  { iconName: "shoppingBag", text: "Activités de centres commerciaux / Programmes de vacances scolaires" },
  { iconName: "graduationCap", text: "Fêtes d'école / Collectes de fonds caritatives" },
  { iconName: "graduationCap", text: "Journées portes ouvertes universitaires" },
  { iconName: "partyPopper", text: "Mariages, fêtes d'anniversaire et dîners de gala" },
];
```

3. Update the JSX:
```tsx
<span className="benefit-icon text-2xl flex-shrink-0">
  <IconMapper iconName={benefit.iconName} className="h-6 w-6 text-primary-red" />
</span>
```

### Update the Package Details
In `/app/forfaits/[slug]/page.tsx`:

1. Update imports:
```tsx
import { IconMapper } from "@/components/ui/icon-mapper";
```

2. Update the data structure in the mock package data:
```tsx
includes: [
  {
    iconName: "bike",
    title: "Vélo mélangeur sécuritaire",
    description: "Vélo spécialement adapté pour les enfants de 5-10 ans avec toutes les mesures de sécurité",
  },
  {
    iconName: "glass",
    title: "Smoothies frais",
    description: "Ingrédients frais et colorés, parfaits pour les goûts des enfants",
  },
  {
    iconName: "theater",
    title: "Animation énergique",
    description: "Animateur professionnel qui engage les enfants et crée une atmosphère festive",
  },
  {
    iconName: "music",
    title: "Musique et ambiance",
    description: "Playlist adaptée aux enfants et équipement sonore professionnel",
  },
],
```

3. Update the JSX:
```tsx
<div className="include-icon text-4xl mb-4">
  <IconMapper iconName={item.iconName} className="h-10 w-10 mx-auto text-primary-red" />
</div>
```

### Update the About Page Values
In `/app/a-propos/page.tsx`:

1. Update imports:
```tsx
import { IconMapper } from "@/components/ui/icon-mapper";
```

2. Update the data structure:
```tsx
const values = [
  {
    iconName: "heart",
    title: "Santé & Bien-être",
    description: "Nous croyons que la santé physique et mentale est la base d'une vie épanouie. Nos événements encouragent l'activité physique tout en créant des moments de joie et de connexion sociale.",
  },
  {
    iconName: "leaf",
    title: "Durabilité",
    description: "Engagées envers l'environnement québécois, nous pratiquons le zéro déchet, utilisons des ingrédients locaux et compensons notre empreinte carbone par des plantations d'arbres au Québec.",
  },
  {
    iconName: "usersRound",
    title: "Communauté",
    description: "Nous croyons au pouvoir de rassembler les gens. Nos événements créent des liens authentiques entre les participants et renforcent le tissu social de nos communautés québécoises.",
  },
  {
    iconName: "sparkles",
    title: "Autonomisation & Inclusion",
    description: "Nous créons des expériences accessibles à tous, peu importe l'âge, les capacités physiques ou le background. Chaque personne mérite de vivre la joie de pédaler pour son smoothie.",
  },
];
```

3. Update the JSX where the icon is rendered in the value cards.

## 4. Testing

1. Test each component individually after updates
2. Check for mobile responsiveness
3. Ensure icon sizing is consistent and appropriate in all contexts
4. Verify all icon colors match the website's color scheme

## 5. Implementation Order

1. Create the NoStrawsIcon component
2. Create the IconMapper component
3. Update the Sustainability Section
4. Update the Benefits Section
5. Update the Package Details
6. Update the About Page Values

This phased approach allows for incremental testing and ensures that all pages remain functional throughout the update process.