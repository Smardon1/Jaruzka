'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Menu, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import TranslationWidget from './TranslationWidget';

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.fleet, href: '/fleet' },
    { label: t.nav.projects, href: '/projects' },
    { label: t.nav.hse, href: '/hse' },
    { label: t.nav.careers, href: '/careers' },
    { label: t.nav.news, href: '/news' },
  ];

  const serviceLinks = [
    { label: t.nav.servicesMenu.offshore, href: '/services', hash: '' },
    { label: t.nav.servicesMenu.well, href: '/services', hash: '#well' },
    { label: t.nav.servicesMenu.marine, href: '/services', hash: '#marine' },
    { label: t.nav.servicesMenu.engineering, href: '/services', hash: '#engineering' },
    { label: t.nav.servicesMenu.project, href: '/services', hash: '#project' },
    { label: t.nav.servicesMenu.environmental, href: '/services', hash: '#environmental' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-lg border-b border-gold/15'
            : 'bg-navy/80 backdrop-blur-sm border-b border-gold/10'
          }`}
      >
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-9 h-9 relative flex-shrink-0">
                <svg viewBox="0 0 38 38" fill="none" className="w-full h-full">
                  <circle cx="19" cy="19" r="17.5" stroke="#c8963e" strokeWidth="1.5" />
                  <path d="M5 24 Q10 18 19 22 Q28 26 33 20" stroke="#c8963e" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M5 28 Q10 22 19 26 Q28 30 33 24" stroke="rgba(200,150,62,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <rect x="17.5" y="8" width="3" height="10" rx="1" fill="#c8963e" opacity="0.9" />
                  <rect x="13" y="5" width="12" height="3" rx="1" fill="rgba(200,150,62,0.7)" />
                  <circle cx="19" cy="13" r="2" fill="#c8963e" />
                </svg>
              </div>
              <div>
                <span className="text-[13px] font-bold text-white tracking-wider group-hover:text-gold transition-colors leading-none">
                  JARUZKA<span className="text-gold"> SEA</span>
                </span>
                <div className="text-[8px] text-white/40 tracking-[0.1em] uppercase leading-none mt-0.5">
                  Sea &amp; Ocean Drilling Co.
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center">
              {navLinks.map((link) => (
                link.label === t.nav.home ? null : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link-hover px-4 h-16 flex items-center text-[12px] font-medium uppercase tracking-[0.06em] transition-colors
                      ${isActive(link.href)
                        ? 'text-gold active'
                        : 'text-white/75 hover:text-white'
                      }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}

              {/* Services dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`nav-link-hover px-4 h-16 flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.06em] transition-colors
                    ${isActive('/services')
                      ? 'text-gold active'
                      : 'text-white/75 hover:text-white'
                    }`}
                >
                  {t.nav.services}
                  <ChevronDown size={12} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-56 bg-navy-medium border border-gold/20 shadow-2xl z-50 animate-fade-in">
                    {serviceLinks.map((sl) => (
                      <Link
                        key={sl.hash || sl.href}
                        href={`${sl.href}${sl.hash}`}
                        onClick={() => setServicesOpen(false)}
                        className="block px-5 py-3 text-[12px] text-white/75 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                      >
                        {sl.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <TranslationWidget />
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 bg-gold hover:bg-gold-light text-navy font-bold text-[11px] uppercase tracking-[0.08em] px-5 py-2.5 transition-colors"
              >
                {t.nav.contact}
              </Link>
              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-white/80 hover:text-white"
                aria-label={mobileOpen ? t.common.close : t.common.menu}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-navy border-l border-gold/20 flex flex-col overflow-y-auto animate-fade-in">
            <div className="h-16 flex items-center justify-between px-6 border-b border-gold/15">
              <span className="text-white font-bold tracking-widest text-sm">
                JARUZKA<span className="text-gold"> SEA</span>
              </span>
              <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white">
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-sm uppercase tracking-wider font-medium border-l-2 transition-colors
                    ${isActive(link.href)
                      ? 'text-gold border-gold bg-gold/5'
                      : 'text-white/80 border-transparent hover:text-white hover:border-gold/40'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-l-2 border-transparent">
                <div
                  className="px-4 py-3 text-sm uppercase tracking-wider font-medium text-white/80 flex items-center justify-between cursor-pointer"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  {t.nav.services}
                  <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </div>
                {servicesOpen && (
                  <div className="pl-4">
                    {serviceLinks.map((sl) => (
                      <Link
                        key={sl.hash || sl.href}
                        href={`${sl.href}${sl.hash}`}
                        className="block px-4 py-2.5 text-xs text-white/60 hover:text-white uppercase tracking-wide transition-colors"
                      >
                        {sl.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
            <div className="p-6 border-t border-gold/15">
              <Link
                href="/contact"
                className="block text-center bg-gold hover:bg-gold-light text-navy font-bold text-xs uppercase tracking-[0.1em] py-3.5 transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
