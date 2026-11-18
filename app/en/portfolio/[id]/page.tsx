import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PortfolioDetailView from '@/components/portfolio/PortfolioDetailView';
import { PROJECTS } from '@/lib/constants';
import { projectTitle } from '@/lib/i18n';

type PageProps = { params: Promise<{ id: string }> };

// content/portfolio.json 에 있는 작업물만 페이지로 만든다
export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return { title: 'Balltagu is Cute' };
  return {
    title: `${projectTitle(project, 'en')} - Balltagu is Cute`,
    openGraph: { images: [project.images[0]] },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) notFound();

  return <PortfolioDetailView project={project} lang="en" />;
}
