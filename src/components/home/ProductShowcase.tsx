'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import MediaPlaceholder from '@/components/ui/MediaPlaceholder';

interface Feature {
  id: string;
  name: string;
  title: string;
  description: string;
  features: string[];
  imageAlt?: string;
}

interface ProductShowcaseProps {
  backgroundColor?: string;
}

const products: Feature[] = [
  {
    id: 'deepfeat-ai',
    name: 'DeepFeat AI',
    title: 'Multimodal AI Fusion Engine',
    description: 'Our proprietary deep learning models fuse sonar imagery, optical video, and sensor telemetry into unified intelligence representations. DeepFeat achieves 92% anomaly detection accuracy across diverse port and subsea environments.',
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

export default function ProductShowcase({
  backgroundColor,
}: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState(products[0].id);
  const activeProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <section
      className="py-16 sm:py-24 bg-[#0a1628]"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
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
                    : 'bg-[#0a1628] text-[#b8c5d0] border border-[#1a2d4a] hover:border-[#00e5ff]'
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
            className="bg-[#0a1628] border border-[#1a2d4a] rounded-sm p-8 lg:p-12"
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
              <MediaPlaceholder
                type="demo"
                aspectRatio="square"
                label={`${activeProduct.name} Dashboard`}
                className="lg:aspect-square"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
