import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ShieldAlert, Cpu, Lock, Network, TerminalSquare } from 'lucide-react';
import BlurText from '@/components/effects/BlurText';
import ScrollReveal from '@/components/effects/ScrollReveal';
import TiltCard from '@/components/effects/TiltCard';
import Magnet from '@/components/effects/Magnet';

const featuredProjects = [
  {
    title: 'ScanForge — Advanced Vulnerability Scanner',
    category: 'Offensive Tooling & Reconnaissance',
    icon: ShieldAlert,
    description: 'Production-ready network security scanner combining Nmap API and Shodan with automated scheduling, role-based access control, and real-time dashboard.',
    problem: 'Security professionals need unified tools for network reconnaissance without juggling multiple disconnected platforms.',
    solution: 'Integrated Nmap & Shodan APIs with a FastAPI backend, multi-threaded banner grabbing, automated CVE matching, and JSON/CLI export.',
    tech: ['Python', 'FastAPI', 'Docker', 'Nmap API', 'Shodan API', 'CVE Matching'],
    learned: 'Building production-grade security tooling, automated CVE enrichment, and containerized deployment.',
    github: 'https://github.com/AmitabhMorey/scanforge',
  },
  {
    title: 'Active Directory Attack & Defense Lab',
    category: 'Red Teaming & Enterprise Security',
    icon: Network,
    description: 'Simulated enterprise Windows Active Directory environment configured to study attack vectors, lateral movement, and defensive hardening.',
    problem: 'Understanding enterprise attack paths requires hands-on domain exploitation, telemetry mapping, and privilege analysis.',
    solution: 'Mapped attack paths using BloodHound/SharpHound; performed Kerberoasting, LLMNR/NBT-NS spoofing, and Pass-the-Hash via CrackMapExec & Impacket, followed by documented remediation.',
    tech: ['Active Directory', 'BloodHound', 'SharpHound', 'CrackMapExec', 'Impacket', 'Windows Server'],
    learned: 'Domain attack surfaces, Kerberos authentication exploitation, and group policy defensive hardening.',
    github: 'https://github.com/AmitabhMorey',
  },
  {
    title: 'Camel_Case — Enterprise Secure Voting',
    category: 'Enterprise Security & Cryptography',
    icon: Lock,
    description: 'Enterprise-grade secure voting platform with QR+OTP multi-factor authentication, AES-256 encryption, and tamper-proof audit trails.',
    problem: 'Traditional voting and survey systems lack cryptographic integrity, transparent auditability, and robust MFA guarantees.',
    solution: 'Implemented end-to-end AES-256 encryption, time-based OTP + QR authentication, immutable audit logging, and 85% test coverage.',
    tech: ['Java', 'Spring Boot 3', 'AES-256', 'Docker', 'QR+OTP', 'JUnit'],
    learned: 'Enterprise security architecture, cryptographic primitives, and production testing standards.',
    github: 'https://github.com/AmitabhMorey/Camel_Case',
  },
  {
    title: 'Cross-Platform Keylogger & Threat Simulator',
    category: 'Endpoint Security & Malware Research',
    icon: TerminalSquare,
    description: 'Python threat simulation utility for Windows, Linux, and macOS capturing keystrokes and clipboard telemetry with local encryption.',
    problem: 'Security defenders must understand endpoint persistence and exfiltration mechanics to build effective detection rules.',
    solution: 'Built encrypted local storage with AES cryptography, scheduled exfiltration simulation, and startup persistence mechanics tested in an isolated research VM.',
    tech: ['Python', 'Cryptography (AES)', 'Multi-OS Hooks', 'Isolated Lab VM'],
    learned: 'OS-level event hooks, telemetry capture mechanics, and ethical simulation methodologies.',
    github: 'https://github.com/AmitabhMorey',
  },
  {
    title: 'Concurrent Port Scanner & Packet Sniffer',
    category: 'Systems Programming & Networking',
    icon: Cpu,
    description: 'High-speed concurrent port scanning engine and raw network packet analyzer built in Go.',
    problem: 'Sequential port scanning is too slow for practical reconnaissance, and protocol inspection requires low-level packet capture.',
    solution: 'Engineered concurrent scanning using Go goroutines & channels alongside raw socket parsing for real-time TCP/IP traffic inspection.',
    tech: ['Go', 'Goroutines', 'Channels', 'Raw Sockets', 'TCP/IP'],
    learned: 'High-concurrency synchronization in Go and deep protocol dissection across layers 3 and 4.',
    github: 'https://github.com/AmitabhMorey/concurrent-port-scanner',
  },
  {
    title: 'NebulaSync',
    category: 'Systems Programming & Memory Safety',
    icon: Cpu,
    description: 'Systems-level utility built with Rust, showcasing memory-safe programming practices and low-level performance.',
    problem: 'Need for performant, memory-safe system utilities without garbage collection overhead.',
    solution: 'Leveraged Rust\'s ownership model and zero-cost abstractions to build reliable, concurrent systems without memory leaks.',
    tech: ['Rust', 'Memory Safety', 'Concurrency', 'Systems I/O'],
    learned: 'Memory management, Rust\'s ownership system, and low-level systems programming principles.',
    github: 'https://github.com/AmitabhMorey/NebulaSync',
  },
];

