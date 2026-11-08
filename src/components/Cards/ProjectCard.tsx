import { useTheme } from "#/lib/theme-context.tsx";
import { Card } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectCardProps {
	category: string;
	title: string;
	description: string;
	imageNumber: number;
	link?: string;
}

function ProjectCard({
	category,
	title,
	description,
	imageNumber,
	link,
}: ProjectCardProps) {
	const { theme } = useTheme();
	return (
		<Card variant="project" className="group">
			<div className="z-20 flex flex-col justify-between">
				<Carousel
					className="w-full"
					opts={{ align: "start", loop: true }}
					aria-label={`${title} screenshots`}
				>
					<CarouselContent className="ms-0">
						{Array.from({ length: imageNumber }).map((_, i) => (
							<CarouselItem key={i} className="ps-0 w-full border">
								<img
									alt={`${title} ${i + 1}`}
									src={`screenshots/${encodeURIComponent(title)}/${theme}-${i + 1}.png`}
									draggable={false}
									className="aspect-video w-full object-cover"
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					{imageNumber > 1 && (
						<>
							<CarouselPrevious />
							<CarouselNext />
						</>
					)}
				</Carousel>
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="text-xl group-hover:underline sm:text-3xl text-text-secondary group-hover:text-accent-secondary transition-colors font-medium font-display"
				>
					{title}
				</a>
				<p className="text-xs sm:text-sm text-stone-400 font-light">
					{description}
				</p>

				<span className="absolute top-3 right-4 w-fit text-[10px] tracking-[0.2em] uppercase text-stone-500 border border-white/10 px-3 py-1 rounded-full bg-background backdrop-blur-md">
					{category}
				</span>
			</div>
		</Card>
	);
}

export { ProjectCard, type ProjectCardProps };
