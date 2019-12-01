// Barrel for Experiments
import simpleCube from './simple_cube/';
import anotherCube from './cube_plus/';
import turrellCube from './cube_turrell/';
import turrellCubeVR from './cube_turrell_vr/';
import modelStatic from './model_static/';
import modelSuspense from './model_suspense/';
import modelAnimated from './model_animated/';

// Object to be used for route resolution
const experiments = [
  simpleCube,
  anotherCube,
  turrellCube,
  turrellCubeVR,
  modelStatic,
  modelSuspense,
  modelAnimated,
];

export default experiments;
