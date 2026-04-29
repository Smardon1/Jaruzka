'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight, Mail } from 'lucide-react';

const allArticles = [
  { date: 'July 2026', tag: 'Contract Awards', title: 'Jaruzka Sea and Ocean Drilling Company Secures $280M Deepwater Contract with Santos Energy', desc: 'Jaruzka Sea and Ocean Drilling Company has been awarded a 3-year drilling contract for the Barossa Gas Project, utilising the OC Resolution drillship in the Timor Sea for a major LNG development programme.', featured: true },
  { date: 'June 2026', tag: 'Safety Milestones', title: '800 Days Without a Recordable Incident Across Pacific Fleet', desc: 'Our Pacific operations team celebrates a landmark safety achievement — 800 consecutive incident-free days, reinforcing our zero-harm commitment across all offshore operations.', featured: true },
  { date: 'May 2026', tag: 'Fleet News', title: 'OC Endeavour Semi-Sub Commences Operations in Bass Strait', desc: 'Jaruzka Sea and Ocean Drilling Company\'s newest semi-submersible rig has successfully mobilised and commenced drilling operations for Woodside Energy off Victoria\'s coast.', featured: false },
  { date: 'April 2026', tag: 'Company News', title: 'Jaruzka Sea and Ocean Drilling Company Announces $45M Technology Upgrade Programme', desc: 'A major investment in digital drilling technology including AI-assisted drilling analytics and real-time data management systems across the entire fleet.', featured: false },
  { date: 'March 2026', tag: 'Industry Insights', title: 'The Future of Deepwater Drilling in the Asia-Pacific', desc: 'Jaruzka Sea and Ocean Drilling Company\'s Chief Technical Officer outlines key technology trends shaping the future of offshore drilling across Australia and South-East Asia.', featured: false },
  { date: 'February 2026', tag: 'Contract Awards', title: 'Jaruzka Sea and Ocean Drilling Company Signs 2-Year Agreement with BP Australia for Browse Basin Operations', desc: 'A new contract covering up to 8 exploration wells in the remote Browse Basin, commencing Q3 2026 using the OC Titan jack-up rig.', featured: false },
  { date: 'January 2026', tag: 'Safety Milestones', title: 'Zero Lost-Time Injuries Across Entire Fleet for 2025', desc: 'Jaruzka Sea and Ocean Drilling Company achieves zero lost-time injuries for the full calendar year 2025, marking a significant milestone in our ongoing journey toward zero harm.', featured: false },
  { date: 'December 2025', tag: 'Company News', title: 'Jaruzka Sea and Ocean Drilling Company Named Top Employer in Australian Offshore Industry', desc: 'Recognised for our commitment to career development, safety culture, and employee wellbeing in the annual Australian Resources Employer Survey.', featured: false },
  { date: 'November 2025', tag: 'Fleet News', title: 'OC Meridian Jack-Up Completes Major 5-Year Classification Survey', desc: 'The OC Meridian has successfully completed its 5-year class renewal, returning to operational service with enhanced safety systems and upgraded drilling equipment.', featured: false },
];

const tagColors: Record<string, string> = {
  'Contract Awards': 'bg-blue-500/15 text-blue-400 border-blue-500/20',
  'Safety Milestones': 'bg-green-500/15 text-green-400 border-green-500/20',
  'Fleet News': 'bg-gold/15 text-gold border-gold/20',
  'Company News': 'bg-purple-500/15 text-purple-400 border-purple-500/20',
  'Industry Insights': 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
};

