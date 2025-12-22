import { Suspense, lazy } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import GitHub from '@/components/sections/GitHub';
import Career from '@/components/sections/Career';
import Footer from '@/components/sections/Footer';
import ClickSpark from '@/components/effects/ClickSpark';
import SplashCursor from '@/components/effects/SplashCursor';

// Lazy load Three.js scene to improve initial load
const Scene = lazy(() => import('@/components/three/Scene'));

const Index = () => {
  return (
    <ClickSpark sparkColor="hsl(270, 70%, 60%)" sparkCount={12} sparkRadius={25} duration={500}>
      <div className="min-h-screen bg-background text-foreground">
        <SplashCursor 
          DENSITY_DISSIPATION={6}
          VELOCITY_DISSIPATION={4}
          SPLAT_RADIUS={0.08}
          SPLAT_FORCE={2000}
          CURL={3}
        />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
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
