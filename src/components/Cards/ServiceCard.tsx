import { IconArrowRight } from "@tabler/icons-react";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export interface ServiceCardProps {
	number: string;
	title: string;
	description: string;
	linkText: string;
	linkHref: string;
	className?: string;
}

export function ServiceCard({
	number,
	title,
	description,
	linkText,
	linkHref,
	className = "",
}: ServiceCardProps) {
	return (
		<Card variant="default" hover padding="lg" className={className}>
			<CardHeader>
				<div className="text-[11px] tracking-[0.2em] text-stone-500 mb-6">
					{number}
				</div>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<a
					href={linkHref}
					className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-stone-500 group-hover:text-white transition-colors"
				>
					<span className="border border-white/10 rounded-full p-2 group-hover:border-[#d4af37]/50 transition-colors">
						<IconArrowRight size={14} stroke={1.5} />
					</span>
					{linkText}
				</a>
			</CardFooter>
		</Card>
	);
}
