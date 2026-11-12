import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostView from '@/components/blog/BlogPostView';
import { BLOG_POSTS } from '@/lib/constants';
import { localize } from '@/lib/blog';

type PageProps = { params: Promise<{ slug: string }> };

// content/blog.json 에 있는 글만 페이지로 만든다
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  return { title: post ? `${localize(post, 'ko').title} - 볼따구는 귀여워` : 'Blog - 볼따구는 귀여워' };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return <BlogPostView post={post} lang="ko" />;
}
