import { PortfolioFilter, PurposeOption } from '@/types';

export type Lang = 'ko' | 'en' | 'ja';

// 화면에 보이는 문구 모음. 한국어는 `/`, 영어는 `/en`, 일본어는 `/ja` 에서 쓰인다.
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
  ja: {
    home: '/ja',
    nav: { home: 'Home', portfolio: 'Portfolio', blog: 'Blog', faq: 'FAQ', contact: 'Contact' },
    hero: {
      soft: '♡ふわもち♡',
      tagline: '見るほどかわいいキャラクターを描きます。',
      works: [
        'SD/ちびキャラデザイン',
        '4コマ漫画',
        'スタンプ',
        '配信・広告用イラスト',
        '動画',
      ],
      cta: 'ご依頼はこちら',
      videoLabel: 'あいさつするボルタグのキャラクター',
    },
    portfolio: {
      lead: 'さまざまなスタイルの作品をご覧ください',
      empty: 'このカテゴリーにはまだ作品がありません。',
      prev: '前の画像',
      next: '次の画像',
    },
    faq: { title: 'よくある質問' },
    contact: {
      title: 'ご依頼・お問い合わせ',
      lead: 'ご依頼やご質問がありましたら、お気軽にご連絡ください',
      name: 'お名前',
      namePlaceholder: '山田 太郎',
      email: 'メールアドレス',
      purpose: '使用目的',
      choose: '選択してください',
      message: 'メッセージ',
      messagePlaceholder:
        'ご希望の内容をご記入ください。希望納期があればあわせてお書きください。',
      imageNote: '参考画像がある場合は、お問い合わせ後に届く返信メールに添付してお送りください。',
      sending: '送信中...',
      submit: '送信する',
      success: 'お問い合わせを送信しました。早めにお返事いたします。',
      error: '送信に失敗しました。もう一度お試しください。',
    },
    errors: {
      nameMin: 'お名前は2文字以上で入力してください。',
      nameMax: 'お名前は50文字以内で入力してください。',
      email: '正しいメールアドレスを入力してください。',
      purpose: '使用目的を選択してください。',
      messageMin: 'メッセージは10文字以上で入力してください。',
      messageMax: 'メッセージは1000文字以内で入力してください。',
    },
  },
} as const;

// 필터 버튼·해시태그의 외국어 표기
const FILTER_LABELS: Record<Exclude<Lang, 'ko'>, Record<PortfolioFilter, string>> = {
  en: {
    전체: 'All',
    네컷만화: 'Four-panel comics',
    버추얼: 'VTuber',
    스티커출력물: 'Sticker prints',
    볼따구캐릭터: 'Balltagu characters',
    이모티콘: 'Emoticons',
  },
  ja: {
    전체: 'すべて',
    네컷만화: '4コマ漫画',
    버추얼: 'VTuber',
    스티커출력물: 'ステッカー印刷物',
    볼따구캐릭터: 'ボルタグキャラ',
    이모티콘: 'スタンプ',
  },
};

// 사용목적의 외국어 표기 (메일에는 한국어 값이 그대로 전송된다)
const PURPOSE_LABELS: Record<Exclude<Lang, 'ko'>, Record<PurposeOption, string>> = {
  en: {
    치지직: 'CHZZK',
    SOOP: 'SOOP',
    '그 외 방송용': 'Other streaming',
    유튜브: 'YouTube',
    '기업 광고': 'Corporate advertising',
    'SNS/개인용': 'Social media / personal',
    기타: 'Other',
  },
  ja: {
    치지직: 'CHZZK',
    SOOP: 'SOOP',
    '그 외 방송용': 'その他の配信',
    유튜브: 'YouTube',
    '기업 광고': '企業広告',
    'SNS/개인용': 'SNS・個人用',
    기타: 'その他',
  },
};

export const filterLabel = (filter: PortfolioFilter, lang: Lang) =>
  lang === 'ko' ? filter : FILTER_LABELS[lang][filter];

export const purposeLabel = (purpose: PurposeOption, lang: Lang) =>
  lang === 'ko' ? purpose : PURPOSE_LABELS[lang][purpose];

// 헤더의 언어 전환 버튼
export const LANGUAGES: { lang: Lang; label: string; href: string }[] = [
  { lang: 'ko', label: 'KR', href: '/' },
  { lang: 'en', label: 'EN', href: '/en' },
  { lang: 'ja', label: 'JP', href: '/ja' },
];
