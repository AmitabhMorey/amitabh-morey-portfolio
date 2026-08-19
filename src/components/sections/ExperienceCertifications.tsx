import { Briefcase, Award, GraduationCap, Calendar, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import BlurText from '@/components/effects/BlurText';
import ScrollReveal from '@/components/effects/ScrollReveal';
import TiltCard from '@/components/effects/TiltCard';

const experiences = [
  {
    role: 'Head of Content & Security Intern',
    organization: 'The Council for International Standard Esports (CISE)',
    period: 'February 2022 – June 2024',
    type: 'Internship',
    bullets: [
      'Led initiatives promoting cybersecurity awareness and best practices across digital content and infrastructure.',
      'Conducted internal audits with Burp Suite, Nmap, and OWASP ZAP to identify misconfigurations and weak credentials.',
      'Collaborated with the IT team on security hardening and data-protection compliance.',
      'Designed phishing-awareness and digital-hygiene education for the esports community.',
    ],
    skills: ['Burp Suite', 'Nmap', 'OWASP ZAP', 'Security Audits', 'Phishing Awareness'],
  },
  {
    role: 'Cybersecurity Project Trainee',
    organization: 'The School of Future Tech',
    period: 'October 2024 – December 2024',
    type: 'Research & Lab Training',
    bullets: [
      'Engaged in hands-on penetration testing labs, simulating real-world attack scenarios for academic research.',
      'Participated in red team–blue team exercises: initial access, privilege escalation, and lateral movement.',
      'Assessed mock enterprise environments with Metasploit, BloodHound, and Nessus; reported findings per MITRE ATT&CK and PTES.',
    ],
    skills: ['Metasploit', 'BloodHound', 'Nessus', 'MITRE ATT&CK', 'PTES Framework', 'Red/Blue Team'],
  },
];

const certifications = [
  {
    title: 'eJPT — Junior Penetration Tester',
    issuer: 'INE Security',
    date: 'Jul 2026',
    featured: true,
    badge: 'Certification',
    link: 'https://certs.ine.com/c924587d-711e-4473-8fc3-64ea4aa33181#acc.EC8mcgBk',
    description: 'Hands-on practical penetration testing exam covering network architecture assessment, host exploitation, web application security, and pivoting.',
  },
  {
    title: 'ICCA — INE Certified Cloud Associate',
    issuer: 'INE Security',
    date: 'Jul 2026',
    featured: true,
    badge: 'Certification',
    link: 'https://certs.ine.com/bb9a74a2-1205-4be1-9d5f-d1f5d78dd0dd#acc.uTrOh7nM',
    description: 'Cloud security fundamentals, IAM policies, compute/network isolation, and multi-cloud vulnerability analysis.',
  },
  {
    title: 'Mastercard Cybersecurity Job Simulation',
    issuer: 'Forage / NY Jobs CEO Council',
    date: 'Dec 2024',
    featured: false,
    badge: 'Simulation',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_c6h2GQGRYYw3fECia_1733084785287_completion_certificate.pdf',
    description: 'Security advisory, phishing threat analysis, and risk identification for enterprise infrastructure.',
  },
  {
    title: 'Datacom Cybersecurity Job Simulation',
    issuer: 'Forage',
    date: 'Dec 2024',
    featured: false,
    badge: 'Simulation',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/gCW7Xki5Y3vNpBmnn/yTszJTvkHFBH6zAn3_gCW7Xki5Y3vNpBmnn_c6h2GQGRYYw3fECia_1735046282216_completion_certificate.pdf',
    description: 'APT breach analysis, incident response workflows, SIEM log triage, and security incident reporting.',
  },
  {
    title: 'Introduction to Cybersecurity Simulation',
    issuer: 'Commonwealth Bank / Forage',
    date: 'Dec 2024',
    featured: false,
    badge: 'Simulation',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/2sNmYuurxgpFYawco/x52Jy9s26xNbZkTQ7_2sNmYuurxgpFYawco_c6h2GQGRYYw3fECia_1735095197517_completion_certificate.pdf',
    description: 'Defense-in-depth principles, security awareness, and foundational penetration testing tasks.',
  },
];

const ExperienceCertifications = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <BlurText
          text="Experience & Certifications"
          className="text-3xl md:text-4xl font-bold mb-4 text-foreground justify-center"
          delay={80}
          animateBy="words"
        />
        <ScrollReveal>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Practical industry security audits, hands-on penetration testing labs, recognized INE security credentials, and verified job simulations.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          {/* Left Column: Work & Lab Experience */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-6 text-foreground">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold">Practical Experience & Research</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <ScrollReveal key={exp.role} delay={idx * 0.1}>
                  <TiltCard
                    className="p-6 bg-card/60 border border-border backdrop-blur-sm rounded-lg hover:border-primary/40 transition-colors"
                    tiltAmount={3}
                    glareMaxOpacity={0.06}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                        <div className="text-sm font-medium text-primary">{exp.organization}</div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/40 px-2.5 py-1 rounded border border-border/60">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4 text-sm text-muted-foreground mt-3">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs bg-secondary/30 text-secondary-foreground rounded border border-border/40 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>

            {/* Education Subcard */}
            <ScrollReveal delay={0.3}>
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4 text-foreground">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">Education</h3>
                </div>
                <div className="p-5 bg-card/40 border border-border backdrop-blur-sm rounded-lg flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground">ITM Skills University</h4>
                    <p className="text-sm text-muted-foreground">School of Future Tech</p>
                  </div>
                  <div className="text-xs font-mono bg-secondary/50 text-foreground px-3 py-1 rounded border border-border/80">
                    2024 – 2028
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Certifications & Industry Simulations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-6 text-foreground">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold">Certifications & Simulations</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <ScrollReveal key={cert.title} delay={idx * 0.08}>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-5 rounded-lg border transition-all duration-300 group hover:scale-[1.01] ${
                      cert.featured
                        ? 'bg-primary/5 border-primary/40 shadow-sm shadow-primary/10 hover:border-primary hover:bg-primary/10'
                        : 'bg-card/40 border-border hover:border-primary/50 hover:bg-card/70'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className={`w-4 h-4 flex-shrink-0 ${cert.featured ? 'text-primary' : 'text-muted-foreground group-hover:text-primary transition-colors'}`} />
                        <h4 className="text-sm md:text-base font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                      </div>
                      <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded border font-medium flex-shrink-0 ${
                        cert.featured ? 'bg-primary/20 text-primary border-primary/30' : 'bg-secondary/40 text-muted-foreground border-border'
                      }`}>
                        {cert.badge}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span className="font-medium text-foreground/80">{cert.issuer}</span>
                      <span className="font-mono text-xs">{cert.date}</span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      {cert.description}
                    </p>

                    <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                      <span>View Verified Credential</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCertifications;
