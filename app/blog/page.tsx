import type { Metadata } from 'next';
import BlogListView from '@/components/blog/BlogListView';

export const metadata: Metadata = {
  title: 'Blog - 볼따구는 귀여워',
  description: '볼따구는 귀여워의 작업 이야기와 소식',
};

export default function BlogPage() {
  return <BlogListView lang="ko" />;
}
