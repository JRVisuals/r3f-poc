import React, { Suspense, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import model_monster from '../../models/Monster.glb'
import model_ryan from '../../models/ryan.glb'

// Convert GLTF to GLB https://glb-packer.glitch.me/
// GLB combines the .GLTF model and the .BIN file into a single data object that can be imported by THREE

const Model = ({fileRef}) => {
  
  const gltf = useLoader(GLTFLoader, fileRef)
  return <primitive object={gltf.scene} position={[0, 0, 0]} />
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

  const modelRef = useRef();
  useFrame(() => (modelRef.current.rotation.y += 0.04));

  const randomModelSeed = Math.random();
  const modelPos = randomModelSeed > 0.5 ? [0, 0, -80] : [0, 0, 4];
  const modelFile = randomModelSeed > 0.5 ? model_monster : model_ryan;

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
        <group ref={modelRef} position={modelPos}>
          <Suspense fallback={<Loader />}>{<Model fileRef={modelFile} />}</Suspense> 
        </group>
      </group>
    )
    
}

export default {
    id: 'model_test',
    component: ModelTest,
    metadata:{
      name: 'Load Models',
      author: '',
      description: 'Loads one of two random models I.E. The Wonderlulunki or Monster using React.Suspense and external .glb files.',
    },
};
