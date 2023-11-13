import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
//useGLTF nos permitira importar los modelos 3d
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
	// el modelo se encuentra en esa ubicacion
	const computer = useGLTF("./desktop_pc/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.7 : 0.75}
				position={isMobile ? [0, -2.75, -2.2] : [0, -2.75, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// add a listener for changes to the screen
		// si es menor a 500px
		const mediaQuery = window.matchMedia("(max-width: 500px)");

		// set the initial value of the 'isMobile' state variable
		setIsMobile(mediaQuery.matches);

		//Define a callback function to handle changes to the media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		//Add the callback function as a listener for changes to the media query
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		// Remove the listener when the compient is unmounted
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows
			//la camara es la parte mas importante de un modelo 3d
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			{/* Suspense es de react : tener un loader cuando el modelo esta cargando*/}
			{/* CanvasLoader es un componente que muestra el porcentaje mientras se esta cargando */}
			<Suspense fallback={<CanvasLoader />}>
				{/* para mover el modelo de izquierda a derecha*/}
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
