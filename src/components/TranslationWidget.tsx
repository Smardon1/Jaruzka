'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LANGUAGES, Language } from '@/lib/translations';

export default function TranslationWidget() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const current = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-white/70 hover:text-white transition-colors px-3 py-2 rounded border border-white/10 hover:border-gold/40 text-sm font-medium"
        aria-label="Select language"
        aria-expanded={open}
      >
        <Globe size={14} className="text-gold/80" />
        <span className="text-xs">{current.flag}</span>
        <span className="hidden sm:inline text-xs uppercase tracking-wide">{current.code}</span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-navy-medium border border-gold/20 rounded shadow-xl z-50 overflow-hidden animate-fade-in">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as Language);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors text-left
                ${language === lang.code
                  ? 'bg-gold/10 text-gold border-l-2 border-gold'
                  : 'text-white/75 hover:bg-white/5 hover:text-white border-l-2 border-transparent'
                }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
              {language === lang.code && (
                <svg className="ml-auto w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
