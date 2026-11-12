import Link from 'next/link';
import { BlogPost } from '@/types';
import { excerpt, thumbnail } from '@/lib/blog';

export default function BlogCard({ post }: { post: BlogPost }) {
  const image = thumbnail(post);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card flex flex-col sm:flex-row overflow-hidden group"
    >
      {image && (
        <div className="h-44 sm:h-auto sm:w-52 shrink-0 bg-secondary">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" className="w-full h-full object-contain" loading="lazy" />
        </div>
      )}
      <div className="p-6 space-y-2 min-w-0">
        <p className="text-sm text-text-muted">{post.date}</p>
        <h3 className="text-xl group-hover:text-primary transition-colors break-keep">
          {post.title}
        </h3>
        <p className="text-text-secondary line-clamp-2 break-keep">{excerpt(post)}</p>
      </div>
    </Link>
  );
}
