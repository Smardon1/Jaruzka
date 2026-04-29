'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function NewsTicker() {
  const { t } = useLanguage();
  const items = t.ticker.items;
  // Duplicate for seamless loop
  const allItems = [...items, ...items];

  return (
    <div className="bg-navy-medium border-b border-gold/20 overflow-hidden h-9 flex items-center" role="marquee" aria-label="Latest news ticker">
      <div className="flex-shrink-0 bg-gold text-navy text-[10px] font-bold uppercase tracking-[0.1em] px-4 h-full flex items-center whitespace-nowrap z-10">
        Latest
      </div>
      <div className="overflow-hidden flex-1 h-full relative">
        <div className="flex items-center h-full whitespace-nowrap animate-ticker">
          {allItems.map((item, i) => (
            <span key={i} className="text-white/70 text-[12px] px-10 flex-shrink-0">
              {item}
              <span className="ml-10 text-gold/40">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
