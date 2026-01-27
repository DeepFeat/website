'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Container from '@/components/ui/Container';

interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  {
    id: '1',
    value: 92,
    suffix: '%',
    label: 'Anomaly Detection Accuracy',
  },
  {
    id: '2',
    value: 10000,
    suffix: '+',
    label: 'Subsea Inspections Analyzed',
  },
  {
    id: '3',
    value: 99.7,
    suffix: '%',
    label: 'Uptime Reliability',
  },
  {
    id: '4',
    value: 75,
    suffix: '%',
    label: 'Faster Than Manual Analysis',
  },
];

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Intl.NumberFormat('en-US').format(
          Number(latest.toFixed(value % 1 === 0 ? 0 : 1))
        )}${suffix}`;
      }
    });
  }, [springValue, value, suffix, prefix]);

  return <span ref={ref} />;
}

export default function AnimatedStats() {
  return (
    <section className="py-16 sm:py-24 bg-[#0a1628]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Proven Performance
          </h2>
          <p className="text-lg text-[#b8c5d0] max-w-2xl mx-auto">
            Real-world results from subsea infrastructure monitoring deployments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-sm bg-[#061020] border border-[#1a2d4a] p-8 text-center hover:border-[#00e5ff] transition-colors group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-sm" />
              <div className="relative">
                <div className="text-4xl sm:text-5xl font-bold text-[#00e5ff] mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-sm text-[#e5e8eb] font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
