import Image from 'next/image';
import { Youtube, Instagram, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Hero() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'youtube':
        return <Youtube size={24} />;
      case 'instagram':
        return <Instagram size={24} />;
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
