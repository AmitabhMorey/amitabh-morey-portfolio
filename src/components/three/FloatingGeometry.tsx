import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.08;
      meshRef.current.rotation.y = t * 0.12;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.06;
      torusRef.current.rotation.z = t * 0.1;
    }
    if (octaRef.current) {
      octaRef.current.rotation.y = t * 0.08;
      octaRef.current.rotation.z = t * 0.04;
    }
  });

  return (
    <group>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh ref={meshRef} position={[4, 2, -5]}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial
            color="#7c3aed"
            roughness={0.3}
            metalness={0.8}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={torusRef} position={[-5, -1, -8]}>
          <torusGeometry args={[1.5, 0.3, 12, 24]} />
          <meshStandardMaterial
            color="#6366f1"
            roughness={0.3}
            metalness={0.9}
            transparent
            opacity={0.25}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh ref={octaRef} position={[6, -3, -6]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial
            color="#ec4899"
            roughness={0.4}
            metalness={0.7}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
};

export default FloatingGeometry;
