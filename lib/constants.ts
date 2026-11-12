import { NavItem, Project, ProjectCategory, PurposeOption, SocialLink } from '@/types';

// 네비게이션 메뉴
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
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

// 포트폴리오 카테고리
export const PORTFOLIO_CATEGORIES: ProjectCategory[] = [
  '전체',
  '네컷만화',
  '버추얼',
  '동물',
  '스티커출력물',
  '커스텀의뢰',
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

// 포트폴리오 프로젝트 데이터
export const PROJECTS: Project[] = [
  // 네컷 만화
  {
    id: 'comic-1',
    title: '네컷만화 #1',
    description: '일상을 담은 네컷만화',
    category: '네컷만화',
    thumbnail: '/portfolio/네컷만화/무제80 (1).png',
    images: ['/portfolio/네컷만화/무제80 (1).png'],
    tags: ['일상', '유머'],
  },
  {
    id: 'comic-2',
    title: '네컷만화 #2',
    description: '재미있는 상황극',
    category: '네컷만화',
    thumbnail: '/portfolio/네컷만화/무제88_20261112145534.png',
    images: ['/portfolio/네컷만화/무제88_20261112145534.png'],
    tags: ['유머', '상황극'],
  },
  {
    id: 'comic-3',
    title: '네컷만화 #3',
    description: '공감 가는 순간들',
    category: '네컷만화',
    thumbnail: '/portfolio/네컷만화/무제97 (1).png',
    images: ['/portfolio/네컷만화/무제97 (1).png'],
    tags: ['공감', '일상'],
  },

  // 네컷만화 버추얼
  {
    id: 'virtual-1',
    title: '버추얼 캐릭터 #1',
    description: '버추얼 캐릭터를 활용한 네컷만화',
    category: '버추얼',
    thumbnail: '/portfolio/네컷만화_버추얼/1.png',
    images: [
      '/portfolio/네컷만화_버추얼/1.png',
      '/portfolio/네컷만화_버추얼/2.png',
      '/portfolio/네컷만화_버추얼/3.png',
      '/portfolio/네컷만화_버추얼/4.png',
    ],
    tags: ['버추얼', '캐릭터'],
  },

  // 네컷만화 동물
  {
    id: 'animal-1',
    title: '귀여운 동물 친구들',
    description: '동물 캐릭터 네컷만화',
    category: '동물',
    thumbnail: '/portfolio/네컷만화_동물/무제105 (2).png',
    images: [
      '/portfolio/네컷만화_동물/무제105 (2).png',
      '/portfolio/네컷만화_동물/무제106 (1).png',
      '/portfolio/네컷만화_동물/무제107 (1).png',
      '/portfolio/네컷만화_동물/무제81 (1).png',
    ],
    tags: ['동물', '귀여움'],
  },

  // 스티커 출력물
  {
    id: 'sticker-1',
    title: '봄의 볼찌 넴스',
    description: '다이소/교보문고 스티커 기계 출력물',
    category: '스티커출력물',
    thumbnail: '/portfolio/스티커_출력물/260327_colorname_볼따구는 귀여워_봄의 볼찌.png',
    images: ['/portfolio/스티커_출력물/260327_colorname_볼따구는 귀여워_봄의 볼찌.png'],
    date: '2026.03.27',
    tags: ['스티커', '넴스', '봄'],
  },
  {
    id: 'sticker-2',
    title: '해파리 넴스',
    description: '해파리 컨셉 스티커',
    category: '스티커출력물',
    thumbnail: '/portfolio/스티커_출력물/260604_ColorName_볼따구는 귀여워_해파리넴스.png',
    images: ['/portfolio/스티커_출력물/260604_ColorName_볼따구는 귀여워_해파리넴스.png'],
    date: '2026.06.04',
    tags: ['스티커', '넴스', '해파리'],
  },
  {
    id: 'sticker-3',
    title: '깡총 포토카드',
    description: 'PVC 포토카드',
    category: '스티커출력물',
    thumbnail: '/portfolio/스티커_출력물/PP+_PVC_photocard_260928_볼따구는 귀여워_깡총_앞면.png',
    images: [
      '/portfolio/스티커_출력물/PP+_PVC_photocard_260928_볼따구는 귀여워_깡총_앞면.png',
      '/portfolio/스티커_출력물/PP+_PVC_photocard_260928_볼따구는 귀여워_깡총_뒷면.png',
    ],
    date: '2026.09.28',
    tags: ['포토카드', '깡총'],
  },

  // 커스텀 그림 의뢰
  {
    id: 'custom-1',
    title: '커스텀 캐릭터 #1',
    description: '의뢰받아 제작한 커스텀 캐릭터',
    category: '커스텀의뢰',
    thumbnail: '/portfolio/커스텀의뢰/1.png',
    images: [
      '/portfolio/커스텀의뢰/1.png',
      '/portfolio/커스텀의뢰/2.png',
      '/portfolio/커스텀의뢰/3.png',
      '/portfolio/커스텀의뢰/4.png',
    ],
    tags: ['커미션', '캐릭터 디자인'],
  },

  // 이모티콘
  {
    id: 'emoticon-1',
    title: '볼찌 이모티콘 세트',
    description: '볼찌 캐릭터 이모티콘 24종',
    category: '이모티콘',
    thumbnail: '/portfolio/이모티콘/제목1.png',
    images: [
      '/portfolio/이모티콘/제목1.png',
      '/portfolio/이모티콘/저장-복사_합체_0000_폴더-24.png',
      '/portfolio/이모티콘/저장-복사_합체_0001_폴더-23.png',
      '/portfolio/이모티콘/저장-복사_합체_0002_폴더-22.png',
    ],
    tags: ['이모티콘', '볼찌'],
  },
];
