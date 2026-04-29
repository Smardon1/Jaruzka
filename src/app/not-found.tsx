'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Home } from 'lucide-react';

export default function NotFound() {
  const { t } = useLanguage();
  const n = t.notFound;

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 dark-pattern opacity-40" />
      <svg className="absolute bottom-0 left-0 right-0" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="none">
        <path d="M0 50 Q180 20 360 50 Q540 80 720 50 Q900 20 1080 50 Q1260 80 1440 50 L1440 100 L0 100 Z" fill="rgba(200,150,62,0.06)"/>
        <path d="M0 70 Q180 50 360 70 Q540 90 720 70 Q900 50 1080 70 Q1260 90 1440 70 L1440 100 L0 100 Z" fill="rgba(10,22,40,0.6)"/>
      </svg>
      <div className="relative z-10 text-center px-4">
        <div className="text-[100px] sm:text-[140px] font-black text-gold/15 leading-none mb-4 select-none">
          {n.title}
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">{n.heading}</h1>
        <p className="text-white/55 max-w-md mx-auto mb-10 text-[15px] leading-relaxed">{n.desc}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold text-[13px] uppercase tracking-[0.08em] px-8 py-4 transition-colors"
        >
          <Home size={14} />
          {n.cta}
        </Link>
      </div>
    </div>
  );
}
