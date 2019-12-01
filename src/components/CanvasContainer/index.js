import React from 'react';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { Canvas } from 'react-three-fiber';

const CanvasContainer = props => {
  const useVR = true; //'getVRDevices' in window.navigator || 'xr' in window.navigator;

  const vrOptions = {
    referenceSpaceType: 'bounded-floor',
  };
  return (
    <Canvas
      style={{ background: '#777777' }}
      shadowMap
      camera={{ position: [0, 0, 10] }}
      vr
      onCreated={({ gl }) => {
        if (useVR) {
          document
            .getElementById('vrButton')
            .appendChild(VRButton.createButton(gl, vrOptions));
        }
      }}
    >
      {props.children}
    </Canvas>
  );
};

export default CanvasContainer;
