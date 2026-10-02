const techStack = ["React.js", "Next.js", "FastAPI", "Spring Boot", "Docker"];

export function TechStack() {
	return (
		<section className="border-y border-(--border-subtle) py-10 overflow-hidden bg-(--bg-secondary)">
			<div className="flex justify-center gap-12 md:gap-24 opacity-30 text-sm font-medium tracking-[0.2em] uppercase flex-wrap max-w-7xl mx-auto px-6">
				{techStack.map((tech) => (
					<span key={tech}>{tech}</span>
				))}
			</div>
		</section>
	);
}
