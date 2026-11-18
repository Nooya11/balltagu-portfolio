'use client';

import { useState } from 'react';
import { PROJECTS, PORTFOLIO_FILTERS } from '@/lib/constants';
import { PortfolioFilter } from '@/types';
import { Lang, TEXT, filterLabel } from '@/lib/i18n';
import PortfolioCard from './PortfolioCard';

export default function Portfolio({ lang = 'ko' }: { lang?: Lang }) {
  const t = TEXT[lang].portfolio;
  const [selectedCategory, setSelectedCategory] = useState<PortfolioFilter>('전체');

  // Filter projects by category
  const filteredProjects =
    selectedCategory === '전체'
      ? PROJECTS
      : PROJECTS.filter((project) => project.tags.includes(selectedCategory));

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t.lead}
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
              {filterLabel(category, lang)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              lang={lang}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-muted">
              {t.empty}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
