'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <>
      <PageHero
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        subtitle={s.hero.subtitle}
        breadcrumb={[{ label: t.nav.services, href: '/services' }]}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-0">
            {s.items.map((item, i) => (
              <ScrollReveal key={i}>
                <div
                  id={item.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[360px] ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                  style={{ direction: i % 2 === 1 ? 'rtl' : 'ltr' }}
                >
                  {/* Visual panel */}
                  <div
                    className="relative min-h-[260px] lg:min-h-[360px] overflow-hidden"
                    style={{ direction: 'ltr' }}
                  >
                    <img
                      src={[
                        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
                        'https://images.unsplash.com/photo-1504016798967-59a258e96651?w=800&q=80',
                        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80',
                        'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&q=80',
                        'https://images.unsplash.com/photo-1565118531796-763e5082d113?w=800&q=80',
                        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
                      ][i]}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: [
                          'linear-gradient(135deg,rgba(10,22,40,0.75),rgba(26,58,107,0.65))',
                          'linear-gradient(135deg,rgba(13,31,60,0.75),rgba(10,48,96,0.65))',
                          'linear-gradient(135deg,rgba(6,16,30,0.75),rgba(26,58,107,0.65))',
                          'linear-gradient(135deg,rgba(10,22,40,0.75),rgba(21,40,64,0.65))',
                          'linear-gradient(135deg,rgba(13,32,64,0.75),rgba(26,58,107,0.65))',
                          'linear-gradient(135deg,rgba(6,15,30,0.75),rgba(13,31,60,0.65))',
                        ][i],
                      }}
                    />
                    {/* Number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[120px] font-black text-white/5 leading-none select-none">{item.num}</span>
                    </div>
                    <div className="absolute bottom-8 left-8">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-gold font-semibold">{item.title}</span>
                    </div>
                    {/* Wave */}
                    <svg className="absolute bottom-0 left-0 right-0" viewBox="0 0 400 30" preserveAspectRatio="none" fill="none">
                      <path d="M0 15 Q100 0 200 15 Q300 30 400 15 L400 30 L0 30 Z" fill="rgba(200,150,62,0.08)"/>
                    </svg>
                  </div>

                  {/* Content panel */}
                  <div
                    className={`bg-white border-[#e8edf5] p-10 lg:p-14 flex flex-col justify-center ${i % 2 === 1 ? 'border-r-0 border-l border-b' : 'border-l-0 border-r border-b'} border-t`}
                    style={{ direction: 'ltr' }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[11px] font-bold text-[#8a9ab5] font-mono">{item.num}</span>
                      <div className="flex-1 h-px bg-[#e8edf5]" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy mb-4">{item.title}</h2>
                    <p className="text-[14px] text-[#4a5a70] leading-relaxed mb-7">{item.desc}</p>
                    <ul className="flex flex-col gap-2.5">
                      {item.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-3 text-[13px] text-[#4a5a70]">
                          <CheckCircle size={15} className="text-gold mt-0.5 flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-7 inline-flex items-center gap-2 text-[12px] font-bold text-gold hover:text-navy transition-colors uppercase tracking-[0.06em]"
                    >
                      Enquire about this service <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-light text-white mb-4">Need a tailored solution?</h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">Our team of experts can design a custom service package to meet your specific offshore drilling requirements.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold text-[13px] uppercase tracking-[0.08em] px-8 py-4 transition-colors">
              Contact Our Team <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
