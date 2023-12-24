import React, {useRef, useMemo } from 'react';
import './App.css';
import { Canvas, useFrame, MeshProps  } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'

const Box = (props: MeshProps) => {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    if( !ref.current) return
    ref.current.rotation.x += 1 * delta
    ref.current.rotation.y += 0.5 * delta
  })

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}

const App = () => {
  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: 'lime' },
    }
  }, [])

  const pA = useControls('Polyhedron A', options)
  const pB = useControls('Polyhedron B', options)

  return (
    <div style={{ width: "75vw", height: "75vh" }}>
      <Canvas camera={{ position: [3, 1, 2] }}>
        <ambientLight />
        <directionalLight />
        <Box position={[-0.75, 0, 0]} name="A" rotation={[pA.x, pA.y, pA.z]} visible={pA.visible}/>
        <Box position={[0.75, 0, 0]} name="B" rotation={[pB.x, pB.y, pB.z]} visible={pB.visible}/>
        <OrbitControls target-y={1}/>
        <axesHelper args={[5]} />
        <gridHelper args={[10,10]} />
      </Canvas>
    </div>
  );
}

export default App;
