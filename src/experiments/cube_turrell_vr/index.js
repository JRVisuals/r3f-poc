import React, { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { RingBufferGeometry } from 'three';

const angToRad = ang => {
  return (ang * Math.PI) / 180;
};

export const TurrellCubeExperimentVR = () => {
  // Camera Override
  const { camera } = useThree();
  camera.position.set(0, 0, 0);
  camera.fov = 35;

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
    <group position={[0, 0, 0]}>
      <ambientLight color="red" intensity={0} />
      <spotLight
        color="red"
        intensity={0.35}
        position={[0, -0.2, 2.75]}
        angle={1}
        penumbra={0.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />

      <spotLight
        color="red"
        intensity={0.2}
        position={[0, 0, 5.0]}
        angle={1.5}
        penumbra={1}
      />

      <group ref={cubes} position={[0, 2.75, -4]} scale={[0.25, 0.25, 0.25]}>
        <mesh ref={cubeZero} castShadow>
          <boxBufferGeometry attach="geometry" args={[1.0, 1.0, 1.0]} />
          <meshPhongMaterial
            attach="material"
            color="#FFF"
            shininess={30}
            specular="#F00"
          />
        </mesh>

        <mesh ref={cubeOne}>
          <boxBufferGeometry attach="geometry" args={[2.5, 2.5, 2.5]} />
          <meshPhongMaterial
            attach="material"
            color="#FFF"
            opacity={0.4}
            transparent
            shininess={30}
            specular="#F00"
          />
        </mesh>

        <mesh ref={cubeTwo}>
          <boxBufferGeometry attach="geometry" args={[5, 5, 5]} />
          <meshPhongMaterial
            attach="material"
            color="#FFF"
            shininess={5}
            specular="#F00"
            opacity={0.3}
            transparent
          />
        </mesh>
      </group>
      <mesh
        receiveShadow
        position={[0, 0, -10]}
        rotation={[0, angToRad(55), 0]}
      >
        <planeBufferGeometry attach="geometry" args={[2000, 2000]} />
        <meshPhongMaterial attach="material" color="#555" />
      </mesh>
      <mesh
        receiveShadow
        position={[0, 0, -10]}
        rotation={[0, angToRad(-55), 0]}
      >
        <planeBufferGeometry attach="geometry" args={[2000, 2000]} />
        <meshPhongMaterial attach="material" color="#555" />
      </mesh>

      <mesh
        receiveShadow
        position={[0, -10, 0]}
        rotation={[angToRad(-30), 0, 0]}
      >
        <planeBufferGeometry attach="geometry" args={[2000, 2000]} />
        <meshPhongMaterial attach="material" color="#444" />
      </mesh>
    </group>
  );
};

export default {
  id: 'cube_turrel_vr',
  vr: true,
  component: TurrellCubeExperimentVR,
  metadata: {
    name: 'Turrell Cube (VR)',
    author: 'JoskerDu',
    description:
      'An ode to James Turrell. Specifically the installation "Catso, Red" at the Mattress Factory in Pittsburgh, PA.',
  },
};
