import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10 w-full lg:px-[15%]">
			{technologies.map((technology) => (
				<div className="w-28 h-28" key={technology.name}>
					<BallCanvas icon={technology.icon} />
				</div>
			))}
		</div>
	);
};

export default Tech;
