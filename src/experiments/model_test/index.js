import React, { Suspense, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import eevee from '../../models/Monster.glb'

// Convert GLTF to GLB https://glb-packer.glitch.me/
// GLB combines the .GLTF model and the .BIN file into a single data object that can be imported by THREE

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
        <group ref={modelRef} position={[0, 0, -60]}>
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
