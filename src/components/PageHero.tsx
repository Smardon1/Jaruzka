import Link from 'next/link';

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
  image?: string;
}

const heroImages = [
  'https://images.unsplash.com/photo-1565118531796-763e5082d113?w=1400&q=80',
  'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=1400&q=80',
  'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1400&q=80',
];

export default function PageHero({ eyebrow, title, subtitle, breadcrumb, image }: Props) {
  const bgImage = image || heroImages[Math.floor(eyebrow.length % heroImages.length)];
  return (
    <section className="relative min-h-[340px] md:min-h-[420px] flex items-end bg-navy overflow-hidden pt-16">
      {/* Real photo background */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      />
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/70 to-navy-light/50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Decorative lines */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-0 right-24 w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent" />
        <div className="absolute top-0 right-48 w-px h-1/2 bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-[11px] text-white/40 uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumb.length - 1 ? (
                  <span className="text-gold">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white/70 transition-colors">{crumb.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}
        <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mb-3">{eyebrow}</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-light text-white leading-[1.08] max-w-3xl mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
