import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import FAQ from '@/components/sections/FAQ';
import LatestPosts from '@/components/sections/LatestPosts';
import Contact from '@/components/sections/Contact';

const description =
  '♡Soft & Cozy♡ Characters that get cuter the longer you look. SD/chibi character design, four-panel comics, emoticons, illustrations for streams and ads, and video.';

export const metadata: Metadata = {
  title: 'Balltagu is Cute - Chibi character & four-panel comic commissions',
  description,
  openGraph: { title: 'Balltagu is Cute', description, locale: 'en_US' },
};

// 영어 페이지 (/en)
export default function HomeEn() {
  return (
    <div lang="en">
      <Header lang="en" />
      <main>
        <Hero lang="en" />
        <Portfolio lang="en" />
        <FAQ lang="en" />
        <LatestPosts lang="en" />
        <Contact lang="en" />
      </main>
      <Footer />
    </div>
  );
}
