import { packagesData } from "@/app/forfaits/packages-data";
import { useI18n } from "./i18n";

/**
 * This is a utility to help with translating packages data
 * It will help access the correct language version of the packages data
 */
export function usePackageTranslations() {
  const { t, language } = useI18n();
  
  // Function to translate a package based on its ID
  const translatePackage = (packageId: string) => {
    const pkg = packagesData[packageId as keyof typeof packagesData];
    
    if (!pkg) {
      return null;
    }
    
    console.log(`Translating package ${packageId} with language: ${language}`);
    
    // Check if we have translations for this package
    const translationPath = `packages.${packageId}`;
    const hasTranslations = t(`${translationPath}.title`, null) !== null;
    
    // Return a translated version of the package
    const translatedPkg = {
      ...pkg,
      // Use the translations if they exist, otherwise use the original values
      title: t(`${translationPath}.title`, pkg.title),
      tagline: t(`${translationPath}.tagline`, pkg.tagline),
      heroDescription: t(`${translationPath}.heroDescription`, pkg.heroDescription),
    };
    
    // For nested sections, we can also translate those
    if (pkg.mainSection) {
      translatedPkg.mainSection = {
        ...pkg.mainSection,
        title: t(`${translationPath}.mainSection.title`, pkg.mainSection.title),
        description: t(`${translationPath}.mainSection.description`, pkg.mainSection.description),
      };
      
      // Only translate includes if they exist in both the original and translations
      if (pkg.mainSection.includes) {
        // Check if we have translated includes
        const hasTranslatedIncludes = t(`${translationPath}.mainSection.includes.0`, null) !== null;
        
        if (hasTranslatedIncludes) {
          translatedPkg.mainSection.includes = pkg.mainSection.includes.map((item: string, index: number) => 
            t(`${translationPath}.mainSection.includes.${index}`, item)
          );
        } else {
          translatedPkg.mainSection.includes = pkg.mainSection.includes;
        }
      }
    }
    
    // Translate options if they exist
    if (pkg.options) {
      // Check if we have options in the translations
      const hasTranslatedOptions = t(`${translationPath}.options`, null) !== null;
      
      if (hasTranslatedOptions) {
        translatedPkg.options = pkg.options.map((option: any, index: number) => ({
          ...option,
          title: t(`${translationPath}.options.${index}.title`, option.title),
          idealFor: t(`${translationPath}.options.${index}.idealFor`, option.idealFor),
        }));
        
        // Only translate includes in options if they exist
        translatedPkg.options = translatedPkg.options.map((option: any, index: number) => {
          if (option.includes) {
            const hasTranslatedOptionIncludes = t(`${translationPath}.options.${index}.includes.0`, null) !== null;
            
            if (hasTranslatedOptionIncludes) {
              return {
                ...option,
                includes: pkg.options[index].includes.map((item: string, itemIndex: number) => 
                  t(`${translationPath}.options.${index}.includes.${itemIndex}`, item)
                )
              };
            }
          }
          
          return option;
        });
      }
    }
    
    return translatedPkg;
  };
  
  // Function to get all packages with translations
  const getAllPackages = () => {
    const packageIds = Object.keys(packagesData);
    return packageIds.map(id => translatePackage(id));
  };
  
  return {
    translatePackage,
    getAllPackages
  };
}