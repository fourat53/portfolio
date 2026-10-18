import { IconArrowRight } from "@tabler/icons-react";
import { ProjectCard } from "@/components/Cards/ProjectCard";

const projects = [
	{
		category: "FULL-STACK WEB",
		title: "Shopofort",
		description:
			"E-commerce platform with Next.js, Prisma, and Kinde Auth. Featuring a dynamic catalog, dashboard, and Zod validation.",
		imageUrl: "chatAI.png",
		link: "https://shopofort.vercel.app/",
	},
	{
		category: "FULL-STACK WEB & AI",
		title: "Echo Parrot",
		description:
			"SaaS VoIP platform with FastAPI, ChromaDB, and FAISS. Features real-time chat, RAG microservice, and AI agents for customer interaction.",
		imageUrl: "chatAI.png",
		link: "https://ai-chat-front-mauve.vercel.app/",
	},
	{
		category: "FULL-STACK WEB & AI",
		title: "Chat AI",
		description:
			"RAG system with LangChain, Pinecone, Gemini, and FastAPI for semantic search and AI generation.",
		imageUrl: "chatAI.png",
		link: "https://ai-chat-front-mauve.vercel.app/",
	},
	{
		category: "DEVOPS",
		title: "DevOps Project",
		description:
			"CI/CD pipelines, Docker deployment, Spring Boot testing with Mockito, SonarQube, Prometheus & Grafana.",
		imageUrl: "chatAI.png",
		link: "https://ai-chat-front-mauve.vercel.app/",
	},
];

export function Projects() {
	return (
		<section
			id="projects"
			className="py-16 sm:py-20 lg:py-24 border-t border-primary bg-bg-secondary"
		>
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
					<h2 className="text-3xl sm:text-4xl text-text-secondary font-medium uppercase font-heading">
						Projects
					</h2>
					<a
						href="/"
						className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-text-muted hover:text-text-primary transition-colors"
					>
						<span className="border rounded-full p-2.5">
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
