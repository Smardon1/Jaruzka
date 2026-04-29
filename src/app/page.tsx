'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import NewsTicker from '@/components/NewsTicker';
import ScrollReveal from '@/components/ScrollReveal';
import StatCounter from '@/components/StatCounter';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false });

// SVG icons for pillar cards
const PillarIcons = [
  // Offshore Drilling
  <svg key="1" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <circle cx="24" cy="24" r="22" stroke="#1a3a6b" strokeWidth="1.5"/>
    <rect x="21.5" y="10" width="5" height="16" rx="2" fill="rgba(200,150,62,0.2)" stroke="#c8963e" strokeWidth="1.5"/>
    <path d="M16 26 L32 26 M13 32 Q16 28 24 31 Q32 34 35 30" stroke="#c8963e" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="10" r="3" fill="#c8963e" opacity="0.9"/>
  </svg>,
  // Fleet
  <svg key="2" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <rect x="10" y="28" width="28" height="10" rx="2" stroke="#1a3a6b" strokeWidth="1.5"/>
    <path d="M18 28L18 14 Q18 10 24 10 Q30 10 30 14L30 28" stroke="#c8963e" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="19" r="3" fill="#c8963e"/>
    <path d="M10 36 Q15 32 24 34 Q33 36 38 32" stroke="rgba(200,150,62,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  // Safety
  <svg key="3" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <path d="M24 6L38 12V22C38 30 31 37 24 40C17 37 10 30 10 22V12L24 6Z" stroke="#1a3a6b" strokeWidth="1.5" fill="rgba(26,58,107,0.1)"/>
    <path d="M18 24L22 28L30 20" stroke="#c8963e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // People
  <svg key="4" viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <circle cx="17" cy="18" r="6" stroke="#1a3a6b" strokeWidth="1.5"/>
    <circle cx="31" cy="18" r="6" stroke="#1a3a6b" strokeWidth="1.5"/>
    <path d="M5 38 Q5 30 17 30 L31 30 Q43 30 43 38" stroke="#c8963e" strokeWidth="2" strokeLinecap="round"/>
  </svg>,
];

