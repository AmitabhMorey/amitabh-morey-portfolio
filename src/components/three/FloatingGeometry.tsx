import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      torusRef.current.rotation.z = state.clock.elapsedTime * 0.12;
    }
    if (octaRef.current) {
      octaRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      octaRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={meshRef} position={[4, 2, -5]}>
          <icosahedronGeometry args={[1.2, 1]} />
          <MeshDistortMaterial
            color="#64748b"
            roughness={0.4}
            metalness={0.8}
            distort={0.2}
            speed={2}
            transparent
            opacity={0.4}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={torusRef} position={[-5, -1, -8]}>
          <torusGeometry args={[1.5, 0.4, 16, 32]} />
          <MeshDistortMaterial
            color="#475569"
            roughness={0.3}
            metalness={0.9}
            distort={0.15}
            speed={1.5}
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh ref={octaRef} position={[6, -3, -6]}>
          <octahedronGeometry args={[0.8, 0]} />
          <MeshDistortMaterial
            color="#94a3b8"
            roughness={0.5}
            metalness={0.7}
            distort={0.1}
            speed={3}
            transparent
            opacity={0.35}
          />
        </mesh>
      </Float>
    </group>
  );
};

export default FloatingGeometry;
