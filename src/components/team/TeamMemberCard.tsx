import Image from 'next/image';
import Card from '@/components/ui/Card';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  className?: string;
}

export default function TeamMemberCard({
  name,
  role,
  bio = 'Bio coming soon.',
  image,
  className = '',
}: TeamMemberCardProps) {
  return (
    <Card variant="elevated" padding="none" className={`overflow-hidden ${className}`}>
      <div className="aspect-square bg-[#162a42] relative">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-lg bg-[#0a1628] flex items-center justify-center">
              <span className="text-4xl text-[#7a8a99]">
                {name.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">
          {name}
        </h3>
        <p className="mt-1 text-sm font-medium text-[#00e5ff]">
          {role}
        </p>
        <p className="mt-3 text-sm text-[#7a8a99] leading-relaxed">
          {bio}
        </p>
      </div>
    </Card>
  );
}
