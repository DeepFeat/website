import Link from 'next/link';
import Container from '@/components/ui/Container';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a2d4a] bg-gradiant-to-b from-[#0a1628] to-black">
      <Container>
        <div className="py-12">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-col items-center sm:items-start">
              <Link
                href="/"
                className="text-xl font-bold text-white hover:text-[#00e5ff] transition-colors"
              >
                DeepFeat
              </Link>
              <p className="mt-2 text-sm text-[#7a8a99]">
                Subsea Intelligence Platform
              </p>
            </div>

            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#7a8a99] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-[#1a2d4a] pt-8 text-center">
            <p className="text-sm text-[#7a8a99]">
              &copy; {currentYear} DeepFeat. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
