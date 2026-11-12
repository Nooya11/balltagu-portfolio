import faqData from '@/content/faq.json';
import { Lang, TEXT } from '@/lib/i18n';

interface FaqItem {
  q: string;
  a: string;
  qEn?: string;
  aEn?: string;
}

const FAQ_ITEMS = faqData as FaqItem[];

// content/faq.json 에 질문이 있을 때만 보인다
export const HAS_FAQ = FAQ_ITEMS.length > 0;

export default function FAQ({ lang = 'ko' }: { lang?: Lang }) {
  if (!HAS_FAQ) return null;

  return (
    <section id="faq" className="section-padding">
      <div className="section-container max-w-3xl">
        <h2 className="text-3xl md:text-4xl text-center mb-10">{TEXT[lang].faq.title}</h2>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group card px-5 py-4">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-medium text-text-primary break-keep">
                {lang === 'en' ? item.qEn ?? item.q : item.q}
                <span className="shrink-0 text-primary text-xl leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-text-secondary leading-relaxed whitespace-pre-line break-keep">
                {lang === 'en' ? item.aEn ?? item.a : item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
