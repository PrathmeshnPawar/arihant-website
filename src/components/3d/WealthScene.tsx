"use client";

import { useRef, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment, ContactShadows, Preload } from "@react-three/drei";
import * as THREE from "three";

// Optimization: Separate components to keep the scene graph clean
function PremiumGlassSphere({ position, scale }: { position: [number, number, number]; scale: number }) {
  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} /> {/* Reduced segments from 64 to 32 for performance */}
      <MeshTransmissionMaterial
        backside
        samples={8} // Lowered for performance, barely noticeable at this scale
        thickness={1.0}
        chromaticAberration={0.03}
        anisotropy={0.1}
        distortion={0.1}
        color="#ffffff"
        transmission={1}
      />
    </mesh>
  );
}

// Added a simple mouse-follow wrapper for that "Wizard" touch
function Rig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    // Smoothly interpolate group rotation based on mouse position
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (state.mouse.y * Math.PI) / 15, 0.05);
  });
  return <group ref={ref}>{children}</group>;
}

const WealthScene = memo(() => {
  return (
    <div className="absolute right-0 top-0 h-full w-full lg:w-3/5 z-0 pointer-events-none opacity-90 transition-opacity duration-1000">
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 10], fov: 35 }}
        dpr={[1, 2]} // Limits resolution on high-pixel-density screens for better FPS
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        
        <Environment preset="city" />

        <Rig>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={[2, 0, 0]}>
              <PremiumGlassSphere position={[0, 1.2, 0]} scale={1.4} />
              
              {/* Gold Spheres with increased metalness for "Premium" look */}
              <mesh position={[2, -0.8, -1]} scale={0.4}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.15} />
              </mesh>
              
              <mesh position={[-1.5, -2, 0.5]} scale={0.3}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.15} />
              </mesh>
            </group>
          </Float>
        </Rig>

        <ContactShadows position={[2, -3.5, 0]} opacity={0.25} scale={10} blur={3} far={4} />
        <Preload all />
      </Canvas>
    </div>
  );
});

WealthScene.displayName = "WealthScene";
export default WealthScene;