import { Card } from "@/components/ui/card";

interface ProjectCardProps {
	category: string;
	title: string;
	description: string;
	imageUrl?: string;
	link?: string;
}

function ProjectCard({
	category,
	title,
	description,
	imageUrl,
	link,
}: ProjectCardProps) {
	return (
		<Card variant="project" className="group">
			<div className="z-20 flex flex-col justify-between">
				<img
					alt="project-picture"
					src={imageUrl}
					className="w-full h-[50%] border"
				/>
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="text-xl hover:underline sm:text-3xl text-text-secondary group-hover:text-accent-secondary transition-colors font-medium font-display"
				>
					{title}
				</a>
				<p className="text-sm text-stone-400 font-light">{description}</p>

				<span className="absolute top-3 right-4 w-fit text-[10px] tracking-[0.2em] uppercase text-stone-500 border border-white/10 px-3 py-1 rounded-full bg-background backdrop-blur-md">
					{category}
				</span>
			</div>
		</Card>
	);
}

export { ProjectCard, type ProjectCardProps };
