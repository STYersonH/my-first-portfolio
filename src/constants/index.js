import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	next,
	postgre,
	prisma,
	sass,
	unsaac,
	freelancer,
	bankApp,
	deliveryFood,
	webPage,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "Sobre mí",
	},
	{
		id: "work",
		title: "Mi experiencia",
	},
	{
		id: "projects",
		title: "Proyectos",
	},
	{
		id: "contact",
		title: "Contactame",
	},
];

const services = [
	{
		title: "Desarrollador Web",
		icon: web,
	},
	{
		title: "Profesor de programación",
		icon: mobile,
	},
	{
		title: "Diseñador",
		icon: backend,
	},
	{
		title: "Creador de contenido",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "next",
		icon: next,
	},
	{
		name: "postgre",
		icon: postgre,
	},
	{
		name: "prisma",
		icon: prisma,
	},
	{
		name: "sass",
		icon: sass,
	},
];

const experiences = [
	{
		title: "Bachiller en Ingeniería de Sistemas",
		company_name: "UNSAAC",
		icon: unsaac,
		iconBg: "#383E56",
		date: "Marzo 2019 - Julio 2024",
		points: [
			"Bachiller en Ingeniería de Sistemas en la Universidad Nacional de San antonio Abad del Cusco, Perú",
			"Desarrollé la habilidad de trabajo en equipo y liderazgo.",
			"Logré dominar un pensamiento algorítmico que me permite buscar soluciones a diferentes problemas",
			"Participé como concursante y organizador de concursos de programación.",
			"Fuí parte de un círculo de estudios llamado ACM chapter UNSAAC",
		],
	},
	{
		title: "web developer freelancer",
		company_name: "Learn, Craft ´n Code",
		icon: freelancer,
		iconBg: "#383E56",
		date: "Julio 2024 - Actualidad",
		points: [
			"Estoy mejorando mi manejo de tecnologías web.",
			"Estoy volviendome mas audaz con mi lógica de programación.",
			"Estoy desarrollando proyectos interesantes e innovadores",
			"Estoy compartiendo lo que aprendo para ayudar a otros chicos en este camino",
			"Estoy mejorando mis habilidades de diseño",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Descargué una aplicación para aprender francés. Ahora puedo decir 'croissant' con acento, pero no tengo idea de cómo pedir uno.",
		name: "Lia Smith",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"Decidí ser creativo y hacer manualidades. Ahora tengo más pegamento en mis dedos que en el proyecto.",
		name: "John Doe",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"Desde que voy al gimnasio tengo la impresion de que al pedalear en las bicicletas fijas, estas generan energia electrica para el gimnasio.",
		name: "Jane Doe",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Página Hoo bank",
		description:
			"Plataforma web que muestra información sobre el banco Hoo y transmite innovación y confianza a sus usuarios. Esta página fue creada pensando en la experiencia del usuario y es responsiva.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
		],
		image: bankApp,
		source_code_link: "https://github.com/STYersonH/Bank-modern-app",
	},
	{
		name: "FoodDee delivery page",
		description:
			"Página web para mostrar un diseño atractivo y responsivo para mostrar el servicio de un restaurante delivery. Esta página fue creada para transmitir calidez y confianza a sus usuarios.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "firebase",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: deliveryFood,
		source_code_link: "https://github.com/STYersonH/food-delivery-app",
	},
	{
		name: "Mi pagina web",
		description:
			"Mi página web personal desarrollada en base a un vídeo de JSmastery y adecuada a mis necesidades y preferencias. Esta página fue creada para mostrar mis proyectos y mis habilidades como desarrollador.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "threejs",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: webPage,
		source_code_link: "https://github.com/STYersonH/my-first-portfolio",
	},
];

export { services, technologies, experiences, testimonials, projects };
