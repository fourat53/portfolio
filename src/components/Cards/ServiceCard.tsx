import { IconArrowRight } from "@tabler/icons-react";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export interface ServiceStackGroup {
	category: string;
	items: string[];
}

export interface ServiceCardProps {
	number: string;
	title: string;
	description: string;
	linkText: string;
	stack: ServiceStackGroup[];
}

export function ServiceCard({
	number,
	title,
	description,
	linkText,
	stack,
}: ServiceCardProps) {
	return (
		<Card variant="service">
			<CardHeader className="flex-1 mb-0">
				<div className="text-[11px] tracking-[0.2em] text-stone-500 mb-4">
					{number}
				</div>
				<CardTitle>{title}</CardTitle>
				<CardDescription className="mb-6">{description}</CardDescription>
			</CardHeader>
			<Dialog>
				<DialogTrigger asChild className="px-4">
					<button
						type="button"
						className="group/trigger flex cursor-pointer items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-primary"
					>
						<span className="border rounded-full p-2 transition-colors group-hover/trigger:border-text-secondary">
							<IconArrowRight
								size={14}
								stroke={1.5}
								className="transition-transform group-hover/trigger:translate-x-0.5"
							/>
						</span>
						{linkText}
					</button>
				</DialogTrigger>

				<DialogContent className="max-h-[85dvh] max-w-2xl overflow-y-auto">
					<div className="pr-10">
						<div className="mb-4 text-[10px] tracking-[0.22em] uppercase text-text-subtle">
							{number} - Service Stack
						</div>
						<DialogTitle className="text-3xl uppercase tracking-widest font-light sm:text-4xl">
							{title}
						</DialogTitle>
						<DialogDescription className="mt-4 max-w-xl">
							{description}
						</DialogDescription>
					</div>

					<div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
						{stack.map((group) => (
							<div key={group.category}>
								<h4 className="mb-3 border-b border-primary pb-2 text-[10px] font-medium tracking-[0.2em] uppercase text-text-secondary">
									{group.category}
								</h4>
								<ul className="flex flex-wrap gap-2">
									{group.items.map((item) => (
										<li
											key={item}
											className="border border-primary bg-bg-secondary px-2.5 py-1 text-[11px] tracking-wide text-text-muted"
										>
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<p className="border-t border-primary pt-4 text-[10px] tracking-[0.18em] uppercase text-text-subtle">
						Drawn from professional, internship and personal project work
					</p>
				</DialogContent>
			</Dialog>
		</Card>
	);
}
