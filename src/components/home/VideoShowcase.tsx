'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import MediaPlaceholder from '@/components/ui/MediaPlaceholder';

const videos = [
  {
    id: '1',
    title: 'Port Infrastructure Inspection',
    description: 'Watch DeepFeat detect structural anomalies in real-time during a port infrastructure inspection.',
    duration: '3:42',
    type: 'video' as const,
  },
  {
    id: '2',
    title: 'Subsea Cable Monitoring',
    description: 'See how DeepInsights Dashboard provides 24/7 surveillance of undersea fiber optic networks.',
    duration: '2:15',
    type: 'video' as const,
  },
  {
    id: '3',
    title: 'AI Model Training Process',
    description: 'Behind the scenes: How we train multimodal fusion models on diverse subsea datasets.',
    duration: '5:30',
    type: 'gif' as const,
  },
];

export default function VideoShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a1628] to-[#000000]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            See DeepFeat in Action
          </h2>
          <p className="text-lg text-[#b8c5d0] max-w-2xl mx-auto">
            Explore case studies and demos showing real-world subsea intelligence applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-4 overflow-hidden rounded-sm">
                <MediaPlaceholder
                  type={video.type}
                  aspectRatio="video"
                  label={video.title}
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#000000]/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-sm bg-[#00e5ff] flex items-center justify-center shadow-lg shadow-[#00e5ff]/50">
                    <svg className="w-8 h-8 text-[#000000] ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-sm bg-[#000000]/80 backdrop-blur-sm">
                  <span className="text-xs font-medium text-white">{video.duration}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00e5ff] transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-[#7a8a99] leading-relaxed">
                {video.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Large Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 relative group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-sm">
            <MediaPlaceholder
              type="video"
              aspectRatio="wide"
              label="Full Platform Walkthrough"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#000000]/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 rounded-sm bg-[#00e5ff] flex items-center justify-center shadow-lg shadow-[#00e5ff]/50">
                <svg className="w-10 h-10 text-[#000000] ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-sm bg-[#000000]/80 backdrop-blur-sm">
              <span className="text-sm font-medium text-white">12:45</span>
            </div>
          </div>

          <div className="mt-6 max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00e5ff] transition-colors">
              Complete Platform Walkthrough
            </h3>
            <p className="text-[#b8c5d0] mb-4 leading-relaxed">
              Join our Chief Technology Officer for an in-depth tour of the entire DeepFeat platform. Learn how data flows from ROV capture through multimodal fusion to actionable intelligence delivery.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-[#c0c8d0]">HD Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[#c0c8d0]">12:45 Duration</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-[#c0c8d0]">2.4K Views</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
