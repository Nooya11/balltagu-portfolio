import { Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Lang, TEXT } from '@/lib/i18n';

const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function Hero({ lang = 'ko' }: { lang?: Lang }) {
  const t = TEXT[lang].hero;
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'youtube':
        return <YoutubeIcon size={24} />;
      case 'instagram':
        return <InstagramIcon size={24} />;
      case 'mail':
        return <Mail size={24} />;
      default:
        return null;
    }
  };

  return (
    <section
      id="home"
      className="md:min-h-screen flex items-center section-padding pt-24"
    >
      <div className="section-container w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-5 md:space-y-6 animate-slide-up text-center md:text-left">
            <h1 className="text-2xl leading-snug sm:text-3xl md:text-4xl lg:text-5xl break-keep">
              <span className="text-accent-dark">{t.soft}</span>
              <br />
              {t.tagline}
            </h1>

            {/* 작업 종류 */}
            <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
              {t.works.map((work) => (
                <li
                  key={work}
                  className="px-3 py-1 rounded-full bg-accent-light/40 text-text-primary text-sm md:text-base"
                >
                  {work}
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 pt-2 md:pt-4 justify-center md:justify-start">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 md:p-4 bg-white hover:bg-primary hover:text-white text-primary rounded-full transition-all shadow-md hover:shadow-lg"
                  aria-label={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 md:pt-4">
              <a href="#contact" className="btn-primary">
                {t.cta}
              </a>
            </div>
          </div>

          {/* Character Video (폰에서는 글 위에 먼저 보임) */}
          <div className="relative order-first md:order-last w-full max-w-[220px] sm:max-w-xs md:max-w-md mx-auto animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-sky/25 rounded-full blur-3xl"></div>
            <video
              className="relative w-full h-auto mix-blend-multiply"
              src="/hero/balltagu-hello.mp4"
              poster="/hero/balltagu-hello-poster.jpg"
              width={714}
              height={882}
              autoPlay
              loop
              muted
              playsInline
              aria-label={t.videoLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
