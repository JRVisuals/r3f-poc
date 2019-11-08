// Barrel for Experiments
import React from 'react';
import SimpleCube from './simple_cube/';
import CubeTwo from './cube_plus/';
import TurrelCube from './cube_turrel/';

export { SimpleCube, CubeTwo, TurrelCube };

// Object to be used for route resolution
export const ExperimentList = {
  cube: <SimpleCube />,
  cube_two: <CubeTwo />,
  turrel_cube: <TurrelCube />,
};
