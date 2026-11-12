import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import { BLOG_POSTS } from '@/lib/constants';
import { Lang, TEXT, langPrefix } from '@/lib/i18n';

// 홈 화면의 최근 블로그 글 (글이 없으면 보이지 않는다)
export default function LatestPosts({ lang = 'ko' }: { lang?: Lang }) {
  if (BLOG_POSTS.length === 0) return null;
  const t = TEXT[lang].blog;

  return (
    <section id="blog" className="section-padding">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-4">Blog</h2>
          <p className="text-text-secondary text-lg">{t.lead}</p>
        </div>

        <ul className="space-y-6">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <li key={post.slug}>
              <BlogCard post={post} lang={lang} />
            </li>
          ))}
        </ul>

        <div className="text-center mt-8">
          <Link href={`${langPrefix(lang)}/blog`} className="btn-secondary">
            {t.more}
          </Link>
        </div>
      </div>
    </section>
  );
}
