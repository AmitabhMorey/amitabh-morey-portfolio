import { ShieldAlert, Code, ShieldCheck, Server, Terminal, Lock } from 'lucide-react';
import BlurText from '@/components/effects/BlurText';
import ScrollReveal from '@/components/effects/ScrollReveal';
import TiltCard from '@/components/effects/TiltCard';

const careerDirections = [
  {
    icon: ShieldAlert,
    title: 'Penetration Testing & Red Teaming',
    description: 'Specializing in web application penetration testing, Active Directory attack paths, network vulnerability assessments, and threat simulations under PTES & MITRE ATT&CK frameworks.',
  },
  {
    icon: Lock,
    title: 'Security Engineering & AppSec',
    description: 'Applying cryptographic architecture (AES-256), multi-factor authentication, secure API design, and code-level vulnerability auditing to harden modern applications.',
  },
  {
    icon: Server,
    title: 'Backend & Systems Development',
    description: 'Architecting high-throughput backend services and concurrent network tooling leveraging Go, Rust, Java (Spring Boot), and Python (FastAPI).',
  },
  {
    icon: ShieldCheck,
    title: 'Cloud & Infrastructure Security',
    description: 'Hardening Linux/Unix and Windows AD environments, containerized Docker deployments, and cloud infrastructure with INE ICCA foundations.',
  },
];

const Career = () => {
  return (
    <section id="career" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <BlurText
          text="Career Trajectory & Focus"
          className="text-3xl md:text-4xl font-bold mb-4 text-foreground justify-center"
          delay={80}
          animateBy="words"
        />
        <ScrollReveal>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Combining software engineering rigor with offensive security expertise to build, audit, and secure critical infrastructure.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {careerDirections.map((direction, index) => (
            <ScrollReveal key={direction.title} delay={index * 0.1}>
              <TiltCard
                className="h-full p-6 bg-card/60 border border-border backdrop-blur-sm rounded-lg hover:border-primary/40 transition-colors"
                tiltAmount={4}
                glareMaxOpacity={0.08}
              >
                <div className="p-3 w-fit rounded-lg bg-primary/10 text-primary border border-primary/20 mb-4">
                  <direction.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {direction.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {direction.description}
                </p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 p-6 md:p-8 bg-card/40 border border-border/80 rounded-lg text-center backdrop-blur-sm">
            <h4 className="text-base font-semibold text-foreground mb-2">Open to Opportunities</h4>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Seeking Junior Penetration Tester, Security Engineer, or Backend Developer roles. I bring a strong work ethic, certified offensive security competence (eJPT, ICCA), and deep software development abilities.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Career;

