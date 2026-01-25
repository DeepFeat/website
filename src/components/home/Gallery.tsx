import Image from 'next/image';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image?: string;
}

interface GalleryProps {
  title?: string;
  subtitle?: string;
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnClasses = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
};

export default function Gallery({
  title,
  subtitle,
  items,
  columns = 3,
  className = '',
}: GalleryProps) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="mx-auto max-w-2xl text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-[#b8c5d0]">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`grid gap-8 ${columnClasses[columns]}`}>
          {items.map((item) => (
            <Card key={item.id} variant="elevated" padding="none" className="overflow-hidden">
              <div className="aspect-video bg-[#1a2128] relative">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#7a8a99] text-sm">Image Placeholder</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#7a8a99]">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
