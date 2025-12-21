import { Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Amitabh Morey
            </h3>
            <p className="text-sm text-muted-foreground">
              Software Engineering Student
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AmitabhMorey"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-2 text-muted hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Amitabh Morey. Built with React & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
