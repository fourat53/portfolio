import { ExperienceCard } from "@/components/Cards/ExperienceCard";

const experiences = [
	{
		date: "Avril 2025 - Nov 2025",
		company: "Echo Parrot | Onrtech",
		role: "Stage de fin d'études",
		description:
			"Développement d'une plateforme SaaS VoIP intégrant des agents IA capables d'interagir avec les clients. Conception d'un microservice RAG modulaire avec FastAPI, ChromaDB et FAISS, réduisant de 60 à 90% le temps de recherche.",
		technologies: [
			"RAG & LLM Generation",
			"Real-time sync via Socket.IO",
			"Multi-format data ingestion",
		],
		side: "left" as const,
	},
	{
		date: "Nov 2024 - Déc 2024",
		company: "Kreatek",
		role: "Stage d'immersion",
		description:
			"Participation au développement de plateformes de gestion hôtelière. Création d'interfaces administratives permettant la consultation et modification des entités, ainsi qu'un dashboard multipage.",
		technologies: ["Full-Stack Web", "Data Visualization with Charts"],
		side: "right" as const,
	},
	{
		date: "Juillet 2024 - Sept 2024",
		company: "Royal Absu | Kreatek",
		role: "Stage ingénieur",
		description:
			"Développement d'une interface de check-in multipage pour hôtel, permettant la saisie du nombre de chambres et gestion des résidents avec ID Scan selon l'âge.",
		technologies: [
			"React 18.3 & Vite",
			"Express.js & MySQL",
			"Scandit ID Bolt & JWT Auth",
		],
		side: "left" as const,
	},
	{
		date: "Août 2023 - Sept 2023",
		company: "Orange",
		role: "Stage d'été",
		description:
			"Développement et maintenance d'une plateforme web dédiée à la gestion des réseaux de transport optique, offrant la surveillance et la gestion des incidents.",
		technologies: ["Python 3.10 & Django 4.2", "Docker, Jenkins & Pytest"],
		side: "right" as const,
	},
];

export function Experience() {
	return (
		<section className="py-32 border-t border-(--border-subtle) relative bg-(--bg-primary)">
			<div className="text-center mb-24 max-w-4xl mx-auto px-6">
				<div className="text-[11px] tracking-[0.2em] uppercase text-(--text-subtle) mb-6">
					THE PROCESS
				</div>
				<h2 className="display-title text-5xl md:text-7xl mb-8">
					Your Website <br />
					<span className="italic text-(--text-secondary)">in 4 steps</span>
				</h2>
				<p className="text-(--text-muted) max-w-lg mx-auto font-light leading-relaxed">
					Mon parcours professionnel assure une création méthodique et experte
					de vos projets numériques.
				</p>
			</div>

			<div className="max-w-5xl mx-auto px-6 relative">
				{/* Vertical Line */}
				<div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-px bg-(--border-subtle) md:-translate-x-1/2" />

				{experiences.map((exp, i) => (
					<ExperienceCard key={i} number={`0${i + 1}`} {...exp} />
				))}
			</div>
		</section>
	);
}
