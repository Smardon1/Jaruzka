import PageHero from '@/components/PageHero';
import Link from 'next/link';

export const metadata = { title: 'Terms of Use' };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" breadcrumb={[{ label: 'Terms of Use', href: '/terms' }]} />
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#8a9ab5] mb-8">Last updated: 1 January 2026</p>
          <h2 className="text-navy text-xl font-bold mb-3">1. Acceptance of Terms</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-6">By accessing and using the Jaruzka Sea and Ocean Drilling Company website (www.oceancore.com.au), you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use this website.</p>
          <h2 className="text-navy text-xl font-bold mb-3">2. Intellectual Property</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-6">All content on this website, including text, graphics, logos, images, and software, is the property of Jaruzka Sea and Ocean Drilling Company Ltd or its content suppliers and is protected by Australian and international copyright laws.</p>
          <h2 className="text-navy text-xl font-bold mb-3">3. Limitation of Liability</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-6">Jaruzka Sea and Ocean Drilling Company provides this website on an &quot;as is&quot; basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
          <h2 className="text-navy text-xl font-bold mb-3">4. Governing Law</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-8">These terms are governed by the laws of New South Wales, Australia. You consent to the exclusive jurisdiction of the courts of New South Wales for any disputes arising in connection with these terms.</p>
          <Link href="/" className="inline-flex items-center gap-2 text-gold hover:text-navy font-bold text-sm uppercase tracking-wider transition-colors">← Back to Home</Link>
        </div>
      </section>
    </>
  );
}
