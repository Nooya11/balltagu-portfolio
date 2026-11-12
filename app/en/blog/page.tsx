import type { Metadata } from 'next';
import BlogListView from '@/components/blog/BlogListView';

export const metadata: Metadata = {
  title: 'Blog - Balltagu is Cute',
  description: 'Work notes and news from Balltagu is Cute',
};

export default function BlogPage() {
  return <BlogListView lang="en" />;
}
