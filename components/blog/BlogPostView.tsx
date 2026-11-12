import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RelatedWorks from '@/components/blog/RelatedWorks';
import { BlogPost } from '@/types';
import { localize, parseBody } from '@/lib/blog';
import { Lang, TEXT, langPrefix } from '@/lib/i18n';

// 블로그 글 화면 (/blog/..., /en/blog/..., /ja/blog/... 공용)
export default function BlogPostView({ post, lang }: { post: BlogPost; lang: Lang }) {
  const t = TEXT[lang].blog;
  const { title, body } = localize(post, lang);

  return (
    <div lang={lang}>
      <Header lang={lang} path={`/blog/${post.slug}`} />
      <main className="pt-24 pb-16 min-h-screen">
        <article className="section-container max-w-3xl">
          <Link
            href={`${langPrefix(lang)}/blog`}
            className="text-sm text-text-secondary hover:text-primary"
          >
            {t.back}
          </Link>

          <h1 className="text-3xl md:text-4xl mt-6 mb-2 break-keep">{title}</h1>
          <p className="text-sm text-text-muted mb-8">{post.date}</p>

          <div className="space-y-6">
            {parseBody(body).map((block, i) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={i} className="text-2xl pt-4 break-keep">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'image') {
                return (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={block.src}
                    alt={block.alt}
                    className="w-full max-w-sm mx-auto h-auto rounded-2xl border border-secondary-dark"
                    loading="lazy"
                  />
                );
              }
              return (
                <p key={i} className="text-text-primary leading-8 whitespace-pre-line break-keep">
                  {block.text}
                </p>
              );
            })}
          </div>

          {post.images.length > 0 && (
            <div className="mt-8 space-y-6">
              {post.images.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={`${title} ${i + 1}`}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              ))}
            </div>
          )}

          {post.portfolioTag && <RelatedWorks tag={post.portfolioTag} lang={lang} />}

          <div className="mt-12 text-center">
            <Link href={`${TEXT[lang].home}#contact`} className="btn-primary">
              {TEXT[lang].hero.cta}
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