export default function NewsPage() {
  const { t } = useLanguage();
  const n = t.news;
  const [activeCategory, setActiveCategory] = useState('All');
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filtered = activeCategory === 'All'
    ? allArticles
    : allArticles.filter(a => a.tag === activeCategory);

  const featured = filtered.filter(a => a.featured);
  const rest = filtered.filter(a => !a.featured);

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
        eyebrow={n.hero.eyebrow}
        title={n.hero.title}
        subtitle={n.hero.subtitle}
        breadcrumb={[{ label: t.nav.news, href: '/news' }]}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <ScrollReveal className="flex flex-wrap gap-2 mb-12">
            {n.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.08em] font-semibold border transition-colors
                  ${activeCategory === cat
                    ? 'bg-navy text-gold border-navy'
                    : 'bg-white text-[#8a9ab5] border-[#e8edf5] hover:border-gold/40 hover:text-navy'
                  }`}
              >
                {cat}
              </button>
            ))}
          </ScrollReveal>

          {/* Featured articles */}
          {featured.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {featured.map((article, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <article className="bg-white border border-[#e8edf5] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                    <div className={`h-56 bg-gradient-to-br ${gradients[i % gradients.length]} relative overflow-hidden`}>
                      <img
                        src={
                          i === 0
                            ? 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=75'
                            : 'https://images.unsplash.com/photo-1504016798967-59a258e96651?w=700&q=75'
                        }
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-navy/20" />
                      <div className="absolute top-4 left-4">
                        <span className={`text-[10px] uppercase tracking-[0.1em] font-bold px-2.5 py-1 border ${tagColors[article.tag] || 'bg-white/10 text-white/70 border-white/20'}`}>
                          {article.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-[11px] text-gold font-semibold uppercase tracking-[0.08em]">{article.date}</span>
                      </div>
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h2 className="text-[16px] font-bold text-navy leading-snug mb-3 group-hover:text-gold transition-colors">{article.title}</h2>
                      <p className="text-[13px] text-[#8a9ab5] leading-relaxed mb-5 flex-1">{article.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-gold hover:text-navy transition-colors uppercase tracking-[0.04em] cursor-pointer">
                        {t.newsSection.readMore}
                      </span>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Rest */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rest.map((article, i) => (
                <ScrollReveal key={i} delay={(i % 3) * 60}>
                  <article className="bg-white border border-[#e8edf5] hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col h-full group">
                    <div className={`h-40 bg-gradient-to-br ${gradients[(i + 2) % gradients.length]} relative overflow-hidden`}>
                      <img
                        src={[
                          'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&q=70',
                          'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&q=70',
                          'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=500&q=70',
                          'https://images.unsplash.com/photo-1565118531796-763e5082d113?w=500&q=70',
                          'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=500&q=70',
                          'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=500&q=70',
                          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=70',
                        ][i % 7]}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-navy/20" />
                      <div className="absolute top-3 left-3">
                        <span className={`text-[9px] uppercase tracking-[0.1em] font-bold px-2 py-0.5 border ${tagColors[article.tag] || 'bg-white/10 text-white/70 border-white/20'}`}>
                          {article.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-[10px] text-gold font-semibold uppercase tracking-[0.1em] mb-2">{article.date}</p>
                      <h3 className="text-[14px] font-bold text-navy leading-snug mb-3 group-hover:text-gold transition-colors">{article.title}</h3>
                      <p className="text-[12px] text-[#8a9ab5] leading-relaxed mb-4 flex-1">{article.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gold hover:text-navy transition-colors uppercase tracking-[0.04em] cursor-pointer">
                        {t.common.readMore} <ArrowRight size={11} />
                      </span>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Subscribe */}
      <section className="bg-navy py-16">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <Mail size={32} className="text-gold/60 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">{n.subscribe.title}</h2>
            <p className="text-white/60 mb-7 text-sm">{n.subscribe.desc}</p>
            {subscribed ? (
              <div className="border border-gold/30 bg-gold/8 px-6 py-4 text-gold font-semibold">
                Thank you — you have been subscribed to Jaruzka Sea and Ocean Drilling Company news.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  placeholder={n.subscribe.placeholder}
                  className="flex-1 bg-white/8 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-[13px] focus:border-gold/50 focus:outline-none transition-colors"
                />
                <button type="submit" className="bg-gold hover:bg-gold-light text-navy font-bold text-[12px] uppercase tracking-[0.08em] px-6 py-3 transition-colors">
                  {n.subscribe.cta}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
