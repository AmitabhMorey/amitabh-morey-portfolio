import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const featuredProjects = [
  {
    title: 'ScanForge',
    description: 'Production-ready network security scanner combining Nmap and Shodan with automated scheduling, role-based access control, and real-time web dashboard.',
    problem: 'Security professionals need unified tools for network reconnaissance without juggling multiple platforms.',
    solution: 'Integrated Nmap and Shodan APIs with a FastAPI backend, featuring automated scan scheduling and RBAC.',
    tech: ['Python', 'FastAPI', 'Docker', 'Nmap', 'Shodan'],
    learned: 'Building production-grade security tools, API integration patterns, and Docker containerization.',
    github: 'https://github.com/AmitabhMorey/scanforge',
  },
  {
    title: 'Camel_Case (Secure Voting)',
    description: 'Enterprise-grade secure voting platform with QR+OTP authentication, AES-256 encryption & audit trails.',
    problem: 'Traditional voting systems lack transparency and security guarantees.',
    solution: 'Implemented multi-factor authentication (QR+OTP), end-to-end encryption, and comprehensive audit logging.',
    tech: ['Java', 'Spring Boot', 'AES-256', 'Docker'],
    learned: 'Enterprise security practices, cryptographic implementations, and achieving 85% test coverage.',
    github: 'https://github.com/AmitabhMorey/Camel_Case',
  },
  {
    title: 'NebulaSync',
    description: 'A systems-level project built with Rust, showcasing memory-safe programming practices.',
    problem: 'Need for performant, memory-safe system utilities.',
    solution: 'Leveraged Rust\'s ownership model to build reliable, concurrent systems without garbage collection overhead.',
    tech: ['Rust'],
    learned: 'Memory management, Rust\'s ownership system, and systems programming principles.',
    github: 'https://github.com/AmitabhMorey/NebulaSync',
  },
  {
    title: 'Packet Sniffer',
    description: 'Network packet analyzer built in Go for monitoring and analyzing network traffic.',
    problem: 'Understanding network protocols requires hands-on inspection of packet data.',
    solution: 'Built a low-level packet capture tool that parses and displays network traffic in real-time.',
    tech: ['Go', 'Network Protocols'],
    learned: 'Deep understanding of TCP/IP stack, Go\'s concurrency model for I/O-bound operations.',
    github: 'https://github.com/AmitabhMorey/packet-sniffer',
  },
  {
    title: 'Concurrent Port Scanner',
    description: 'High-performance port scanning utility leveraging Go\'s goroutines for parallel execution.',
    problem: 'Sequential port scanning is too slow for practical network reconnaissance.',
    solution: 'Implemented concurrent scanning with goroutines and channels for efficient resource utilization.',
    tech: ['Go', 'Concurrency', 'Networking'],
    learned: 'Goroutines, channels, and designing concurrent systems that scale.',
    github: 'https://github.com/AmitabhMorey/concurrent-port-scanner',
  },
];

const otherProjects = [
  { name: 'Insta-Transcribe', tech: 'Python', description: 'Audio transcription utility', github: 'https://github.com/AmitabhMorey/insta-transcribe' },
  { name: 'Bash Network Monitor', tech: 'Shell', description: 'Network monitoring scripts', github: 'https://github.com/AmitabhMorey/bash-network-monitor' },
  { name: 'TrendVortex Sentinel', tech: 'HTML', description: 'Web-based dashboard interface', github: 'https://github.com/AmitabhMorey/TrendVortex_Sentinel' },
  { name: 'FlappyBird Clone', tech: 'TypeScript', description: 'Game development with TypeScript', github: 'https://github.com/AmitabhMorey/FlappyBird_clone' },
  { name: 'Anime Avatar', tech: 'JavaScript', description: 'Avatar generation utility', github: 'https://github.com/AmitabhMorey/anime_avatar' },
  { name: 'Fact Generator', tech: 'JavaScript', description: 'Random fact display application', github: 'https://github.com/AmitabhMorey/fact_generator' },
  { name: '120 Python Problems', tech: 'Python', description: 'Algorithmic problem-solving practice', github: 'https://github.com/AmitabhMorey/120-Python-problems' },
  { name: 'CPP', tech: 'C++', description: 'C++ programming exercises', github: 'https://github.com/AmitabhMorey/CPP' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Selected projects demonstrating backend development, security engineering, and systems programming.
        </p>
        
        <div className="grid gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="bg-card/60 border-border backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="icon" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Problem</h4>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">What I Learned</h4>
                    <p className="text-sm text-muted-foreground">{project.learned}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-6 text-foreground">Other Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project) => (
            <a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card/40 border border-border hover:bg-card/60 transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h4>
                <ExternalLink className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
              <span className="text-xs px-2 py-0.5 bg-secondary/30 text-secondary-foreground">
                {project.tech}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
