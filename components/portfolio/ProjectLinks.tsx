'use client';

import { ExternalLink } from 'lucide-react';
import { ProjectLink } from '@/types';
import { Lang, linkLabel } from '@/lib/i18n';

// 구매처 등 바로가기 버튼 (새 탭으로 열린다)
export default function ProjectLinks({
  links,
  lang,
  size = 'md',
}: {
  links?: ProjectLink[];
  lang: Lang;
  size?: 'sm' | 'md';
}) {
  if (!links || links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={`inline-flex items-center gap-1.5 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-sm ${
            size === 'sm' ? 'px-3 py-1.5 text-sm' : 'px-5 py-2.5'
          }`}
        >
          {linkLabel(link.label, lang)}
          <ExternalLink size={size === 'sm' ? 14 : 16} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
