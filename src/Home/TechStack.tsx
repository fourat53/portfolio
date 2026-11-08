import { Reveal } from "@/components/Reveal";

const techStack = [
	"TypeScript",
	"React.js",
	"Next.js",
	"TanStack Start",
	"Tailwind CSS",
	"FastAPI",
	"NestJS",
	"Express.js",
	"Spring Boot",
	"Django",
	"Python",
	"Java",
	"PostgreSQL",
	"MySQL",
	"MongoDB",
	"Docker",
	"Jenkins",
	"LangChain",
	"RAG",
	"ChromaDB",
	"MCP",
	"AWS S3",
];

export function TechStack() {
	const items = [...techStack, ...techStack, ...techStack, ...techStack];

	return (
		<Reveal
			variant="blur"
			className="group overflow-hidden border-y border-primary bg-bg-secondary py-10"
		>
			<section>
				<div className="flex w-max animate-[tech-scroll_40s_linear_infinite] group-hover:paused gap-12 opacity-80 text-sm font-medium tracking-[0.2em] uppercase md:gap-24 text-text-secondary">
					{items.map((tech, index) => (
						<span key={`${tech}-${index}`} className="shrink-0">
							{tech}
						</span>
					))}
				</div>
			</section>
		</Reveal>
	);
}
