import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import ContactForm from '@/components/contact/ContactForm';

const contactInfo = [
  {
    id: 'email',
    label: 'Email',
    value: 'info@deepfeat.ai',
    href: 'mailto:info@deepfeat.ai',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'San Francisco, CA',
  },
];

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        {/* Page Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#b8c5d0]">
            Ready to transform your subsea operations with multimodal AI? Contact us to discuss your infrastructure monitoring needs and discover how SubFusion AI delivers actionable intelligence.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card variant="elevated" padding="lg">
                <h2 className="text-xl font-semibold text-white mb-6">
                  Send us a message
                </h2>
                <ContactForm />
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                <Card variant="outline" padding="lg">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.id}>
                        <p className="text-sm text-[#7a8a99] mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white hover:text-[#00e5ff] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white">{item.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
