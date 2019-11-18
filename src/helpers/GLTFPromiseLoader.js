import promisifyLoader from './promiseLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GLTFPromiseLoader = promisifyLoader(new GLTFLoader());

export default GLTFPromiseLoader;
