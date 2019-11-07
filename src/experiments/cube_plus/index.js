import React, {useRef} from 'react'
import { useFrame } from 'react-three-fiber';



const Thing = () => {

   const cubeOne = useRef();
   const cubeTwo = useRef();
   useFrame(() => (cubeOne.current.rotation.x = cubeOne.current.rotation.y += 0.02));
   useFrame(() => (cubeTwo.current.rotation.x = cubeTwo.current.rotation.y -= 0.02));

    return (
        <group>
        <spotLight
            intensity={0.6}
            position={[0, 0, 25]}
            angle={0.3}
            penumbra={1}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            castShadow
        />
            <mesh
                ref={cubeOne}
                onClick={e => console.log('click')}
                onPointerOver={e => console.log('hover')}
                onPointerOut={e => console.log('unhover')}>
                <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
                <meshPhongMaterial attach="material" color="#AABBDD" />
            </mesh>

            <mesh
            ref={cubeTwo}
            onClick={e => console.log('click')}
            onPointerOver={e => console.log('hover')}
            onPointerOut={e => console.log('unhover')}>
            <boxBufferGeometry attach="geometry" args={[5, 5, 5]} />
            <meshPhongMaterial attach="material" color="#AABBDD" opacity={0.5} transparent/>
        </mesh>
        </group>
    )
}

export default Thing
