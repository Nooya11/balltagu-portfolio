import { Youtube, Instagram, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'youtube':
        return <Youtube size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-secondary border-t border-primary/10">
      <div className="section-container py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-primary hover:text-white rounded-full transition-all shadow-sm hover:shadow-md"
                aria-label={link.name}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-text-muted text-sm text-center">
            © 2026 볼따구는 귀여워 (@balltagu). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
