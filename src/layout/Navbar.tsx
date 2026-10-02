"use client";

import { useEffect, useState } from "react";
import Navigation from "./Navigation";

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed text-(--text-primary) top-0 w-full z-50 transition-all ${
				scrolled
					? "bg-(--bg-primary)/90 backdrop-blur-md border-b border-(--border-subtle)"
					: "bg-transparent"
			}`}
		>
			<Navigation />
		</header>
	);
}
