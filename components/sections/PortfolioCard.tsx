'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/types';
import { Lang, TEXT, filterLabel, formatPeriod, langPrefix, projectTitle } from '@/lib/i18n';
import { COMIC_GUIDE_SLUG } from '@/lib/constants';
import { isVideo } from '@/lib/media';
import ProjectLinks from '@/components/portfolio/ProjectLinks';

interface PortfolioCardProps {
  project: Project;
  lang?: Lang;
  showGuideLink?: boolean; // 네컷만화 신청 안내 링크 표시 여부
}

export default function PortfolioCard({
  project,
  lang = 'ko',
  showGuideLink = true,
}: PortfolioCardProps) {
  const t = TEXT[lang].portfolio;
  const router = useRouter();
  const title = projectTitle(project, lang);
  const [index, setIndex] = useState(0);
  const total = project.images.length;
  const hasPrev = index > 0;
  const hasNext = index < total - 1;

  const move = (e: React.MouseEvent, step: number) => {
    e.stopPropagation();
    setIndex((current) => Math.min(Math.max(current + step, 0), total - 1));
  };

  // 상세 화면 주소. 카드에서 보던 장이 있으면 그 이미지 위치로 바로 간다.
  const detailHref = `${langPrefix(lang)}/portfolio/${project.id}${index > 0 ? `#image-${index + 1}` : ''}`;

  return (
    <div
      className="group card overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
      onClick={() => router.push(detailHref)}
    >
      {/* Project Image (전체가 보이도록 object-contain) */}
      <div className="relative h-72 md:h-80 bg-secondary">
        {isVideo(project.images[index]) ? (
          <video
            key={project.images[index]}
            src={project.images[index]}
            className="absolute inset-0 w-full h-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            aria-label={`${title} ${index + 1}`}
          />
        ) : (
          <Image
            key={project.images[index]}
            src={project.images[index]}
            alt={`${title} ${index + 1}`}
            fill
            className={`object-contain ${project.pixelated ? '[image-rendering:pixelated]' : ''}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {hasPrev && (
          <button
            type="button"
            aria-label={t.prev}
            onClick={(e) => move(e, -1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-text-primary shadow-md hover:bg-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {hasNext && (
          <button
            type="button"
            aria-label={t.next}
            onClick={(e) => move(e, 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-text-primary shadow-md hover:bg-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {total > 1 && (
          <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-xs">
            {index + 1} / {total}
          </span>
        )}
      </div>

      {/* Project Info */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-1">
          <Link href={detailHref} onClick={(e) => e.stopPropagation()}>
            {title}
          </Link>
        </h3>

        {project.period?.start && (
          <p className="text-xs text-text-muted -mt-1 tabular-nums">{formatPeriod(project.period)}</p>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary text-text-secondary text-xs rounded"
            >
              #{filterLabel(tag, lang)}
            </span>
          ))}
        </div>

        <ProjectLinks links={project.links} lang={lang} size="sm" />

        {/* 네컷만화 작업물은 신청 안내 글로 연결 */}
        {showGuideLink && project.tags.includes('네컷만화') && (
          <Link
            href={`${langPrefix(lang)}/blog/${COMIC_GUIDE_SLUG}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark underline underline-offset-4"
          >
            {TEXT[lang].blog.comicGuide} →
          </Link>
        )}
      </div>
    </div>
  );
}
