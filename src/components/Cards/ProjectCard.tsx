import { useTheme } from "#/lib/theme-context.tsx";
import { Card } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageCardProps {
	category: string;
	title: string;
	description: string;
	imageNumber: number;
	link?: string;
}

function ImageCard({
	category,
	title,
	description,
	imageNumber,
	link,
}: ImageCardProps) {
	const { theme } = useTheme();

	return (
		<Card variant="project">
			<div className="z-20 flex flex-col justify-between">
				<Carousel
					className="w-full"
					opts={{ align: "start", loop: true }}
					aria-label={`${title} screenshots`}
				>
					<CarouselContent className="ms-0">
						{Array.from({ length: imageNumber }).map((_, i) => (
							<CarouselItem key={i} className="ps-0 w-full">
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
				<div className="p-4 pt-1">
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

					<span className="absolute top-3 right-4 w-fit text-[10px] tracking-[0.2em] uppercase text-stone-500 border px-3 py-1 rounded-full bg-background backdrop-blur-md">
						{category}
					</span>
				</div>
			</div>
		</Card>
	);
}

interface ProjectCardProps {
	category: string;
	title: string;
	description: string;
	period: string;
}

function ProjectCard({
	category,
	title,
	description,
	period,
}: ProjectCardProps) {
	return (
		<article className="h-full border border-primary bg-bg-primary p-5 md:p-6 hover:shadow-lg hover:-translate-y-0.5 hover:-translate-x-px transition-all duration-300">
			<div className="mb-3 flex flex-wrap items-center justify-between gap-2">
				<span className="text-[10px] tracking-[0.2em] uppercase text-text-subtle">
					{category}
				</span>
				<span className="text-[10px] tracking-[0.16em] uppercase text-text-subtle">
					{period}
				</span>
			</div>
			<h3 className="mb-3 font-display text-2xl text-text-secondary">
				{title}
			</h3>
			<p className="text-sm font-light leading-relaxed text-text-muted">
				{description}
			</p>
		</article>
	);
}

export { ImageCard, type ImageCardProps, ProjectCard, type ProjectCardProps };
