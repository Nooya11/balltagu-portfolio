import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BLOG_POSTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog - 볼따구는 귀여워',
  description: '볼따구는 귀여워의 작업 이야기와 소식',
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen bg-secondary/30">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
            <p className="text-text-secondary text-lg">작업 이야기와 소식</p>
          </div>

          {BLOG_POSTS.length === 0 ? (
            <p className="text-center text-text-muted py-12">
              아직 작성된 글이 없습니다.
            </p>
          ) : (
            <ul className="space-y-6">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="card flex flex-col sm:flex-row overflow-hidden group"
                  >
                    {post.images[0] && (
                      <div className="relative h-48 sm:h-auto sm:w-56 shrink-0 bg-secondary">
                        <Image
                          src={post.images[0]}
                          alt={post.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 100vw, 224px"
                        />
                      </div>
                    )}
                    <div className="p-6 space-y-2 min-w-0">
                      <p className="text-sm text-text-muted">{post.date}</p>
                      <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-text-secondary line-clamp-3 whitespace-pre-line">
                        {post.body}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
