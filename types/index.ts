// 포트폴리오 해시태그: 목록은 content/tags.json (필터 버튼 순서도 이 파일 순서)
export type PortfolioTag = string;

export type PortfolioFilter = PortfolioTag; // '전체' 포함

export interface TagInfo {
  name: string; // 한국어 이름 (#뒤에 붙는 글자)
  en: string;
  ja: string;
}

export interface Project {
  id: string;
  title: string;
  titleEn?: string; // 영어 페이지용 제목 (없으면 title)
  titleJa?: string; // 일본어 페이지용 제목 (없으면 title)
  tags: PortfolioTag[]; // 해시태그 (여러 개 가능)
  images: string[]; // 이미지 경로 배열 (첫 장이 대표 이미지)
  pixelated?: boolean; // 도트(픽셀) 그림: 확대해도 흐려지지 않게 표시
  links?: ProjectLink[]; // 구매처 등 바로가기 버튼
  period?: { start: string; end?: string }; // 작업 기간 (YYYY-MM-DD)
  purpose?: string; // 목적 (예: 치지직 방송용)
  purposeEn?: string;
  purposeJa?: string;
}

export interface ProjectLink {
  label: string; // 버튼 문구 (예: OGQ 마켓에서 구매하기)
  url: string;
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
