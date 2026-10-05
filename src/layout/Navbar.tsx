"use client";

import { useEffect, useState } from "react";
import Navigation from "./Navigation";

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => setScrolled(window.scrollY > 20));
		return () =>
			window.removeEventListener("scroll", () =>
				setScrolled(window.scrollY > 20),
			);
	}, []);

	return (
		<header
			className={`fixed text-text-primary top-0 w-full z-50 transition-all bg-transparent backdrop-blur-md  ${
				scrolled && "border-b border-primary/40"
			}`}
		>
			<Navigation />
		</header>
	);
}
