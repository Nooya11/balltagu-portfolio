// 포트폴리오 해시태그 (필터 버튼)
export type PortfolioTag =
  | '네컷만화'
  | '버추얼'
  | '스티커출력물'
  | '볼따구캐릭터'
  | '이모티콘';

export type PortfolioFilter = PortfolioTag | '전체';

export interface Project {
  id: string;
  title: string;
  titleEn?: string; // 영어 페이지용 제목 (없으면 title)
  titleJa?: string; // 일본어 페이지용 제목 (없으면 title)
  tags: PortfolioTag[]; // 해시태그 (여러 개 가능)
  images: string[]; // 이미지 경로 배열 (첫 장이 대표 이미지)
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  body: string; // 본문 (형식은 lib/blog.ts 참고)
  images: string[]; // 글 끝에 붙는 이미지
  thumbnail?: string; // 목록용 대표 이미지
  portfolioTag?: PortfolioTag; // 글 아래에 이 해시태그의 포폴 작업물을 보여 준다
  en?: { title: string; body: string }; // 영어 번역
  ja?: { title: string; body: string }; // 일본어 번역
}

export interface ContactFormData {
  name: string;
  email: string;
  purpose: string; // 사용목적
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'youtube' | 'instagram' | 'mail';
}

export type PurposeOption =
  | '치지직'
  | 'SOOP'
  | '그 외 방송용'
  | '유튜브'
  | '기업 광고'
  | 'SNS/개인용'
  | '기타';
