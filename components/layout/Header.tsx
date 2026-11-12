'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { HAS_FAQ } from '@/components/sections/FAQ';
import { Lang, TEXT } from '@/lib/i18n';

export default function Header({ lang = 'ko' }: { lang?: Lang }) {
  const t = TEXT[lang];
  const NAV_ITEMS = [
    { label: t.nav.home, href: `${t.home}#home` },
    { label: t.nav.portfolio, href: `${t.home}#portfolio` },
    { label: t.nav.blog, href: '/blog' },
    ...(HAS_FAQ ? [{ label: t.nav.faq, href: `${t.home}#faq` }] : []),
    { label: t.nav.contact, href: `${t.home}#contact` },
  ];
  // 언어 전환 (KR / EN)
  const languageToggle = (
    <span className="flex items-center gap-1 text-sm font-medium">
      <Link href="/" className={lang === 'ko' ? 'text-primary' : 'text-text-muted hover:text-primary'}>
        KR
      </Link>
      <span className="text-text-muted">/</span>
      <Link href="/en" className={lang === 'en' ? 'text-primary' : 'text-text-muted hover:text-primary'}>
        EN
      </Link>
    </span>
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`${t.home}#home`}
            className="font-display text-2xl text-primary hover:text-primary-dark transition-colors"
          >
            볼따구는 귀여워
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-text-secondary hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>{languageToggle}</li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-text-primary" />
            ) : (
              <Menu size={24} className="text-text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-text-secondary hover:text-primary hover:bg-secondary rounded-lg transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-4 py-2">{languageToggle}</li>
          </ul>
        )}
      </nav>
    </header>
  );
}
