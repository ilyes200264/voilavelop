import { Open_Sans, Poppins, Allura } from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const allura = Allura({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-allura',
});