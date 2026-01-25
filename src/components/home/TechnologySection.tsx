import Container from '@/components/ui/Container';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TechnologySectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: Feature[];
  className?: string;
}

const defaultFeatures: Feature[] = [
  {
    id: '1',
    title: 'Multimodal Data Fusion',
    description: 'Combines sonar imagery, optical video, and sensor telemetry into unified intelligence for comprehensive subsea analysis.',
  },
  {
    id: '2',
    title: 'Real-Time Anomaly Detection',
    description: 'Achieves 92% accuracy in identifying structural defects, corrosion, and marine growth on subsea infrastructure.',
  },
  {
    id: '3',
    title: 'Cloud & On-Premise Deployment',
    description: 'Flexible deployment options supporting both cloud-based analysis and edge processing on ROVs and AUVs.',
  },
  {
    id: '4',
    title: 'Automated Reporting',
    description: 'Generates actionable intelligence reports with geo-tagged anomalies and severity classifications for immediate response.',
  },
];

export default function TechnologySection({
  title = 'SubFusion AI Architecture',
  subtitle = 'Multimodal fusion for subsea environments',
  description = 'Our proprietary AI models fuse sonar imagery, optical video, and sensor telemetry into unified intelligence. Deployed on-premise or in the cloud, SubFusion delivers real-time anomaly detection with 92% accuracy across the harshest underwater conditions.',
  features = defaultFeatures,
  className = '',
}: TechnologySectionProps) {
  return (
    <section className={`py-16 sm:py-24 bg-[#0a0f14]/50 ${className}`}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-lg text-[#00e5ff] font-medium">
            {subtitle}
          </p>
          <p className="mt-6 text-lg leading-8 text-[#b8c5d0]">
            {description}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative rounded-sm border border-[#1a2128] bg-[#0a0f14] p-6 hover:border-[#2a3844] transition-colors"
            >
              <div className="flex items-start gap-4">
                {feature.icon && (
                  <div className="flex-shrink-0 text-[#00e5ff]">
                    {feature.icon}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[#7a8a99]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
