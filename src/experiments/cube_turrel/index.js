import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const angToRad = ang => {
  return (ang * Math.PI) / 180;
};

export const TurrelCubeExperiment = () => {
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
        color="red"
        intensity={1}
        position={[0, 0, 2]}
        angle={1.25}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />

      <group ref={cubes}>
        <mesh
          castShadow
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
      <mesh
        receiveShadow
        position={[0, 0, -10]}
        rotation={[0, angToRad(45), 0]}
      >
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshPhongMaterial attach="material" color="#555555" />
      </mesh>
      <mesh
        receiveShadow
        position={[0, 0, -10]}
        rotation={[0, angToRad(-45), 0]}
      >
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshPhongMaterial attach="material" color="#555555" />
      </mesh>

      <mesh
        receiveShadow
        position={[0, -10, 0]}
        rotation={[angToRad(-45), 0, 0]}
      >
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshPhongMaterial attach="material" color="#220000" />
      </mesh>
    </group>
  );
};

export default {
  id: 'cube_turrel',
  name: 'Turrel Cube',
  component: TurrelCubeExperiment,
};
