import Container from '@/components/ui/Container';
import TeamMemberCard from '@/components/team/TeamMemberCard';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

const cofounders: TeamMember[] = [
  {
    id: '1',
    name: 'Co-founder Name',
    role: 'Co-founder & CEO',
    bio: 'Placeholder bio for co-founder. Replace with actual background, expertise, and vision for the company.',
  },
  {
    id: '2',
    name: 'Co-founder Name',
    role: 'Co-founder & CTO',
    bio: 'Placeholder bio for co-founder. Replace with actual technical background and experience.',
  },
];

const advisors: TeamMember[] = [
  {
    id: '1',
    name: 'Advisor Name',
    role: 'Strategic Advisor',
    bio: 'Placeholder bio for advisor. Replace with actual expertise and advisory role.',
  },
  {
    id: '2',
    name: 'Advisor Name',
    role: 'Technical Advisor',
    bio: 'Placeholder bio for advisor. Replace with actual background and contributions.',
  },
  {
    id: '3',
    name: 'Advisor Name',
    role: 'Industry Advisor',
    bio: 'Placeholder bio for advisor. Replace with relevant industry experience.',
  },
];

export default function TeamPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        {/* Page Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Team
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#b8c5d0]">
            Meet the team pioneering subsea intelligence through multimodal AI. Our experts combine deep learning expertise with real-world underwater operations experience.
          </p>
        </div>

        {/* Co-founders Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Leadership
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {cofounders.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </section>

        {/* Advisory Board Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Advisory Board
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {advisors.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
