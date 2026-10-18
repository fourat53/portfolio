import { IconArrowDown } from "@tabler/icons-react";

export function Hero() {
	return (
		<section className="relative md:pb-15 pt-20 md:pt-30">
			<div className="relative flex md:h-[calc(100vh-180px)] overflow-hidden border-y border-primary bg-bg-secondary md:min-h-[calc(100vh-200px)] flex-col-reverse md:flex-row max-md:items-center">
				<img
					alt="Background"
					src="picture.png"
					className="min-w-62 md:max-w-md object-contain object-bottom w-[50%]"
				/>

				<div className="py-6 relative z-10 flex w-full flex-1 flex-col items-center justify-center text-center">
					<h1 className="mb-6 mt-4 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
						Software Engineer <br />
						<span className="italic text-text-secondary">& Full-Stack Web</span>
					</h1>

					<p className="mb-4 md:mb-12 max-w-2xl text-sm font-light leading-relaxed text-text-muted md:text-base">
						Premium Web Development, DevOps, and AI integrations to help your
						business stand out. Tailor-made solutions for your needs.
					</p>

					<a
						href="#services"
						className="group z-10 flex cursor-pointer items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-text-secondary transition-colors hover:text-accent-secondary"
					>
						<span className="rounded-full border p-2.5">
							<IconArrowDown size={14} stroke={1.5} />
						</span>
						MY SERVICES
					</a>
				</div>
			</div>
		</section>
	);
}
