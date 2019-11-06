import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from 'react-three-fiber'

import Thing from './Thing'

const CanvasContainer = () => {

    return (
        <Canvas style={{ background: "#777777" }} shadowMap camera={{ position: [0, 0, 10] }}>
            <Thing/>
        </Canvas>
    )
}

export default CanvasContainer