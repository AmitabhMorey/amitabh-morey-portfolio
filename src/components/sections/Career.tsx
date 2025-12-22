import { Target, Code, Shield, Server } from 'lucide-react';
import BlurText from '@/components/effects/BlurText';
import ScrollReveal from '@/components/effects/ScrollReveal';
import TiltCard from '@/components/effects/TiltCard';

const careerDirections = [
  {
    icon: Shield,
    title: 'Security Engineering',
    description: 'Experience building security scanners, encryption systems, and authentication platforms positions me well for security-focused roles.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Strong foundation in Java/Spring Boot, Python/FastAPI, and Go for building scalable server-side applications and APIs.',
  },
  {
    icon: Code,
    title: 'Systems Programming',
    description: 'Rust and Go projects demonstrate interest in performance-critical, low-level systems work.',
  },
  {
    icon: Target,
    title: 'DevOps & Infrastructure',
    description: 'Docker containerization experience and network monitoring tools show infrastructure automation aptitude.',
  },
];

const Career = () => {
  return (
    <section id="career" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <BlurText
          text="Career Direction"
          className="text-3xl md:text-4xl font-bold mb-4 text-foreground justify-center"
          delay={100}
          animateBy="words"
        />
        <ScrollReveal>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Based on my project portfolio and technical interests, I'm preparing for roles in:
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {careerDirections.map((direction, index) => (
            <ScrollReveal key={direction.title} delay={index * 0.1}>
              <TiltCard
                className="h-full p-6 bg-card/60 border border-border backdrop-blur-sm"
                tiltAmount={6}
                glareMaxOpacity={0.1}
              >
                <direction.icon className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {direction.title}
                </h3>
                <p className="text-muted-foreground">
                  {direction.description}
                </p>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 p-6 bg-secondary/20 border border-border">
            <p className="text-muted-foreground text-center">
              I'm looking for opportunities to contribute to teams building secure, scalable systems. 
              Whether it's backend services, security tools, or infrastructure automation, 
              I bring hands-on experience and a commitment to writing quality code.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Career;
