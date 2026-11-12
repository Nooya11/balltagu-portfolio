import { PortfolioFilter, PurposeOption } from '@/types';

export type Lang = 'ko' | 'en';

// 화면에 보이는 문구 모음. 한국어는 `/`, 영어는 `/en` 에서 쓰인다.
export const TEXT = {
  ko: {
    home: '/',
    nav: { home: 'Home', portfolio: 'Portfolio', blog: 'Blog', faq: 'FAQ', contact: 'Contact' },
    hero: {
      soft: '♡말랑포근♡',
      tagline: '볼수록 귀여운 캐릭터를 그립니다.',
      works: [
        'SD/치비 캐릭터 디자인',
        '네컷만화',
        '이모티콘',
        '방송/광고용 일러스트',
        '영상',
      ],
      cta: '의뢰하기',
      videoLabel: '인사하는 볼따구 캐릭터',
    },
    portfolio: {
      lead: '다양한 스타일의 작업물을 확인하세요',
      empty: '해당 카테고리에 작품이 없습니다.',
      prev: '이전 이미지',
      next: '다음 이미지',
    },
    faq: { title: '자주 묻는 질문' },
    contact: {
      title: '의뢰 문의',
      lead: '프로젝트 의뢰나 문의사항이 있으시면 언제든지 연락주세요',
      name: '이름',
      namePlaceholder: '홍길동',
      email: '이메일',
      purpose: '사용목적',
      choose: '선택해주세요',
      message: '메시지',
      messagePlaceholder:
        '원하시는 내용을 적어주세요. 작업 완료 희망 날짜가 있다면 함께 적어주세요.',
      imageNote: '참고 이미지가 있다면 문의 후 받으시는 회신 메일에 첨부해서 보내주세요.',
      sending: '전송 중...',
      submit: '문의하기',
      success: '문의가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.',
      error: '문의 전송에 실패했습니다. 다시 시도해주세요.',
    },
    errors: {
      nameMin: '이름은 최소 2자 이상이어야 합니다.',
      nameMax: '이름은 50자를 초과할 수 없습니다.',
      email: '올바른 이메일 주소를 입력해주세요.',
      purpose: '사용목적을 선택해주세요.',
      messageMin: '메시지는 최소 10자 이상이어야 합니다.',
      messageMax: '메시지는 1000자를 초과할 수 없습니다.',
    },
  },
  en: {
    home: '/en',
    nav: { home: 'Home', portfolio: 'Portfolio', blog: 'Blog', faq: 'FAQ', contact: 'Contact' },
    hero: {
      soft: '♡Soft & Cozy♡',
      tagline: 'Characters that get cuter the longer you look.',
      works: [
        'SD / chibi character design',
        'Four-panel comics',
        'Emoticons',
        'Illustrations for streams & ads',
        'Video',
      ],
      cta: 'Request a commission',
      videoLabel: 'Balltagu character waving hello',
    },
    portfolio: {
      lead: 'Browse work across different styles',
      empty: 'No work in this category yet.',
      prev: 'Previous image',
      next: 'Next image',
    },
    faq: { title: 'Frequently asked questions' },
    contact: {
      title: 'Commission inquiry',
      lead: 'Have a project or a question? Send a message any time.',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      purpose: 'Intended use',
      choose: 'Please choose',
      message: 'Message',
      messagePlaceholder:
        'Tell me what you would like. If you have a deadline in mind, please include it.',
      imageNote: 'If you have reference images, attach them to your reply to my response email.',
      sending: 'Sending...',
      submit: 'Send inquiry',
      success: 'Your inquiry was sent. I will get back to you soon.',
      error: 'The inquiry could not be sent. Please try again.',
    },
    errors: {
      nameMin: 'Name must be at least 2 characters.',
      nameMax: 'Name must be 50 characters or fewer.',
      email: 'Please enter a valid email address.',
      purpose: 'Please choose an intended use.',
      messageMin: 'Message must be at least 10 characters.',
      messageMax: 'Message must be 1000 characters or fewer.',
    },
  },
} as const;

// 필터 버튼·해시태그 영어 표기
const FILTER_EN: Record<PortfolioFilter, string> = {
  전체: 'All',
  네컷만화: 'Four-panel comics',
  버추얼: 'VTuber',
  스티커출력물: 'Sticker prints',
  볼따구캐릭터: 'Balltagu characters',
  이모티콘: 'Emoticons',
};

// 사용목적 영어 표기 (메일에는 한국어 값이 그대로 전송된다)
const PURPOSE_EN: Record<PurposeOption, string> = {
  치지직: 'CHZZK',
  SOOP: 'SOOP',
  '그 외 방송용': 'Other streaming',
  유튜브: 'YouTube',
  '기업 광고': 'Corporate advertising',
  'SNS/개인용': 'Social media / personal',
  기타: 'Other',
};

export const filterLabel = (filter: PortfolioFilter, lang: Lang) =>
  lang === 'en' ? FILTER_EN[filter] : filter;

export const purposeLabel = (purpose: PurposeOption, lang: Lang) =>
  lang === 'en' ? PURPOSE_EN[purpose] : purpose;
