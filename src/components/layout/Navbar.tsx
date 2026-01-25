'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[#141a21] bg-[#000000]/95 backdrop-blur-sm">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative z-50">
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src="/transparent-logo.png"
                  alt="DeepFeat Logo"
                  width={40}
                  height={40}
                  className="object-contain transition-opacity group-hover:opacity-80"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-[#00e5ff] transition-colors tracking-wide">
                DeepFeat
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative text-sm font-medium text-[#b8c5d0] hover:text-white group"
                  >
                    {link.label}
                    {/* Active underline */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-[#00e5ff]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {/* Hover underline */}
                    {!isActive && (
                      <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-[#00e5ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Hamburger Button - Mobile/Tablet */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer group"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="w-6 h-0.5 bg-[#b8c5d0] group-hover:bg-[#00e5ff] transition-colors" />
              <span className="w-6 h-0.5 bg-[#b8c5d0] group-hover:bg-[#00e5ff] transition-colors" />
              <span className="w-6 h-0.5 bg-[#b8c5d0] group-hover:bg-[#00e5ff] transition-colors" />
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#000000]/90 backdrop-blur-sm z-[60] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0a0f14] border-l border-[#141a21] z-[70] md:hidden overflow-y-auto"
            >
              <div className="p-6 pt-20">
                {/* Navigation Links */}
                <nav className="space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`
                            block px-4 py-4 rounded-sm text-lg font-medium transition-all
                            ${isActive
                              ? 'bg-[#00e5ff]/10 text-[#00e5ff] border-l-4 border-[#00e5ff]'
                              : 'text-[#b8c5d0] hover:bg-[#141a21] hover:text-white border-l-4 border-transparent'
                            }
                          `}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 p-4 rounded-sm bg-gradient-to-br from-[#00e5ff]/10 to-transparent border border-[#00e5ff]/30"
                >
                  <h3 className="text-sm font-bold text-[#00e5ff] mb-2">Get in Touch</h3>
                  <a
                    href="mailto:info@deepfeat.ai"
                    className="text-sm text-[#b8c5d0] hover:text-white transition-colors"
                  >
                    info@deepfeat.ai
                  </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 grid grid-cols-2 gap-4"
                >
                  <div className="p-3 rounded-sm bg-[#141a21] text-center">
                    <div className="text-xl font-bold text-[#00e5ff]">92%</div>
                    <div className="text-xs text-[#7a8a99]">Accuracy</div>
                  </div>
                  <div className="p-3 rounded-sm bg-[#141a21] text-center">
                    <div className="text-xl font-bold text-[#00e5ff]">24/7</div>
                    <div className="text-xs text-[#7a8a99]">Monitoring</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
