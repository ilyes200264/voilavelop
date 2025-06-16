import { packagesData } from "@/app/forfaits/packages-data";
import { useI18n } from "./i18n";
import { useMemo, useCallback } from "react";
import { kebabToCamel } from "./i18n-utils";

/**
 * This is a utility to help with translating packages data
 * It will help access the correct language version of the packages data
 */
export function usePackageTranslations() {
  const { t, language } = useI18n();
  
  // Function to translate a package based on its ID
  // Using useCallback to memoize the function reference based on language changes
  const translatePackage = useCallback((packageId: string) => {
    const pkg = packagesData[packageId as keyof typeof packagesData];
    
    if (!pkg) {
      return null;
    }
    
    // Check if we have translations for this package
    // Convert kebab-case package ID to camelCase for translation lookup
    const camelCaseId = kebabToCamel(packageId);
    // Path for JSON translation files:
    // packages is the JSON file, and the translated content is under packages.laPetiteKoki
    const translationPath = `packages:packages.${camelCaseId}`;
    
    // Try with both formats to ensure we're checking the right path
    const directPath = `packages.${camelCaseId}`;
    const withNamespace = `packages:packages.${camelCaseId}`;
    
    // Check both potential paths
    const directPathHasTranslation = t(directPath + '.title', null) !== null;
    const namespacePathHasTranslation = t(withNamespace + '.title', null) !== null;
    
    // Use the path that has translations
    const usePath = namespacePathHasTranslation ? withNamespace : directPath;
    const hasTranslations = directPathHasTranslation || namespacePathHasTranslation;
    
    console.log(`Translating package ${packageId} (camel: ${camelCaseId}) with language: ${language}`);
    console.log(`Checking paths:
    - Direct path ${directPath}: ${directPathHasTranslation ? 'YES' : 'NO'}
    - Namespace path ${withNamespace}: ${namespacePathHasTranslation ? 'YES' : 'NO'}
    - Using: ${usePath}`);
    
    // Try to get a translated title to verify translations are working
    const translatedTitle = t(`${usePath}.title`, 'NOT FOUND');
    console.log(`Translated title: "${translatedTitle}" (original: "${pkg.title}")`);
    
    // Return a translated version of the package
    const translatedPkg = {
      ...pkg,
      // Use the translations if they exist, otherwise use the original values
      title: t(`${usePath}.title`, pkg.title),
      tagline: t(`${usePath}.tagline`, pkg.tagline),
      heroDescription: t(`${usePath}.heroDescription`, pkg.heroDescription),
    };
    
    // For nested sections, we can also translate those
    if (pkg.mainSection) {
      translatedPkg.mainSection = {
        ...pkg.mainSection,
        title: t(`${usePath}.mainSection.title`, pkg.mainSection.title),
        description: t(`${usePath}.mainSection.description`, pkg.mainSection.description),
      };
      
      // Only translate includes if they exist in both the original and translations
      if (pkg.mainSection.includes) {
        // Check if we have translated includes
        const hasTranslatedIncludes = t(`${usePath}.mainSection.includes.0`, null) !== null;
        
        if (hasTranslatedIncludes) {
          translatedPkg.mainSection.includes = pkg.mainSection.includes.map((item: string, index: number) => 
            t(`${usePath}.mainSection.includes.${index}`, item)
          );
        } else {
          translatedPkg.mainSection.includes = pkg.mainSection.includes;
        }
      }
    }
    
    // Translate options if they exist
    if (pkg.options) {
      // Check if we have options in the translations
      const hasTranslatedOptions = t(`${usePath}.options`, null) !== null;
      
      if (hasTranslatedOptions) {
        translatedPkg.options = pkg.options.map((option: any, index: number) => ({
          ...option,
          title: t(`${usePath}.options.${index}.title`, option.title),
          idealFor: t(`${usePath}.options.${index}.idealFor`, option.idealFor),
        }));
        
        // Only translate includes in options if they exist
        translatedPkg.options = translatedPkg.options.map((option: any, index: number) => {
          if (option.includes) {
            const hasTranslatedOptionIncludes = t(`${usePath}.options.${index}.includes.0`, null) !== null;
            
            if (hasTranslatedOptionIncludes) {
              return {
                ...option,
                includes: pkg.options[index].includes.map((item: string, itemIndex: number) => 
                  t(`${usePath}.options.${index}.includes.${itemIndex}`, item)
                )
              };
            }
          }
          
          return option;
        });
      }
    }
    
    return translatedPkg;
  }, [language, t]);
  
  // Function to get all packages with translations
  // Using useMemo to cache the result and only recalculate when language changes
  const allPackages = useMemo(() => {
    console.log('Recalculating all packages with language:', language);
    // Check both direct and namespace access
    console.log('Packages (direct):', t('packages', {}));
    console.log('Packages (namespace):', t('packages:packages', {}));
    
    const packageIds = Object.keys(packagesData);
    return packageIds.map(id => translatePackage(id));
  }, [language, translatePackage, t]);
  
  // Return function to access the memoized result
  const getAllPackages = useCallback(() => allPackages, [allPackages]);
  
  return {
    translatePackage,
    getAllPackages
  };
}