import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useLoader, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import * as THREE from "three";

const Model = () => {
  const model = useLoader(GLTFLoader, "./ts.glb");

  useThree(({ camera }) => {
    camera.position.x = -0.5;
    camera.position.y = 2;
    camera.position.z = 5;
    camera.rotateY(0.05);
  });

  // Here's the animation part
  // *************************
  let mixer;
  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.setLoop(THREE.LoopPingPong);
      action.play();
    });
  }

  let oldValue = 0;

  //discourse.threejs.org/t/play-animation-with-scroll/27012/8

  window.addEventListener("scroll", function (e) {
    var newValue = window.pageYOffset;

    if (oldValue - newValue < 0) {
      mixer.update((newValue - oldValue) / 200);
    } else if (oldValue - newValue > 0) {
      mixer.update((newValue - oldValue) / 200);
    }
    oldValue = newValue;
  });

  // useFrame((state, delta) => {
  //   mixer?.update(delta);
  // });
  // *************************

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });

  return (
    <>
      <primitive object={model.scene} scale={5} />
    </>
  );
};

export default function ModelFiber() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        {/* <OrbitControls /> */}

        <Model />
        <Environment preset="park" />
        <ambientLight intensity={0.2} />
      </Suspense>
    </Canvas>
  );
}
