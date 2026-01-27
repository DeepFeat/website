'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

const dataTypes = [
  { id: 'sonar', label: 'Sonar Imagery', color: '#00e5ff', position: { x: -20, y: -30 } },
  { id: 'optical', label: 'Optical Video', color: '#0099cc', position: { x: 20, y: -20 } },
  { id: 'sensor', label: 'Sensor Data', color: '#005f73', position: { x: 0, y: 30 } },
];

const outputs = [
  { id: 'anomaly', label: 'Anomaly Detection', icon: '⚠️' },
  { id: 'classification', label: 'Asset Classification', icon: '🏷️' },
  { id: 'mapping', label: '3D Reconstruction', icon: '🗺️' },
  { id: 'reporting', label: 'Automated Reports', icon: '📊' },
];

export default function InteractiveDemo() {
  const [hoveredInput, setHoveredInput] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 2000);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            See DeepFeat in Action
          </h2>
          <p className="text-lg text-[#b8c5d0] max-w-2xl mx-auto">
            Watch how multimodal data transforms into actionable intelligence
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Input Section */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6 text-center lg:text-left">
                Data Inputs
              </h3>
              <div className="space-y-4">
                {dataTypes.map((type) => (
                  <motion.div
                    key={type.id}
                    whileHover={{ scale: 1.05, x: 5 }}
                    onHoverStart={() => setHoveredInput(type.id)}
                    onHoverEnd={() => setHoveredInput(null)}
                    className="relative cursor-pointer"
                  >
                    <div
                      className="p-4 rounded-sm border-2 transition-all"
                      style={{
                        backgroundColor: hoveredInput === type.id ? `${type.color}20` : '#0a1628',
                        borderColor: hoveredInput === type.id ? type.color : '#1a2d4a',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: type.color }}
                        />
                        <span className="text-white font-medium">{type.label}</span>
                      </div>
                    </div>
                    {isProcessing && (
                      <motion.div
                        className="absolute top-1/2 -right-4 w-8 h-0.5"
                        style={{ backgroundColor: type.color }}
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Processing Core */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                {/* Central AI Core */}
                <motion.div
                  animate={{
                    scale: isProcessing ? [1, 1.1, 1] : 1,
                    rotate: isProcessing ? 360 : 0,
                  }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                  className="relative w-48 h-48"
                >
                  <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-[#00e5ff] to-[#005f73] opacity-20 blur-xl" />
                  <div className="absolute inset-0 rounded-sm border-2 border-[#00e5ff] bg-[#0a1628] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🧠</div>
                      <div className="text-sm font-bold text-[#00e5ff]">DeepFeat AI</div>
                      {isProcessing && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-2 text-xs text-[#b8c5d0]"
                        >
                          Processing...
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Orbiting Particles */}
                  {isProcessing && dataTypes.map((type, index) => (
                    <motion.div
                      key={type.id}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: type.color,
                        top: '50%',
                        left: '50%',
                      }}
                      animate={{
                        x: [0, type.position.x * 3, 0],
                        y: [0, type.position.y * 3, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Process Button */}
                <div className="text-center mt-8">
                  <button
                    onClick={handleProcess}
                    disabled={isProcessing}
                    className="px-6 py-3 rounded-sm bg-[#00e5ff] text-[#000000] font-bold hover:bg-[#0099cc] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isProcessing ? 'Processing...' : 'Run Analysis'}
                  </button>
                </div>
              </div>
            </div>

            {/* Output Section */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6 text-center lg:text-left">
                Intelligence Outputs
              </h3>
              <div className="space-y-4">
                {outputs.map((output, index) => (
                  <motion.div
                    key={output.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isProcessing
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0.5, x: 0 }
                    }
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="relative"
                  >
                    {isProcessing && (
                      <motion.div
                        className="absolute top-1/2 -left-4 w-8 h-0.5 bg-[#00e5ff]"
                        initial={{ scaleX: 0, originX: 1 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      />
                    )}
                    <div className="p-4 rounded-sm border border-[#1a2d4a] bg-[#0a1628] hover:border-[#00e5ff] transition-all">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{output.icon}</span>
                        <span className="text-white font-medium">{output.label}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-6 rounded-sm bg-gradient-to-r from-[#00e5ff]/10 to-[#005f73]/10 border border-[#00e5ff]/30"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-[#00e5ff]">&lt;100ms</div>
              <div className="text-sm text-[#b8c5d0]">Inference Latency</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#00e5ff]">92%</div>
              <div className="text-sm text-[#b8c5d0]">Detection Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#00e5ff]">24/7</div>
              <div className="text-sm text-[#b8c5d0]">Continuous Monitoring</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
