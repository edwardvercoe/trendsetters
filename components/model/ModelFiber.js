import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useLoader, useFrame } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import * as THREE from "three";

const Model = () => {
  const model = useLoader(GLTFLoader, "./ts2.glb");
  model.scene.rotation.y = -0.7;

  // model.scene.rotateX(0.05);
  useThree(({ camera }) => {
    // camera.position.x = -0.7;
    let windowWidth = window.innerWidth;
    windowWidth > 600 ? (camera.position.x = -0.7) : (camera.position.x = 0.2);

    windowWidth > 600 ? (camera.position.y = 1.6) : (camera.position.y = 0.4);

    // camera.position.y = 1.6;
    camera.position.z = 5;
  });

  // Here's the animation part
  // *************************
  let mixer;
  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      // action.setLoop(THREE.LoopPingPong);
      action.play();
    });
  }

  let oldValue = 0;

  //discourse.threejs.org/t/play-animation-with-scroll/27012/8

  window.addEventListener("scroll", function (e) {
    let newValue = window.pageYOffset;
    let windowHeight = window.innerHeight;

    // console.log(`window height: ${windowHeight} current height: ${newValue}`);

    // console.log(oldValue - newValue);

    if (newValue > 900) {
      return null;
    } else if (newValue < 5) {
      return null;
    } else {
      mixer.update((newValue - oldValue) / 800);
    }

    // if (oldValue - newValue < 0) {
    //   mixer.update((newValue - oldValue) / 200);
    // } else if (oldValue - newValue > 0 && oldValue - newValue < 350) {
    //   mixer.update((newValue - oldValue) / 200);
    // }
    oldValue = newValue;
  });

  // useFrame((state, delta) => {
  //   mixer?.update(delta);
  // });
  // *************************

  model.scene.traverse((child) => {
    if (child.isMesh) {
      // child.castShadow = true;
      child.receiveShadow = true;
      // child.material.side = THREE.FrontSide;
    }
  });

  return (
    <>
      <primitive object={model.scene} scale={4.5} />
    </>
  );
};

export default function ModelFiber() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          {/* <OrbitControls /> */}

          <Model />
          {/* <Environment preset="park" /> */}
          <pointLight position={[-1, 2.7, 1.0]} color={0xffffff} intensity={1} />
          <ambientLight intensity={0.7} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
