"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, PerspectiveCamera } from "@react-three/drei";
import { GrowModel, InvestModel, TradeModel } from "../3d/Mini3dScene";

export default function PillarAsset({ title }: { title: string }) {
  return (
    <div className="relative h-48 w-full mx-auto">
      {/* FIX: Move 'alpha' into the 'gl' object. 
        Added 'dpr' to optimize for performance (standard senior dev move).
      */}
     
<Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
  <PerspectiveCamera makeDefault position={[0, 0, 5]} />
  
  {/* Add high intensity lights to kill the black silhouettes */}
  <ambientLight intensity={1.5} /> 
  <pointLight position={[10, 10, 10]} intensity={2.5} />
  <spotLight position={[-10, 10, -10]} intensity={1.5} color="#3D2C8D" />

  {/* Environment provides the reflections needed for the glass look */}
  <Environment preset="city" /> 

  {title === "Invest" && <InvestModel />}
  {title === "Trade" && <TradeModel />}
  {title === "Grow" && <GrowModel />}

  <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2.5} />
</Canvas>
    </div>
  );
}