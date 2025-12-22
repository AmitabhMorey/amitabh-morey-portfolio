import { Github, Mail } from "lucide-react";
import Magnet from "@/components/effects/Magnet";
import GradientText from "@/components/effects/GradientText";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              <GradientText colors={["#a855f7", "#6366f1", "#8b5cf6", "#a855f7"]} animationSpeed={8}>
                Amitabh Morey
              </GradientText>
            </h3>
            <p className="text-sm text-muted-foreground">Software Engineering Student</p>
          </div>

          <div className="flex items-center gap-4">
            <Magnet padding={60} magnetStrength={4}>
              <a
                href="https://github.com/AmitabhMorey"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted hover:text-foreground transition-colors hover:bg-primary/10 rounded-lg"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </Magnet>
            <Magnet padding={60} magnetStrength={4}>
              <a
                href="amitabhmorey361@gmail.com"
                className="p-2 text-muted hover:text-foreground transition-colors hover:bg-primary/10 rounded-lg"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </Magnet>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted">© 2026 Amitabh Morey</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
