'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { PROJECTS, PORTFOLIO_FILTERS } from '@/lib/constants';
import { PortfolioFilter } from '@/types';
import PortfolioCard from './PortfolioCard';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioFilter>('전체');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<{ src: string }[]>([]);

  // Filter projects by category
  const filteredProjects =
    selectedCategory === '전체'
      ? PROJECTS
      : PROJECTS.filter((project) => project.tags.includes(selectedCategory));

  // 카드에서 보고 있던 장부터 크게 보기
  const handleProjectOpen = (images: string[], imageIndex: number) => {
    setLightboxImages(images.map((img) => ({ src: img })));
    setLightboxIndex(imageIndex);
    setLightboxOpen(true);
  };

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            다양한 스타일의 작업물을 확인하세요
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PORTFOLIO_FILTERS.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-text-secondary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onOpen={(imageIndex) => handleProjectOpen(project.images, imageIndex)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-muted">
              해당 카테고리에 작품이 없습니다.
            </p>
          </div>
        )}

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxImages}
          index={lightboxIndex}
        />
      </div>
    </section>
  );
}
