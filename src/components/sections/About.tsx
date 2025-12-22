import BlurText from '@/components/effects/BlurText';
import ScrollReveal from '@/components/effects/ScrollReveal';

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <BlurText
          text="About Me"
          className="text-3xl md:text-4xl font-bold mb-8 text-foreground"
          delay={100}
          animateBy="letters"
        />
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <ScrollReveal delay={0.1}>
            <p>
              I'm a software engineering student driven by curiosity and a passion for building 
              things that work reliably. My journey started with Python problem-solving and has 
              evolved into engineering production-ready systems across multiple technology stacks.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p>
              I gravitate toward backend development and security engineering. My projects 
              demonstrate hands-on experience with network protocols, encryption, authentication 
              systems, and concurrent programming. I believe in learning by building—each project 
              in my portfolio represents a problem I wanted to solve and the engineering decisions 
              I made along the way.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p>
              Whether it's implementing packet sniffers in Go, building enterprise voting platforms 
              with Spring Boot, or creating network security scanners with Python, I focus on 
              writing clean, maintainable code that solves real problems.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
