import { ServiceCard } from "@/components/Cards/ServiceCard";

const services = [
	{
		number: "01",
		title: "Frontend",
		description:
			"Visually stunning web designs that captivate your audience using React, Next.js, and modern UI libraries like Tailwind CSS and Framer Motion.",
		linkText: "ABOUT FRONTEND",
		linkHref: "/",
	},
	{
		number: "02",
		title: "Backend",
		description:
			"Robust custom web development and microservices tailored to your specifications with FastAPI, Spring Boot, and Express.js.",
		linkText: "ABOUT BACKEND",
		linkHref: "/",
	},
	{
		number: "03",
		title: "DevOps & AI",
		description:
			"Enhancing performance and integrating cutting-edge AI (RAG, LLMs) to bring your platform to the forefront of technology.",
		linkText: "ABOUT DEVOPS & AI",
		linkHref: "/",
	},
];

export function Services() {
	return (
		<section id="services" className="py-32 max-w-7xl mx-auto px-6">
			<div className="grid md:grid-cols-3 gap-6">
				{services.map((service) => (
					<ServiceCard key={service.number} {...service} />
				))}
			</div>
		</section>
	);
}
