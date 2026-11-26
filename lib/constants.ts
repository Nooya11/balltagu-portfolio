import { BlogPost, PortfolioFilter, Project, PurposeOption, SocialLink, TagInfo } from '@/types';
import tagData from '@/content/tags.json';
import portfolioData from '@/content/portfolio.json';
import blogData from '@/content/blog.json';

// 소셜 링크
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'YouTube',
    url: 'https://youtube.com/@balltagu',
    icon: 'youtube',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/balltagu',
    icon: 'instagram',
  },
  {
    name: 'Email',
    url: 'mailto:noo11242@gmail.com',
    icon: 'mail',
  },
];

// 포트폴리오 필터 버튼 (해시태그)
export const TAGS = tagData as TagInfo[];
export const PORTFOLIO_FILTERS: PortfolioFilter[] = ['전체', ...TAGS.map((tag) => tag.name)];

// 사용목적 옵션
export const PURPOSE_OPTIONS: PurposeOption[] = [
  '치지직',
  'SOOP',
  '그 외 방송용',
  '유튜브',
  '기업 광고',
  'SNS/개인용',
  '기타',
];

// 포트폴리오 데이터: content/portfolio.json
// 작업 기간이 있는 작업물은 최근 작업(끝 날짜, 없으면 시작 날짜) 순서로 앞에,
// 기간이 없는 작업물은 그 뒤에 portfolio.json 순서대로 놓는다.
const projectDate = (p: Project) => p.period?.end || p.period?.start || '';
export const PROJECTS = (portfolioData as Project[])
  .map((p, i) => ({ p, i }))
  .sort((a, b) => {
    const da = projectDate(a.p), db = projectDate(b.p);
    if (da && db) return db.localeCompare(da) || a.i - b.i;
    if (da || db) return da ? -1 : 1;
    return a.i - b.i;
  })
  .map(({ p }) => p);

// 블로그 글: content/blog.json (최신 글이 먼저)
export const BLOG_POSTS = (blogData as BlogPost[])
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date));

// 네컷만화 작업물 카드에서 연결되는 신청 안내 글
export const COMIC_GUIDE_SLUG = 'four-panel-comic-guide';
