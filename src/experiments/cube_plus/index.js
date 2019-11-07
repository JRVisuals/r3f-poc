import React, {useRef} from 'react'
import { useFrame } from 'react-three-fiber';



const Thing = () => {

   const cubeZero = useRef();
   useFrame(() => (cubeZero.current.rotation.x += 0.04));
   const cubeOne = useRef();
   useFrame(() => (cubeOne.current.rotation.x = cubeOne.current.rotation.y += 0.02));
   const cubeTwo = useRef();
   useFrame(() => (cubeTwo.current.rotation.x = cubeTwo.current.rotation.y -= 0.02));
   const cubes = useRef();
   useFrame(() => (cubes.current.rotation.z -= 0.01));

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
            <group ref={cubes}>
                <mesh
                    ref={cubeZero}
                    onClick={e => console.log('click')}
                    onPointerOver={e => console.log('hover')}
                    onPointerOut={e => console.log('unhover')}>
                    <boxBufferGeometry attach="geometry" args={[1.0, 1.0, 1.0]} />
                    <meshPhongMaterial attach="material" color="#FF7744"/>
                </mesh>
                <mesh
                    ref={cubeOne}
                    onClick={e => console.log('click')}
                    onPointerOver={e => console.log('hover')}
                    onPointerOut={e => console.log('unhover')}>
                    <boxBufferGeometry attach="geometry" args={[2.5, 2.5, 2.5]} />
                    <meshPhongMaterial attach="material" color="#AAFFDD" opacity={0.5} transparent/>
                </mesh>
                <mesh
                    ref={cubeTwo}
                    onClick={e => console.log('click')}
                    onPointerOver={e => console.log('hover')}
                    onPointerOut={e => console.log('unhover')}>
                    <boxBufferGeometry attach="geometry" args={[5, 5, 5]} />
                    <meshPhongMaterial attach="material" color="#AABBFF" opacity={0.25} transparent/>
                </mesh>
            </group>
        </group>
    )
}

export default Thing
