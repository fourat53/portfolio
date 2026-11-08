import { ServiceCard } from "@/components/Cards/ServiceCard";
import { Reveal } from "@/components/Reveal";

const services = [
	{
		number: "01",
		title: "Frontend",
		description:
			"Visually stunning, responsive interfaces built with React, Next.js, TanStack Start, Tailwind CSS, shadcn/ui, Ant Design, and Framer Motion.",
		linkText: "SEE FRONTEND WORK",
		linkHref: "#projects",
	},
	{
		number: "02",
		title: "Backend",
		description:
			"Robust APIs, microservices, and databases tailored to your specifications with Express.js, NestJS, FastAPI, Spring Boot, Django, JWT, OAuth2, Swagger, and SQL or NoSQL storage.",
		linkText: "SEE BACKEND WORK",
		linkHref: "#projects",
	},
	{
		number: "03",
		title: "DevOps & AI",
		description:
			"Reliable delivery with Docker, Jenkins, GitLab CI/CD, and Linux, plus cutting-edge AI integrations such as RAG, LLMs, prompt engineering, and MCP.",
		linkText: "SEE DEVOPS & AI WORK",
		linkHref: "#projects",
	},
];

export function Services() {
	return (
		<section
			id="services"
			className="py-16 sm:py-24 md:py-32 max-w-7xl mx-auto px-6"
		>
			<div className="grid md:grid-cols-3 gap-6">
				{services.map((service, index) => (
					<Reveal
						key={service.number}
						variant={index === 0 ? "left" : index === 1 ? "up" : "right"}
						delay={index * 140}
						className="h-full"
					>
						<ServiceCard {...service} className="h-full" />
					</Reveal>
				))}
			</div>
		</section>
	);
}
