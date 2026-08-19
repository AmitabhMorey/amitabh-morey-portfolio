import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import GradientText from "@/components/effects/GradientText";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border bg-card/20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12">
          {/* Bio info */}
          <div className="text-center md:text-left max-w-sm">
            <h3 className="text-xl font-bold text-foreground mb-2 flex items-center justify-center md:justify-start gap-2">
              <GradientText colors={["#a855f7", "#6366f1", "#ec4899", "#8b5cf6"]} animationSpeed={8}>
                Amitabh Morey
              </GradientText>
            </h3>
            <p className="text-sm font-medium text-foreground/80 mb-2">
              Software Engineer & Junior Penetration Tester
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Kharghar, Navi Mumbai, India</span>
            </div>
          </div>

          {/* Direct Contact Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
            <a
              href="mailto:amitabhmorey10@gmail.com"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-card/60 border border-border hover:border-primary/50 text-foreground transition-all duration-200 hover:bg-primary/10 text-xs md:text-sm font-medium whitespace-nowrap shrink-0 shadow-sm"
            >
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span>amitabhmorey10@gmail.com</span>
            </a>

            <a
              href="tel:+918446581078"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-card/60 border border-border hover:border-primary/50 text-foreground transition-all duration-200 hover:bg-primary/10 text-xs md:text-sm font-medium whitespace-nowrap shrink-0 shadow-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+91 8446581078</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© 2026 Amitabh Morey. Built with React, TypeScript & Three.js.</p>
          <p className="font-mono flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            eJPT & ICCA Certified • Ethical Security Research
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

