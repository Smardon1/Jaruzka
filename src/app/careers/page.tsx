'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { MapPin, Clock, Briefcase, ArrowRight, Send } from 'lucide-react';

export default function CareersPage() {
  const { t } = useLanguage();
  const c = t.careers;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const deptColors: Record<string, string> = {
    'Engineering': 'bg-blue-500/15 text-blue-400',
    'Operations': 'bg-green-500/15 text-green-400',
    'HSE': 'bg-orange-500/15 text-orange-400',
    'Technical': 'bg-purple-500/15 text-purple-400',
    'Marine': 'bg-cyan-500/15 text-cyan-400',
  };

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        breadcrumb={[{ label: t.nav.careers, href: '/careers' }]}
      />

      {/* Why Jaruzka */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{c.why.label}</p>
            <h2 className="text-[clamp(26px,4vw,44px)] font-light text-navy">
              {c.why.title}<br /><strong className="font-bold">{c.why.titleStrong}</strong>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8edf5]">
            {c.why.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white p-9 h-full pillar-card relative">
                  <div className="w-8 h-0.5 bg-gold mb-5" />
                  <h3 className="text-[14px] font-bold text-navy uppercase tracking-[0.05em] mb-3">{item.title}</h3>
                  <p className="text-[13px] text-[#8a9ab5] leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="openings" className="bg-[#f8fafc] py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{c.openings.label}</p>
            <h2 className="text-[clamp(26px,4vw,44px)] font-light text-navy">
              {c.openings.title}<br /><strong className="font-bold">{c.openings.titleStrong}</strong>
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-3">
            {c.openings.items.map((job, i) => (
              <ScrollReveal key={i} delay={(i % 4) * 60}>
                <div className="bg-white border border-[#e8edf5] p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-gold/30 hover:shadow-md transition-all group">
                  <div className="flex-1">
                    <h3 className="text-[15px] font-bold text-navy mb-2 group-hover:text-gold transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-[12px] text-[#8a9ab5]">
                      <span className="flex items-center gap-1.5"><MapPin size={12} className="text-gold/60" />{job.location}</span>
                      <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold/60" />{job.type}</span>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-semibold ${deptColors[job.dept] || 'bg-white/10 text-white/60'}`}>
                        <Briefcase size={10} />
                        {job.dept}
                      </span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold text-[11px] uppercase tracking-[0.08em] px-5 py-2.5 transition-colors">
                    {c.openings.apply} <ArrowRight size={12} />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{c.form.title}</p>
            <p className="text-white/60 text-[14px]">{c.form.desc}</p>
          </ScrollReveal>

          {submitted ? (
            <ScrollReveal>
              <div className="border border-gold/30 bg-gold/8 p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Application Received</h3>
                <p className="text-white/60">Thank you for your interest in Jaruzka Sea and Ocean Drilling Company. Our recruitment team will review your application and be in touch within 5 business days.</p>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { id: 'name', label: c.form.name, type: 'text', cols: 2 },
                  { id: 'email', label: c.form.email, type: 'email', cols: 1 },
                  { id: 'phone', label: c.form.phone, type: 'tel', cols: 1 },
                  { id: 'role', label: c.form.role, type: 'text', cols: 2 },
                ].map((field) => (
                  <div key={field.id} className={field.cols === 2 ? 'sm:col-span-2' : ''}>
                    <label className="block text-[11px] uppercase tracking-[0.1em] text-white/50 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 text-white placeholder-white/25 px-4 py-3 text-[13px] focus:border-gold/50 focus:outline-none focus:bg-white/8 transition-colors"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="block text-[11px] uppercase tracking-[0.1em] text-white/50 mb-2">{c.form.message}</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 text-white placeholder-white/25 px-4 py-3 text-[13px] focus:border-gold/50 focus:outline-none focus:bg-white/8 transition-colors resize-none"
                  />
                </div>
                <div className="sm:col-span-2 flex justify-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold text-[13px] uppercase tracking-[0.08em] px-10 py-4 transition-colors"
                  >
                    <Send size={14} />
                    {c.form.submit}
                  </button>
                </div>
              </form>
            </ScrollReveal>
          )}
        </div>
      </section>
    </>
  );
}
