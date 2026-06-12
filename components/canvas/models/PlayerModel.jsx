import { useGLTF, useFBX } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

export default function Model(props) {
  const group = useRef();

  const { scene } = useGLTF("/models/player/Best.glb");
  const fbx = useFBX("/animations/standing-greeting.fbx");

  useEffect(() => {
    if (!scene || !fbx) return;

    const clone = SkeletonUtils.clone(scene);
    group.current.add(clone);

    clone.traverse((obj) => {
      if (obj.isMesh || obj.isSkinnedMesh) {
        obj.frustumCulled = false;
      }
    });

    const mixer = new THREE.AnimationMixer(clone);
    const action = mixer.clipAction(fbx.animations[0]);
    action.play();

    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      mixer.update(clock.getDelta());
    }
    animate();
  }, [scene, fbx]);

  return <group ref={group} {...props} />;
}