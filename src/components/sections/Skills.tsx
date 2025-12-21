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
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-card/60 border border-border backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary/50 text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
