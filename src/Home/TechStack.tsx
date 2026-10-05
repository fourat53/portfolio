const techStack = ["React.js", "Next.js", "FastAPI", "Spring Boot", "Docker"];

export function TechStack() {
	const items = [
		...techStack,
		...techStack,
		...techStack,
		...techStack,
		...techStack,
	];

	return (
		<section className="group overflow-hidden border-y border-primary bg-bg-secondary py-10">
			<div className="flex w-max animate-[tech-scroll_20s_linear_infinite] group-hover:paused gap-12 opacity-80 text-sm font-medium tracking-[0.2em] uppercase md:gap-24 text-text-secondary">
				{items.map((tech, index) => (
					<span key={`${tech}-${index}`} className="shrink-0">
						{tech}
					</span>
				))}
			</div>
		</section>
	);
}
