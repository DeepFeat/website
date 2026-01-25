'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'SubFusion AI reduced our offshore windfarm inspection time by 60% while improving defect detection accuracy. The automated reporting alone saves our team hundreds of hours per quarter.',
    author: 'Sarah Mitchell',
    role: 'Director of Operations',
    company: 'North Atlantic Wind',
    industry: 'Offshore Wind',
  },
  {
    id: '2',
    quote: 'DeepFeat\'s multimodal AI spotted critical corrosion on our subsea cables that human inspectors had missed in three previous surveys. This single detection paid for the entire platform.',
    author: 'Dr. James Chen',
    role: 'Chief Engineer',
    company: 'Pacific Telecom Infrastructure',
    industry: 'Subsea Cables',
  },
  {
    id: '3',
    quote: 'The DeepInsights dashboard gives us real-time visibility across 40+ bridge foundations. We can now prioritize maintenance based on actual structural health instead of arbitrary schedules.',
    author: 'Maria Rodriguez',
    role: 'Infrastructure Manager',
    company: 'Coastal Transit Authority',
    industry: 'Maritime Infrastructure',
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const current = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0f14] to-[#000000] overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-[#b8c5d0] max-w-2xl mx-auto">
            See how organizations are transforming subsea operations with DeepFeat
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="bg-[#0a0f14] border border-[#141a21] rounded-sm p-8 lg:p-12">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-[#00e5ff]/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl sm:text-2xl text-white leading-relaxed mb-8">
                    "{current.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-sm bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center">
                      <span className="text-[#00e5ff] font-bold text-lg">
                        {current.author.split(' ').map((n) => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{current.author}</div>
                      <div className="text-sm text-[#b8c5d0]">{current.role}</div>
                      <div className="text-sm text-[#7a8a99]">{current.company} • {current.industry}</div>
                    </div>
                  </div>

                  {/* Industry Badge */}
                  <div className="mt-6 inline-block px-4 py-2 rounded-sm bg-[#00e5ff]/10 border border-[#00e5ff]/30">
                    <span className="text-sm text-[#00e5ff] font-medium">{current.industry}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button
              onClick={() => paginate(-1)}
              className="pointer-events-auto -ml-4 sm:-ml-12 w-12 h-12 rounded-sm bg-[#0a0f14] border border-[#141a21] hover:border-[#00e5ff] hover:bg-[#00e5ff] text-[#b8c5d0] hover:text-[#000000] transition-all flex items-center justify-center group cursor-pointer"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => paginate(1)}
              className="pointer-events-auto -mr-4 sm:-mr-12 w-12 h-12 rounded-sm bg-[#0a0f14] border border-[#141a21] hover:border-[#00e5ff] hover:bg-[#00e5ff] text-[#b8c5d0] hover:text-[#000000] transition-all flex items-center justify-center group cursor-pointer"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  index === currentIndex
                    ? 'bg-[#00e5ff] w-8'
                    : 'bg-[#141a21] hover:bg-[#00e5ff]/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
