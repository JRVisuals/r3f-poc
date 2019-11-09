import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

export const AnotherCubeExperiment = () => {
  const cubeZero = useRef();
  useFrame(() => (cubeZero.current.rotation.x += 0.04));
  const cubeOne = useRef();
  useFrame(
    () => (cubeOne.current.rotation.x = cubeOne.current.rotation.y += 0.02)
  );
  const cubeTwo = useRef();
  useFrame(
    () => (cubeTwo.current.rotation.x = cubeTwo.current.rotation.y -= 0.02)
  );
  const cubes = useRef();
  useFrame(() => (cubes.current.rotation.z -= 0.01));

  return (
    <group>
      <spotLight
        color="#FFF"
        intensity={0.75}
        position={[-10, 35, 10]}
        angle={0.53}
        penumbra={0.75}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />

      <spotLight
        color="red"
        intensity={0.25}
        position={[0, 0, 50]}
        angle={0.2}
        penumbra={0.75}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />

      <group ref={cubes}>
        <mesh
          ref={cubeZero}
          onClick={e => console.log('click')}
          onPointerOver={e => console.log('hover')}
          onPointerOut={e => console.log('unhover')}
        >
          <boxBufferGeometry attach="geometry" args={[1.0, 1.0, 1.0]} />
          <meshPhongMaterial attach="material" color="#FF7744" />
        </mesh>
        <mesh
          ref={cubeOne}
          onClick={e => console.log('click')}
          onPointerOver={e => console.log('hover')}
          onPointerOut={e => console.log('unhover')}
        >
          <boxBufferGeometry attach="geometry" args={[2.5, 2.5, 2.5]} />
          <meshPhongMaterial
            attach="material"
            color="#AAFFDD"
            opacity={0.5}
            transparent
          />
        </mesh>
        <mesh
          ref={cubeTwo}
          onClick={e => console.log('click')}
          onPointerOver={e => console.log('hover')}
          onPointerOut={e => console.log('unhover')}
        >
          <boxBufferGeometry attach="geometry" args={[5, 5, 5]} />
          <meshPhongMaterial
            attach="material"
            color="#AABBFF"
            opacity={0.25}
            transparent
          />
        </mesh>
      </group>
      <mesh receiveShadow position={[0, 0, -10]}>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshPhongMaterial attach="material" color="#555555" />
      </mesh>
    </group>
  );
};

export default {
  id: 'cube_plus',
  component: AnotherCubeExperiment,
  metadata:{
    name: 'Another Cube',
    author: 'JoskerDu',
    description: '',
  },
};
