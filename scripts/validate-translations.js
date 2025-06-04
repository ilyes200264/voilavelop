#!/usr/bin/env node

/**
 * Translation Validation Script
 * 
 * This script validates that all translation keys present in one language
 * exist in all other languages. It helps identify missing translations.
 * 
 * Usage:
 * node validate-translations.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const LOCALES_DIR = path.join(__dirname, '../locales');
const LANGUAGES = ['en', 'fr']; // Add more languages as needed
const BASE_LANGUAGE = 'fr'; // The language to compare against

// ANSI color codes for terminal output
const COLORS = {
  RED: '\x1b[31m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
  RESET: '\x1b[0m'
};

// Helper function to get all JSON files in a directory
function getJsonFiles(dir) {
  return fs.readdirSync(dir)
    .filter(file => file.endsWith('.json'))
    .map(file => file.replace('.json', ''));
}

// Helper function to recursively find all keys in an object
function getAllKeys(obj, prefix = '') {
  let keys = [];
  
  for (const key in obj) {
    const newPrefix = prefix ? `${prefix}.${key}` : key;
    
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      // It's an object, recursively get its keys
      keys = [...keys, ...getAllKeys(obj[key], newPrefix)];
    } else {
      // It's a leaf node (string, number, array, etc.)
      keys.push(newPrefix);
    }
  }
  
  return keys;
}

// Helper function to check if a key exists in an object
function keyExists(obj, keyPath) {
  const parts = keyPath.split('.');
  let current = obj;
  
  for (const part of parts) {
    if (current === undefined || current === null || typeof current !== 'object' || !(part in current)) {
      return false;
    }
    current = current[part];
  }
  
  return true;
}

// Main function to validate translations
function validateTranslations() {
  console.log(`${COLORS.BLUE}Starting translation validation...${COLORS.RESET}`);
  
  let hasErrors = false;
  let missingKeysCount = 0;
  let totalKeysCount = 0;
  
  // Get all JSON files from the base language directory
  const baseDir = path.join(LOCALES_DIR, BASE_LANGUAGE);
  const files = getJsonFiles(baseDir);
  
  // Process each file
  for (const file of files) {
    console.log(`\n${COLORS.BLUE}Checking file: ${file}.json${COLORS.RESET}`);
    
    // Load the base language file
    const basePath = path.join(baseDir, `${file}.json`);
    let baseContent;
    
    try {
      baseContent = JSON.parse(fs.readFileSync(basePath, 'utf8'));
    } catch (error) {
      console.error(`${COLORS.RED}Error reading ${basePath}: ${error.message}${COLORS.RESET}`);
      continue;
    }
    
    // Get all keys from the base language file
    const baseKeys = getAllKeys(baseContent);
    totalKeysCount += baseKeys.length;
    
    // Check each other language
    for (const lang of LANGUAGES) {
      if (lang === BASE_LANGUAGE) continue;
      
      const langFilePath = path.join(LOCALES_DIR, lang, `${file}.json`);
      
      // Check if the file exists in the other language
      if (!fs.existsSync(langFilePath)) {
        console.error(`${COLORS.RED}Missing file ${langFilePath}${COLORS.RESET}`);
        hasErrors = true;
        missingKeysCount += baseKeys.length; // All keys are missing if the file is missing
        continue;
      }
      
      // Load the other language file
      let langContent;
      try {
        langContent = JSON.parse(fs.readFileSync(langFilePath, 'utf8'));
      } catch (error) {
        console.error(`${COLORS.RED}Error reading ${langFilePath}: ${error.message}${COLORS.RESET}`);
        continue;
      }
      
      // Check for missing keys
      const missingKeys = [];
      for (const key of baseKeys) {
        if (!keyExists(langContent, key)) {
          missingKeys.push(key);
        }
      }
      
      // Report missing keys
      if (missingKeys.length > 0) {
        hasErrors = true;
        missingKeysCount += missingKeys.length;
        console.error(`${COLORS.YELLOW}${lang}/${file}.json is missing ${missingKeys.length} keys:${COLORS.RESET}`);
        missingKeys.forEach(key => {
          console.error(`  - ${key}`);
        });
      } else {
        console.log(`${COLORS.GREEN}${lang}/${file}.json: All keys present ✓${COLORS.RESET}`);
      }
    }
  }
  
  // Summary
  console.log('\n----------------------------------------');
  if (hasErrors) {
    console.error(`${COLORS.RED}Validation completed with errors.${COLORS.RESET}`);
    console.error(`${COLORS.RED}Missing ${missingKeysCount} out of ${totalKeysCount} keys (${(missingKeysCount / totalKeysCount * 100).toFixed(2)}%)${COLORS.RESET}`);
    process.exit(1);
  } else {
    console.log(`${COLORS.GREEN}Validation completed successfully. All translations are in sync!${COLORS.RESET}`);
    process.exit(0);
  }
}

// Run the validation
validateTranslations();