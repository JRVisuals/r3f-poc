import React, { Suspense, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

import { useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import model_animated from '../../models/Drache.glb';

// TODO : Move these to README
// ThreeJS Fundamentals: https://threejsfundamentals.org/
// GLTF Model Viewer: https://github.com/donmccurdy/three-gltf-viewer
// Convert GLTF to GLB https://glb-packer.glitch.me/
// Models: https://poly.google.com/   https://sketchfab.com/
// GLB combines the .GLTF model and the .BIN file into a single data object that can be imported by THREE

const Model = ({ fileRef }) => {
  const modelRef = useRef();
  const gltf = useLoader(GLTFLoader, model_animated);

  const modelAnimationClips = gltf.animations[0];
  const [mixer] = useState(() => new THREE.AnimationMixer());
  useEffect(
    () => void mixer.clipAction(modelAnimationClips, modelRef.current).play(),
    [mixer, modelAnimationClips]
  );

  const speed = 2;
  useFrame((state, delta) => {
    mixer.update(delta * speed);
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={[25, 25, 25]}
      position={[0, -0.25, 0]}
      castShadow
      receiveShadow
    />
  );
};

const Base = () => {
  const baseRef = useRef();

  return (
    <mesh ref={baseRef} position={[0, -0.5, 0]}>
      <cylinderBufferGeometry attach="geometry" args={[6, 6, 0.5, 128, 8]} />
      <meshStandardMaterial
        attach="material"
        color="#552200"
        shininess={0}
        receiveShadow
      />
    </mesh>
  );
};

// Basic spinning cube loader to display in Suspense
const Loader = () => {
  const loaderRef = useRef();
  useFrame((state, delta) => {
    loaderRef.current.rotation.y += 0.05;
    loaderRef.current.rotation.x += 0.05;
  });
  return (
    <mesh ref={loaderRef}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  );
};

export const ModelTest = () => {
  const groupRef = useRef();
  const groupPos = [0, 0, 0];
  useFrame((state, delta) => {
    groupRef.current.rotation.y += 0.0025;
  });

  return (
    <group>
      <ambientLight color="#FFF" intensity={0.25} />
      <spotLight
        color="#FF8800"
        intensity={1.0}
        position={[0, -20, 0]}
        angle={0.9}
        penumbra={0.75}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />

      <spotLight
        color="#F00"
        intensity={0.5}
        position={[0, 200, -20]}
        angle={0.2}
        penumbra={0.9}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />

      <Suspense fallback={<Loader />}>
        <group ref={groupRef} position={groupPos}>
          <Model />
          <Base />
        </group>
      </Suspense>
    </group>
  );
};

export default {
  id: 'model_test',
  component: ModelTest,
  metadata: {
    name: 'Model(ANIMATED)',
    author: '',
    description:
      'Loads (large) animated dragon using React.Suspense and external .glb files. Model credit: elly77ellison on sketchfab',
  },
};
