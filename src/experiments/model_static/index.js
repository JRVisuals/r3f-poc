import React, { Suspense, useRef, } from 'react'

import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import model_ryan from '../../models/ryan.glb'

// Convert GLTF to GLB https://glb-packer.glitch.me/
// GLB combines the .GLTF model and the .BIN file into a single data object that can be imported by THREE

const Model = ({fileRef}) => {
  
  const modelRef = useRef();

  const gltf = useLoader(GLTFLoader, fileRef)


  useFrame(() => {
    modelRef.current.rotation.y += 0.02
  })

  const modelPos = [0, 0, 4];

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

export const ModelStatic = () => {
  
  const modelFile = model_ryan;

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
    id: 'model_static',
    component: ModelStatic,
    metadata:{
      name: 'Model(STATIC)',
      author: '',
      description: 'Loads static model of I.E. The Wonderlulunki using React.Suspense and external .glb files.',
    },
};
