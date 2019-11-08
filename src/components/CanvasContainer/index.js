import React from 'react';
import { Canvas } from 'react-three-fiber';

import './styles.css';

const CanvasContainer = props => {
  return (
    
      <Canvas
        style={{ background: '#777777' }}
        shadowMap
        camera={{ position: [0, 0, 10] }}
      >
        {props.children}
      </Canvas>
    
  );
};

export default CanvasContainer;
