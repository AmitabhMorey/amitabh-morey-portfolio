import { Suspense, lazy } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import GitHub from '@/components/sections/GitHub';
import Career from '@/components/sections/Career';
import Footer from '@/components/sections/Footer';

// Lazy load Three.js scene to improve initial load
const Scene = lazy(() => import('@/components/three/Scene'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
