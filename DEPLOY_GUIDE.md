# 🚀 배포 가이드 (초보자용)

## 준비사항
- ✅ Vercel 계정 (이미 로그인하셨다고 하셨죠!)
- ✅ GitHub 계정 (없으면 만들어야 함)
- ✅ EmailJS 계정 설정 (필수!)

---

## 1단계: EmailJS 설정 (5분)

### 1-1. EmailJS 가입
1. https://www.emailjs.com/ 접속
2. "Sign Up" 클릭
3. Google 계정으로 가입 (noo11242@gmail.com 사용)

### 1-2. 이메일 서비스 연결
1. 로그인 후 "Email Services" 클릭
2. "Add New Service" 클릭
3. Gmail 선택
4. 계정 연결 (noo11242@gmail.com)
5. **Service ID 복사** (예: service_abc123) → 메모장에 저장!

### 1-3. 이메일 템플릿 만들기
1. "Email Templates" 클릭
2. "Create New Template" 클릭
3. 템플릿 이름: "Portfolio Contact"
4. Subject 입력: `새로운 의뢰: {{purpose}}`
5. Content 입력:
```
안녕하세요!

새로운 의뢰가 들어왔습니다.

이름: {{from_name}}
이메일: {{from_email}}
사용목적: {{purpose}}

메시지:
{{message}}

첨부 이미지:
{{attachments}}
```
6. "Save" 클릭
7. **Template ID 복사** (예: template_xyz789) → 메모장에 저장!

### 1-4. Public Key 복사
1. "Account" → "General" 클릭
2. **Public Key 복사** (예: AbC123XyZ789) → 메모장에 저장!

---

## 2단계: GitHub에 업로드 (10분)

### 2-1. GitHub 계정 만들기 (없으면)
1. https://github.com 접속
2. "Sign up" 클릭
3. 이메일, 비밀번호 입력

### 2-2. 새 저장소 만들기
1. GitHub 로그인
2. 우측 상단 "+" → "New repository" 클릭
3. 저장소 이름: `balltagu-portfolio`
4. Public 선택
5. "Create repository" 클릭
6. **저장소 URL 복사** (예: https://github.com/사용자명/balltagu-portfolio.git)

### 2-3. GitHub에 코드 업로드
Git Bash 또는 PowerShell을 열고:

```bash
cd C:\Users\khs15\Downloads\포폴사이트\portfolio-site

# 이미 git init 했으므로 스킵
# 원격 저장소 연결 (위에서 복사한 URL 사용)
git remote add origin https://github.com/사용자명/balltagu-portfolio.git

# 업로드!
git push -u origin master
```

GitHub 사용자명과 비밀번호(또는 토큰) 입력하면 완료!

---

## 3단계: Vercel에 배포 (5분) ⭐ 가장 중요!

### 3-1. Vercel에서 프로젝트 생성
1. https://vercel.com 로그인 (이미 하셨죠!)
2. "Add New..." → "Project" 클릭
3. "Import Git Repository" 클릭
4. GitHub 연결 (처음이면 권한 승인)
5. `balltagu-portfolio` 저장소 찾아서 "Import" 클릭

### 3-2. 환경 변수 설정 (중요!)
프로젝트 설정 화면에서:

1. "Environment Variables" 섹션 찾기
2. 3개의 환경 변수 추가:

| Name (이름) | Value (값) |
|------------|-----------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | service_abc123 (1단계에서 복사한 거) |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | template_xyz789 (1단계에서 복사한 거) |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | AbC123XyZ789 (1단계에서 복사한 거) |

각 변수마다:
- Name에 변수 이름 입력
- Value에 복사한 값 입력
- "Add" 클릭

### 3-3. 배포!
1. 모든 설정 확인
2. "Deploy" 버튼 클릭!
3. 2-3분 기다리면... 🎉

**배포 완료!**

사이트 주소가 나타납니다: `https://balltagu-portfolio.vercel.app`

---

## 4단계: 확인하기

### 4-1. 사이트 접속
- Vercel에서 제공한 URL 클릭
- 사이트가 잘 보이는지 확인

### 4-2. 문의 폼 테스트
1. 사이트 하단 Contact 섹션으로 스크롤
2. 테스트 메시지 작성:
   - 이름: 테스트
   - 이메일: noo11242@gmail.com
   - 사용목적: 기타
   - 메시지: 테스트입니다
3. "문의하기" 클릭
4. **noo11242@gmail.com으로 메일이 왔는지 확인!**

---

## 문제 해결

### 메일이 안 와요!
- Vercel 환경 변수가 정확한지 확인
- EmailJS 대시보드에서 서비스가 Active인지 확인
- Gmail 스팸함 확인

### 이미지가 안 보여요!
- Vercel에 자동으로 업로드됩니다 (걱정 마세요)
- 배포 후 5-10분 기다려보세요

### 배포가 실패했어요!
- Vercel 대시보드에서 "Logs" 확인
- GitHub에 코드가 제대로 올라갔는지 확인

---

## 완료!

이제 사이트 주소를:
- YouTube에 올리기
- Instagram 프로필에 링크
- 포트폴리오로 공유

즐기세요! 🎉

---

## 추가: 사이트 수정하려면?

1. 코드 수정 (`lib/constants.ts`에서 포트폴리오 추가/수정)
2. Git 커밋:
```bash
git add .
git commit -m "포트폴리오 업데이트"
git push
```
3. **자동으로 Vercel에 배포됩니다!** (5분 정도 걸림)
