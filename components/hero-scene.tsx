"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function HeroScene() {
  const meshRef = useRef<Mesh>(null);
  const rotationSpeed = 0.5;

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed;
      meshRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh ref={meshRef}>
        <octahedronGeometry args={[2, 0]} />
        <meshStandardMaterial color="#6366f1" wireframe />
      </mesh>
    </>
  );
}