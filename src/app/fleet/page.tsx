'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight, Anchor } from 'lucide-react';

export default function FleetPage() {
  const { t } = useLanguage();
  const f = t.fleet;

  const vesselColors = [
    'from-[#0a1628] to-[#1a3a6b]',
    'from-[#0d1f3c] to-[#0a3060]',
    'from-[#06101e] to-[#1a3a6b]',
    'from-[#0a1628] to-[#152840]',
    'from-[#0d2040] to-[#1a3a6b]',
    'from-[#060f1e] to-[#0d1f3c]',
  ];

  const statusColor = (status: string) => {
    if (status.toLowerCase().includes('active')) return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (status.toLowerCase().includes('contract')) return 'bg-gold/20 text-gold border-gold/30';
    return 'bg-white/10 text-white/60 border-white/15';
  };

  return (
    <>
      <PageHero
        eyebrow={f.hero.eyebrow}
        title={f.hero.title}
        subtitle={f.hero.subtitle}
        breadcrumb={[{ label: t.nav.fleet, href: '/fleet' }]}
      />

      {/* Category summary */}
      <section className="bg-navy-medium border-b border-gold/15">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {f.categories.map((cat, i) => (
              <div key={i} className="bg-navy-medium p-7">
                <div className="text-3xl font-black text-gold mb-2">{cat.count}</div>
                <div className="text-[13px] font-bold text-white mb-1">{cat.name}</div>
                <div className="text-[11px] text-white/45">{cat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vessel cards */}
      <section className="bg-[#f8fafc] py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {f.vessels.map((vessel, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 80}>
                <article className="bg-white border border-[#e8edf5] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                  {/* Image area */}
                  <div className={`h-52 bg-gradient-to-br ${vesselColors[i]} relative overflow-hidden`}>
                    <img
                      src={
                        vessel.type === 'Drillship'
                          ? `https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=600&q=75`
                          : vessel.type === 'Semi-Submersible'
                          ? `https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=600&q=75`
                          : `https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&q=75`
                      }
                      alt={vessel.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`text-[9px] uppercase tracking-[0.14em] font-bold px-2.5 py-1 border ${statusColor(vessel.status)}`}>
                        {vessel.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white">{vessel.name}</h3>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="grid grid-cols-3 gap-3 mb-5 pb-5 border-b border-[#e8edf5]">
                      {[
                        { l: f.specLabels.depth, v: vessel.depth },
                        { l: f.specLabels.year, v: vessel.year },
                      ].map((spec, si) => (
                        <div key={si}>
                          <div className="text-[9px] uppercase tracking-[0.1em] text-[#8a9ab5] mb-1">{spec.l}</div>
                          <div className="text-[13px] font-bold text-navy">{spec.v}</div>
                        </div>
                      ))}
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.1em] text-[#8a9ab5] mb-1">{f.specLabels.status}</div>
                        <div className="text-[10px] font-semibold text-green-600">{vessel.status.split('—')[0].trim()}</div>
                      </div>
                    </div>
                    <p className="text-[12px] text-[#8a9ab5] leading-relaxed mb-5 flex-1">{vessel.desc}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-gold hover:text-navy transition-colors uppercase tracking-[0.06em]"
                    >
                      <Anchor size={11} /> {f.inquire}
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet enquiry strip */}
      <div className="bg-navy py-12">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="border border-gold/20 p-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">Fleet Enquiry</p>
              <h2 className="text-2xl font-light text-white mb-3">{f.inquiryCta}</h2>
              <Link href="/contact" className="inline-flex items-center gap-2 mt-4 bg-gold hover:bg-gold-light text-navy font-bold text-[12px] uppercase tracking-[0.08em] px-7 py-3.5 transition-colors">
                {f.inquiryBtn} <ArrowRight size={13} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
