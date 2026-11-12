import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '볼따구는 귀여워 - 네컷만화/이모티콘/커스텀 그림 의뢰',
  description:
    '♡말랑포근♡ 볼수록 귀여운 캐릭터를 그립니다. SD/치비 캐릭터 디자인, 네컷만화, 이모티콘, 방송/광고용 일러스트, 영상 제작. @balltagu',
  keywords: [
    '네컷만화',
    '이모티콘',
    '일러스트',
    '캐릭터 디자인',
    '커미션',
    '볼따구',
    'balltagu',
    '치지직',
    '유튜브',
    '기업 광고',
  ],
  authors: [{ name: '볼따구는 귀여워', url: 'https://youtube.com/@balltagu' }],
  openGraph: {
    title: '볼따구는 귀여워 - 네컷만화/이모티콘/커스텀 그림 의뢰',
    description:
      '♡말랑포근♡ 볼수록 귀여운 캐릭터를 그립니다. SD/치비 캐릭터 디자인, 네컷만화, 이모티콘, 방송/광고용 일러스트, 영상 제작.',
    siteName: '볼따구는 귀여워 Portfolio',
    images: [
      {
        url: '/hero/지적인 볼따구.png',
        width: 1200,
        height: 630,
        alt: '볼따구는 귀여워',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '볼따구는 귀여워 - 네컷만화/이모티콘/커스텀 그림 의뢰',
    description:
      '♡말랑포근♡ 볼수록 귀여운 캐릭터를 그립니다. SD/치비 캐릭터 디자인, 네컷만화, 이모티콘, 방송/광고용 일러스트, 영상 제작.',
    images: ['/hero/지적인 볼따구.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={inter.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
