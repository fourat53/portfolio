import SectionTitle from "#/layout/SectionTitle.tsx";
import { ServiceCard } from "@/components/Cards/ServiceCard";
import { Reveal } from "@/components/Reveal";

const services = [
	{
		number: "01",
		title: "Frontend",
		description:
			"Visually stunning, responsive interfaces built with React, Next.js, TanStack Start, Tailwind CSS, shadcn/ui, Ant Design and Framer Motion.",
		linkText: "VIEW FRONTEND STACK",
		stack: [
			{
				category: "Frameworks & Languages",
				items: [
					"React.js",
					"Next.js",
					"TanStack Start",
					"Vite",
					"TypeScript",
					"JavaScript (ES6+)",
				],
			},
			{
				category: "State & Data",
				items: ["Redux", "Zustand", "SWR", "TanStack Query", "Zod", "Axios"],
			},
			{
				category: "UI & Styling",
				items: [
					"Tailwind CSS",
					"shadcn/ui",
					"Ant Design",
					"Material UI",
					"Bootstrap",
					"Framer Motion",
				],
			},
			{
				category: "Forms & Visualization",
				items: ["Formik", "i18n", "Recharts"],
			},
		],
	},
	{
		number: "02",
		title: "Backend",
		description:
			"Robust APIs, microservices and databases tailored to your specifications with Express.js, NestJS, FastAPI, Spring Boot, Django, JWT, OAuth2, Swagger and SQL or NoSQL storage.",
		linkText: "VIEW BACKEND STACK",
		stack: [
			{
				category: "Frameworks & Runtime",
				items: [
					"Express.js",
					"NestJS",
					"FastAPI",
					"Spring Boot",
					"Django",
					"Symfony",
					"Socket.IO",
				],
			},
			{
				category: "Languages",
				items: ["TypeScript", "JavaScript (ES6+)", "Python", "Java", "PHP"],
			},
			{
				category: "Data & Storage",
				items: [
					"MongoDB",
					"PostgreSQL",
					"MySQL",
					"SQLite",
					"Firestore",
					"Firebase",
					"Prisma",
					"AWS S3",
					"UploadThing",
				],
			},
			{
				category: "APIs, Auth & Architecture",
				items: [
					"REST APIs",
					"Microservices",
					"MVC",
					"JWT",
					"OAuth2",
					"Swagger",
					"Kinde Auth",
					"Better Auth",
					"Google APIs",
				],
			},
		],
	},
	{
		number: "03",
		title: "DevOps & AI",
		description:
			"Reliable delivery with Docker, Jenkins, GitLab CI/CD and Linux, plus cutting-edge AI integrations such as RAG, LLMs, prompt engineering and MCP.",
		linkText: "VIEW DEVOPS & AI STACK",
		stack: [
			{
				category: "Delivery & Automation",
				items: [
					"Docker",
					"Jenkins",
					"GitLab CI/CD",
					"Git",
					"GitHub",
					"Linux Shell",
					"Maven",
				],
			},
			{
				category: "Quality & Testing",
				items: [
					"SonarQube",
					"JUnit",
					"Mockito",
					"Pytest",
					"Prometheus",
					"Grafana",
					"Vagrant",
				],
			},
			{
				category: "AI Engineering",
				items: [
					"RAG",
					"LangChain",
					"OpenAI",
					"Gemini Embeddings",
					"Prompt Engineering",
					"MCP",
					"LLMs",
				],
			},
			{
				category: "Vector Search",
				items: ["ChromaDB", "FAISS", "Pinecone", "Semantic Search"],
			},
		],
	},
];

export function Services() {
	return (
		<section
			id="services"
			className="py-16 sm:py-24 md:py-32 max-w-7xl mx-auto px-6"
		>
			<SectionTitle title="Services" />

			<div className="grid md:grid-cols-3 gap-6">
				{services.map((service, index) => (
					<Reveal
						key={service.number}
						variant={index === 0 ? "left" : index === 1 ? "up" : "right"}
						delay={index * 140}
						className="h-full"
					>
						<ServiceCard {...service} />
					</Reveal>
				))}
			</div>
		</section>
	);
}
