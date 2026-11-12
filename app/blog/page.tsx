import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/blog/BlogCard';
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
            <h1 className="text-3xl md:text-4xl mb-4">Blog</h1>
            <p className="text-text-secondary text-lg">작업 이야기와 소식</p>
          </div>

          {BLOG_POSTS.length === 0 ? (
            <p className="text-center text-text-muted py-12">아직 작성된 글이 없습니다.</p>
          ) : (
            <ul className="space-y-6">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug}>
                  <BlogCard post={post} />
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
