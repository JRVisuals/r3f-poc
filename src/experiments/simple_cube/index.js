import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

export const SimpleCubeExperiment = () => {
  const meshRef = useRef();
  useFrame(
    () => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.02)
  );

  return (
    <mesh
      ref={meshRef}
      onClick={e => console.log('click')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}
    >
      <boxBufferGeometry attach="geometry" args={[5, 5, 5]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

export default {
  id: 'simple_cube',
  component: SimpleCubeExperiment,
  metadata: {
    name: 'Simple Cube',
    author: '',
    description: 'That most basic cube used as an example on the R3F repo.',
  },
};
