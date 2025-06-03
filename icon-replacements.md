# Emoji to Icon Replacements

This document lists all emojis used in the website and their proposed replacements using Lucide React icons.

## Sustainability Section

| Emoji | Description | Lucide Icon Replacement |
|-------|-------------|-------------------------|
| 🚫🥤 | No straws | `Ban` + `Coffee` |
| ♻️ | Zero waste | `Recycle` |
| 🍎 | Food waste reduction | `Apple` |
| 🤝 | Fighting inequality | `HandsClapping` |
| 🌱 | Carbon neutral | `Sprout` |

## Benefits Section

| Emoji | Description | Lucide Icon Replacement |
|-------|-------------|-------------------------|
| 💪 | Workplace wellness | `Dumbbell` |
| 🤝 | Team building | `Users` |
| 🏢 | Corporate events | `Building2` |
| 🛍️ | Shopping center activities | `ShoppingBag` |
| 🎓 | School events | `GraduationCap` |
| 🎓 | University open days | `GraduationCap` |
| 💒 | Weddings and celebrations | `PartyPopper` |

## Package Details

| Emoji | Description | Lucide Icon Replacement |
|-------|-------------|-------------------------|
| 🚴‍♀️ | Safe blender bike | `Bike` |
| 🥤 | Fresh smoothies | `Glass` |
| 🎭 | Energetic animation | `Theater` |
| 🎵 | Music and ambiance | `Music` |

## About Page Values

| Emoji | Description | Lucide Icon Replacement |
|-------|-------------|-------------------------|
| 💪 | Health & Well-being | `Heart` |
| 🌱 | Sustainability | `Leaf` |
| 🤝 | Community | `UsersRound` |
| 🌈 | Empowerment & Inclusion | `Sparkles` |

## Implementation Requirements

1. Import Lucide icons at the top of each component:
   ```jsx
   import { 
     Ban, Coffee, Recycle, Apple, HandsClapping, Sprout, 
     // other icons as needed 
   } from "lucide-react"
   ```

2. For icons that require combining two icons (like Ban + Coffee for no straws), create a custom component that overlays the two icons.

3. Replace the emoji string with the appropriate icon component:
   ```jsx
   // Before
   <div className="feature-icon text-4xl mb-4">{feature.icon}</div>
   
   // After
   <div className="feature-icon text-4xl mb-4">
     {feature.iconName === "recycle" ? (
       <Recycle className="h-8 w-8 mx-auto" />
     ) : feature.iconName === "noStraws" ? (
       <div className="relative h-8 w-8 mx-auto">
         <Ban className="h-8 w-8 text-red-500 absolute inset-0" />
         <Coffee className="h-6 w-6 absolute top-1 left-1 opacity-75" />
       </div>
     ) : /* other icon conditions */}
   </div>
   ```

4. Update the data structure to include an iconName property rather than the emoji string:
   ```jsx
   const sustainabilityFeatures = [
     {
       iconName: "noStraws",
       title: "Pailles\nNon merci!",
       description: "Nous n'utilisons pas de pailles ou de couvercles...",
     },
     // ...
   ]
   ```