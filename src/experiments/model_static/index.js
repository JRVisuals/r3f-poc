import React, { useRef, useState, useEffect } from 'react';

import { useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import model_static from '../../models/mario.glb';

const Model = ({ fileRef }) => {
  const [modelRender, setModelRender] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    try {
      loader.load(fileRef, gltf => {
        const modelPos = [0, 0, 0];
        const modelScale = [0.05, 0.05, 0.05];
        setModelRender(
          <group position={modelPos} scale={modelScale}>
            <primitive object={gltf.scene} />
          </group>
        );
      });
    } catch (e) {
      console.log(`GLTFLoader error ${e}`);
    }
  }, [fileRef]);

  return <React.Fragment>{modelRender}</React.Fragment>;
};

export const ModelStatic = () => {
  const modelFile = model_static;
  const modelRef = useRef();
  useFrame(() => {
    modelRef.current.rotation.y += 0.02;
  });
  return (
    <group>
      <ambientLight color="#FFF" intensity={0.5} />
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

      <group ref={modelRef} position={[0, 20, -100]}>
        <Model fileRef={modelFile} />
      </group>
    </group>
  );
};

export default {
  id: 'model_static',
  component: ModelStatic,
  metadata: {
    name: 'Model Static',
    author: '',
    description:
      'Loads static model of Mario from an external .glb file w/o using React.Suspense. Model credit: Captain LowPoly on sketchfab',
  },
};

/* Loader Notes

  Rather than using the useLoader hook and React.suspense we load the model directly with the GLTF loader.
  The loader is called in a useEffect hook based on the fileRef (which should never change, if it did change it should automatically reload and update).
  The returned component is initially an empty fragment but updated via a useState hook once the loader is complete.
  Key to note that R3F is fragment friendly.

  Initially I tried doing all of this with async/await and got into a bind with components as promises. There may have been a way around that but this feels cleaner for a single model.

  Bonus: Removing suspense fixes are repeat load missing model issue.
  
*/
