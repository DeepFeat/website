import Hero from '@/components/home/Hero';
import Gallery from '@/components/home/Gallery';
import TechnologySection from '@/components/home/TechnologySection';
import AnimatedStats from '@/components/home/AnimatedStats';
import ProcessFlow from '@/components/home/ProcessFlow';
import ProductShowcase from '@/components/home/ProductShowcase';
import InteractiveDemo from '@/components/home/InteractiveDemo';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import CTASection from '@/components/home/CTASection';
import VideoShowcase from '@/components/home/VideoShowcase';
import BeforeAfter from '@/components/home/BeforeAfter';

const capabilities = [
  {
    id: '1',
    title: 'Port Infrastructure Inspection',
    description: 'Comprehensive underwater assessments of port structures, pilings, and maritime assets using advanced multimodal AI for early detection of structural anomalies.',
    image: '/images/what-we-do/inspection.png',
  },
  {
    id: '2',
    title: 'Port Security & Surveillance',
    description: 'Continuous underwater monitoring and threat detection for port facilities, ensuring secure maritime operations with real-time alerting.',
    image: '/images/what-we-do/security.png',
  },
  {
    id: '3',
    title: 'Data Analytics & Insights',
    description: 'Transform raw data into actionable intelligence with our secure cloud-based analytics platform, enabling data-driven decision making.',
    image: '/images/what-we-do/analytics.png',
  },
];

const applications = [
  {
    id: '1',
    title: 'Port & Harbor Inspection',
    description: 'Automated structural integrity assessments for piers, seawalls, and underwater port assets with 92% anomaly detection accuracy.',
  },
  {
    id: '2',
    title: 'Telecommunication Cable Monitoring',
    description: 'Continuous surveillance and predictive maintenance for undersea fiber optic networks spanning thousands of kilometers.',
  },
  {
    id: '3',
    title: 'Bridge & Infrastructure Analysis',
    description: 'Detailed underwater structural assessments for bridges, piers, and maritime infrastructure using multimodal AI.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* <AnimatedStats /> */}

      <Gallery
        title="What We Do"
        subtitle="Comprehensive subsea intelligence solutions powered by multimodal AI"
        items={capabilities}
        columns={3}
        backgroundColor="#0f1d32"
      />

      <ProcessFlow />

      {/* <ProductShowcase backgroundColor="#0f1d32" /> */}

      {/* <TechnologySection /> */}

      {/* <InteractiveDemo /> */}

      {/* <BeforeAfter /> */}
      {/* 
      <Gallery
        title="Applications"
        subtitle="Transforming subsea operations across industries"
        items={applications}
        columns={3}
        className="bg-[#0a1628]"
      /> */}

      {/* <VideoShowcase /> */}

      {/* <TestimonialsCarousel /> */}

      {/* <CTASection /> */}
    </>
  );
}