const otherProjects = [
  { name: 'Packet Sniffer', tech: 'Go', description: 'Real-time network packet capture and protocol parsing utility', github: 'https://github.com/AmitabhMorey/packet-sniffer' },
  { name: 'Bash Network Monitor', tech: 'Shell / Bash', description: 'Automated network monitoring and connection state tracking scripts', github: 'https://github.com/AmitabhMorey/bash-network-monitor' },
  { name: 'Insta-Transcribe', tech: 'Python', description: 'Audio processing and automated transcription utility', github: 'https://github.com/AmitabhMorey/insta-transcribe' },
  { name: 'TrendVortex Sentinel', tech: 'HTML / JS', description: 'Threat monitoring and trend detection web dashboard', github: 'https://github.com/AmitabhMorey/TrendVortex_Sentinel' },
  { name: '120 Python Problems', tech: 'Python', description: 'Algorithmic problem-solving and cryptographic exercises', github: 'https://github.com/AmitabhMorey/120-Python-problems' },
  { name: 'CPP Systems Practice', tech: 'C++', description: 'Object-oriented systems and data structure implementations', github: 'https://github.com/AmitabhMorey/CPP' },
  { name: 'FlappyBird Clone', tech: 'TypeScript', description: 'Game physics and canvas rendering in TypeScript', github: 'https://github.com/AmitabhMorey/FlappyBird_clone' },
  { name: 'Blockchain Awareness', tech: 'TypeScript', description: 'Decentralized application concepts and smart contract awareness', github: 'https://github.com/AmitabhMorey/Blockchain-Awareness-Program' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <BlurText
          text="Featured Projects & Labs"
          className="text-3xl md:text-4xl font-bold mb-4 text-foreground justify-center"
          delay={80}
          animateBy="words"
        />
        <ScrollReveal>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A curated showcase of offensive security tooling, enterprise Active Directory labs, cryptographic architectures, and systems programming in Go and Rust.
          </p>
        </ScrollReveal>
        
        <div className="grid gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.08}>
              <TiltCard 
                className="bg-card/60 border border-border backdrop-blur-sm rounded-lg overflow-hidden hover:border-primary/40 transition-colors"
                tiltAmount={2}
                glareMaxOpacity={0.06}
              >
                <Card className="bg-transparent border-0 shadow-none">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <project.icon className="w-4 h-4 text-primary" />
                          <span className="text-xs font-mono uppercase text-primary tracking-wider font-semibold">
                            {project.category}
                          </span>
                        </div>
                        <CardTitle className="text-xl md:text-2xl mb-2 text-foreground">{project.title}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Magnet padding={50} magnetStrength={4}>
                        <Button variant="outline" size="sm" className="gap-2 border-border/80 hover:border-primary" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                            <Github className="w-4 h-4" />
                            <span>Repository</span>
                          </a>
                        </Button>
                      </Magnet>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6 mb-6 pt-2 border-t border-border/40">
                      <div>
                        <h4 className="font-semibold text-xs uppercase tracking-wider text-foreground mb-1.5 font-mono">Problem</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs uppercase tracking-wider text-foreground mb-1.5 font-mono">Solution</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs uppercase tracking-wider text-foreground mb-1.5 font-mono">Key Takeaway</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.learned}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs bg-secondary/40 text-foreground border border-border/80 rounded font-mono hover:bg-primary/20 hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground">More Repositories & Utilities</h3>
              <p className="text-sm text-muted-foreground">Additional open-source tools, scripts, and systems experiments.</p>
            </div>
            <a
              href="https://github.com/AmitabhMorey?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-medium text-primary hover:underline flex items-center gap-1"
            >
              View all 35+ on GitHub <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.04} className="h-full">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full p-4 bg-card/40 border border-border rounded-lg hover:bg-card/70 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1 text-sm">
                    {project.name}
                  </h4>
                  <ExternalLink className="w-3.5 h-3.5 text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground mb-3 flex-grow line-clamp-2 leading-relaxed">{project.description}</p>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-secondary/40 text-secondary-foreground w-fit rounded border border-border/50">
                  {project.tech}
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

