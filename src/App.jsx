import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	StarsCanvas,
	Tech,
	Works,
} from "./components";
import SocialMediaButtons from "./components/SocialMediaButtons";

function App() {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				{/* definicion de bg-hero-pattern in tailwind.config.cjs*/}
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>

				<About />
				<div className="-mb-40">
					<Experience />
				</div>

				<div className="bg-tech-pattern-up w-screen h-[450px] bg-cover bg-no-repeat z-10" />
				<div className="-my-20 bg-[#0C2948]">
					{/* Tech esta dentro de un section que es definido en SectionWrapper.tsx */}
					<Tech />
				</div>
				<div className="bg-tech-pattern-down w-screen h-[450px] bg-cover bg-no-repeat" />

				<div className="-mt-48">
					<Works />
				</div>

				<Feedbacks />

				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>

				<SocialMediaButtons />
			</div>
		</BrowserRouter>
	);
}

export default App;
