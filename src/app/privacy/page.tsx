import PageHero from '@/components/PageHero';
import Link from 'next/link';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" breadcrumb={[{ label: 'Privacy Policy', href: '/privacy' }]} />
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 prose prose-navy">
          <p className="text-sm text-[#8a9ab5] mb-8">Last updated: 1 January 2026</p>
          <h2 className="text-navy text-xl font-bold mb-3">1. Introduction</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-6">Jaruzka Sea and Ocean Drilling Company Ltd (ACN 123 456 789) (&quot;Jaruzka Sea and Ocean Drilling Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting the privacy of individuals who interact with our website, services, and business operations. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.</p>
          <h2 className="text-navy text-xl font-bold mb-3">2. Information We Collect</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-6">We collect personal information you provide directly (such as name, email, and phone number via our contact forms), information collected automatically when you visit our website (such as IP address, browser type, and pages visited), and information required for employment applications.</p>
          <h2 className="text-navy text-xl font-bold mb-3">3. How We Use Your Information</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-6">We use your personal information to respond to enquiries, process applications, improve our website and services, comply with legal obligations, and communicate news and updates where you have consented to receive such communications.</p>
          <h2 className="text-navy text-xl font-bold mb-3">4. Contact</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-8">For privacy-related enquiries, please contact our Privacy Officer at <a href="mailto:privacy@oceancore.com.au" className="text-gold hover:text-navy">privacy@oceancore.com.au</a> or write to Level 32, 1 Macquarie Place, Sydney NSW 2000.</p>
          <Link href="/" className="inline-flex items-center gap-2 text-gold hover:text-navy font-bold text-sm uppercase tracking-wider transition-colors">← Back to Home</Link>
        </div>
      </section>
    </>
  );
}
