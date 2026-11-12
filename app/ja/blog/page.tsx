import type { Metadata } from 'next';
import BlogListView from '@/components/blog/BlogListView';

export const metadata: Metadata = {
  title: 'Blog - ボルタグはかわいい',
  description: 'ボルタグはかわいいの制作の話とお知らせ',
};

export default function BlogPage() {
  return <BlogListView lang="ja" />;
}