export default function HomePage() {
  const { t } = useLanguage();

  const scrollToContent = () => {
    document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-navy">
        <HeroCanvas />
        <div className="absolute inset-0 bg-hero-gradient" />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold mb-5 animate-fade-in">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-[clamp(38px,6vw,76px)] font-light text-white leading-[1.02] tracking-tight mb-4">
            <span className="block a1">{t.hero.title1}</span>
            <strong className="block font-bold a2">{t.hero.title2}</strong>
          </h1>
          <p className="text-[clamp(14px,1.8vw,18px)] text-white/60 max-w-[520px] leading-relaxed mb-9 a3">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4 a4">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold text-[13px] uppercase tracking-[0.08em] px-7 py-4 transition-all hover:-translate-y-0.5"
            >
              {t.hero.cta1}
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-semibold text-[13px] uppercase tracking-[0.08em] px-7 py-4 hover:bg-white/8 transition-all"
            >
              {t.hero.cta2}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity"
          aria-label="Scroll down"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white animate-scroll-indicator" />
          <ChevronDown size={14} className="text-white animate-bounce" />
        </button>
      </section>

      {/* ── NEWS TICKER ── */}
      <NewsTicker />

      {/* ── PILLARS ── */}
      <section id="pillars" className="bg-white py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{t.pillars.label}</p>
            <h2 className="text-[clamp(26px,4vw,44px)] font-light text-navy leading-tight">
              {t.pillars.title}<br />
              <strong className="font-bold">{t.pillars.titleStrong}</strong>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8edf5]">
            {t.pillars.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="pillar-card relative bg-white p-10 h-full hover:-translate-y-1 transition-transform duration-300 group">
                  <span className="absolute top-3 right-4 text-5xl font-black text-[#e8edf5] leading-none select-none">
                    {item.num}
                  </span>
                  <div className="mb-5">{PillarIcons[i]}</div>
                  <h3 className="text-[13px] font-bold text-navy uppercase tracking-[0.06em] mb-3">{item.title}</h3>
                  <p className="text-[13px] text-[#8a9ab5] leading-relaxed mb-5">{item.desc}</p>
                  <Link
                    href={item.href}
                    className="text-[12px] font-semibold text-gold hover:text-navy transition-colors uppercase tracking-[0.04em] flex items-center gap-1.5"
                  >
                    {item.link}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative bg-navy py-20 lg:py-24 overflow-hidden dark-pattern">
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{t.stats.label}</p>
            <h2 className="text-[clamp(26px,4vw,44px)] font-light text-white leading-tight">
              {t.stats.title}<br />
              <strong className="font-bold">{t.stats.titleStrong}</strong>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
            {t.stats.items.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="border-l-2 border-gold pl-5">
                  <div className="text-[clamp(36px,4.5vw,58px)] font-black text-white leading-none mb-2">
                    <StatCounter
                      target={parseFloat(stat.num)}
                      suffix={stat.suffix}
                      isFloat={stat.num.includes('.')}
                    />
                  </div>
                  <p className="text-[12px] text-[#8a9ab5] uppercase tracking-[0.06em] leading-snug">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section id="capabilities" className="bg-white py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <ScrollReveal className="text-center">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{t.capabilities.label}</p>
            <h2 className="text-[clamp(26px,4vw,44px)] font-light text-navy leading-tight">
              {t.capabilities.title}<br />
              <strong className="font-bold">{t.capabilities.titleStrong}</strong>
            </h2>
          </ScrollReveal>
        </div>

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e8edf5]">
            {t.capabilities.items.map((cap, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="relative bg-navy-medium min-h-[260px] flex flex-col justify-end p-10 overflow-hidden group cursor-default">
                  {/* Real photo backgrounds */}
                  <img
                    src={
                      i === 0
                        ? 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=700&q=75'
                        : i === 1
                        ? 'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=700&q=75'
                        : i === 2
                        ? 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=700&q=75'
                        : 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=700&q=75'
                    }
                    alt={cap.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Background gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-70"
                    style={{
                      background: i === 0 ? 'linear-gradient(135deg,#0d1f3c,#1a3a6b)'
                        : i === 1 ? 'linear-gradient(135deg,#1a3a6b,#0a3060)'
                        : i === 2 ? 'linear-gradient(135deg,#0a1628,#1a3a6b)'
                        : 'linear-gradient(135deg,#152840,#0a1628)',
                    }}
                  />
                  {/* Ocean wave overlay */}
                  <div className="absolute inset-0 cap-card-overlay" />
                  <div className="relative z-10">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-gold font-semibold mb-2 block">{cap.tag}</span>
                    <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                    <p className="text-[13px] text-white/60 leading-relaxed max-w-[380px] mb-5">{cap.desc}</p>
                    <Link
                      href={cap.href}
                      className="inline-flex items-center gap-2 text-[12px] font-semibold text-gold hover:text-gold-light uppercase tracking-[0.06em] transition-colors"
                    >
                      {cap.link} <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET STRIP ── */}
      <div className="bg-gold py-8">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">{t.fleetStrip.title}</h3>
            <p className="text-sm text-white/80">{t.fleetStrip.desc}</p>
          </div>
          <Link
            href="/fleet"
            className="flex-shrink-0 bg-white hover:bg-navy text-gold hover:text-white font-bold text-[12px] uppercase tracking-[0.08em] px-7 py-3.5 transition-colors"
          >
            {t.fleetStrip.cta}
          </Link>
        </div>
      </div>

      {/* ── NEWS ── */}
      <section className="bg-[#f8fafc] py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{t.newsSection.label}</p>
              <h2 className="text-[clamp(26px,4vw,44px)] font-light text-navy leading-tight">
                {t.newsSection.title}<br />
                <strong className="font-bold">{t.newsSection.titleStrong}</strong>
              </h2>
            </div>
            <Link href="/news" className="text-[13px] font-semibold text-gold hover:text-navy transition-colors uppercase tracking-[0.05em] flex items-center gap-1.5 flex-shrink-0">
              {t.newsSection.viewAll}
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.newsSection.articles.map((article, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <article className="bg-white border border-[#e8edf5] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                  <div className="h-44 bg-navy-medium relative overflow-hidden">
                    {/* Real photo backgrounds per article */}
                    <img
                      src={
                        i === 0
                          ? 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'
                          : i === 1
                          ? 'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=600&q=80'
                          : 'https://images.unsplash.com/photo-1565118531796-763e5082d113?w=600&q=80'
                      }
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] bg-gold/20 border border-gold/30 text-gold font-semibold uppercase tracking-wider px-2.5 py-1">
                        {article.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[11px] text-gold font-semibold uppercase tracking-[0.1em] mb-2">{article.date}</p>
                    <h4 className="text-[15px] font-bold text-navy leading-snug mb-3">{article.title}</h4>
                    <p className="text-[12px] text-[#8a9ab5] leading-relaxed mb-5 flex-1">{article.desc}</p>
                    <Link
                      href="/news"
                      className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-gold hover:text-navy transition-colors uppercase tracking-[0.04em]"
                    >
                      {t.newsSection.readMore}
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HSE ── */}
      <section className="bg-[#f0f4f8] py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <ScrollReveal>
              <div className="relative h-80 bg-navy rounded overflow-hidden">
                {/* Real HSE / safety image */}
                <img
                  src="https://images.unsplash.com/photo-1504016798967-59a258e96651?w=800&q=80"
                  alt="Offshore safety operations"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-navy/40" />
                {/* Animated rings overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[80, 110, 140, 170, 200].map((r, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full border border-gold/20 animate-pulse-slow"
                      style={{
                        width: r * 2,
                        height: r * 2,
                        animationDelay: `${i * 0.4}s`,
                        animationDuration: `${3 + i * 0.5}s`,
                      }}
                    />
                  ))}
                  {/* Shield */}
                  <div className="relative z-10 w-24 h-24">
                    <svg viewBox="0 0 80 90" fill="none" className="w-full h-full">
                      <path d="M40 5L70 18V38C70 55 55 68 40 74C25 68 10 55 10 38V18L40 5Z"
                        fill="rgba(200,150,62,0.12)"
                        stroke="rgba(200,150,62,0.75)"
                        strokeWidth="2"
                      />
                      <path d="M28 40L36 48L52 32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                {/* Orbiting dots */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-36 h-36 animate-[spin_8s_linear_infinite]">
                    {[0, 120, 240].map((deg, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 rounded-full bg-gold"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${deg}deg) translateX(70px) translateY(-50%)`,
                        }}
                      />
                    ))}
                  
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal delay={150}>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{t.hseSection.label}</p>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-light text-navy leading-snug mb-5">
                {t.hseSection.title}<br />
                <strong className="font-bold">{t.hseSection.titleStrong}</strong>
              </h2>
              <p className="text-[14px] text-[#4a5a70] leading-relaxed mb-4">{t.hseSection.desc1}</p>
              <p className="text-[14px] text-[#4a5a70] leading-relaxed mb-7">{t.hseSection.desc2}</p>
              <div className="flex flex-wrap gap-2 mb-7">
                {t.hseSection.badges.map((badge) => (
                  <span key={badge} className="bg-white border border-[#d0d8e8] px-3.5 py-2 text-[11px] font-semibold text-navy uppercase tracking-[0.05em]">
                    {badge}
                  </span>
                ))}
              </div>
              <Link
                href="/hse"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-gold hover:text-navy transition-colors uppercase tracking-[0.06em]"
              >
                {t.hseSection.learnMore} <ArrowRight size={14} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CAREERS ── */}
      <section className="relative bg-navy py-20 lg:py-24 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 bg-gradient-to-l from-navy-light to-transparent" />
        <div className="absolute inset-0 dark-pattern opacity-40" />
        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{t.careersSection.label}</p>
              <h2 className="text-[clamp(26px,4vw,44px)] font-light text-white leading-tight mb-5">
                {t.careersSection.title}<br />
                <strong className="font-bold">{t.careersSection.titleStrong}</strong>
              </h2>
              <p className="text-[14px] text-white/60 leading-relaxed mb-8 max-w-md">{t.careersSection.desc}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold text-[13px] uppercase tracking-[0.08em] px-6 py-3.5 transition-colors"
                >
                  {t.careersSection.cta1} <ArrowRight size={13} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold text-[13px] uppercase tracking-[0.06em] px-6 py-3.5 hover:bg-white/8 transition-all"
                >
                  {t.careersSection.cta2}
                </Link>
              </div>
            </ScrollReveal>

            {/* Decorative stats */}
            <ScrollReveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: '500+', l: 'Offshore Professionals' },
                  { n: '40+', l: 'Nationalities Represented' },
                  { n: '8+', l: 'Training Programmes' },
                  { n: '92%', l: 'Employee Retention Rate' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6">
                    <div className="text-3xl font-black text-gold mb-1">{s.n}</div>
                    <div className="text-[12px] text-white/50 uppercase tracking-[0.05em]">{s.l}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
