import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ParticleField from './ParticleField';
import FloatingGeometry from './FloatingGeometry';

const Scene = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#6366f1" />
          <ParticleField count={1500} />
          <FloatingGeometry />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
