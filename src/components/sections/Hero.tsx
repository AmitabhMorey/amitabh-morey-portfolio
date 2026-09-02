import { Button } from '@/components/ui/button';
import { Github, Linkedin, ChevronDown, ShieldCheck, Terminal, ArrowRight, FileText } from 'lucide-react';
import GradientText from '@/components/effects/GradientText';
import BlurText from '@/components/effects/BlurText';
import Magnet from '@/components/effects/Magnet';
import ScrollReveal from '@/components/effects/ScrollReveal';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal delay={0.1}>
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-md rounded-full shadow-sm">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Software Engineer & Junior Penetration Tester
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
          </div>
        </ScrollReveal>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-foreground">
          <GradientText
            colors={['#a855f7', '#6366f1', '#ec4899', '#8b5cf6', '#a855f7']}
            animationSpeed={6}
          >
            Amitabh Morey
          </GradientText>
        </h1>
        
        <BlurText
          text="Engineering Resilient Systems & Offensive Security Tooling"
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-light justify-center"
          delay={60}
          animateBy="words"
        />
        
        <ScrollReveal delay={0.4}>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            I bridge software engineering and offensive cybersecurity. From crafting high-performance backend systems in Go, Rust, Java, and Python to conducting vulnerability assessments, Active Directory enumeration, and ethical penetration testing.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.5}>
          <div className="flex flex-wrap gap-4 justify-center mb-14">
            <Magnet padding={60} magnetStrength={3}>
              <Button
                variant="default"
                size="lg"
                className="gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:opacity-95 text-white transition-all duration-300"
                asChild
              >
                <a href="https://drive.google.com/drive/u/3/home" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4" />
                  Resume
                </a>
              </Button>
            </Magnet>

            <Magnet padding={60} magnetStrength={3}>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                asChild
              >
                <a href="https://github.com/AmitabhMorey" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub Profile
                </a>
              </Button>
            </Magnet>

            <Magnet padding={60} magnetStrength={3}>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                asChild
              >
                <a href="https://linkedin.com/in/amitabh-morey-906984248" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  LinkedIn
                </a>
              </Button>
            </Magnet>
            
            <Magnet padding={60} magnetStrength={3}>
              <Button
                variant="ghost"
                size="lg"
                className="gap-2 hover:bg-secondary/50"
                onClick={scrollToProjects}
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Magnet>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center text-xs md:text-sm">
            {[
              'Python',
              'Bash',
              'Nmap',
              'Burp Suite',
              'Metasploit',
              'Go',
              'Rust',
              'Java / Spring Boot',
              'Active Directory',
              'Docker',
            ].map((tech, i) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-card/60 border border-border text-foreground backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 rounded-md font-mono text-xs"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <button
        onClick={scrollToProjects}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-muted hover:text-foreground transition-colors p-2"
        aria-label="Scroll down to projects"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;

