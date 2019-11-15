import React, { Suspense, useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import model_monster from '../../models/Parrot.glb'


// Convert GLTF to GLB https://glb-packer.glitch.me/
// GLB combines the .GLTF model and the .BIN file into a single data object that can be imported by THREE

const Model = ({fileRef}) => {
  
  const modelRef = useRef();

  const gltf = useLoader(GLTFLoader, fileRef)

  const modelAnimationClips = gltf.animations[0];
  const [mixer] = useState(() => new THREE.AnimationMixer())
  useEffect(() => void mixer.clipAction(modelAnimationClips, modelRef.current).play(), [])

  const speed = 2;
  useFrame((state, delta) => {
    modelRef.current.rotation.y += 0.02
    mixer.update(delta * speed)
  })

  const modelPos = [0, 0, 5];

  return (
    <group ref={modelRef} position={modelPos}>
      <primitive object={gltf.scene} position={[0, 0, 0]} />
    </group>
  )

}

// Basic spinning cube loader to display in Suspense
const Loader = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  )
}

export const ModelTest = () => {
  
  const modelFile = model_monster;

    return (
      <group>
        <ambientLight
          color="#FFF"
          intensity={0.5}
        />
        <spotLight
          color="#FFF"
          intensity={1.0}
          position={[0, 20, 100]}
          angle={0.53}
          penumbra={0.75}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
          receiveShadow
        />
        
          <Suspense fallback={<Loader />}>
            <Model fileRef={modelFile}/>
          </Suspense> 
  
      </group>
    )
    
}

export default {
    id: 'model_test',
    component: ModelTest,
    metadata:{
      name: 'Model(ANIMATED)',
      author: '',
      description: 'Loads animated parrot using React.Suspense and external .glb files.',
    },
};
