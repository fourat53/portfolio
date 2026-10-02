import { createFileRoute } from "@tanstack/react-router";
import { About } from "#/Home/About";
import { Experience } from "#/Home/Experience";
import { Hero } from "#/Home/Hero";
import { Projects } from "#/Home/Projects";
import { Services } from "#/Home/Services";
import { TechStack } from "#/Home/TechStack";
import { Footer } from "#/layout/Footer.tsx";
import { Navbar } from "#/layout/Navbar.tsx";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="min-h-screen font-sans overflow-x-hidden bg-(--bg-primary) text-(--text-primary)">
			<Navbar />
			<main>
				<Hero />
				<TechStack />
				<Services />
				<Projects />
				<Experience />
				<About />
			</main>
			<Footer />
		</div>
	);
}
