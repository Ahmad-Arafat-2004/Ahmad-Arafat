import {
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
} from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

import CanvasLoader from "../Loader";
import Model from "./models/PlayerModel";

function Player({ isMobile }) {
  return (
    <>
      <ambientLight intensity={1} />

      <PerspectiveCamera
        makeDefault
        position={[0, 0, 8]}
        fov={30}
        near={0.1}
        far={100}
      />

      <RandomizedLight position={[0, 1, 0]} />

      <pointLight intensity={2} position={[1, 2, 2]} />
      <pointLight intensity={2} position={[-1, 2, 2]} />

      {!isMobile && (
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
      )}

      <Suspense fallback={<CanvasLoader />}>
        <Model
          scale={1.3}
          position={[0, -1, 0]}
          rotation={[0, 0, 0]} />
      </Suspense>
    </>
  );
}

function PlayerCanvas({ isMobile }) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ outputColorSpace: THREE.SRGBColorSpace, alpha: true }}
    >
      <Player isMobile={isMobile} />
    </Canvas>
  );
}

export default PlayerCanvas;