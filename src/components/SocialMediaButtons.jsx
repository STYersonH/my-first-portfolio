import React, { useState, useEffect } from "react";

const SocialMediaButtons = () => {
	const [opacity, setOpacity] = useState(0);

	useEffect(() => {
		const checkScroll = () => {
			if (window.pageYOffset > window.innerHeight / 4) {
				setOpacity(1);
			} else {
				setOpacity(0);
			}
		};

		window.addEventListener("scroll", checkScroll);

		return () => {
			window.removeEventListener("scroll", checkScroll);
		};
	}, []);

	return (
		<div
			className="md:fixed md:bottom-16 md:right-10 md:transition-opacity md:duration-500 pb-16 md:pb-0"
			style={{ opacity: opacity }}
		>
			<div class="wrapper flex justify-center md:flex-col gap-3">
				<div class="button">
					<a
						href="https://www.facebook.com/people/El-poeta-binario/61552841833924/?sk=about"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div class="icon">
							<i class="fab fa-facebook-f"></i>
						</div>
					</a>
				</div>

				<div class="button">
					<a
						href="https://www.instagram.com/elpoetabinario/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div class="icon">
							<i class="fab fa-instagram"></i>
						</div>
					</a>
				</div>

				<div class="button">
					<a
						href="https://github.com/STYersonH"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div class="icon">
							<i class="fab fa-github"></i>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default SocialMediaButtons;
