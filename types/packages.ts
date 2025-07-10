// types/packages.ts
export interface PackageMainSection {
  title: string;
  description: string;
  image?: string;
  includes?: string[];
  backgroundColor?: string;
}

export interface PackageTargetSection {
  title: string;
  description: string;
  backgroundColor?: string;
  perfectFor?: string[];
}

export interface PackageTargetAudience {
  title: string;
  description: string;
  items: string[];
}

export interface PackageOption {
  title: string;
  idealFor: string;
  includes: string[];
  price?: string;
}

export interface PackageCustomizationSection {
  title: string;
  description: string;
  details: string;
  downloadLink: string;
}

export interface PackageDemoSection {
  title: string;
}

export interface Package {
  id: string;
  title: string;
  description: string;
  tagline?: string;
  heroDescription?: string;
  image?: string;
  heroImage?: string;
  ageRange?: string;
  duration?: string;
  capacity?: string;
  mainSection?: PackageMainSection;
  targetSection?: PackageTargetSection;
  targetAudience?: PackageTargetAudience;
  includes?: string[];
  badge?: string;
  borderColor?: string;
  startingPrice?: string;
  color?: string;
  textColor?: string;
  options?: PackageOption[];
  customizationSection?: PackageCustomizationSection;
  demoSection?: PackageDemoSection;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Translation interfaces for JSON structure
export interface PackageTranslations {
  title: string;
  tagline: string;
  heroDescription: string;
  mainSection?: {
    title: string;
    description: string;
    includes?: string[];
  };
  targetSection?: {
    title: string;
    description: string;
    perfectFor?: string[];
  };
  targetAudience?: {
    title: string;
    description: string;
    items: string[];
  };
  options?: Array<{
    title: string;
    idealFor: string;
    includes?: string[];
  }>;
  customizationSection?: {
    title: string;
    description: string;
    details: string;
  };
  demoSection?: {
    title: string;
  };
}

export interface PackagesTranslationStructure {
  packages: {
    [packageId: string]: PackageTranslations;
  };
  // Global package page translations
  pageHero?: {
    title: string;
    description: string;
  };
  hero?: {
    title: string;
    subtitle: string;
    viewPackages: string;
    requestQuote: string;
  };
  intro?: {
    title: string;
    description1: string;
    description2: string;
  };
  packagesGrid?: {
    title: string;
    subtitle: string;
  };
  features?: {
    title: string;
    delivery: string;
    deliveryDesc: string;
    animator: string;
    animatorDesc: string;
    ingredients: string;
    ingredientsDesc: string;
    equipment: string;
    equipmentDesc: string;
  };
  help?: {
    title: string;
    description: string;
    requestQuote: string;
    callUs: string;
    testimonial: {
      text: string;
      author: string;
      company: string;
    };
  };
  seeDetails?: string;
  popular?: string;
}