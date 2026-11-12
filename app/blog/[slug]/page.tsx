import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BLOG_POSTS } from '@/lib/constants';

type PageProps = { params: Promise<{ slug: string }> };

// content/blog.json 에 있는 글만 페이지로 만든다
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  return { title: post ? `${post.title} - 볼따구는 귀여워` : 'Blog - 볼따구는 귀여워' };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen bg-white">
        <article className="section-container max-w-3xl">
          <Link href="/blog" className="text-sm text-text-secondary hover:text-primary">
            ← 블로그 목록
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-2">{post.title}</h1>
          <p className="text-sm text-text-muted mb-8">{post.date}</p>

          <p className="text-text-primary leading-8 whitespace-pre-line">{post.body}</p>

          {post.images.length > 0 && (
            <div className="mt-8 space-y-6">
              {post.images.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={`${post.title} 이미지 ${i + 1}`}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
