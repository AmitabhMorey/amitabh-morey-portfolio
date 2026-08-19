import { Github, Users, GitBranch, Code2, ExternalLink } from 'lucide-react';
import BlurText from '@/components/effects/BlurText';
import ScrollReveal from '@/components/effects/ScrollReveal';
import Magnet from '@/components/effects/Magnet';
import TiltCard from '@/components/effects/TiltCard';

const stats = [
  { icon: Users, value: '25', label: 'GitHub Followers' },
  { icon: GitBranch, value: '35+', label: 'Public Repositories' },
  { icon: Code2, value: '10+', label: 'Languages & Stacks' },
];

const GitHub = () => {
  return (
    <section id="github" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <BlurText
          text="GitHub & Open Source"
          className="text-3xl md:text-4xl font-bold mb-4 text-foreground justify-center"
          delay={80}
          animateBy="words"
        />
        <ScrollReveal>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto text-sm md:text-base">
            Continuous open-source development spanning offensive security tooling, network monitors, and high-concurrency backend services.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <TiltCard
                className="p-6 bg-card/60 border border-border text-center backdrop-blur-sm rounded-lg hover:border-primary/40 transition-colors"
                tiltAmount={6}
                glareMaxOpacity={0.12}
              >
                <stat.icon className="w-7 h-7 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-foreground font-mono mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          <ScrollReveal delay={0.1}>
            <p>
              My GitHub profile reflects an active builder and researcher ethos—experimenting with low-level packet capture, concurrency in Go and Rust, and security automation in Python and Bash.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p>
              From network scanners (<strong className="text-foreground font-medium">ScanForge</strong>, <strong className="text-foreground font-medium">concurrent-port-scanner</strong>) to cryptographic platforms (<strong className="text-foreground font-medium">Camel_Case</strong>), each repository demonstrates documented architecture, test coverage, and clean modular code.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <Magnet padding={100} magnetStrength={2}>
              <a
                href="https://github.com/AmitabhMorey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                <Github className="w-5 h-5" />
                Explore @AmitabhMorey on GitHub
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Magnet>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GitHub;

