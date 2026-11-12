# 볼따구는 귀여워 - 포트폴리오 사이트

일러스트/디자인 포트폴리오 웹사이트

## 🚀 빠른 시작

### 1. EmailJS 설정 (필수)

사이트에서 문의를 받으려면 EmailJS 설정이 필요합니다.

1. [EmailJS.com](https://www.emailjs.com/) 가입
2. Gmail 계정 연결 (noo11242@gmail.com)
3. 이메일 템플릿 생성:
   - 템플릿 변수: `{{from_name}}`, `{{from_email}}`, `{{purpose}}`, `{{message}}`, `{{attachments}}`
4. Service ID, Template ID, Public Key 복사
5. `.env.local` 파일 수정:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=여기에_서비스_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=여기에_템플릿_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=여기에_퍼블릭_키
```

### 2. Vercel 배포 (권장)

**가장 쉬운 방법:**

1. [GitHub.com](https://github.com) 가입 (없으면)
2. 새 저장소 생성 (예: `balltagu-portfolio`)
3. 프로젝트를 GitHub에 업로드:

```bash
cd C:\Users\khs15\Downloads\포폴사이트\portfolio-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/사용자명/balltagu-portfolio.git
git push -u origin main
```

4. [Vercel.com](https://vercel.com) 가입
5. "New Project" 클릭
6. GitHub 저장소 연결
7. Environment Variables에 EmailJS 키 3개 추가
8. Deploy 클릭!

**배포 완료! 사이트 주소를 받게 됩니다.**

### 3. 로컬 테스트 (선택사항)

**주의: Node.js 20 LTS 버전이 필요합니다**

현재 Node.js v23은 불안정합니다. [Node.js 20 LTS](https://nodejs.org/)를 설치하세요.

```bash
npm install
npm run dev
# http://localhost:3000 접속
```

## 📁 프로젝트 구조

```
portfolio-site/
├── app/                    # Next.js 페이지
├── components/             # React 컴포넌트
│   ├── layout/            # Header, Footer
│   └── sections/          # Hero, Portfolio, Contact
├── lib/                   # 유틸리티 함수
│   ├── constants.ts       # 포트폴리오 데이터
│   ├── emailjs.ts         # 이메일 전송
│   └── validations.ts     # 폼 검증
├── public/                # 이미지 파일
│   ├── hero/             # 대표 이미지
│   └── portfolio/        # 포트폴리오 이미지
└── types/                 # TypeScript 타입
```

## 🎨 포트폴리오 추가/수정

`lib/constants.ts` 파일을 수정하세요:

```typescript
export const PROJECTS: Project[] = [
  {
    id: 'my-work-1',
    title: '작품 제목',
    description: '작품 설명',
    category: '네컷만화', // 또는 '버추얼', '동물', '스티커출력물', '커스텀의뢰', '이모티콘'
    thumbnail: '/portfolio/카테고리/이미지.png',
    images: ['/portfolio/카테고리/이미지.png'],
    tags: ['태그1', '태그2'],
  },
  // ... 더 추가
];
```

## 🔧 문제 해결

### EmailJS 이메일이 안 와요
- `.env.local` 파일의 키가 올바른지 확인
- EmailJS 대시보드에서 서비스가 활성화되었는지 확인
- 브라우저 콘솔에서 에러 확인

### 이미지가 안 보여요
- 이미지 파일이 `public/portfolio/` 폴더에 있는지 확인
- 파일 경로가 정확한지 확인 (대소문자 구분)

### 빌드 에러
- Node.js 20 LTS 버전 사용 확인
- `npm install` 다시 실행
- `.next` 폴더 삭제 후 재빌드

## 📞 문의

- YouTube: [@balltagu](https://youtube.com/@balltagu)
- Instagram: [@balltagu](https://instagram.com/balltagu)
- Email: noo11242@gmail.com

---

**제작**: Next.js 14 + TypeScript + Tailwind CSS
**배포**: Vercel
