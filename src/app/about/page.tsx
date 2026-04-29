'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <PageHero
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        subtitle={a.hero.subtitle}
        breadcrumb={[{ label: t.nav.about, href: '/about' }]}
      />

      {/* Story */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{a.story.label}</p>
              <h2 className="text-[clamp(24px,3.5vw,40px)] font-light text-navy leading-snug mb-6">
                {a.story.title}<br /><strong className="font-bold">{a.story.titleStrong}</strong>
              </h2>
              <p className="text-[14px] text-[#4a5a70] leading-relaxed mb-4">{a.story.p1}</p>
              <p className="text-[14px] text-[#4a5a70] leading-relaxed mb-4">{a.story.p2}</p>
              <p className="text-[14px] text-[#4a5a70] leading-relaxed">{a.story.p3}</p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="relative h-80 bg-navy overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1565118531796-763e5082d113?w=800&q=80"
                  alt="Offshore drilling platform at sea"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy/70 to-navy/30" />
                <div className="absolute bottom-6 left-6">
                  <div className="text-5xl font-black text-gold/80 leading-none">25+</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/70 mt-2">Years of Excellence</div>
                </div>
                <svg className="absolute bottom-0 left-0 right-0" viewBox="0 0 400 50" preserveAspectRatio="none" fill="none">
                  <path d="M0 35 Q50 20 100 35 Q150 50 200 35 Q250 20 300 35 Q350 50 400 35 L400 50 L0 50 Z" fill="rgba(10,22,40,0.5)"/>
                </svg>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="bg-[#f0f4f8] py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{a.values.label}</p>
            <h2 className="text-[clamp(26px,4vw,44px)] font-light text-navy">{a.values.title}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d0d8e8]">
            {a.values.items.map((v, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white p-9 h-full">
                  <div className="w-10 h-0.5 bg-gold mb-5" />
                  <h3 className="text-[14px] font-bold text-navy uppercase tracking-[0.06em] mb-3">{v.title}</h3>
                  <p className="text-[13px] text-[#8a9ab5] leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-white py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{a.leadership.label}</p>
            <h2 className="text-[clamp(26px,4vw,44px)] font-light text-navy">
              {a.leadership.title}<br /><strong className="font-bold">{a.leadership.titleStrong}</strong>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.leadership.team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group">
                  <div className="h-52 bg-navy-medium relative overflow-hidden mb-4">
                    <img
                      src={[
                        '/team/jaroslav-ruzicka.jpg',
                        '/team/havlikova-huritt.jpg',
                        '/team/janak-pavelka.jpg',
                        '/team/daniel-dworin.jpg',
                      ][i]}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                  </div>
                  <h3 className="text-[14px] font-bold text-navy mb-1">{member.name}</h3>
                  <p className="text-[11px] uppercase tracking-[0.08em] text-gold font-semibold mb-2">{member.title}</p>
                  <p className="text-[12px] text-[#8a9ab5] leading-relaxed">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-navy py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{a.certifications.label}</p>
            <h2 className="text-[clamp(26px,4vw,44px)] font-light text-white">
              {a.certifications.title}<br /><strong className="font-bold">{a.certifications.titleStrong}</strong>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {a.certifications.items.map((cert, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="border border-gold/20 bg-white/5 p-5 text-center hover:border-gold/50 hover:bg-white/8 transition-all">
                  <div className="text-[13px] font-bold text-gold mb-1">{cert.split(':')[0]}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wide">{cert.split(':')[1] || ''}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-14">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Ready to work with Jaruzka Sea and Ocean Drilling Company?</h3>
            <p className="text-white/80 text-sm">Contact our team to discuss your offshore drilling requirements.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-white hover:bg-navy text-gold hover:text-white font-bold text-[12px] uppercase tracking-[0.08em] px-7 py-3.5 transition-colors flex items-center gap-2">
            {t.nav.contact} <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
