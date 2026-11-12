export type ProjectCategory =
  | '네컷만화'
  | '버추얼'
  | '동물'
  | '스티커출력물'
  | '커스텀의뢰'
  | '이모티콘'
  | '전체';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, '전체'>;
  images: string[]; // 이미지 경로 배열
  thumbnail: string; // 썸네일 이미지
  tags?: string[];
  date?: string;
  tools?: string[]; // 사용 도구 (Procreate, Photoshop 등)
  workTime?: string; // 작업 시간
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
  | '치지직 방송용'
  | '유튜브'
  | '기업 광고'
  | 'SNS/개인용'
  | '기타';
