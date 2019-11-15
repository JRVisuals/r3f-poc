// Barrel for Experiments
import simpleCube from './simple_cube/';
import anotherCube from './cube_plus/';
import turrellCube from './cube_turrell/';
import modelStatic from './model_static/';
import modelAnimated from './model_animated/';

// Object to be used for route resolution
const experiments = [
  simpleCube,
  anotherCube,
  turrellCube,
  modelStatic,
  modelAnimated,
];

export default experiments;
