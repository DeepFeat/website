'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import MediaPlaceholder from '@/components/ui/MediaPlaceholder';

export default function HeroWithMedia() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#005f73]/10 rounded-full blur-3xl" />

      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 rounded-sm bg-[#00e5ff]/10 border border-[#00e5ff]/30"
            >
              <span className="text-sm text-[#00e5ff] font-medium">Subsea Intelligence Platform</span>
            </motion.div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Transform Underwater Data Into
              <span className="block text-[#00e5ff] mt-2">Actionable Intelligence</span>
            </h1>

            <p className="text-lg leading-8 text-[#c0c8d0] mb-8 max-w-xl">
              DeepFeat achieves 92% anomaly detection accuracy across port infrastructure,
              maritime assets, and underwater facilities. End-to-end automated inspections
              powered by multimodal deep learning.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-sm bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#00e5ff]">92%</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Accuracy</div>
                  <div className="text-xs text-[#7a8a99]">Anomaly Detection</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-sm bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#00e5ff]">24/7</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Monitoring</div>
                  <div className="text-xs text-[#7a8a99]">Real-time Analysis</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="shadow-lg shadow-[#00e5ff]/30">
                  Schedule a Demo
                </Button>
              </Link>
              <Link href="/team">
                <Button variant="outline" size="lg">
                  Meet the Team
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Media Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <MediaPlaceholder
              type="video"
              aspectRatio="video"
              label="DeepFeat in Action"
            />

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-[#0a1628] border border-[#1a2d4a] rounded-sm p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00ff88]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#7a8a99]">Latest Scan</div>
                  <div className="text-sm font-medium text-[#e5e8eb]">99.2% Complete</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-6 -right-6 bg-[#0a1628] border border-[#1a2d4a] rounded-sm p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#7a8a99]">Processing Speed</div>
                  <div className="text-sm font-medium text-[#e5e8eb]">&lt;100ms</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
