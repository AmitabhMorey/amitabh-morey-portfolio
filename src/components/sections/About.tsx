import BlurText from '@/components/effects/BlurText';
import ScrollReveal from '@/components/effects/ScrollReveal';
import TiltCard from '@/components/effects/TiltCard';
import { Shield, Terminal, Award, Network } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'Offensive & Defensive Security',
    description: 'eJPT & ICCA certified with hands-on practice across OWASP Top 10, MITRE ATT&CK, PTES, TryHackMe, and Hack The Box.',
  },
  {
    icon: Terminal,
    title: 'Systems & Backend Engineering',
    description: 'Crafting performant network tools, concurrent services, and enterprise platforms in Go, Rust, Java (Spring Boot), and Python.',
  },
  {
    icon: Network,
    title: 'Active Directory & Threat Simulation',
    description: 'Attack path mapping with BloodHound, Kerberoasting, Pass-the-Hash, credential auditing, and defensive remediation.',
  },
  {
    icon: Award,
    title: 'Industry Proven & Collaborative',
    description: 'Internal security audits at CISE, penetration testing labs at School of Future Tech, and 35+ open-source GitHub repositories.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <BlurText
          text="About Me"
          className="text-3xl md:text-4xl font-bold mb-8 text-foreground justify-center"
          delay={80}
          animateBy="letters"
        />
        
        <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed mb-16">
          <ScrollReveal delay={0.1}>
            <p>
              I am a <strong className="text-foreground font-semibold">Software Engineer & Junior Penetration Tester</strong> driven by a passion for understanding how complex software and network systems work—and how they can be secured or broken.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p>
              My security background encompasses hands-on experience with <strong className="text-foreground font-medium">Nmap, Burp Suite, Metasploit, Wireshark, BloodHound</strong>, and <strong className="text-foreground font-medium">CrackMapExec</strong>, alongside scripting custom exploitation and automation workflows in <strong className="text-foreground font-medium">Python and Bash</strong>. I actively practice web application testing, Active Directory enumeration, and privilege escalation techniques adhering to the <strong className="text-foreground font-medium">OWASP Top 10, MITRE ATT&CK</strong>, and <strong className="text-foreground font-medium">PTES</strong> frameworks.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p>
              My software engineering foundation provides a decisive edge: understanding memory management in <strong className="text-foreground font-medium">Rust</strong>, high-concurrency network primitives in <strong className="text-foreground font-medium">Go</strong>, and enterprise cryptographic design in <strong className="text-foreground font-medium">Java (Spring Boot)</strong> allows me to perform deeper code-level audits, write reliable security tools, and design effective remediation strategies.
            </p>
          </ScrollReveal>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <ScrollReveal key={item.title} delay={0.1 * index}>
              <TiltCard
                className="h-full p-6 bg-card/60 border border-border backdrop-blur-sm rounded-lg hover:border-primary/50 transition-colors"
                tiltAmount={4}
                glareMaxOpacity={0.1}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-primary flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-normal">{item.description}</p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

