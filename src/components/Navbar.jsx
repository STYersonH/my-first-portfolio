import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, logoY, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		// z-20 : para el orden de aparicion en la dimension z
		<nav
			className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#0C2948] `}
		>
			<div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
				<Link
					to="/"
					className="flex items-center gap-4"
					onClick={() => {
						setActive("");
						//ira al top de mi pagina
						window.scrollTo(0, 0);
					}}
				>
					<img src={logoY} alt="logoY" className="w-9 h-9 object-contain" />
					{/* &nbsp : caracter de espacio */}
					{/* hidden : se aplica de acuerdo a sm:*/}
					<p className="text-white text-[18px] font-bold cursor-pointer flex">
						Yerson &nbsp;{" "}
						<span className="sm:block hidden">| &nbsp;D3V3L0P3R</span>{" "}
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((link) => (
						// generando la navegacion
						// si se da click se quedara activo
						<li
							key={link.id}
							className={`${
								active === link.title ? "text-white" : "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(link.title)}
						>
							{/* Ira a donde se tenga el id en la misma pagina */}
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>

				{/* para equipos pequenios, no habra una navegacion asi */}
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						// object-contain -> redimensionamos el objeto
						className="w-[25px] h-[25px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
					{/* estilos de la navegacion para celulares */}
					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className="list-none flex justify-end items-start flex-col gap-4">
							{navLinks.map((link) => (
								// generando la navegacion
								// si se da click se quedara activo
								<li
									key={link.id}
									className={`${
										active === link.title ? "text-white" : "text-secondary"
									} font-poppins font-medium cursor-pointer text-[16px]`}
									onClick={() => {
										setToggle(!toggle); // cerrar el togle una vez se seleccione
										setActive(link.title); // activar lo que se necesite
									}}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
