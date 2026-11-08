import { IconArrowRight } from "@tabler/icons-react";
import {
	ProjectCard,
	type ProjectCardProps,
} from "@/components/Cards/ProjectCard";
import { Reveal } from "@/components/Reveal";

const projects: ProjectCardProps[] = [
	{
		category: "FULL-STACK WEB",
		title: "Shopofort",
		description:
			"Personal clothing e-commerce platform with a filterable catalog, search, pagination, product variants, image gallery, ratings, persistent cart, and checkout flow. Includes Kinde Auth with ADMIN and USER roles, a typed seven-entity admin back-office with bulk CRUD and Zod-validated forms, and a Recharts analytics dashboard. Built with Next.js, TypeScript, PostgreSQL, Prisma, Tailwind CSS, and shadcn/ui.",
		imageNumber: 5,
		link: "https://shopofort.vercel.app/",
	},
	{
		category: "FULL-STACK WEB & AI",
		title: "Chat AI",
		description:
			"Personal multi-provider AI chat application with streaming responses, conversation management, authentication, and global state. Features a RAG system with LangChain, Pinecone, and Gemini embeddings for semantic search and generation from attached files. Built with Next.js, TypeScript, FastAPI, Python, MongoDB, Zustand, TanStack Query, Better Auth, OpenAI, Tailwind CSS, and shadcn/ui.",
		imageNumber: 2,
		link: "https://ai-chat-front-mauve.vercel.app/",
	},
	{
		category: "FULL-STACK WEB & AI",
		title: "Echo Parrot",
		imageNumber: 6,
		description:
			"VoIP SaaS platform with AI agents and voice assistants. Includes an animated static site generation (SSG) showcase website, a responsive dashboard with filters, real-time Socket.IO updates, multi-format ingestion pipelines for PDF, DOCX, audio, images, and URLs, Google and AWS integrations, and a modular FastAPI RAG microservice with ChromaDB and FAISS that reduced search time by 60 to 90%.",
		link: "https://echoparrot.com/en/",
	},
];

const additionalProjects = [
	{
		category: "DEVOPS",
		title: "DevOps Project",
		period: "Oct 2024 - Nov 2024",
		description:
			"Esprit CI/CD project for a Spring Boot 3.3 application with Maven, Jenkins, Docker, and SonarQube. Added Mockito and JUnit tests, published the JDK image to Docker Hub, and analyzed container performance with Prometheus and Grafana. Built with Java 17, MySQL, and Vagrant.",
	},
	{
		category: "FULL-STACK MOBILE",
		title: "MealMate",
		period: "Oct 2024 - Nov 2024",
		description:
			"Esprit mobile app for planning meals, tracking dietary preferences, and accessing personalized recipes. Built with Flutter, Dart, Firebase, and Firestore.",
	},
	{
		category: "FULL-STACK WEB",
		title: "FreeLearn",
		period: "Jul 2023 - Aug 2023",
		description:
			"Personal online learning platform with authentication, registration, and course tracking through uploaded files. Built with React, Vite, Material UI, Spring Boot, and OAuth2.",
	},
	{
		category: "DESKTOP, WEB & MOBILE",
		title: "Jobtopia",
		period: "Jan 2023 - Apr 2023",
		description:
			"Freelance management platform for clients and freelancers, with skill evaluation to simplify search. Presented at the Esprit project fair and built with JavaFX, Symfony, Bootstrap, and Codename One.",
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
					<Reveal variant="left" delay={0}>
						<h2 className="text-3xl sm:text-4xl text-text-secondary font-medium uppercase font-heading">
							Projects
						</h2>
					</Reveal>
					<Reveal variant="right" delay={120}>
						<a
							href="https://github.com/fourat53"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-text-muted hover:text-text-primary transition-colors"
						>
							<span className="border rounded-full p-2.5">
								<IconArrowRight size={14} stroke={1.5} />
							</span>
							SEE MORE ON GITHUB
						</a>
					</Reveal>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<Reveal
							key={project.title}
							variant={index % 2 === 0 ? "left" : "right"}
							delay={(index % 2) * 120 + Math.floor(index / 2) * 60}
						>
							<ProjectCard {...project} />
						</Reveal>
					))}
				</div>

				<div className="mt-12 border-t border-primary pt-10">
					<Reveal variant="up" delay={80}>
						<div className="mb-6 flex flex-wrap items-end justify-between gap-3">
							<h3 className="text-[11px] tracking-[0.2em] uppercase text-text-subtle">
								More projects
							</h3>
							<span className="text-[10px] tracking-[0.16em] uppercase text-text-subtle">
								Selected academic and personal work
							</span>
						</div>
					</Reveal>
					<div className="grid gap-6 md:grid-cols-2">
						{additionalProjects.map((project, index) => (
							<Reveal
								key={project.title}
								variant={index % 2 === 0 ? "left" : "right"}
								delay={(index % 2) * 120}
								className="h-full"
							>
								<article className="h-full border border-primary bg-bg-primary p-5 md:p-6">
									<div className="mb-3 flex flex-wrap items-center justify-between gap-2">
										<span className="text-[10px] tracking-[0.2em] uppercase text-text-subtle">
											{project.category}
										</span>
										<span className="text-[10px] tracking-[0.16em] uppercase text-text-subtle">
											{project.period}
										</span>
									</div>
									<h3 className="mb-3 font-display text-2xl text-text-secondary">
										{project.title}
									</h3>
									<p className="text-sm font-light leading-relaxed text-text-muted">
										{project.description}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
