'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

export default function ProjectsPage() {
  const { t } = useLanguage();
  const p = t.projects;

  const gradients = [
    'from-[#0a1628] to-[#1a3a6b]',
    'from-[#0d1f3c] to-[#0a3060]',
    'from-[#06101e] to-[#1a3a6b]',
    'from-[#0a1628] to-[#152840]',
    'from-[#0d2040] to-[#1a3a6b]',
    'from-[#060f1e] to-[#0d1f3c]',
  ];

  return (
    <>
      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        subtitle={p.hero.subtitle}
        breadcrumb={[{ label: t.nav.projects, href: '/projects' }]}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {p.items.map((project, i) => (
              <ScrollReveal key={i}>
                <article className={`grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#e8edf5] overflow-hidden hover:shadow-lg transition-shadow ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual */}
                  <div className={`relative min-h-[220px] bg-gradient-to-br ${gradients[i]} overflow-hidden`}>
                    <img
                      src={[
                        'https://images.unsplash.com/photo-1565118531796-763e5082d113?w=600&q=75',
                        'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=600&q=75',
                        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75',
                        'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=600&q=75',
                        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=75',
                        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&q=75',
                      ][i % 6]}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/70 to-navy/40" />
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-gold font-semibold border border-gold/30 bg-gold/10 px-2.5 py-1 self-start">
                        {project.tag}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 text-white/60 text-[12px] mb-1">
                          <MapPin size={11} className="text-gold/70" />
                          {project.region}
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-[12px]">
                          <Calendar size={11} className="text-gold/70" />
                          {project.year}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-navy mb-3 leading-snug">{project.title}</h2>
                      <p className="text-[13px] text-[#4a5a70] leading-relaxed mb-6">{project.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-5 border-t border-[#e8edf5]">
                      {project.stats.map((stat, si) => (
                        <div key={si} className="border-l-2 border-gold pl-4">
                          <div className="text-lg font-black text-navy">{stat.val}</div>
                          <div className="text-[10px] uppercase tracking-[0.08em] text-[#8a9ab5]">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-14">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Planning your next offshore project?</h3>
            <p className="text-white/80 text-sm">Our project management team is ready to discuss how we can deliver your drilling programme.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 bg-white hover:bg-navy text-gold hover:text-white font-bold text-[12px] uppercase tracking-[0.08em] px-7 py-3.5 transition-colors flex items-center gap-2">
            Discuss Your Project <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
