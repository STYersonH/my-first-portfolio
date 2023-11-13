import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section
			className="relative w-full h-screen mx-auto -mb-16"
			style={{ height: "calc(100vh)" }}
		>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 bg-[#005bc5] rounded-full" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					{/* <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Yerson</span></h1>*/}
					<h1 className={`${styles.heroHeadText}`}>
						Hi, I'm <span className="text-[#005bc5]">Yerson</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						I develop user interfaces, web pages{" "}
						<br className="sm:block hidden" /> really wonderful and create a
						great systems
					</p>
				</div>
			</div>
			<ComputersCanvas />

			{/* usar absolute cuando se coloca en el medio, o se superpone*/}
			<div className="absolute xs:bottom-20 bottom-20 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
