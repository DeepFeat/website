'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

const steps = [
  {
    id: '1',
    title: 'Data Capture',
    description: 'ROVs, AUVs, and subsea sensors collect multimodal data including sonar, optical video, and telemetry.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'AI Fusion',
    description: 'DeepFeat models process and fuse heterogeneous data streams into unified intelligence representation.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'Anomaly Detection',
    description: 'Real-time identification of structural defects, corrosion, marine growth, and other anomalies issues.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    id: '4',
    title: 'Actionable Intelligence',
    description: 'Provide actionable visual and written reports to provide operators with insights for critical decision-making.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function ProcessFlow() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a1628] to-[#0a1628]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            How DeepFeat Works
          </h2>
          <p className="text-lg text-[#b8c5d0] max-w-2xl mx-auto">
            End-to-end automated subsea intelligence pipeline
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1a2d4a] via-[#00e5ff] to-[#1a2d4a] -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-8 h-8 rounded-sm bg-[#00e5ff] flex items-center justify-center">
                    <span className="text-[#000000] font-bold text-sm">{step.id}</span>
                  </div>
                </div>

                <div className="relative bg-[#0a1628] border border-[#1a2d4a] rounded-sm p-6 h-full hover:border-[#00e5ff] transition-all duration-300 group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-sm" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-sm bg-[#1a2d4a] flex items-center justify-center mb-4 text-[#00e5ff] group-hover:bg-[#00e5ff] group-hover:text-[#000000] transition-all mx-auto">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#e5e8eb] text-center mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#a8b2bc] text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg className="w-8 h-8 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
