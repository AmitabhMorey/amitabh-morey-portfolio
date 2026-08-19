import BlurText from '@/components/effects/BlurText';
import ScrollReveal from '@/components/effects/ScrollReveal';
import TiltCard from '@/components/effects/TiltCard';
import { ShieldAlert, Code2, ShieldCheck, ServerCog } from 'lucide-react';

const skillCategories = [
  {
    icon: ShieldAlert,
    title: 'Penetration Testing & Offensive Tools',
    description: 'Reconnaissance, vulnerability scanning, exploitation, and post-exploitation tooling.',
    skills: [
      'Nmap',
      'Burp Suite',
      'Metasploit',
      'Wireshark',
      'BloodHound',
      'SharpHound',
      'CrackMapExec',
      'Impacket',
      'OWASP ZAP',
      'SQLmap',
      'Hydra',
      'Gobuster',
      'Dirb',
      'Nikto',
      'John the Ripper',
      'Hashcat',
      'Enum4linux',
      'Netcat',
      'BeEF',
    ],
  },
  {
    icon: Code2,
    title: 'Languages & Systems Programming',
    description: 'High-performance systems programming, backend engineering, and exploit automation.',
    skills: [
      'Python',
      'Go',
      'Rust',
      'Java (Spring Boot 3)',
      'Bash / Shell',
      'TypeScript',
      'C++',
      'C',
      'SQL',
      'FastAPI',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Methodologies & Security Architecture',
    description: 'Industry frameworks, threat simulation, attack paths, and defensive controls.',
    skills: [
      'OWASP Top 10',
      'MITRE ATT&CK',
      'PTES Framework',
      'Active Directory Exploitation & Hardening',
      'Kerberoasting & Pass-the-Hash',
      'Vulnerability Assessment',
      'Threat Simulation',
      'AES-256 Encryption & Hashing',
      'Authentication & RBAC',
      'Technical Report Writing',
    ],
  },
  {
    icon: ServerCog,
    title: 'Platforms, Labs & DevOps',
    description: 'Practice environments, containerization, operating systems, and intelligence APIs.',
    skills: [
      'TryHackMe',
      'Hack The Box',
      'Windows Server AD',
      'Docker',
      'Linux / Unix Systems',
      'Shodan API',
      'Nmap API',
      'Git & GitHub',
      'Postman',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <BlurText
          text="Technical Arsenal"
          className="text-3xl md:text-4xl font-bold mb-4 text-foreground justify-center"
          delay={80}
          animateBy="words"
        />
        <ScrollReveal>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit spanning offensive security, vulnerability assessment, systems programming, and secure backend engineering.
          </p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 0.1}>
              <TiltCard 
                className="h-full p-6 bg-card/60 border border-border backdrop-blur-sm rounded-lg hover:border-primary/40 transition-colors flex flex-col justify-between"
                tiltAmount={4}
                glareMaxOpacity={0.08}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-md bg-primary/10 text-primary border border-primary/20">
                      <category.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    {category.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs bg-secondary/40 text-foreground border border-border/80 rounded hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-200 font-mono"
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

