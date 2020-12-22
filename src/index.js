import { useLoader, Canvas } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import ReactDOM from 'react-dom'
import React, { Suspense, useState, useRef } from 'react'
import { OrbitControls, Box } from 'drei'
import { useGLTF } from '@react-three/drei/useGLTF'
import { VRCanvas, DefaultXRControllers, Hover, Select } from 'react-xr'
// import Chessboard from './Chessboard'
import './styles.css'

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
function Chessboard(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/chessboard/chessboardCentered.gltf')
  return (
    <group ref={group} {...props} dispose={null} position={[0, 1.40, -0.54]}>
      <mesh material={materials.BlocksPaper} geometry={nodes['node_MeshObject1316465664-PolyPaper21'].geometry} />
    </group>
  )
}

function Knight(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/knight/chessKnight.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={[0.5, 0.5, 0.5]}>
      <mesh material={materials.BlocksPaper} geometry={nodes['node_MeshObject-1328424064-PolyPaper23'].geometry} />
    </group>
  )
}

const App = () => {
  // const [isHovered, setIsHovered] = useState(false)
  // const color = isHovered ? 'blue' : '#e23'

  return (
    <VRCanvas>
      <ambientLight />
      <spotLight />

      <OrbitControls />

      {/* <Hover onChange={setIsHovered}>
        <Box position={[0, 0.8, -1]} scale={[0.3, 0.3, 0.3]}>
          <meshStandardMaterial color={color} />
        </Box>
      </Hover> */}

      <Suspense fallback={null}>
        <Chessboard />
        <Select onSelect={() => console.log('mesh has been selected')}>
          <Knight position={[-0.28, 1.44, -0.82]} rotation={[0, -Math.PI / 2, 0]}/>
          <Knight position={[-0.20, 1.44, -0.82]} rotation={[0, -Math.PI / 2, 0]}/>
          <Knight position={[-0.12, 1.44, -0.82]} rotation={[0, -Math.PI / 2, 0]}/>
          <Knight position={[-0.04, 1.44, -0.82]} rotation={[0, -Math.PI / 2, 0]}/>
          <Knight position={[0.04, 1.44, -0.82]} rotation={[0, -Math.PI / 2, 0]}/>
          <Knight position={[0.12, 1.44, -0.82]} rotation={[0, -Math.PI / 2, 0]}/>
          <Knight position={[0.20, 1.44, -0.82]} rotation={[0, -Math.PI / 2, 0]}/>
          <Knight position={[0.28, 1.44, -0.82]} rotation={[0, -Math.PI / 2, 0]}/>

          <Knight position={[-0.28, 1.44, -0.74]} rotation={[0, -Math.PI / 2, 0]}/>
          <Knight position={[-0.20, 1.44, -0.74]} rotation={[0, -Math.PI / 2, 0]}/>
          <Knight position={[-0.12, 1.44, -0.74]} rotation={[0, -Math.PI / 2, 0]}/>
          <Knight position={[-0.04, 1.44, -0.74]} rotation={[0, -Math.PI / 2, 0]}/>
          <Knight position={[0.04, 1.44, -0.74]} rotation={[0, -Math.PI / 2, 0]}/>
          <Knight position={[0.12, 1.44, -0.74]} rotation={[0, -Math.PI / 2, 0]}/>
          <Knight position={[0.20, 1.44, -0.74]} rotation={[0, -Math.PI / 2, 0]}/>
          <Knight position={[0.28, 1.44, -0.74]} rotation={[0, -Math.PI / 2, 0]}/>

          <Knight position={[-0.28, 1.44, -0.26]} rotation={[0, Math.PI / 2, 0]}/>
          <Knight position={[-0.20, 1.44, -0.26]} rotation={[0, Math.PI / 2, 0]}/>
          <Knight position={[-0.12, 1.44, -0.26]} rotation={[0, Math.PI / 2, 0]}/>
          <Knight position={[-0.04, 1.44, -0.26]} rotation={[0, Math.PI / 2, 0]}/>
          <Knight position={[0.04, 1.44, -0.26]} rotation={[0, Math.PI / 2, 0]}/>
          <Knight position={[0.12, 1.44, -0.26]} rotation={[0, Math.PI / 2, 0]}/>
          <Knight position={[0.20, 1.44, -0.26]} rotation={[0, Math.PI / 2, 0]}/>
          <Knight position={[0.28, 1.44, -0.26]} rotation={[0, Math.PI / 2, 0]}/>

          <Knight position={[-0.28, 1.44, -0.34]} rotation={[0, Math.PI / 2, 0]}/>
          <Knight position={[-0.20, 1.44, -0.34]} rotation={[0, Math.PI / 2, 0]}/>
          <Knight position={[-0.12, 1.44, -0.34]} rotation={[0, Math.PI / 2, 0]}/>
          <Knight position={[-0.04, 1.44, -0.34]} rotation={[0, Math.PI / 2, 0]}/>
          <Knight position={[0.04, 1.44, -0.34]} rotation={[0, Math.PI / 2, 0]}/>
          <Knight position={[0.12, 1.44, -0.34]} rotation={[0, Math.PI / 2, 0]}/>
          <Knight position={[0.20, 1.44, -0.34]} rotation={[0, Math.PI / 2, 0]}/>
          <Knight position={[0.28, 1.44, -0.34]} rotation={[0, Math.PI / 2, 0]}/>
        </Select>
      </Suspense>
      <DefaultXRControllers />
    </VRCanvas>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))