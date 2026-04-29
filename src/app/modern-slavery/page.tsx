import PageHero from '@/components/PageHero';
import Link from 'next/link';

export const metadata = { title: 'Modern Slavery Statement' };

export default function ModernSlaveryPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Modern Slavery Statement" breadcrumb={[{ label: 'Modern Slavery Statement', href: '/modern-slavery' }]} />
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#8a9ab5] mb-8">Statement for the financial year ending 31 December 2025. Prepared in accordance with the Modern Slavery Act 2018 (Cth).</p>
          <h2 className="text-navy text-xl font-bold mb-3">Our Commitment</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-6">Jaruzka Sea and Ocean Drilling Company Ltd is committed to ensuring that modern slavery and human trafficking have no place in our business or supply chains. We take a zero-tolerance approach to modern slavery and are committed to acting ethically and with integrity in all our business relationships.</p>
          <h2 className="text-navy text-xl font-bold mb-3">Our Operations and Supply Chain</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-6">Jaruzka Sea and Ocean Drilling Company operates offshore drilling and well services across Australia and the Asia-Pacific region. Our supply chain includes procurement of drilling equipment, consumables, professional services, catering, and marine logistics. We operate primarily in Australia, with some offshore operations in South-East Asian jurisdictions.</p>
          <h2 className="text-navy text-xl font-bold mb-3">Risk Assessment and Due Diligence</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-6">We conduct regular modern slavery risk assessments across our supply chain, with particular focus on higher-risk categories including goods manufactured in higher-risk jurisdictions, labour-intensive services, and temporary or contract labour arrangements.</p>
          <h2 className="text-navy text-xl font-bold mb-3">Actions and Effectiveness</h2>
          <p className="text-[#4a5a70] leading-relaxed mb-8">Our modern slavery due diligence programme includes supplier pre-qualification questionnaires, contractual obligations requiring compliance with applicable modern slavery laws, an anonymous whistleblower hotline for reporting concerns, and annual training for all procurement and HR personnel.</p>
          <Link href="/" className="inline-flex items-center gap-2 text-gold hover:text-navy font-bold text-sm uppercase tracking-wider transition-colors">← Back to Home</Link>
        </div>
      </section>
    </>
  );
}
