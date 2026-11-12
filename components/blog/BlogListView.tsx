import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/blog/BlogCard';
import { BLOG_POSTS } from '@/lib/constants';
import { Lang, TEXT } from '@/lib/i18n';

// 블로그 목록 화면 (/blog, /en/blog, /ja/blog 공용)
export default function BlogListView({ lang }: { lang: Lang }) {
  const t = TEXT[lang].blog;

  return (
    <div lang={lang}>
      <Header lang={lang} path="/blog" />
      <main className="pt-24 pb-16 min-h-screen bg-secondary/30">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl mb-4">Blog</h1>
            <p className="text-text-secondary text-lg">{t.lead}</p>
          </div>

          {BLOG_POSTS.length === 0 ? (
            <p className="text-center text-text-muted py-12">{t.empty}</p>
          ) : (
            <ul className="space-y-6">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug}>
                  <BlogCard post={post} lang={lang} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
