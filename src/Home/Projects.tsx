import { IconArrowRight } from "@tabler/icons-react";
import { ProjectCard } from "@/components/Cards/ProjectCard";

const projects = [
	{
		category: "FULL-STACK WEB",
		title: "Shopofort",
		description:
			"E-commerce platform with Next.js, Prisma, and Kinde Auth. Featuring a dynamic catalog, dashboard, and Zod validation.",
		imagePosition: "right-top" as const,
	},
	{
		category: "FULL-STACK WEB & IA",
		title: "Chat AI",
		description:
			"RAG system with LangChain, Pinecone, Gemini, and FastAPI for semantic search and AI generation.",
		imagePosition: "right-center" as const,
	},
	{
		category: "DEVOPS",
		title: "Projet DevOps",
		description:
			"CI/CD pipelines, Docker deployment, Spring Boot testing with Mockito, SonarQube, Prometheus & Grafana.",
		imagePosition: "right-bottom" as const,
	},
	{
		category: "FULL-STACK WEB",
		title: "FreeLearn",
		description:
			"E-learning platform using React, Spring Boot, and OAuth2 for course tracking and enrollment.",
		imagePosition: "full" as const,
	},
];

export function Projects() {
	return (
		<section
			id="work"
			className="py-20 border-t border-(--border-subtle) bg-(--bg-secondary)"
		>
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
					<h2 className="text-4xl md:text-5xl text-(--text-secondary) display-title">
						Projects
					</h2>
					<a
						href="/"
						className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-(--text-muted) hover:text-(--text-primary) transition-colors"
					>
						<span className="border border-(--border-subtle) rounded-full p-2.5">
							<IconArrowRight size={14} stroke={1.5} />
						</span>
						SEE ALL
					</a>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					{projects.map((project) => (
						<ProjectCard key={project.title} {...project} />
					))}
				</div>
			</div>
		</section>
	);
}
