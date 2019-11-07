// Barrel for Experiments
import React from 'react'
import SimpleCube from './simple_cube/'
import CubeTwo from './cube_plus/'


export { SimpleCube, CubeTwo };

// Object to be used for route resolution
export const ExperimentList = {
    cube: <SimpleCube/>,
    cube_two: <CubeTwo/>,
}
