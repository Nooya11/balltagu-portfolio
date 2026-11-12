'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/types';

interface PortfolioCardProps {
  project: Project;
  onOpen: (imageIndex: number) => void;
}

export default function PortfolioCard({ project, onOpen }: PortfolioCardProps) {
  const [index, setIndex] = useState(0);
  const total = project.images.length;
  const hasPrev = index > 0;
  const hasNext = index < total - 1;

  const move = (e: React.MouseEvent, step: number) => {
    e.stopPropagation();
    setIndex((current) => Math.min(Math.max(current + step, 0), total - 1));
  };

  return (
    <div
      className="group card overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
      onClick={() => onOpen(index)}
    >
      {/* Project Image (전체가 보이도록 object-contain) */}
      <div className="relative h-72 md:h-80 bg-secondary">
        <Image
          key={project.images[index]}
          src={project.images[index]}
          alt={`${project.title} ${index + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {hasPrev && (
          <button
            type="button"
            aria-label="이전 이미지"
            onClick={(e) => move(e, -1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-text-primary shadow-md hover:bg-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {hasNext && (
          <button
            type="button"
            aria-label="다음 이미지"
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
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary text-text-secondary text-xs rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
