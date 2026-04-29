'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import StatCounter from '@/components/StatCounter';
import { Shield, ArrowRight } from 'lucide-react';

export default function HSEPage() {
  const { t } = useLanguage();
  const h = t.hse;

  return (
    <>
      <PageHero
        eyebrow={h.hero.eyebrow}
        title={h.hero.title}
        subtitle={h.hero.subtitle}
        breadcrumb={[{ label: t.nav.hse, href: '/hse' }]}
      />

      {/* Philosophy */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{h.philosophy.label}</p>
              <h2 className="text-[clamp(24px,3.5vw,40px)] font-light text-navy leading-snug mb-6">
                {h.philosophy.title}<br /><strong className="font-bold">{h.philosophy.titleStrong}</strong>
              </h2>
              <p className="text-[14px] text-[#4a5a70] leading-relaxed mb-5">{h.philosophy.p1}</p>
              <p className="text-[14px] text-[#4a5a70] leading-relaxed">{h.philosophy.p2}</p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="relative h-80 bg-navy overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504016798967-59a258e96651?w=800&q=80"
                  alt="Offshore safety operations"
                  className="absolute inset-0 w-full h-full object-cover opacity-45"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-navy/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {[60, 90, 120, 150].map((r, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full border border-gold/20 animate-pulse-slow -translate-x-1/2 -translate-y-1/2"
                        style={{ width: r * 2, height: r * 2, left: '50%', top: '50%', animationDelay: `${i * 0.5}s` }}
                      />
                    ))}
                    <div className="relative z-10 text-center">
                      <Shield size={56} className="text-gold mx-auto mb-2" strokeWidth={1.5} />
                      <div className="text-[11px] uppercase tracking-[0.2em] text-gold/70">Zero Harm</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Performance stats */}
      <section className="bg-navy py-20 lg:py-24 dark-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{h.performance.label}</p>
            <h2 className="text-[clamp(26px,4vw,44px)] font-light text-white">{h.performance.title}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {h.performance.stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="border border-gold/25 p-7 text-center bg-white/3">
                  <div className="text-4xl font-black text-gold mb-3">
                    {stat.num.includes('+') || stat.num.includes('%') ? stat.num :
                      <StatCounter target={parseFloat(stat.num)} isFloat={stat.num.includes('.')} />
                    }
                  </div>
                  <div className="text-[11px] text-white/55 uppercase tracking-[0.08em] leading-snug">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-[#f0f4f8] py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{h.programs.label}</p>
            <h2 className="text-[clamp(26px,4vw,44px)] font-light text-navy leading-tight">
              {h.programs.title}<br /><strong className="font-bold">{h.programs.titleStrong}</strong>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d0d8e8]">
            {h.programs.items.map((prog, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white p-9 h-full">
                  <div className="w-8 h-0.5 bg-gold mb-5" />
                  <h3 className="text-[14px] font-bold text-navy uppercase tracking-[0.05em] mb-3">{prog.title}</h3>
                  <p className="text-[13px] text-[#8a9ab5] leading-relaxed">{prog.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-white py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{h.certs.label}</p>
            <h2 className="text-[clamp(26px,4vw,44px)] font-light text-navy">
              {h.certs.title}<br /><strong className="font-bold">{h.certs.titleStrong}</strong>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8edf5]">
            {h.certs.items.map((cert, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white p-8 flex items-start gap-5 group hover:-translate-y-0.5 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="text-[14px] font-bold text-navy mb-1">{cert.code}</div>
                    <div className="text-[12px] text-[#8a9ab5]">{cert.name}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="bg-navy py-14">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">24/7 Emergency Response</h3>
            <p className="text-white/60 text-sm">For offshore emergencies, well control incidents or critical situations, contact our dedicated emergency response team.</p>
          </div>
          <a href="tel:+61290010099" className="flex-shrink-0 bg-gold hover:bg-gold-light text-navy font-bold text-[13px] uppercase tracking-[0.08em] px-7 py-3.5 transition-colors flex items-center gap-2">
            +61 2 9001 0099
          </a>
        </div>
      </section>
    </>
  );
}
