import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Project } from '@/types';
import { Lang, TEXT, filterLabel, projectTitle } from '@/lib/i18n';

// 포폴 작업물 상세 화면: 제목, 해시태그, 이미지 전체, 의뢰하기 버튼
export default function PortfolioDetailView({ project, lang }: { project: Project; lang: Lang }) {
  const t = TEXT[lang];
  const title = projectTitle(project, lang);

  return (
    <div lang={lang}>
      <Header lang={lang} path={`/portfolio/${project.id}`} />
      <main className="pt-24 pb-16 min-h-screen">
        <article className="section-container max-w-3xl">
          <Link
            href={`${t.home}#portfolio`}
            className="text-sm text-text-secondary hover:text-primary"
          >
            {t.portfolio.back}
          </Link>

          <h1 className="text-3xl md:text-4xl mt-6 mb-4 break-keep">{title}</h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-accent-light/40 text-text-primary text-sm"
              >
                #{filterLabel(tag, lang)}
              </span>
            ))}
          </div>

          <div className="space-y-6">
            {project.images.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                id={`image-${i + 1}`}
                src={src}
                alt={`${title} ${i + 1}`}
                className="w-full h-auto rounded-2xl bg-white border border-secondary-dark scroll-mt-24"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href={`${t.home}#contact`} className="btn-primary">
              {t.hero.cta}
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
