import { BlogPost, NavItem, PortfolioFilter, Project, PurposeOption, SocialLink } from '@/types';
import portfolioData from '@/content/portfolio.json';
import blogData from '@/content/blog.json';

// 네비게이션 메뉴
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/#home' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

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
export const PORTFOLIO_FILTERS: PortfolioFilter[] = [
  '전체',
  '네컷만화',
  '버추얼',
  '스티커출력물',
  '볼따구캐릭터',
  '이모티콘',
];

// 사용목적 옵션
export const PURPOSE_OPTIONS: PurposeOption[] = [
  '치지직 방송용',
  '유튜브',
  '기업 광고',
  'SNS/개인용',
  '기타',
];

// 포트폴리오 데이터: content/portfolio.json
export const PROJECTS = portfolioData as Project[];

// 블로그 글: content/blog.json (최신 글이 먼저)
export const BLOG_POSTS = (blogData as BlogPost[])
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date));
