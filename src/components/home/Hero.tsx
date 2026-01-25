import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface HeroProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

export default function Hero({
  headline = 'Subsea Intelligence Platform',
  subheadline = 'DeepFeat transforms unstructured subsea data into structured intelligence through multimodal AI. From offshore windfarms to telecommunication cables, achieve 92% anomaly detection accuracy with end-to-end automated inspections.',
  ctaText = 'Get in Touch',
  ctaLink = '/contact',
  className = '',
}: HeroProps) {
  return (
    <section className={`py-24 sm:py-32 ${className}`}>
      <Container size="lg">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#b8c5d0] sm:text-xl">
            {subheadline}
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href={ctaLink}>
              <Button variant="primary" size="lg">
                {ctaText}
              </Button>
            </Link>
            <Link href="/team">
              <Button variant="outline" size="lg">
                Meet the Team
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
