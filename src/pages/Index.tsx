import { Suspense, lazy } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import GitHub from '@/components/sections/GitHub';
import Career from '@/components/sections/Career';
import Footer from '@/components/sections/Footer';
import SplashCursor from '@/components/effects/SplashCursor';

// Lazy load Three.js scene to improve initial load
const Scene = lazy(() => import('@/components/three/Scene'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SplashCursor 
        SPLAT_RADIUS={0.15}
        SPLAT_FORCE={5000}
        DENSITY_DISSIPATION={2}
        VELOCITY_DISSIPATION={1.5}
        COLOR_UPDATE_SPEED={8}
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
  );
};

export default Index;
