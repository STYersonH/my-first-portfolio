import React from "react";
//para mostrar las cards con esa animacion tan prrona
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="sm:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-blue-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					// se pasan propiedades para el div con options
					options={{
						max: 45, // angulo de inclinacion
						scale: 1, // factor de escala, 1 : no sera escalado
						speed: 450, // velocidad de inclinacion, 450ms
					}}
					//justify-evenly -> |   *   *   *   |
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[20px] text-center">{title}</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			{/* motion.div para envolver elementos que se desea animar 
      en este caso se esta animando con las propiedades definidas en
      textVariant()*/}
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introducción</p>
				<h2 className={styles.sectionHeadText}>Sobre mí.</h2>
			</motion.div>

			<motion.p
				// direction, type, delay, duracion de la animacion
				variants={fadeIn("", "", 0.1, 1)}
				// leading-[30px] : distancia entre lineas de texto
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Soy un desarrollador de software capacitado en Javascript y TypeScript con gran experiencia en frameworks como React, Node.js, Next.js. Aprendo rápido, tengo una excelente manera de trabajar en equipos y colaboro estrechamente con mis clientes para crear soluciones eficientes, escalables y fáciles de usar que resuelven problemas del mundo real. ¡Quiero trabajar contigo y hacer realidad tus ideas!
				{/* I'm a skilled software developer with experience in TypeScript and
				JavaScript with a great experience in frameworks like React, Node.js,
				Next.js and others. I'm a quick learner, I have a great way working in
				teams and collaborate closely with clients to create efficient,
				scalable, and user-friendly solutions that solve real-world problems. I
				want to work with you and make your ideas reality! */}
			</motion.p>

			{/* flex-wrap acomodara los items que ya no quepan abajo */}
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					//{...service} se pasara como las propiedades title y icon
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

// Cuando haces clic en un enlace en la barra de navegación que tiene href="#about", el navegador te llevará a la sección de la página con el id "about", que es donde se renderiza el componente About.

// exportamos About que ha sido envuelto en el comp SectionWrapper
export default SectionWrapper(About, "about");
