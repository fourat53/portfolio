import SectionTitle from "#/layout/SectionTitle.tsx";
import { ExperienceCard } from "@/components/Cards/ExperienceCard";
import { Reveal } from "@/components/Reveal";
import { motion } from "motion/react";

const experiences = [
	{
		date: "Apr 2025 - Nov 2025",
		company: "Echo Parrot | Onrtech",
		role: "End-of-Studies Internship",
		location: "Sousse, Tunisia",
		description:
			"Developed a VoIP SaaS platform with AI agents that interact with customers. Built an animated SSG showcase website and a responsive filtered dashboard, added real-time Socket.IO updates, multi-format ingestion pipelines (PDF, DOCX, audio, images, URLs), Google Calendar, Drive and Sheets integrations, AWS S3 storage, AI assistant modules and voices and a modular FastAPI RAG microservice with ChromaDB and FAISS that reduced search time by 60 to 90%.",
		technologies: [
			"TypeScript 5, Next.js 15.5 & React",
			"FastAPI, Express.js & Python 3.11",
			"MongoDB, ChromaDB & FAISS",
			"RAG, LangChain & Socket.IO",
			"AWS S3, Google APIs & AI voice assistants",
			"Redux, SWR, Tailwind CSS, shadcn/ui & Framer Motion",
		],
		side: "left" as const,
	},
	{
		date: "Nov 2024 - Dec 2024",
		company: "Kreatek",
		role: "Immersion Internship",
		location: "Tunis, Tunisia",
		description:
			"Contributed to the development of multiple hotel management platforms. Built administrative interfaces for viewing, creating and updating entities, plus a multi-page dashboard with charts to visualize sales performance across filters.",
		technologies: [
			"JavaScript ES6+, React 18.3 & Vite",
			"Express.js, NestJS & MySQL/MongoDB",
			"Redux & Ant Design",
		],
		side: "right" as const,
	},
	{
		date: "Jul 2024 - Sep 2024",
		company: "Royal Absu | Kreatek",
		role: "Engineering Internship",
		location: "Tunis, Tunisia",
		description:
			"Developed a multi-page check-in interface for Hotel Royal Absu to enter room and resident counts and manage guest information with age-based ID scanning. Added JWT authentication and advanced admin interfaces for rooms, check-ins and residents.",
		technologies: [
			"TypeScript 5, React 18.3 & Vite",
			"Express.js, MySQL & JWT",
			"Scandit ID Bolt, Redux & Ant Design",
			"Framer Motion, Formik & i18n",
		],
		side: "left" as const,
	},
	{
		date: "Aug 2023 - Sep 2023",
		company: "Orange",
		role: "Summer Internship",
		location: "Tunis, Tunisia",
		description:
			"Developed and maintained a web platform for managing optical transport networks (OTN), with network monitoring and incident management to ensure system reliability.",
		technologies: [
			"Python 3.10 & Django 4.2",
			"MySQL, Docker & Jenkins",
			"Pytest & GitLab",
		],
		side: "right" as const,
	},
];

export function Experience() {
	return (
		<section
			id="experience"
			className="py-16 sm:py-24 border-t border-primary relative bg-bg-primary"
		>
			<SectionTitle title="Experience" />

			<div className="pb-16 sm:pb-20 text-center max-w-4xl mx-auto px-6">
				<Reveal variant="scale">
					<div>
						<h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">
							My professional <br />
							<span className="italic text-text-secondary">
								journey in 4 steps
							</span>
						</h2>
						<p className="text-text-muted max-w-lg mx-auto font-light leading-relaxed">
							Four internships across full-stack development, DevOps and AI that
							shaped a methodical and expert approach to building digital
							products.
						</p>
					</div>
				</Reveal>
			</div>

			<div className="max-w-5xl mx-auto px-6 relative">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.4, delay: 0.3 }}
					className="bg-[linear-gradient(to_bottom,transparent,var(--text-secondary)_12%,var(--accent-primary)_88%,transparent)] max-md:hidden absolute left-10 md:left-1/2 -top-8 bottom-0 w-px md:-translate-x-1/2"
				/>

				{experiences.map((exp, i) => (
					<Reveal
						key={i}
						variant={exp.side === "left" ? "left" : "right"}
						delay={60}
					>
						<ExperienceCard number={`0${i + 1}`} {...exp} />
					</Reveal>
				))}
			</div>
		</section>
	);
}
