'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import MediaPlaceholder from '@/components/ui/MediaPlaceholder';

const comparisons = [
  {
    id: '1',
    title: 'Manual Inspection vs. AI Analysis',
    before: {
      label: 'Manual Process',
      stats: ['14 Days', '3 Operators', '78% Accuracy'],
    },
    after: {
      label: 'DeepFeat AI',
      stats: ['2 Hours', 'Automated', '92% Accuracy'],
    },
  },
  {
    id: '2',
    title: 'Traditional Sonar vs. Multimodal Fusion',
    before: {
      label: 'Single Modality',
      stats: ['Low Resolution', 'Limited Context', '60% Detection Rate'],
    },
    after: {
      label: 'Multimodal AI',
      stats: ['High Fidelity', 'Full Context', '92% Detection Rate'],
    },
  },
];

export default function BeforeAfter() {
  const [activeComparison, setActiveComparison] = useState(0);
  const current = comparisons[activeComparison];

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
            The DeepFeat Difference
          </h2>
          <p className="text-lg text-[#b8c5d0] max-w-2xl mx-auto">
            See how AI-powered multimodal fusion transforms subsea inspection workflows
          </p>
        </motion.div>

        {/* Comparison Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {comparisons.map((comparison, index) => (
            <button
              key={comparison.id}
              onClick={() => setActiveComparison(index)}
              className={`
                px-6 py-3 rounded-sm font-medium transition-all cursor-pointer
                ${
                  activeComparison === index
                    ? 'bg-[#00e5ff] text-[#000000]'
                    : 'bg-[#0a1628] text-[#b8c5d0] border border-[#1a2d4a] hover:border-[#00e5ff]'
                }
              `}
            >
              {comparison.title}
            </button>
          ))}
        </div>

        {/* Comparison Display */}
        <motion.div
          key={activeComparison}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Before */}
          <div className="relative">
            <div className="absolute -top-4 left-4 px-4 py-1 rounded-sm bg-[#7a8a99] z-10">
              <span className="text-sm font-bold text-white">BEFORE</span>
            </div>
            <div className="border-2 border-[#7a8a99] rounded-sm overflow-hidden">
              <MediaPlaceholder
                type="image"
                aspectRatio="video"
                label={current.before.label}
              />
              <div className="bg-[#0a1628] p-6">
                <h3 className="text-xl font-bold text-[#c0c8d0] mb-4">{current.before.label}</h3>
                <div className="space-y-3">
                  {current.before.stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#7a8a99]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#a8b2bc]">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="relative">
            <div className="absolute -top-4 left-4 px-4 py-1 rounded-sm bg-[#00e5ff] z-10">
              <span className="text-sm font-bold text-[#000000]">AFTER</span>
            </div>
            <div className="border-2 border-[#00e5ff] rounded-sm overflow-hidden shadow-lg shadow-[#00e5ff]/20">
              <MediaPlaceholder
                type="image"
                aspectRatio="video"
                label={current.after.label}
              />
              <div className="bg-[#0a1628] p-6">
                <h3 className="text-xl font-bold text-white mb-4">{current.after.label}</h3>
                <div className="space-y-3">
                  {current.after.stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#00e5ff]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#e5e8eb]">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Improvements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 rounded-sm bg-gradient-to-r from-[#00e5ff]/10 to-[#005f73]/10 border border-[#00e5ff]/30"
        >
          <h3 className="text-lg font-bold text-white mb-4 text-center">Key Improvements</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#00e5ff] mb-2">85%</div>
              <div className="text-sm text-[#c0c8d0]">Faster Processing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00e5ff] mb-2">14%</div>
              <div className="text-sm text-[#c0c8d0]">Higher Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00e5ff] mb-2">$500K</div>
              <div className="text-sm text-[#c0c8d0]">Annual Savings</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
