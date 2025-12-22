import { Button } from '@/components/ui/button';
import { Github, ChevronDown } from 'lucide-react';
import GradientText from '@/components/effects/GradientText';
import BlurText from '@/components/effects/BlurText';
import Magnet from '@/components/effects/Magnet';
import ScrollReveal from '@/components/effects/ScrollReveal';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal delay={0.1}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-secondary/50 text-secondary-foreground border border-border backdrop-blur-sm">
              Software Engineering Student
            </span>
          </div>
        </ScrollReveal>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
          <GradientText
            colors={['#a855f7', '#6366f1', '#ec4899', '#8b5cf6', '#a855f7']}
            animationSpeed={6}
          >
            Amitabh Morey
          </GradientText>
        </h1>
        
        <BlurText
          text="Building Secure Systems & Network Tools"
          className="text-xl md:text-2xl text-muted-foreground mb-4 font-light justify-center"
          delay={80}
          animateBy="words"
        />
        
        <ScrollReveal delay={0.4}>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            I engineer backend systems, security tools, and network utilities. 
            My code spans from Rust and Go for performance-critical applications 
            to Python and Java for enterprise-grade solutions.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.5}>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Magnet padding={80} magnetStrength={3}>
              <Button
                variant="default"
                size="lg"
                className="gap-2"
                asChild
              >
                <a href="https://github.com/AmitabhMorey" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View GitHub
                </a>
              </Button>
            </Magnet>
            
            <Magnet padding={80} magnetStrength={3}>
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={scrollToProjects}
              >
                Explore Projects
              </Button>
            </Magnet>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            {['TypeScript', 'Rust', 'Python', 'Java', 'Go', 'C++'].map((tech, i) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-card/60 border border-border text-card-foreground backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <button
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
