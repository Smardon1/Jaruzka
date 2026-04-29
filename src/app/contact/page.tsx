'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Phone, Mail, MapPin, AlertTriangle, Send } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    company: '', subject: c.form.subjectOptions[0], message: '',
  });

  const set = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        breadcrumb={[{ label: t.nav.contact, href: '/contact' }]}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-navy mb-8">{c.form.title}</h2>
                {submitted ? (
                  <div className="border border-green-200 bg-green-50 p-8 text-center rounded">
                    <div className="w-14 h-14 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">Message Sent</h3>
                    <p className="text-[#4a5a70] text-sm">{c.form.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { key: 'firstName', label: c.form.firstName, type: 'text' },
                      { key: 'lastName', label: c.form.lastName, type: 'text' },
                      { key: 'email', label: c.form.email, type: 'email' },
                      { key: 'phone', label: c.form.phone, type: 'tel' },
                      { key: 'company', label: c.form.company, type: 'text' },
                    ].map(field => (
                      <div key={field.key}>
                        <label className="block text-[11px] uppercase tracking-[0.1em] text-[#8a9ab5] mb-1.5">{field.label}</label>
                        <input
                          type={field.type}
                          required={['firstName', 'email'].includes(field.key)}
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) => set(field.key, e.target.value)}
                          className="w-full bg-[#f8fafc] border border-[#e8edf5] text-navy px-4 py-3 text-[13px] focus:border-gold/50 focus:outline-none focus:bg-white transition-colors"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.1em] text-[#8a9ab5] mb-1.5">{c.form.subject}</label>
                      <select
                        value={form.subject}
                        onChange={(e) => set('subject', e.target.value)}
                        className="w-full bg-[#f8fafc] border border-[#e8edf5] text-navy px-4 py-3 text-[13px] focus:border-gold/50 focus:outline-none focus:bg-white transition-colors"
                      >
                        {c.form.subjectOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] uppercase tracking-[0.1em] text-[#8a9ab5] mb-1.5">{c.form.message}</label>
                      <textarea
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) => set('message', e.target.value)}
                        className="w-full bg-[#f8fafc] border border-[#e8edf5] text-navy px-4 py-3 text-[13px] focus:border-gold/50 focus:outline-none focus:bg-white transition-colors resize-none"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-navy hover:bg-navy-medium text-white font-bold text-[13px] uppercase tracking-[0.08em] px-8 py-4 transition-colors"
                      >
                        <Send size={14} />
                        {c.form.submit}
                      </button>
                    </div>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-7">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-navy mb-6">{c.offices.title}</h2>
                {c.offices.items.map((office, i) => (
                  <div key={i} className="mb-7 pb-7 border-b border-[#e8edf5] last:border-0">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-[14px] font-bold text-navy">{office.city}</h3>
                      <span className="text-[10px] bg-gold/10 text-gold border border-gold/25 px-2 py-0.5 uppercase tracking-wider font-semibold">
                        {office.label}
                      </span>
                    </div>
                    <address className="not-italic">
                      <div className="flex items-start gap-2.5 text-[13px] text-[#4a5a70] mb-2">
                        <MapPin size={13} className="text-gold/60 mt-0.5 flex-shrink-0" />
                        <span className="whitespace-pre-line">{office.address}</span>
                      </div>
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2.5 text-[13px] text-[#4a5a70] hover:text-navy transition-colors mb-2">
                        <Phone size={13} className="text-gold/60 flex-shrink-0" />{office.phone}
                      </a>
                      <a href={`mailto:${office.email}`}
                        className="flex items-center gap-2.5 text-[13px] text-[#4a5a70] hover:text-navy transition-colors">
                        <Mail size={13} className="text-gold/60 flex-shrink-0" />{office.email}
                      </a>
                    </address>
                  </div>
                ))}
              </ScrollReveal>

              {/* Emergency */}
              <ScrollReveal>
                <div className="bg-navy p-6 border-l-4 border-gold">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle size={14} className="text-gold" />
                    <h3 className="text-[13px] font-bold text-white uppercase tracking-[0.05em]">{c.emergency.title}</h3>
                  </div>
                  <p className="text-white/60 text-[12px] mb-3">{c.emergency.desc}</p>
                  <a href={`tel:${c.emergency.phone.replace(/\s/g, '')}`}
                    className="text-gold font-bold text-[16px] hover:text-gold-light transition-colors">
                    {c.emergency.phone}
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
