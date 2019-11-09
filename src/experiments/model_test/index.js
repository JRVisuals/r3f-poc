import React, { Suspense, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import eevee from '../../models/ryan.glb'

// Convert GLTF to GLB https://glb-packer.glitch.me/

const SomeModel = () => {
  const gltf = useLoader(GLTFLoader, eevee)
  return <primitive object={gltf.scene} position={[0, 0, 0]} />
}

const Loader = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  )
}

export const ModelTest = () => {

  const modelRef = useRef();
  useFrame(() => (modelRef.current.rotation.y += 0.04));

    return (
      <group>
        <ambientLight
          color="#FFF"
          intensity={0.25}
        />
        <spotLight
          color="#FFF"
          intensity={1.0}
          position={[0, 20, 20]}
          angle={0.53}
          penumbra={0.75}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
          receiveShadow
        />
        <group ref={modelRef} position={[0, 0, 5]}>
          <Suspense fallback={<Loader />}>{<SomeModel />}</Suspense> 
        </group>
      </group>
    )
    
}

export default {
    id: 'model_test',
    component: ModelTest,
    metadata:{
      name: 'Model Test',
      author: '',
      description: 'I.E. The Wonderlulunki',
    },
};
