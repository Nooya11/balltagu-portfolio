import Image from 'next/image';
import { Project } from '@/types';

interface PortfolioCardProps {
  project: Project;
  onClick: () => void;
}

export default function PortfolioCard({ project, onClick }: PortfolioCardProps) {
  return (
    <div
      className="group card overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-secondary">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-white text-sm rounded-full shadow-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-1">
          {project.title}
        </h3>

        <p className="text-text-secondary text-sm line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-secondary text-text-secondary text-xs rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
