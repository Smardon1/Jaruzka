'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, Mail, MapPin, AlertTriangle, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/jaruzka-drilling', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/jaruzka_drilling', label: 'Twitter/X' },
  ];

  return (
    <footer className="bg-[#060f1e]" role="contentinfo">
      {/* Contact bar */}
      <div className="bg-navy-medium border-y border-gold/15">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.15em] text-gold font-semibold mb-3">{f.contact.title}</h4>
              <div className="flex items-start gap-2.5 text-white/70 hover:text-white transition-colors mb-2">
                <MapPin size={14} className="text-gold/60 mt-0.5 flex-shrink-0" />
                <address className="not-italic text-sm leading-relaxed whitespace-pre-line">{f.contact.address}</address>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.15em] text-gold font-semibold mb-3">&nbsp;</h4>
              <a href={`tel:${f.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors mb-2 text-sm">
                <Phone size={14} className="text-gold/60 flex-shrink-0" />
                {f.contact.phone}
              </a>
              <a href={`mailto:${f.contact.email}`} className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors text-sm">
                <Mail size={14} className="text-gold/60 flex-shrink-0" />
                {f.contact.email}
              </a>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.15em] text-gold font-semibold mb-3 flex items-center gap-1.5">
                <AlertTriangle size={11} className="text-gold" />
                Emergency
              </h4>
              <p className="text-white/60 text-xs mb-1">24/7 Offshore Emergency Line:</p>
              <a href="tel:+61290010099" className="text-gold font-semibold text-sm hover:text-gold-light transition-colors">
                +61 2 9001 0099
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <svg viewBox="0 0 38 38" fill="none" className="w-8 h-8">
                <circle cx="19" cy="19" r="17.5" stroke="#c8963e" strokeWidth="1.5" />
                <path d="M5 24 Q10 18 19 22 Q28 26 33 20" stroke="#c8963e" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M5 28 Q10 22 19 26 Q28 30 33 24" stroke="rgba(200,150,62,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <rect x="17.5" y="8" width="3" height="10" rx="1" fill="#c8963e" opacity="0.9" />
                <rect x="13" y="5" width="12" height="3" rx="1" fill="rgba(200,150,62,0.7)" />
              </svg>
              <div>
                <span className="text-[13px] font-bold text-white tracking-widest group-hover:text-gold transition-colors block leading-none">
                  JARUZKA<span className="text-gold"> SEA</span>
                </span>
                <span className="text-[9px] text-white/40 tracking-[0.1em] uppercase">Sea &amp; Ocean Drilling Co.</span>
              </div>
            </Link>
            <p className="text-white/45 text-[12px] leading-relaxed max-w-xs mb-6">
              {f.tagline}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map((sl) => (
                <a
                  key={sl.label}
                  href={sl.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={sl.label}
                  className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/50 hover:border-gold/40 hover:text-gold transition-colors"
                >
                  <sl.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {[f.company, f.services, f.operations, f.legal].map((col) => (
            <div key={col.title}>
              <h5 className="text-[10px] uppercase tracking-[0.15em] text-gold font-semibold mb-4">{col.title}</h5>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link: { label: string; href: string }) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[12px] text-white/45 hover:text-white transition-colors uppercase tracking-[0.04em]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25">{f.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[11px] text-white/30 hover:text-white/60 transition-colors uppercase tracking-wide">
              {f.legal2}
            </Link>
            <Link href="/terms" className="text-[11px] text-white/30 hover:text-white/60 transition-colors uppercase tracking-wide">
              {f.legal3}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
