import PortfolioCard from '@/components/sections/PortfolioCard';
import { PROJECTS } from '@/lib/constants';
import { Lang, TEXT, filterLabel } from '@/lib/i18n';
import { PortfolioTag } from '@/types';

// 블로그 글 아래에 해당 해시태그의 포폴 작업물을 보여 준다
export default function RelatedWorks({ tag, lang }: { tag: PortfolioTag; lang: Lang }) {
  const projects = PROJECTS.filter((project) => project.tags.includes(tag));
  if (projects.length === 0) return null;

  return (
    <section className="mt-14">
      <h2 className="text-2xl mb-6 break-keep">
        #{filterLabel(tag, lang)} {TEXT[lang].blog.works}
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} lang={lang} showGuideLink={false} />
        ))}
      </div>
    </section>
  );
}
