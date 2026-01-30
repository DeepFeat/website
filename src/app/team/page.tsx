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
    name: 'Matthew Bockelmann',
    role: 'Co-founder & CEO',
    bio: '3x Founder and Serial Entrepreneur. Past experience in enterprise sales and marketing.',
    image: '/images/team/matt-headshot.png',
  },
  {
    id: '2',
    name: 'Ryan Klivansky',
    role: 'Co-founder & CTO',
    bio: 'Published researcher in AI and Computer Vision. Computer Engineer with a focus on Artificial Intelligence.',
    image: '/images/team/ryan-headshot.png',
  },
];

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Anissa M. Elias',
    role: 'Founding Engineer',
    bio: 'Ph.D. researcher specializing in maritime cyber-physical system security, autonomous monitoring, and on-edge AI.',
    image: '/images/team/anissa-headshot.jpg',
  },
];

const advisors: TeamMember[] = [
  {
    id: '1',
    name: 'Steve Mullaney',
    role: 'Strategic Advisor',
    bio: 'Veteran executive known for scaling category-defining companies. Having led both Palo Alto Networks and Aviatrix through periods of hyper-growth, Steve provides our team with the operational playbook and industry connections required to dominate the market.',
    image: '/images/team/mullaney-headshot.jpg',
  },
  {
    id: '2',
    name: 'Don Claussen',
    role: 'Industry Advisor',
    bio: 'Veteran of the U.S. Army and former executive at L3Harris and Viasat, Don\'s career has been defined by delivering mission-critical technology in the most challenging environments on earth. His guidance is instrumental as we scale our product for enterprise and government sectors.',
    image: '/images/team/don-headshot.png',
  },
  {
    id: '3',
    name: 'Constantine (Dean) Macris',
    role: 'Technical Advisor',
    bio: 'Harbors a rare fusion of military-grade cyber defense and industrial application to DeepFeat. Currently serving as CISO at Dispel and an instructor at the U.S. Coast Guard Academy, Dean is at the forefront of protecting industrial control systems from evolving threats. His strategic guidance ensures our platform meets the highest global standards for resilience and secure remote access.',
    image: '/images/team/dean-headshot.png',
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
            Meet the team pioneering subsea intelligence through multimodal AI. Our experts combine a variety of backgrounds to deliver innovative solutions for complex underwater challenges.
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

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Team
          </h2>
          <div className="flex justify-center max-w-4xl mx-auto">
            <div className="max-w-md w-full">
              {team.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                />
              ))}
            </div>
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
