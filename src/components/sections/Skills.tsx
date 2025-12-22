import BlurText from '@/components/effects/BlurText';
import ScrollReveal from '@/components/effects/ScrollReveal';
import TiltCard from '@/components/effects/TiltCard';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['TypeScript', 'Rust', 'Python', 'Java', 'Go', 'JavaScript', 'C++', 'Shell/Bash'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'FastAPI', 'React', 'Docker'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'Nmap', 'Shodan'],
  },
  {
    title: 'Core Concepts',
    skills: ['Network Security', 'Concurrent Programming', 'REST APIs', 'Authentication Systems', 'Encryption (AES-256)', 'System Design'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <BlurText
          text="Technical Skills"
          className="text-3xl md:text-4xl font-bold mb-12 text-foreground justify-center"
          delay={100}
          animateBy="words"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 0.1}>
              <TiltCard 
                className="h-full p-6 bg-card/60 border border-border backdrop-blur-sm"
                tiltAmount={5}
                glareMaxOpacity={0.1}
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary/50 text-secondary-foreground border border-border hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
