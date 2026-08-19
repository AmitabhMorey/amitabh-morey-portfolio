import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ParticleField from './ParticleField';
import FloatingGeometry from './FloatingGeometry';

const Scene = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.6} />
          <pointLight position={[-10, -10, -5]} intensity={0.4} color="#6366f1" />
          <ParticleField count={800} />
          <FloatingGeometry />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
