import { BlogPost } from '@/types';
import { Lang } from '@/lib/i18n';

export type BlogBlock =
  | { type: 'text'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'note'; text: string }
  | { type: 'image'; src: string; alt: string };

const IMAGE_LINE = /^!\[(.*)\]\((.+)\)$/;

// 본문 형식: 빈 줄로 문단을 나누고, `## 제목` 은 소제목, `![설명](경로)` 한 줄은 그림,
// `> 문구` 는 작은 글씨의 참고·출처 문구가 된다.
export function parseBody(body: string): BlogBlock[] {
  return body
    .split(/\n\s*\n/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk): BlogBlock => {
      const image = chunk.match(IMAGE_LINE);
      if (image) return { type: 'image', alt: image[1], src: image[2] };
      if (chunk.startsWith('## ')) return { type: 'heading', text: chunk.slice(3) };
      if (chunk.startsWith('> ')) return { type: 'note', text: chunk.slice(2) };
      return { type: 'text', text: chunk };
    });
}

// 선택한 언어의 제목·본문 (번역이 없으면 한국어 원문)
export function localize(post: BlogPost, lang: Lang): { title: string; body: string } {
  const translated = lang === 'ko' ? undefined : post[lang];
  return translated ?? { title: post.title, body: post.body };
}

// 목록에 보여 줄 글 미리보기 (그림·소제목 제외)
export function excerpt(body: string): string {
  return parseBody(body)
    .filter((block) => block.type === 'text')
    .map((block) => (block as { text: string }).text)
    .join(' ');
}

// 목록 썸네일: thumbnail > 첨부 이미지 > 본문 첫 그림
export function thumbnail(post: BlogPost): string | undefined {
  if (post.thumbnail) return post.thumbnail;
  if (post.images[0]) return post.images[0];
  const first = parseBody(post.body).find((block) => block.type === 'image');
  return first && first.type === 'image' ? first.src : undefined;
}
