import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
//useGLTF nos permitira importar los modelos 3d
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'

const Computers = () => {

  // el modelo se encuentra en esa ubicacion
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
      /> 
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      //la camara es la parte mas importante de un modelo 3d
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense es de react : tener un loader cuando el modelo esta cargando*/}
      <Suspense fallback={<CanvasLoader />}>
        {/* para mover el modelo de izquierda a derecha*/}
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default Computers