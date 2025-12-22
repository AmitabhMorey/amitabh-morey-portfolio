import { Github, Users, GitBranch, Star } from 'lucide-react';
import BlurText from '@/components/effects/BlurText';
import ScrollReveal from '@/components/effects/ScrollReveal';
import Magnet from '@/components/effects/Magnet';
import TiltCard from '@/components/effects/TiltCard';

const GitHub = () => {
  return (
    <section id="github" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <BlurText
          text="GitHub & Open Source"
          className="text-3xl md:text-4xl font-bold mb-8 text-foreground justify-center"
          delay={100}
          animateBy="words"
        />

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Users, value: '24', label: 'Followers' },
            { icon: GitBranch, value: '20+', label: 'Repositories' },
            { icon: Star, value: 'Pro', label: 'GitHub Status' },
          ].map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <TiltCard
                className="p-6 bg-card/60 border border-border text-center backdrop-blur-sm"
                tiltAmount={8}
                glareMaxOpacity={0.15}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <ScrollReveal delay={0.1}>
            <p>
              My GitHub activity reflects a continuous learning approach—experimenting with new 
              languages, building progressively more complex systems, and maintaining clean, 
              documented code. I've earned the "Pair Extraordinaire" achievement, demonstrating 
              collaborative development experience.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p>
              I maintain repositories across 10+ programming languages, from low-level systems 
              languages like Rust and Go to application frameworks like Spring Boot and FastAPI. 
              Each repository represents intentional learning and real problem-solving.
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Github className="w-5 h-5" />
                View Full Profile
              </a>
            </Magnet>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GitHub;
