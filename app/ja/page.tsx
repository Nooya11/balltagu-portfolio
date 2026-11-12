import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

const description =
  '♡ふわもち♡ 見るほどかわいいキャラクターを描きます。SD/ちびキャラデザイン、4コマ漫画、スタンプ、配信・広告用イラスト、動画制作。';

export const metadata: Metadata = {
  title: 'ボルタグはかわいい - ちびキャラ・4コマ漫画のご依頼',
  description,
  openGraph: { title: 'ボルタグはかわいい', description, locale: 'ja_JP' },
};

// 일본어 페이지 (/ja)
export default function HomeJa() {
  return (
    <div lang="ja">
      <Header lang="ja" />
      <main>
        <Hero lang="ja" />
        <Portfolio lang="ja" />
        <FAQ lang="ja" />
        <Contact lang="ja" />
      </main>
      <Footer />
    </div>
  );
}
