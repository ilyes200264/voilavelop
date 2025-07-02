import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  { href: "https://www.facebook.com/share/16neHhFkHf/", label: "Facebook", icon: Facebook },
  { href: "https://www.instagram.com/voila.velo?igsh=dGNwM3BhdTltc2xi", label: "Instagram", icon: Instagram },
  { href: "https://youtube.com/@voilavelo?si=T4EgDDeNjsczCiS5", label: "Youtube", icon: Youtube },
  { href: "https://www.linkedin.com/in/voil%C3%A0-v%C3%A9lo-b51615372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "Linkedin", icon: Linkedin },
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