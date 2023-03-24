import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei';
import CanvasLoader from '../Loader';
import { MeshStandardMaterial } from 'three';


const Ball = (props) => {

  // cargamos la imagen como una textura y asignarla a la variable "decal"
  const [decal] = useTexture([props.imgURL]);

  return (
    // Float : crear la animacion de flotacion de la esfera
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
    >
      {/* se crean 2 luce, una ambiental y una direccional */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0,0,0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial
          color="#ff8eb"
          // para crear un aspecto mas suave
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* para aplicar la textura decal*/}
        <Decal 
          position={[0,0,1]}
          // rotar ya que los iconos estaban en direccion contraria
          rotation={[2*Math.PI, 0, 6.25 ]}
          flatShading
          // la imagen proporcionada
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand' // se controla el bucle de renderizado
      // demand : se renderizara cuando se solicite
      gl={{ preserveDrawingBuffer: true }} // canvas manendra
      // su contenido dibujado incluso después de que se desmonte
    >
      {/* Suspense es de react : tener un loader cuando el modelo esta cargando*/}
      {/* CanvasLoader es un componente que muestra el porcentaje mientras se esta cargando */}
      <Suspense fallback={<CanvasLoader />}>
        {/* para mover el modelo de izquierda a derecha,
        basicamente controlar la camara del objeto 3D */}
        <OrbitControls enableZoom={false} /* no se puede hacer zoom */ />
        <Ball imgURL={icon}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas