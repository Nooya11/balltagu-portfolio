import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Project } from '@/types';
import { Lang, TEXT, filterLabel, formatPeriod, projectPurpose, projectTitle } from '@/lib/i18n';
import ProjectLinks from '@/components/portfolio/ProjectLinks';
import { isVideo } from '@/lib/media';

// 포폴 작업물 상세 화면: 제목, 해시태그, 이미지 전체, 의뢰하기 버튼
export default function PortfolioDetailView({ project, lang }: { project: Project; lang: Lang }) {
  const t = TEXT[lang];
  const title = projectTitle(project, lang);
  const period = formatPeriod(project.period);
  const purpose = projectPurpose(project, lang);

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

          {(period || purpose) && (
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 mb-5 text-sm">
              {period && (
                <>
                  <dt className="text-text-muted">{t.portfolio.period}</dt>
                  <dd className="text-text-primary tabular-nums">{period}</dd>
                </>
              )}
              {purpose && (
                <>
                  <dt className="text-text-muted">{t.portfolio.purpose}</dt>
                  <dd className="text-text-primary break-keep">{purpose}</dd>
                </>
              )}
            </dl>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-accent-light/40 text-text-primary text-sm"
              >
                #{filterLabel(tag, lang)}
              </span>
            ))}
          </div>

          {project.links && project.links.length > 0 && (
            <div className="mb-10">
              <ProjectLinks links={project.links} lang={lang} />
            </div>
          )}

          <div className="space-y-6">
            {project.images.map((src, i) => {
              const className = `w-full h-auto rounded-2xl bg-white border border-secondary-dark scroll-mt-24 ${
                project.pixelated ? '[image-rendering:pixelated]' : ''
              }`;
              // 영상은 소리 없이 반복 재생하고, 조작 버튼으로 소리를 켤 수 있다
              return isVideo(src) ? (
                <video
                  key={src}
                  id={`image-${i + 1}`}
                  src={src}
                  className={className}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  aria-label={`${title} ${i + 1}`}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} id={`image-${i + 1}`} src={src} alt={`${title} ${i + 1}`} className={className} />
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4">
            <ProjectLinks links={project.links} lang={lang} />
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
