import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motion";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		user_name: "",
		user_email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// la informacion la obtendremos de emailjs

		console.log(form);
		emailjs
			.sendForm(
				"service_5rdrmzl", //id Service
				"template_5nj62ej", //id template
				formRef.current,
				/*
				{
					//datos
					from_name: form.user_name,
					to_name: "Yerson",
					from_email: form.user_email,
					to_email: "yerson2737182731@gmail.com",
					message: form.message,
				},*/
				"3grkIt1WqO7S7xDen" //key publica
			)
			.then((result) => {
				setLoading(false);
				toast.success("Your message have been sended!", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				setForm({
					name: "",
					email: "",
					message: "",
				}),
					(error) => {
						setLoading(false);
						toast.error("Something went wrong!", {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "dark",
						});
					};
			});
	};

	return (
		/* overflow-hidden : esconde lo sobresaliente al div*/
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>¿Quieres trabajar conmigo?</p>
				<h3 className={styles.sectionHeadText}>Contacto.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Tu nombre</span>
						<input
							type="text"
							name="user_name"
							value={form.name}
							onChange={handleChange}
							placeholder="¿Cuál es tu nombre?"
							className="bg-tertiary py-4 px-6 text-white rounded-lg outlined-none border-none font-medium placeholder:text-secondary"
						/>
					</label>

					<label htmlFor="" className="flex flex-col">
						<span className="text-white font-medium mb-4">Tu correo electrónico</span>
						<input
							type="email"
							name="user_email"
							value={form.email}
							onChange={handleChange}
							placeholder="¿Cuál es tu correo electrónico?"
							className="bg-tertiary py-4 px-6 text-white rounded-lg outlined-none border-none font-medium placeholder:text-secondary"
						/>
					</label>

					<label htmlFor="" className="flex flex-col">
						<span className="text-white font-medium mb-4">Tu mensaje</span>
						<textarea
							rows="7"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="¿Qué quieres decirme?"
							className="bg-tertiary py-4 px-6 text-white rounded-lg outlined-none border-none font-medium placeholder:text-secondary"
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
					>
						{loading ? "Enviando..." : "Enviar"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

// permite ademas ir a la seccion que estamos buscando
export default SectionWrapper(Contact, "contact");
