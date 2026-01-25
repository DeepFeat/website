import Hero from '@/components/home/Hero';
import Gallery from '@/components/home/Gallery';
import TechnologySection from '@/components/home/TechnologySection';
import AnimatedStats from '@/components/home/AnimatedStats';
import ProcessFlow from '@/components/home/ProcessFlow';
import ProductShowcase from '@/components/home/ProductShowcase';
import InteractiveDemo from '@/components/home/InteractiveDemo';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import CTASection from '@/components/home/CTASection';

const capabilities = [
  {
    id: '1',
    title: 'SubFusion AI',
    description: 'Multimodal fusion models that combine sonar, optical, and sensor data into unified intelligence for subsea infrastructure analysis.',
  },
  {
    id: '2',
    title: 'DeepInsights Dashboard',
    description: 'Cloud-based platform for real-time subsea monitoring, anomaly detection, and actionable intelligence delivery.',
  },
  {
    id: '3',
    title: 'Data Acquisition Layer',
    description: 'Seamless integration with ROVs, AUVs, and subsea sensors to capture comprehensive multimodal underwater datasets.',
  },
];

const applications = [
  {
    id: '1',
    title: 'Offshore Windfarm Inspection',
    description: 'Automated structural integrity assessments for wind turbine foundations, cables, and subsea equipment with 92% anomaly detection accuracy.',
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

      <AnimatedStats />

      <Gallery
        title="Core Capabilities"
        subtitle="Three integrated products for complete subsea intelligence"
        items={capabilities}
        columns={3}
      />

      <ProcessFlow />

      <ProductShowcase />

      <TechnologySection />

      <InteractiveDemo />

      <Gallery
        title="Applications"
        subtitle="Transforming subsea operations across industries"
        items={applications}
        columns={3}
        className="bg-[#000000]"
      />

      <TestimonialsCarousel />

      <CTASection />
    </>
  );
}
