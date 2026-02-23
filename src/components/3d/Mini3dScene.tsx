"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshTransmissionMaterial,
  MeshDistortMaterial,
  RoundedBox,
  PresentationControls,
} from "@react-three/drei";
import * as THREE from "three";

// 1. INVEST
export function InvestModel() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={[-0.5, -0.5, 0]}>
        {[0, 1, 2].map((x) => (
          <RoundedBox
            key={x}
            args={[0.4, (x + 1) * 0.6, 0.4]}
            position={[x * 0.5, (x + 1) * 0.3, 0]}
            radius={0.05}
            smoothness={4}
          >
            <MeshTransmissionMaterial
              thickness={0.5}
              anisotropy={0.1}
              chromaticAberration={0.04}
              color="#28B463"
            />
          </RoundedBox>
        ))}
      </group>
    </Float>
  );
}

// 2. TRADE
export function TradeModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={4} rotationIntensity={2} floatIntensity={1}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#3D2C8D" metalness={1} roughness={0.1} />
      </mesh>
    </Float>
  );
}

// 3. GROW
export function GrowModel() {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh>
        <torusKnotGeometry args={[0.6, 0.2, 128, 16]} />
        <MeshDistortMaterial
          color="#28B463"
          speed={3}
          distort={0.4}
          radius={1}
        />
      </mesh>
    </Float>
  );
}

// Model switcher (FIXED)
function IconModel({ type }: { type: string }) {
  switch (type) {
    case "invest":
      return <InvestModel />;
    case "trade":
      return <TradeModel />;
    case "grow":
      return <GrowModel />;
    default:
      return null;
  }
}

// src/components/3d/Mini3dScene.tsx

export default function Mini3DScene({ type }: { type: string }) {
  return (
    <div className="h-32 w-32 mx-auto">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 40 }}
        gl={{ 
          antialias: true,
          alpha: true, // Ensuring background transparency
          powerPreference: "high-performance" 
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <PresentationControls
          global
          snap // Setting to true for a snappy return to center
          // Senior Move: Typescript often prefers mass/tension directly 
          // or omitted if using default spring behavior.
          speed={1.5} 
          rotation={[0, 0.3, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-0.5, 0.5]}
        >
          {/* Ensure type cases match your pillars array ('Invest' vs 'invest') */}
          <IconModel type={type.toLowerCase()} />
        </PresentationControls>
      </Canvas>
    </div>
  );
}