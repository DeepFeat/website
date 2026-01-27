'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#000000] via-[#0a1628] to-[#000000] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-[#00e5ff] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#005f73] rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-2 rounded-sm bg-[#00e5ff]/10 border border-[#00e5ff]/30"
          >
            <span className="text-sm text-[#00e5ff] font-medium">Ready to Transform Your Operations?</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Start Detecting Subsea Anomalies
            <br />
            <span className="text-[#00e5ff]">With 92% Accuracy Today</span>
          </h2>

          <p className="text-lg text-[#b8c5d0] mb-10 max-w-2xl mx-auto leading-relaxed">
            Join industry leaders using DeepFeat to monitor port infrastructure, maritime assets, and underwater facilities. Get a personalized demo and see your data in action.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-lg shadow-[#00e5ff]/30">
                Schedule a Demo
              </Button>
            </Link>
            <Link href="/team">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Meet the Team
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-[#1a2d4a]">
            <p className="text-sm text-[#7a8a99] mb-4">Trusted by organizations monitoring</p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-[#b8c5d0]">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00e5ff]">10,000+</div>
                <div className="text-xs">Inspections</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00e5ff]">50+</div>
                <div className="text-xs">Sites</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00e5ff]">3</div>
                <div className="text-xs">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00e5ff]">24/7</div>
                <div className="text-xs">Monitoring</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
