import { Suspense, lazy } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import ExperienceCertifications from '@/components/sections/ExperienceCertifications';
import Projects from '@/components/sections/Projects';
import GitHub from '@/components/sections/GitHub';
import Career from '@/components/sections/Career';
import Footer from '@/components/sections/Footer';
import ClickSpark from '@/components/effects/ClickSpark';

// Lazy load Three.js scene to improve initial load
const Scene = lazy(() => import('@/components/three/Scene'));

const Index = () => {
  return (
    <ClickSpark sparkColor="hsl(270, 70%, 60%)" sparkCount={10} sparkRadius={20} duration={400}>
      <div className="min-h-screen bg-background text-foreground">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <ExperienceCertifications />
          <Projects />
          <GitHub />
          <Career />
        </main>
        <Footer />
      </div>
    </ClickSpark>
  );
};

export default Index;

