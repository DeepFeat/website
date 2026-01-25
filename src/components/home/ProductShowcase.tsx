'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';

interface Feature {
  id: string;
  name: string;
  title: string;
  description: string;
  features: string[];
  imageAlt?: string;
}

const products: Feature[] = [
  {
    id: 'subfusion',
    name: 'SubFusion AI',
    title: 'Multimodal AI Fusion Engine',
    description: 'Our proprietary deep learning models fuse sonar imagery, optical video, and sensor telemetry into unified intelligence representations. SubFusion achieves 92% anomaly detection accuracy across diverse subsea environments.',
    features: [
      'Real-time multimodal data fusion',
      'Transfer learning across inspection types',
      '92% anomaly detection accuracy',
      'Cloud and edge deployment options',
      'Continuous model improvement pipeline',
      'Support for 10+ sensor modalities',
    ],
  },
  {
    id: 'deepinsights',
    name: 'DeepInsights Dashboard',
    title: 'Intelligence Operations Center',
    description: 'Cloud-based command center for monitoring subsea infrastructure at scale. Real-time alerts, historical trend analysis, and automated reporting for operations teams.',
    features: [
      'Real-time monitoring and alerts',
      'Geo-tagged anomaly visualization',
      'Historical trend analysis',
      'Automated inspection reports',
      'Multi-site fleet management',
      'API integrations with existing systems',
    ],
  },
  {
    id: 'acquisition',
    name: 'Data Acquisition',
    title: 'Seamless Sensor Integration',
    description: 'Universal data ingestion layer supporting ROVs, AUVs, and fixed sensors. Automated quality control, preprocessing, and synchronization of heterogeneous data streams.',
    features: [
      'ROV and AUV integration',
      'Multi-vendor sensor support',
      'Automated data quality checks',
      'Real-time preprocessing pipeline',
      'Secure cloud upload with compression',
      'Offline edge processing capability',
    ],
  },
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(products[0].id);
  const activeProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Complete Subsea Intelligence Platform
          </h2>
          <p className="text-lg text-[#b8c5d0] max-w-2xl mx-auto">
            Three integrated products working together to transform subsea operations
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveTab(product.id)}
              className={`
                px-6 py-3 rounded-sm font-medium transition-all cursor-pointer
                ${
                  activeTab === product.id
                    ? 'bg-[#00e5ff] text-[#000000] shadow-lg shadow-[#00e5ff]/30'
                    : 'bg-[#0a0f14] text-[#b8c5d0] border border-[#141a21] hover:border-[#00e5ff]'
                }
              `}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0a0f14] border border-[#141a21] rounded-sm p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {activeProduct.title}
                </h3>
                <p className="text-lg text-[#b8c5d0] mb-8 leading-relaxed">
                  {activeProduct.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {activeProduct.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 shrink-0">
                        <svg className="w-5 h-5 text-[#00e5ff]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-[#b8c5d0]">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual Placeholder */}
              <div className="relative aspect-video lg:aspect-square rounded-sm bg-gradient-to-br from-[#141a21] to-[#0a0f14] border border-[#141a21] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-sm bg-[#00e5ff]/10 flex items-center justify-center border border-[#00e5ff]/30">
                      <svg className="w-12 h-12 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#7a8a99]">Product Screenshot</p>
                  </div>
                </div>
                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="border border-[#00e5ff]/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.05,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
