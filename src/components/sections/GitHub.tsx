import { Github, Users, GitBranch, Star } from 'lucide-react';

const GitHub = () => {
  return (
    <section id="github" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">
          GitHub & Open Source
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-card/60 border border-border text-center backdrop-blur-sm">
            <Users className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-2xl font-bold text-foreground">24</div>
            <div className="text-sm text-muted-foreground">Followers</div>
          </div>
          <div className="p-6 bg-card/60 border border-border text-center backdrop-blur-sm">
            <GitBranch className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-2xl font-bold text-foreground">20+</div>
            <div className="text-sm text-muted-foreground">Repositories</div>
          </div>
          <div className="p-6 bg-card/60 border border-border text-center backdrop-blur-sm">
            <Star className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-2xl font-bold text-foreground">Pro</div>
            <div className="text-sm text-muted-foreground">GitHub Status</div>
          </div>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            My GitHub activity reflects a continuous learning approach—experimenting with new 
            languages, building progressively more complex systems, and maintaining clean, 
            documented code. I've earned the "Pair Extraordinaire" achievement, demonstrating 
            collaborative development experience.
          </p>
          
          <p>
            I maintain repositories across 10+ programming languages, from low-level systems 
            languages like Rust and Go to application frameworks like Spring Boot and FastAPI. 
            Each repository represents intentional learning and real problem-solving.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/AmitabhMorey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Github className="w-5 h-5" />
            View Full Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
