import { IconArrowDown } from "@tabler/icons-react";
import Logo from "@/components/Cards/Logo";

export function Hero() {
	return (
		<section className="pt-48 pb-24 px-6 min-h-screen max-w-7xl mx-auto flex flex-col items-center text-center">
			<Logo className="size-30 border-2" />

			<h1 className="mt-4 display-title text-5xl md:text-7xl lg:text-[5.5rem] mb-6 leading-[1.1] tracking-tight">
				Ingénieur informatique <br />
				<span className="italic text-(--text-secondary)">& Full-Stack Web</span>
			</h1>

			<p className="max-w-2xl text-(--text-muted) text-sm md:text-base mb-12 font-light leading-relaxed">
				Premium Web Development, DevOps, and AI integrations to help your
				business stand out. Solutions sur-mesure pour vos besoins.
			</p>

			<a
				href="#services"
				className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-(--text-muted) hover:text-(--text-primary) transition-colors"
			>
				<span className="border border-(--border-subtle) rounded-full p-2.5">
					<IconArrowDown size={14} stroke={1.5} />
				</span>
				MY SERVICES
			</a>
		</section>
	);
}
