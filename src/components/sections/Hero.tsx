import { Button } from '@/components/ui/button';
import { Github, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 text-sm font-medium bg-secondary/50 text-secondary-foreground border border-border backdrop-blur-sm">
            Software Engineering Student
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
          Amitabh Morey
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
          Building Secure Systems & Network Tools
        </p>
        
        <p className="text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          I engineer backend systems, security tools, and network utilities. 
          My code spans from Rust and Go for performance-critical applications 
          to Python and Java for enterprise-grade solutions.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-16">
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
          
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            onClick={scrollToProjects}
          >
            Explore Projects
          </Button>
        </div>

        <div className="flex flex-wrap gap-3 justify-center text-sm">
          {['TypeScript', 'Rust', 'Python', 'Java', 'Go', 'C++'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-card/60 border border-border text-card-foreground backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
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
