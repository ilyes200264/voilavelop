import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://youtube.com", label: "Youtube", icon: Youtube },
  { href: "https://linkedin.com", label: "Linkedin", icon: Linkedin },
];

export default function SocialFAB() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-primary-red shadow-lg hover:bg-secondary-yellow hover:text-dark-charcoal transition-colors border border-gray-200"
        >
          <Icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
} 