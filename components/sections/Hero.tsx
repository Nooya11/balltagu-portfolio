import Image from 'next/image';
import { Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

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

export default function Hero() {
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
      className="min-h-screen flex items-center section-padding pt-24"
    >
      <div className="section-container w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              안녕하세요,
              <br />
              <span className="text-primary">볼따구는 귀여워</span>입니다!
            </h1>

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              네컷만화, 이모티콘, 커스텀 캐릭터 디자인 전문
              <br />
              치지직, 유튜브, 기업 광고용 일러스트를 제작합니다.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-full transition-all shadow-sm hover:shadow-md"
                  aria-label={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a href="#contact" className="btn-primary">
                의뢰하기
              </a>
            </div>
          </div>

          {/* Character Image */}
          <div className="relative aspect-square max-w-md mx-auto animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
            <div className="relative w-full h-full">
              <Image
                src="/hero/지적인 볼따구.png"
                alt="볼따구 캐릭터"
                fill
                className="relative object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
