import { ExperienceCard } from "@/components/Cards/ExperienceCard";

const experiences = [
	{
		date: "Apr 2025 - Nov 2025",
		company: "Echo Parrot | Onrtech",
		role: "End-of-Studies Internship",
		description:
			"Development of a VoIP SaaS platform integrating AI agents capable of interacting with customers. Built a modular RAG microservice with FastAPI, ChromaDB, and FAISS, reducing search times by 60 to 90%.",
		technologies: [
			"RAG & LLM Generation",
			"Real-time sync via Socket.IO",
			"Multi-format data ingestion",
		],
		side: "left" as const,
	},
	{
		date: "Nov 2024 - Dec 2024",
		company: "Kreatek",
		role: "Immersion Internship",
		description:
			"Contributed to the development of hotel management platforms. Created administrative interfaces for viewing and updating entities, along with a multi-page dashboard.",
		technologies: ["Full-Stack Web", "Data Visualization with Charts"],
		side: "right" as const,
	},
	{
		date: "Jul 2024 - Sep 2024",
		company: "Royal Absu | Kreatek",
		role: "Engineering Internship",
		description:
			"Developed a multi-page hotel check-in interface for entering room counts and managing guests with age-based ID scanning.",
		technologies: [
			"React 18.3 & Vite",
			"Express.js & MySQL",
			"Scandit ID Bolt & JWT Auth",
		],
		side: "left" as const,
	},
	{
		date: "Aug 2023 - Sep 2023",
		company: "Orange",
		role: "Summer Internship",
		description:
			"Developed and maintained a web platform dedicated to managing optical transport networks, providing network monitoring and incident management.",
		technologies: ["Python 3.10 & Django 4.2", "Docker, Jenkins & Pytest"],
		side: "right" as const,
	},
];

export function Experience() {
	return (
		<section
			id="experience"
			className="py-16 sm:py-20 space-y-16 sm:space-y-20 border-t border-primary relative bg-bg-primary"
		>
			<div className="text-center max-w-4xl mx-auto px-6">
				<div className="text-[11px] tracking-[0.2em] uppercase text-text-subtle mb-6">
					THE PROCESS
				</div>
				<h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">
					Your Website <br />
					<span className="italic text-text-secondary">in 4 steps</span>
				</h2>
				<p className="text-text-muted max-w-lg mx-auto font-light leading-relaxed">
					My professional journey ensures a methodical and expert approach to
					bringing your digital projects to life.
				</p>
			</div>

			<div className="max-w-5xl mx-auto px-6 relative">
				{/* Vertical Line */}
				<div className="max-md:hidden absolute left-10 md:left-1/2 -top-8 bottom-0 w-px bg-text-secondary md:-translate-x-1/2" />

				{experiences.map((exp, i) => (
					<ExperienceCard key={i} number={`0${i + 1}`} {...exp} />
				))}
			</div>
		</section>
	);
}
