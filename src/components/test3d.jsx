"use client";
import { Suspense } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  useGLTF,
} from "@react-three/drei";
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import { easing } from "maath";

function Model(props) {
  const gltf = useGLTF("/3d/r.gltf");
  return <primitive {...props} object={gltf.scene} />;
}

export default function TestAnimation() {
  return (
    <Canvas
      eventPrefix="client"
      shadows
      camera={{ position: [0, 0, 20], fov: 40 }}
    >
      <color attach="background" args={["#e0e0e0"]} />
      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />

      <Float floatIntensity={0}>
        <Model scale={30} color="red" />
      </Float>

      <Environment preset="city">
        <Lightformer
          intensity={5}
          position={[20, 10, 0]}
          scale={[10, 50, 1]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </Environment>
      <EffectComposer disableNormalPass>
        <N8AO aoRadius={1} intensity={2} />
        <TiltShift2 blur={0.2} />
      </EffectComposer>
      <Rig />
    </Canvas>
  );
}

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [Math.sin(-state.pointer.x) * 10, Math.sin(-state.pointer.y) * 10, 30],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
}
