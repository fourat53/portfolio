import { Card } from "@/components/ui/card";

interface ProjectCardProps {
	category: string;
	title: string;
	description: string;
	imageUrl?: string;
	imagePosition?: "right-top" | "right-center" | "right-bottom" | "full";
	className?: string;
}

function ProjectCard({
	category,
	title,
	description,
	imageUrl,
	className = "",
}: ProjectCardProps) {
	return (
		<div className="group cursor-pointer">
			<Card
				variant="project"
				hover
				padding="lg"
				className={`h-100 flex flex-col justify-between ${className}`}
			>
				<div className="absolute inset-0 bg-linear-to-b from-transparent to-background/40 z-10 pointer-events-none" />
				<img alt="" src={imageUrl} className="" />
				<div className="z-20 h-full flex flex-col justify-between">
					<div className="self-end">
						<span className="text-[10px] tracking-[0.2em] uppercase text-stone-500 border border-white/10 px-3 py-1 rounded-full bg-background backdrop-blur-md">
							{category}
						</span>
					</div>
					<div>
						<h3 className="text-3xl mb-3 group-hover:text-primary transition-colors text-white font-light">
							{title}
						</h3>
						<p className="text-sm text-stone-400 font-light">{description}</p>
					</div>
				</div>
			</Card>
		</div>
	);
}

export { ProjectCard, type ProjectCardProps };
