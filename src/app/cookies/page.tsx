import PageHero from '@/components/PageHero';
import Link from 'next/link';

export const metadata = { title: 'Cookie Policy' };

export default function CookiesPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie Policy" breadcrumb={[{ label: 'Cookie Policy', href: '/cookies' }]} />
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#8a9ab5] mb-8">Last updated: 1 January 2026</p>
          <h2 className="text-navy text-xl font-bold mb-3">What Are Cookies</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-6">Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to the site owners.</p>
          <h2 className="text-navy text-xl font-bold mb-3">How We Use Cookies</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-6">Jaruzka Sea and Ocean Drilling Company uses essential cookies required for website functionality (such as language preference storage), analytics cookies to understand how visitors use our site, and preference cookies to remember your settings. We do not use advertising or tracking cookies.</p>
          <h2 className="text-navy text-xl font-bold mb-3">Managing Cookies</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-6">Most browsers allow you to refuse or delete cookies through their settings. Please note that disabling cookies may affect the functionality of our website, including language preference retention.</p>
          <h2 className="text-navy text-xl font-bold mb-3">Contact</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-8">If you have questions about our use of cookies, please contact us at <a href="mailto:info@jaruzka-drilling.com" className="text-gold hover:text-navy">info@jaruzka-drilling.com</a>.</p>
          <Link href="/" className="inline-flex items-center gap-2 text-gold hover:text-navy font-bold text-sm uppercase tracking-wider transition-colors">← Back to Home</Link>
        </div>
      </section>
    </>
  );
}
